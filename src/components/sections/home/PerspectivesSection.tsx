'use client';

// =============================================================================
// Perspectives Section Component
// Project cards showcasing organization initiatives
// =============================================================================

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/Card';
import { PERSPECTIVES_CONTENT, SAMPLE_PROJECTS } from '@/lib/constants';
import type { Project } from '@/types';

interface PerspectivesSectionProps {
  projects?: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function PerspectivesSection({ projects = SAMPLE_PROJECTS }: PerspectivesSectionProps) {
  // Split projects into two rows for the design
  const firstRow = projects.slice(0, 4);
  const secondRow = projects.slice(4, 8);

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 bg-(--background) overflow-hidden flex flex-col justify-center">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title={PERSPECTIVES_CONTENT.title}
            titleHighlight={PERSPECTIVES_CONTENT.titleHighlight}
            description={PERSPECTIVES_CONTENT.description}
            align="center"
          />
        </motion.div>
      </Container>

      {/* Projects Grid - First Row - Horizontal scroll on mobile */}
      <div className="px-4 sm:px-0">
        <Container className="overflow-visible">
          <motion.div 
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {firstRow.map((project) => (
              <motion.div key={project.id} className="shrink-0 w-65 sm:w-auto" variants={cardVariants}>
                <ProjectCard
                  title={project.title}
                  date={project.date}
                  imageUrl={project.imageUrl}
                  href={project.slug ? `/projects/${project.slug}` : undefined}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* Projects Grid - Second Row */}
      {secondRow.length > 0 && (
        <div className="px-4 sm:px-0 mt-4 sm:mt-6">
          <Container className="overflow-visible">
            <motion.div 
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {secondRow.map((project) => (
                <motion.div key={project.id} className="shrink-0 w-65 sm:w-auto" variants={cardVariants}>
                  <ProjectCard
                    title={project.title}
                    date={project.date}
                    imageUrl={project.imageUrl}
                    href={project.slug ? `/projects/${project.slug}` : undefined}
                  />
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </div>
      )}
    </section>
  );
}
