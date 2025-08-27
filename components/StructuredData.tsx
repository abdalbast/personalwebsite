import Script from "next/script";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdalbast O. Khdhir",
    jobTitle: "Graduate Machine Learning Engineer & Web Developer",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    sameAs: [
      "https://github.com/abdalbast",
      "https://www.linkedin.com/in/USERNAME"
    ]
  };
  return (
    <Script id="jsonld-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
