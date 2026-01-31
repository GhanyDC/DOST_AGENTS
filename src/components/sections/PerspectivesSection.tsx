// =============================================================================
// Perspectives Section Component
// Project cards showcasing organization initiatives
// =============================================================================

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/Card';
import { PERSPECTIVES_CONTENT, SAMPLE_PROJECTS } from '@/lib/constants';
import type { Project } from '@/types';

interface PerspectivesSectionProps {
  projects?: Project[];
}

export function PerspectivesSection({ projects = SAMPLE_PROJECTS }: PerspectivesSectionProps) {
  // Split projects into two rows for the design
  const firstRow = projects.slice(0, 4);
  const secondRow = projects.slice(4, 8);

  return (
    <section className="py-20 bg-[var(--background)]">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title={PERSPECTIVES_CONTENT.title}
          titleHighlight={PERSPECTIVES_CONTENT.titleHighlight}
          description={PERSPECTIVES_CONTENT.description}
          align="center"
        />

        {/* Projects Grid - First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRow.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              date={project.date}
              imageUrl={project.imageUrl}
              href={project.slug ? `/projects/${project.slug}` : undefined}
            />
          ))}
        </div>

        {/* Projects Grid - Second Row */}
        {secondRow.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondRow.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                date={project.date}
                imageUrl={project.imageUrl}
                href={project.slug ? `/projects/${project.slug}` : undefined}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
