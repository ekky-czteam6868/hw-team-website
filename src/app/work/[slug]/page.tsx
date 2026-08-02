import type { Metadata } from "next";
import { caseStudies } from "@/lib/data";
import CaseDetail from "@/components/CaseDetail";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.id === slug);
  return {
    title: c ? `${c.client} | HW Team` : "ผลงาน | HW Team",
    description: c?.result.th,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseDetail slug={slug} />;
}
