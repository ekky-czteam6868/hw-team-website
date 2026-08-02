import type { Metadata } from "next";
import { services } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  return {
    title: service
      ? `${service.title.th} | HW Team`
      : "บริการ | HW Team",
    description: service?.desc.th,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetail slug={slug} />;
}
