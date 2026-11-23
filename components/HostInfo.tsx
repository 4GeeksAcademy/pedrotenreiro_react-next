import type { Host } from "@/types/room";

interface HostInfoProps {
  host: Host;
}

export const HostInfo = ({ host }: HostInfoProps) => (
  <div className="flex items-center gap-4 border-b border-line pb-6">
    <div
      aria-hidden="true"
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface text-lg font-semibold text-ink"
    >
      {host.name.charAt(0)}
    </div>
    <div>
      <p className="font-semibold text-ink">Hosted by {host.name}</p>
      <p className="text-sm text-muted">{host.yearsHosting} years hosting</p>
    </div>
  </div>
);
