import Link from "next/link";
import { contactEmail } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-mono text-sm text-lime mb-3">HW/TEAM</p>
            <p className="text-paper/80 max-w-sm leading-relaxed">
              A digital product studio in Thailand. Sales pages, COD
              e-commerce, LMS and automations, built to convert.
            </p>
          </div>

          <div>
            <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-4">
              Studio
            </p>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/work", label: "Work" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-paper/70 hover:text-lime transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-paper/70 hover:text-lime transition-colors break-all"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/cznakinkul"
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper/70 hover:text-lime transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t hairline flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="font-mono text-[12px] text-mute">
            © {new Date().getFullYear()} HW Team. All rights reserved.
          </p>
          <p className="font-mono text-[12px] text-mute">
            Bangkok, Thailand
          </p>
        </div>
      </div>
    </footer>
  );
}
