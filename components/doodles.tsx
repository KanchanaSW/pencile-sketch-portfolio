type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PenDoodle({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M5.2 19.4l1.2-4.6 9.4-9.6 3.2 3.1-9.5 9.7z" />
      <path d="M14.6 6.4l3.1 3.1" />
      <path d="M5.4 19.6l3.4-1" />
      <path d="M16.8 4.6c.8-.7 2-.6 2.7.2.7.8.6 2-.1 2.7" />
    </svg>
  );
}

export function PapersDoodle({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M7.2 6.4h10.2v13.2H7.2z" />
      <path d="M5.6 4.8h10.2v1.6" />
      <path d="M9.2 10.2h6.2M9.2 13h5.1M9.2 15.8h4.2" />
    </svg>
  );
}

export function PlaneDoodle({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M3.4 11.8l17.2-8.2-6.6 16.4-2.8-6.2z" />
      <path d="M13.8 13.6l5.6 5.2" />
      <path d="M3.6 11.8h8.4" />
    </svg>
  );
}

export function MugDoodle({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M5.4 7.2h10.4v9.2c0 1.6-1.4 3-3.1 3H8.6c-1.7 0-3.2-1.3-3.2-3z" />
      <path d="M15.8 9.2h2.4c1.4 0 2.4 1.1 2.4 2.5s-1 2.4-2.4 2.4h-2.4" />
      <path d="M8.2 4.4c.3 1 .2 1.8-.2 2.6M11.4 4.2c.4 1.1.1 2-.3 2.8" />
    </svg>
  );
}

export function ClipDoodle({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M8.2 10.4V6.6c0-2.2 1.7-4 3.9-4s3.8 1.8 3.8 4v9.2c0 2.6-2 4.6-4.4 4.6s-4.4-2-4.4-4.6V9.2" />
    </svg>
  );
}

export function SparkDoodle({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M12 3.2l1.1 5.1 5.2 1.2-5.2 1.1L12 20.8l-1.1-10.2-5.1-1.1 5.1-1.2z" />
      <path d="M18.6 5.4l.6 1.8M5.2 16.8l1.7.7M19.4 17.2l-1.5-.4" />
    </svg>
  );
}

export function CheckboxDoodle({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="3.6" y="3.8" width="16.8" height="16.4" />
      <path d="M7.2 12.4l3.2 3.4 6.6-7.6" />
    </svg>
  );
}

export function CheckDoodle({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="3.6" y="3.8" width="16.8" height="16.4" />
      <path d="M7.2 12.4l3.2 3.4 6.6-7.6" />
    </svg>
  );
}

export function FoldedCornerDoodle({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M6.2 4.4h9.4l4.2 4.4v10.8H6.2z" />
      <path d="M15.4 4.6v4.4h4.2" />
    </svg>
  );
}

export function ArrowScribble({ className = "h-10 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M2 13.2c12-6 24 5.4 38 1.2 8-2.4 14-1.6 20 2.2" />
      <path d="M52.4 7.2c4.2 2.6 7.6 5.4 8.6 9.6-3.8-.4-7.2.2-10.2 2.4" />
    </svg>
  );
}

export function UnderlineScribble({ className = "h-3 w-full" }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 8"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      {...stroke}
    >
      <path d="M1.5 5.2C28 1.8 52 6.8 78 3.6C104 0.4 128 7 154 4.1C170 2.4 186 5.6 198.5 3.2" />
    </svg>
  );
}

const doodleMap = {
  pen: PenDoodle,
  papers: PapersDoodle,
  plane: PlaneDoodle,
  mug: MugDoodle,
  clip: ClipDoodle,
  spark: SparkDoodle,
  checkbox: CheckboxDoodle,
} as const;

export type DoodleKey = keyof typeof doodleMap;

export function Doodle({
  name,
  className = "h-9 w-9 text-ink",
}: {
  name: DoodleKey;
  className?: string;
}) {
  const Icon = doodleMap[name];
  return <Icon className={className} />;
}
