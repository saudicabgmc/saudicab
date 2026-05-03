import { generateRouteSchemas } from '@/lib/schemaUtils'
import type { RoutePageData } from '@/components/RoutePage'

/**
 * Server component — renders JSON-LD schema scripts for a route page.
 * Drop this into any route page.tsx alongside <RoutePage />.
 */
export default function RouteSchemaScript({ data }: { data: RoutePageData }) {
  const schemas = generateRouteSchemas(data)
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
