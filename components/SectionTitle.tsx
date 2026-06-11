type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="section-title">
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

