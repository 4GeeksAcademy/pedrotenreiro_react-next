interface LoadingSpinnerProps {
  label?: string;
}

export const LoadingSpinner = ({ label = "Loading…" }: LoadingSpinnerProps) => (
  <div role="status" className="flex flex-col items-center justify-center gap-3 py-16 text-muted">
    <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-rose-500" />
    <span className="text-sm">{label}</span>
  </div>
);
