//useCounter.test.tsx
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Facials } from './Facials';
import { describe, expect, it } from 'vitest';

describe('TreatmentCard component', () => {
  it('should render a treatment card component', () => {
    const { container } = render(
      <Facials />
    )

    expect(container).toBeDefined();
  });

  it('should be able to show more facials by clicking the button to do so', () => {
    // Arrange
    const { getByTestId } = render(
      <Facials />
    )
    
    // Act
    const toggleFacialsButton = getByTestId("showMoreFacials");
    fireEvent.click(toggleFacialsButton);

    // Assert
    expect(getByTestId("expandedTreatments")).toBeDefined();
  });


  it('should be able to go back to hiding additional treatments', () => {
    // Arrange
    const { getByTestId } = render(
      <Facials />
    )
    const toggleFacialsButton = getByTestId("showMoreFacials");

    // Act - Two clicks to test toggling back off
    fireEvent.click(toggleFacialsButton);
    fireEvent.click(toggleFacialsButton);

    // Assert
    expect(getByTestId("reducedTreatments")).toBeDefined();
  });
  
});