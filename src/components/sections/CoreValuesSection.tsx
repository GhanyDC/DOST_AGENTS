// =============================================================================
// Core Values Section Component
// Displays organization's core values with highlighted letters
// =============================================================================

import { Container } from '@/components/ui/Container';
import { CORE_VALUES_CONTENT } from '@/lib/constants';

// Helper function to highlight specific letters in a word
function HighlightedWord({ word, highlight }: { word: string; highlight: string }) {
  // Find where the highlight starts in the word
  const highlightIndex = word.indexOf(highlight);
  
  if (highlightIndex === -1) {
    return <span className="text-[var(--foreground)]">{word}</span>;
  }

  const before = word.slice(0, highlightIndex);
  const highlighted = word.slice(highlightIndex, highlightIndex + highlight.length);
  const after = word.slice(highlightIndex + highlight.length);

  return (
    <span>
      {before && <span className="text-[var(--foreground)]">{before}</span>}
      <span className="text-[var(--color-accent-yellow)]">{highlighted}</span>
      {after && <span className="text-[var(--foreground)]">{after}</span>}
    </span>
  );
}

export function CoreValuesSection() {
  const { title, description, values } = CORE_VALUES_CONTENT;

  // Group values into lines for display
  // Line 1: PROFESSIONAL EXCELLENCE | SOCIAL RESPONSIBILITY
  // Line 2: SERVANT LEADERSHIP
  const line1Values = values.slice(0, 4); // P, E, SO, R
  const line2Values = values.slice(4); // SER, L

  return (
    <section className="py-20 bg-[var(--background)]">
      <Container className="text-center">
        {/* Title */}
        <h2 className="font-script text-3xl md:text-4xl text-[var(--color-accent-yellow)] italic mb-8">
          {title}
        </h2>

        {/* Core Values Display */}
        <div className="mb-8 space-y-2">
          {/* Line 1: PROFESSIONAL EXCELLENCE | SOCIAL RESPONSIBILITY */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">
            <HighlightedWord word="PROFESSIONAL" highlight="P" />
            <HighlightedWord word="EXCELLENCE" highlight="E" />
            <span className="text-[var(--foreground-muted)] mx-2">|</span>
            <HighlightedWord word="SOCIAL" highlight="SO" />
            <HighlightedWord word="RESPONSIBILITY" highlight="R" />
          </div>

          {/* Line 2: SERVANT LEADERSHIP */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">
            <HighlightedWord word="SERVANT" highlight="SER" />
            <HighlightedWord word="LEADERSHIP" highlight="L" />
          </div>
        </div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed">
          {description}
        </p>
      </Container>
    </section>
  );
}
