import type { ReactNode } from "react";

type SectionIntroProps = {
  label: string;
  title: ReactNode;
  text?: string;
  center?: boolean;
};

export function SectionIntro({ label, title, text, center }: SectionIntroProps) {
  return (
    <div className={center ? "section-intro section-intro-centered" : "section-intro"}>
      <span>{label}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
