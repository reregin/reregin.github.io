import { personalInfo } from "@/lib/data";

const contactItems = [
  {
    icon: "✉",
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: "🔗",
    label: personalInfo.linkedin,
    href: personalInfo.linkedinUrl,
  },
  {
    icon: "📍",
    label: personalInfo.location,
  },
  {
    icon: "📸",
    label: `@${personalInfo.instagram}`,
    href: `https://instagram.com/${personalInfo.instagram}`,
  },
  {
    icon: "📞",
    label: personalInfo.phone,
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-[var(--color-black)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="accent-label mb-2">get in touch</p>
          <h2 className="section-title text-[var(--color-cream)] mb-6">
            Let&apos;s Connect
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--color-gray-light)] max-w-lg mx-auto">
            Let&apos;s build something meaningful with data and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--color-gray)]/30 border border-[var(--color-gray)]/30">
          {contactItems.map((item) => {
            const content = (
              <>
                <span className="text-xl text-[var(--color-accent)]">
                  {item.icon}
                </span>
                <span className="font-body text-sm text-[var(--color-cream)] break-words">
                  {item.label}
                </span>
              </>
            );

            const className =
              "min-h-28 bg-[var(--color-black)] p-5 flex flex-col items-start justify-center gap-3 hover:bg-[var(--color-black-soft)] transition-colors";

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={className}
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className={className}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-gray)]/20 text-center">
          <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-[var(--color-gray)]">
            © 2025 Regina Maria Samantha George
          </p>
        </div>
      </div>
    </footer>
  );
}
