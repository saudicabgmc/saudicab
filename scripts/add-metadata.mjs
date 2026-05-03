import fs from 'fs';
import path from 'path';

const routes = [
  'jeddah-airport-to-makkah',
  'makkah-to-jeddah-airport',
  'makkah-to-madinah',
  'madinah-to-makkah',
  'jeddah-to-makkah',
  'makkah-to-jeddah',
  'jeddah-to-taif',
  'taif-to-jeddah',
  'makkah-to-taif',
  'madinah-to-jeddah',
  'madinah-airport-taxi',
  'jeddah-airport-to-madinah',
  'taif-to-madinah',
  'taif-to-makkah',
  'jeddah-to-madinah'
];

routes.forEach(slug => {
  const filePath = path.join(process.cwd(), 'src', 'app', slug, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = `import RoutePage from '@/components/RoutePage'
import { allRoutePages } from '@/lib/routePageData'
import { Metadata } from 'next'

const slug = '${slug}'

export function generateMetadata(): Metadata {
  const data = allRoutePages[slug]
  return {
    title: \`Taxi from \${data.from.en} to \${data.to.en} | Fixed Price | Saudi Cabs GMC\`,
    description: data.description.en,
  }
}

export default function Page() {
  const data = allRoutePages[slug]
  return <RoutePage data={data} />
}
`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${slug}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
