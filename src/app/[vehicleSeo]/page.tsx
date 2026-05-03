import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllVehicleSeoSlugs, getVehicleSeoPageData } from '@/lib/vehicleSeoData'
import VehicleSeoPage from '@/components/VehicleSeoPage'

// Pre-generate all ~190 pages at build time — no server needed
export function generateStaticParams() {
  return getAllVehicleSeoSlugs().map(slug => ({ vehicleSeo: slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ vehicleSeo: string }> }
): Promise<Metadata> {
  const { vehicleSeo } = await params
  const data = getVehicleSeoPageData(vehicleSeo)
  if (!data) return {}
  return {
    title:       data.metaTitle,
    description: data.metaDesc,
    alternates:  { canonical: `https://saudicabsgmc.com/${vehicleSeo}` },
    robots:      { index: true, follow: true },
    openGraph: {
      title:       data.metaTitle,
      description: data.metaDesc,
      url:         `https://saudicabsgmc.com/${vehicleSeo}`,
      siteName:    'Saudi Cabs GMC',
      type:        'website',
    },
  }
}

export default async function Page(
  { params }: { params: Promise<{ vehicleSeo: string }> }
) {
  const { vehicleSeo } = await params
  const data = getVehicleSeoPageData(vehicleSeo)
  if (!data) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
      />
      <VehicleSeoPage data={data} />
    </>
  )
}
