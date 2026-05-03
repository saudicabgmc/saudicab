import fs from 'fs';
import path from 'path';

const slug = process.argv[2];

if (!slug) {
  console.error('Please provide a slug, e.g., node scripts/generate-route.mjs riyadh-to-makkah');
  process.exit(1);
}

const dirPath = path.join(process.cwd(), 'src', 'app', slug);

if (fs.existsSync(dirPath)) {
  console.error(`Route directory ${slug} already exists!`);
  process.exit(1);
}

fs.mkdirSync(dirPath, { recursive: true });

const pageContent = `import RoutePage from '@/components/RoutePage'
import { allRoutePages } from '@/lib/routePageData'
import { Metadata } from 'next'

const slug = '${slug}'

export function generateMetadata(): Metadata {
  const data = allRoutePages[slug]
  if (!data) return { title: 'Route Not Found' }
  
  return {
    title: \`Taxi from \${data.from.en} to \${data.to.en} | Fixed Price | Saudi Cabs GMC\`,
    description: data.description.en,
  }
}

export default function Page() {
  const data = allRoutePages[slug]
  
  if (!data) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Route data missing in routePageData.ts</div>
  }
  
  return <RoutePage data={data} />
}
`;

fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent, 'utf8');

console.log(`✅ Successfully created route folder and page.tsx for: ${slug}`);
console.log(`⚠️ Don't forget to add the corresponding data object to src/lib/routePageData.ts and export it in allRoutePages!`);
