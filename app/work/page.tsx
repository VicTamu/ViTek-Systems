import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionIntro } from "@/components/section-intro";
import { siteConfig } from "@/components/site-config";
import { projects } from "@/components/site-data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Work · ${siteConfig.name}`,
  description:
    "Selected client work from ViTek Systems — websites and apps built for local businesses, startups, and ecommerce brands.",
};

export default function WorkPage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#work-main">
        Skip to main content
      </a>
      <Nav />
      <main id="work-main" className="work-page">
        <section className="work-page-hero">
          <div className="page-container">
            <Link className="work-back" href="/#work">
              <ArrowLeft aria-hidden size={16} /> Back to home
            </Link>
            <SectionIntro
              label="// SELECTED WORK"
              title={
                <>
                  Work that <em>ships</em> and <em>performs</em>.
                </>
              }
              text="A closer look at recent websites and apps - each one built around what the business needs its visitors to do."
            />
          </div>
        </section>

        <section className="work-gallery">
          <div className="page-container work-grid">
            {projects.map((project) => (
              <article className="work-item" key={project.title}>
                <a
                  className="work-item-media"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live site`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    width={860}
                    height={560}
                    sizes="(max-width: 899px) calc(100vw - 40px), 560px"
                  />
                </a>
                <div className="work-item-body">
                  <span className="work-item-tone">{project.tone}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.tags ? (
                    <ul
                      className="work-tags"
                      aria-label={`${project.title} focus areas`}
                    >
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}
                  <a
                    className="work-item-link"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site
                    <ExternalLink aria-hidden size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-cta">
          <div className="page-container work-cta-inner">
            <h2>Have a project in mind?</h2>
            <p>Let&apos;s build something your customers can&apos;t ignore.</p>
            <Button asChild size="lg">
              <Link href="/#contact">
                Get a Free Quote <ArrowRight aria-hidden size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
