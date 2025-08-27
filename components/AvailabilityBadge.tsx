type Availability = "available" | "not-available" | "from-date";

export default function AvailabilityBadge({ status, from }: { status: Availability; from?: string | null; }) {
  const label =
    status === "available"
      ? "Currently available"
      : status === "from-date" && from
      ? `Available from ${new Date(from).toLocaleDateString(undefined, { month: "long", year: "numeric" })}`
      : "Not available";
  const dot = status === "available" ? "bg-emerald-400" : status === "from-date" ? "bg-amber-400" : "bg-neutral-500";
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
      <span className={`inline-block size-2 rounded-full ${dot}`} aria-hidden />
      <span aria-live="polite">{label}</span>
    </span>
  );
}
