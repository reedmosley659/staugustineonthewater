import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | St Augustine On The Water",
  description:
    "Privacy policy for St Augustine On The Water, a tourism experience discovery website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> May 18, 2026
      </p>
      <p>
        St Augustine On The Water (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) operates a tourism experience discovery website that
        helps visitors learn about water-based activities in St. Augustine,
        Florida. This Privacy Policy explains how we collect, use, and protect
        information when you visit our website.
      </p>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Information We Collect
        </h2>
        <p className="mt-3">
          We may collect information you voluntarily provide, such as your name
          and email address when you contact us. We may also collect standard
          technical information automatically, including IP address, browser
          type, device information, pages visited, and referring URLs, through
          cookies and similar technologies.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          How We Use Information
        </h2>
        <p className="mt-3">
          We use information to respond to inquiries, improve our website,
          understand how visitors use our content, and communicate about updates
          or opportunities related to our services. We do not sell your personal
          information.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Third-Party Links and Affiliates
        </h2>
        <p className="mt-3">
          Our website may link to third-party experience providers, booking
          platforms, or affiliate partners. Those sites have their own privacy
          policies, and we are not responsible for their practices. Information
          you provide to a third party is governed by that party&apos;s policies.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Cookies and Analytics
        </h2>
        <p className="mt-3">
          We may use cookies and analytics tools to measure site performance and
          improve user experience. You can adjust cookie preferences through your
          browser settings. Disabling cookies may affect certain site features.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Data Retention and Security
        </h2>
        <p className="mt-3">
          We retain information only as long as needed for the purposes described
          in this policy. We use reasonable administrative and technical
          safeguards to protect information, but no method of transmission over
          the internet is completely secure.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Your Rights
        </h2>
        <p className="mt-3">
          Depending on your location, you may have rights to access, correct, or
          delete personal information we hold about you. To make a request,
          contact us at{" "}
          <a
            href="mailto:hello@staugustineonthewater.com"
            className="text-teal underline-offset-2 hover:underline"
          >
            hello@staugustineonthewater.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Children&apos;s Privacy
        </h2>
        <p className="mt-3">
          Our website is not directed to children under 13, and we do not
          knowingly collect personal information from children under 13.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Changes to This Policy
        </h2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date at the top of this page will reflect the most recent
          revision. Continued use of the website after changes constitutes
          acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Contact Us
        </h2>
        <p className="mt-3">
          Questions about this Privacy Policy may be sent to{" "}
          <a
            href="mailto:hello@staugustineonthewater.com"
            className="text-teal underline-offset-2 hover:underline"
          >
            hello@staugustineonthewater.com
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}
