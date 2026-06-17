import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { SectionIntro } from "@/components/section-intro";
import { projects } from "@/components/site-data";
import { Button } from "@/components/ui/button";

export function WorkShowcase() {
  return (
    <section id="work" className="work-section section-block">
      <div className="page-container work-heading">
        <SectionIntro
          label="// 02 CLIENT WORK"
          title={
            <>
              Work that <em>speaks</em> before we do.
            </>
          }
          text="Each project is built around what the business needs visitors to do - not just what looks good."
        />
      </div>
      <div className="work-viewport">
        <div className="work-track">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-media">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  width={860}
                  height={560}
                  sizes="(max-width: 899px) calc(100vw - 40px), 420px"
                />
              </div>
              <div className="project-content">
                <span>{project.tone}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
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
      </div>
      <div className="page-container work-action">
        <Button asChild variant="secondary">
          <a href="#contact">See More Work</a>
        </Button>
      </div>
    </section>
  );
}
