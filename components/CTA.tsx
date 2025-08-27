import Link from "next/link";

export default function CTA() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mailto:hello@example.com";
  return (
    <div className="text-center bg-[var(--card)] rounded-xl p-8">
      <h2 className="text-2xl font-semibold">Ready to build with AI?</h2>
      <p className="text-[var(--muted)] mt-2">Tell me about your project.</p>
      <Link
        href={email.startsWith("mailto:") ? email : `mailto:${email}`}
        className="inline-block mt-6 rounded-md px-5 py-3 bg-[var(--accent)] text-black font-medium transition-transform hover:scale-[1.01]"
      >
        Let’s talk
      </Link>
    </div>
  );
}
