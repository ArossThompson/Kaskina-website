//useCounter.test.tsx
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { TreatmentCard } from './TreatmentCard';
import { describe, expect, it } from 'vitest';

describe('TreatmentCard component', () => {
  it('should render a treatment card component', () => {
    const { container } = render(
      <TreatmentCard title="my card" img="img.src" description="some desc" price="£2" time="20mins" />
    )

    expect(container).toBeDefined();

  });
  
});