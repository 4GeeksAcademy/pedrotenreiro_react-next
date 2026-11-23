interface PhotoPlaceholderProps {
  label: string;
  className: string;
}

export const PhotoPlaceholder = ({ label, className }: PhotoPlaceholderProps) => (
  <div
    role="img"
    aria-label={label}
    className={`flex items-center justify-center rounded-xl bg-line px-4 text-center text-sm font-medium text-ink ${className}`}
  >
    {label}
  </div>
);
