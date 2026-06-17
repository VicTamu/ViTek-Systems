import { ExternalLink, Mail } from "lucide-react";

import { siteConfig } from "@/components/site-config";
import { navLinks } from "@/components/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-grid">
        <a className="wordmark" href="#home">
          <span>{siteConfig.name}</span>
        </a>
        <p>Polished websites and apps for local brands ready to look current.</p>
        <nav aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-socials">
          <a
            href={siteConfig.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.name} on LinkedIn`}
          >
            <ExternalLink aria-hidden size={18} />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.name}`}>
            <Mail aria-hidden size={18} />
          </a>
        </div>
      </div>
      <div className="page-container footer-bottom">
        <span>Copyright 2025 {siteConfig.name}</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}
