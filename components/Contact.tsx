import { ExternalLink, Mail, MapPin, Phone, Send } from "lucide-react";

import { SectionIntro } from "@/components/section-intro";
import { siteConfig } from "@/components/site-config";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="section-block contact-section">
      <div className="page-container contact-grid">
        <div className="contact-copy">
          <SectionIntro
            label="// 05 GET A FREE QUOTE"
            title={
              <>
                Get a <em>free</em> quote for your business website.
              </>
            }
            text="Tell us what kind of business you run and what you want customers to do on it. You'll get a clear reply fast - no commitment required."
          />
          <p className="studio-blurb">
            {siteConfig.name} is a focused digital studio with small-team
            attention. We build websites and digital experiences for small
            businesses, startups, and ecommerce brands - with a focus on
            polished design, responsive build quality, and outcomes that
            actually matter to your bottom line.
          </p>
          <div className="contact-methods">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden size={18} />
              {siteConfig.email}
            </a>
            <a href={siteConfig.phoneHref}>
              <Phone aria-hidden size={18} />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink aria-hidden size={18} />
              LinkedIn
            </a>
            <span>
              <MapPin aria-hidden size={18} />
              {siteConfig.location}
            </span>
          </div>
        </div>
        <form
          className="quote-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value={siteConfig.web3FormsAccessKey}
          />
          <input type="hidden" name="subject" value={siteConfig.quoteSubject} />
          <FormField id="name" name="name" label="Name" autoComplete="name" required />
          <FormField
            id="business"
            name="business"
            label="Business / Website"
            autoComplete="organization"
            required
          />
          <FormField
            id="email"
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            required
          />
          <label className="form-row" htmlFor="needs">
            <span>What do you need?</span>
            <textarea
              id="needs"
              name="needs"
              rows={5}
              required
              placeholder="A new site, redesign, store, booking flow, or app idea"
            />
          </label>
          <FormField id="referral" name="referral" label="How did you hear about us?" />
          <Button className="form-submit" type="submit">
            Send a Free Quote <Send aria-hidden size={17} />
          </Button>
        </form>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
};

function FormField({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
}: FormFieldProps) {
  return (
    <label className="form-row" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
}
