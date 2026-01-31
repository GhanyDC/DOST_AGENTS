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
    <section className="min-h-screen py-12 sm:py-16 md:py-20 bg-[var(--background)] overflow-hidden flex flex-col justify-center">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title={PERSPECTIVES_CONTENT.title}
          titleHighlight={PERSPECTIVES_CONTENT.titleHighlight}
          description={PERSPECTIVES_CONTENT.description}
          align="center"
        />
      </Container>

      {/* Projects Grid - First Row - Horizontal scroll on mobile */}
      <div className="px-4 sm:px-0">
        <Container className="overflow-visible">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {firstRow.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-[260px] sm:w-auto">
                <ProjectCard
                  title={project.title}
                  date={project.date}
                  imageUrl={project.imageUrl}
                  href={project.slug ? `/projects/${project.slug}` : undefined}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Projects Grid - Second Row */}
      {secondRow.length > 0 && (
        <div className="px-4 sm:px-0 mt-4 sm:mt-6">
          <Container className="overflow-visible">
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {secondRow.map((project) => (
                <div key={project.id} className="flex-shrink-0 w-[260px] sm:w-auto">
                  <ProjectCard
                    title={project.title}
                    date={project.date}
                    imageUrl={project.imageUrl}
                    href={project.slug ? `/projects/${project.slug}` : undefined}
                  />
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
