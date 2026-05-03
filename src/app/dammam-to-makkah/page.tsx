import RoutePage from '@/components/RoutePage'
import RouteSchemaScript from '@/components/RouteSchemaScript'
import { allRoutePages } from '@/lib/routePageData'
import { Metadata } from 'next'

const slug = 'dammam-to-makkah'

export function generateMetadata(): Metadata {
  const data = allRoutePages[slug]
  return {
    title: `Taxi from ${data.from.en} to ${data.to.en} | Fixed Price`,
    description: data.description.en,
  }
}

export default function Page() {
  const data = allRoutePages[slug]
  return <><RouteSchemaScript data={data} /><RoutePage data={data} /></>
}
