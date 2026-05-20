import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms of Use | St Augustine On The Water",
  description:
    "Terms of use for St Augustine On The Water, a tourism experience discovery website.",
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Use">
      <p>
        <strong>Last updated:</strong> May 19, 2026
      </p>
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of
        the St Augustine On The Water website (the &quot;Site&quot;). By using
        the Site, you agree to these Terms. If you do not agree, please do not
        use the Site.
      </p>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Nature of Our Service
        </h2>
        <p className="mt-3">
          St Augustine On The Water is a water experience discovery and referral
          site that highlights featured experiences and popular water activities
          in St. Augustine, Florida. We help visitors compare options and may
          link to third-party operators for booking. We are not a boat operator,
          charter company, or direct provider of the experiences listed on the
          Site unless expressly stated otherwise. Listings, descriptions, and
          availability may change and are provided for general planning purposes.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          No Endorsement or Guarantee
        </h2>
        <p className="mt-3">
          References to experiences, providers, or activities on the Site are
          informational and do not constitute an endorsement, guarantee, or
          verification of any third party. You are responsible for reviewing each
          operator&apos;s terms, policies, pricing, and safety requirements before
          booking, confirming licenses and insurance where applicable, and making
          your own booking decisions.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Third-Party Services and Affiliate Links
        </h2>
        <p className="mt-3">
          The Site may include third-party booking links to independent operators
          or booking platforms. St Augustine On The Water may earn a commission
          when visitors book experiences through links on this site. We may also
          receive referral or affiliate compensation when you click certain links
          or complete bookings through third parties. We are not responsible for
          third-party content, pricing, cancellations, safety practices, or
          disputes arising from services booked elsewhere.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Affiliate Disclosure
        </h2>
        <p className="mt-3">
          St Augustine On The Water may earn a commission when visitors book
          experiences through links on this site. Affiliate relationships do not
          affect the price you pay to third-party operators, and they do not
          represent an endorsement of any specific provider.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Acceptable Use
        </h2>
        <p className="mt-3">
          You agree not to misuse the Site, including by attempting unauthorized
          access, scraping content for commercial redistribution without
          permission, transmitting harmful code, or using the Site in violation
          of applicable law.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Intellectual Property
        </h2>
        <p className="mt-3">
          Site content, including text, design, logos, and layout, is owned by or
          licensed to St Augustine On The Water and protected by applicable
          intellectual property laws. You may not copy, modify, or distribute Site
          content without prior written permission, except for personal,
          non-commercial use.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Disclaimer of Warranties
        </h2>
        <p className="mt-3">
          The Site is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, whether express or
          implied, including merchantability, fitness for a particular purpose,
          and non-infringement. We do not warrant that the Site will be
          uninterrupted, error-free, or completely accurate.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Limitation of Liability
        </h2>
        <p className="mt-3">
          To the fullest extent permitted by law, St Augustine On The Water and
          its affiliates shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from your use of the
          Site or any third-party services linked from the Site, including
          personal injury, property damage, or financial loss related to on-water
          activities.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Indemnification
        </h2>
        <p className="mt-3">
          You agree to indemnify and hold harmless St Augustine On The Water from
          claims arising out of your use of the Site, your violation of these
          Terms, or your interactions with third-party providers.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Governing Law
        </h2>
        <p className="mt-3">
          These Terms are governed by the laws of the State of Florida, without
          regard to conflict-of-law principles. Any dispute shall be brought in
          courts located in St. Johns County, Florida, unless otherwise required
          by applicable law.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Changes to These Terms
        </h2>
        <p className="mt-3">
          We may revise these Terms at any time. The &quot;Last updated&quot; date
          above indicates when changes were last made. Your continued use of the
          Site after updates constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy">
          Contact
        </h2>
        <p className="mt-3">
          Questions about these Terms may be sent to{" "}
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
