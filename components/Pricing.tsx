import { CheckCircle2, Gift } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildTiers, maintenancePlans } from "@/components/site-data";
import { siteConfig } from "@/components/site-config";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/section-intro";

export function Pricing() {
  return (
    <section id="pricing" className="section-block standard-section pricing-section">
      <div className="page-container">
        <SectionIntro
          label="// 04 SIMPLE PRICING"
          title={
            <>
              Straightforward pricing built for <em>small businesses.</em>
            </>
          }
          text="No hidden fees. No tech confusion. Just clear work at a fair price."
        />

        <div className="build-grid">
          {buildTiers.map((tier) => (
            <article
              className={cn("build-card", `build-card-${tier.variant}`)}
              key={tier.name}
            >
              {tier.variant === "featured" ? (
                <span className="popular">Most Popular</span>
              ) : null}
              <h3>{tier.name}</h3>
              <strong>{tier.price}</strong>
              <p>{tier.tagline}</p>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 aria-hidden size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="price-button"
                variant={tier.variant === "featured" ? "default" : "secondary"}
              >
                <a href="#contact">{tier.cta}</a>
              </Button>
            </article>
          ))}
        </div>

        <div className="maintenance-block">
          <div className="maintenance-divider" />
          <span className="maintenance-label">
            // KEEP YOUR SITE RUNNING - MONTHLY PLANS
          </span>
          <p className="maintenance-intro">
            Every site launched with {siteConfig.name} can be handed off or kept on
            a maintenance plan. Most clients stay on one - it means zero stress
            and a site that never goes stale.
          </p>

          <div className="maintenance-grid">
            {maintenancePlans.map((plan) => (
              <article className="maintenance-card" key={plan.name}>
                <h3>{plan.name}</h3>
                <strong>
                  <span>{plan.monthly}</span>
                  <small>/mo</small>
                </strong>
                <p>or {plan.annual} - save 15%</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 aria-hidden size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="secondary" className="maintenance-button">
                  <a href="#contact">Ask about {plan.name}</a>
                </Button>
              </article>
            ))}
          </div>

          <div className="hosting-callout">
            <Gift aria-hidden size={24} />
            <p>
              <strong>3 months of Basic hosting included free with every build.</strong>{" "}
              After that, stay on a plan or take full ownership - your call. No
              pressure, no auto-renewals without your sign-off.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
