//useCounter.test.tsx
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { RootLayout } from './RootLayout';
import { describe, expect, it } from 'vitest';

describe('TreatmentCard component', () => {
  it('should render a treatment card component', () => {
    const { container } = render(
      <RootLayout  />
    )

    expect(container).toBeDefined();

  });
  
});