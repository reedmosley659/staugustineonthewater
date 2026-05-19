import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light shadow-lg shadow-navy/20",
  secondary:
    "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  ghost:
    "text-teal hover:text-navy border border-teal/30 hover:border-teal/50 bg-white",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
