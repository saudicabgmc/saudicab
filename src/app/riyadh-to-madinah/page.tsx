import RoutePage from '@/components/RoutePage'
import RouteSchemaScript from '@/components/RouteSchemaScript'
import { allRoutePages } from '@/lib/routePageData'
import { Metadata } from 'next'

const slug = 'riyadh-to-madinah'

export function generateMetadata(): Metadata {
  const data = allRoutePages[slug]
  return {
    title: `Taxi from ${data.from.en} to ${data.to.en} | Fixed Price | Saudi Cabs GMC`,
    description: data.description.en,
    alternates: { canonical: `https://saudicabsgmc.com/${slug}` },
  }
}

export default function Page() {
  const data = allRoutePages[slug]
  return <><RouteSchemaScript data={data} /><RoutePage data={data} /></>
}
