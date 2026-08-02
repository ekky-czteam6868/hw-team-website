import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import TeamGrid from "@/components/TeamGrid";
import { contactEmail, telegramHandle } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | HW Team",
  description:
    "Get a quote from HW Team. Sales pages, COD e-commerce, LMS and automations. Replies within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-16 md:pb-20">
        <SectionHeading
          index="Contact"
          title="Tell us what you are building"
          aside="A scope and a price within one business day. No obligation, no sales script."
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          <div className="lg:col-span-5">
            <div className="border hairline bg-ink-2 p-6 md:p-8 space-y-8">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-paper hover:text-lime transition-colors break-all"
                >
                  {contactEmail}
                </a>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  Telegram
                </p>
                <a
                  href={`https://t.me/${telegramHandle.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper hover:text-lime transition-colors"
                >
                  {telegramHandle}
                </a>
                <p className="text-paper/50 text-sm mt-1">
                  Fastest for a quick question.
                </p>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  Location
                </p>
                <p className="text-paper">Bangkok, Thailand</p>
                <p className="text-paper/50 text-sm mt-1">
                  Working with clients across SEA.
                </p>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-mute mb-2">
                  Response time
                </p>
                <p className="text-paper">
                  Within one business day
                </p>
                <p className="text-paper/50 text-sm mt-1">
                  Quotes scoped from the brief, not a sales call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
          <SectionHeading
            index="Who you will talk to"
            title="The people behind the builds"
            aside="Everyone on this list has shipped the work on this site."
          />
          <TeamGrid />
        </div>
      </section>
    </>
  );
}
