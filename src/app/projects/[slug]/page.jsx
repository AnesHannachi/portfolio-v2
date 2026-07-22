import ProjectDetail from '@/components/ProjectDetail';

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  return <ProjectDetail slug={slug} />;
}


