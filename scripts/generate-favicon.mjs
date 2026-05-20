import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import { tmpdir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const iconSvg = join(root, "src/app/icon.svg");
const faviconOut = join(root, "src/app/favicon.ico");

const tmp16 = join(tmpdir(), "saotw-icon-16.png");
const tmp32 = join(tmpdir(), "saotw-icon-32.png");

const resvg = "npx --yes @resvg/resvg-js-cli";

execSync(`${resvg} --fit-width 16 --fit-height 16 "${iconSvg}" "${tmp16}"`, {
  stdio: "inherit",
  cwd: root,
});
execSync(`${resvg} --fit-width 32 --fit-height 32 "${iconSvg}" "${tmp32}"`, {
  stdio: "inherit",
  cwd: root,
});

function pngToIco(pngPaths, outPath) {
  const pngs = pngPaths.map((path) => readFileSync(path));
  const headerSize = 6 + pngs.length * 16;
  const totalSize = headerSize + pngs.reduce((sum, png) => sum + png.length, 0);
  const buffer = Buffer.alloc(totalSize);

  buffer.writeUInt16LE(0, 0);
  buffer.writeUInt16LE(1, 2);
  buffer.writeUInt16LE(pngs.length, 4);

  let dataOffset = headerSize;

  pngs.forEach((png, index) => {
    const entryOffset = 6 + index * 16;
    const width = png.readUInt32BE(16);
    const height = png.readUInt32BE(20);

    buffer.writeUInt8(width >= 256 ? 0 : width, entryOffset);
    buffer.writeUInt8(height >= 256 ? 0 : height, entryOffset + 1);
    buffer.writeUInt8(0, entryOffset + 2);
    buffer.writeUInt8(0, entryOffset + 3);
    buffer.writeUInt16LE(1, entryOffset + 4);
    buffer.writeUInt16LE(32, entryOffset + 6);
    buffer.writeUInt32LE(png.length, entryOffset + 8);
    buffer.writeUInt32LE(dataOffset, entryOffset + 12);

    png.copy(buffer, dataOffset);
    dataOffset += png.length;
  });

  writeFileSync(outPath, buffer);
}

pngToIco([tmp16, tmp32], faviconOut);
console.log("Generated", faviconOut);
