
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ContactForm } from './ContactForm';

// Mock the emailRequest function
vi.mock('./contactFormService', () => ({
  emailRequest: vi.fn(() => Promise.resolve('')),
}));

describe('ContactForm', () => {
  it('renders the form fields and a submit button', () => {
    const { container } = render(
      <ContactForm  />
    )

    expect(container).toBeDefined();
  });

  it('submitting without proper inputs will result in validation', () => {
    const { getByTestId } = render(
      <ContactForm  />
    )
    
    // Act 
    const submit = getByTestId("submit-button")
    fireEvent.click(submit);

    // Assert
    const nameValidation = getByTestId("name-validation");
    expect(nameValidation).toBeDefined();
  });

  it('should be able to validate an incorrect phone number', () => {
    const { getByTestId } = render(
      <ContactForm  />
    )

    const submit = getByTestId("submit-button")
    
    // Act 
    const phoneInput = getByTestId("phone-input")
    fireEvent.change(phoneInput, {
      target: { value : "abcd"}
    });
    fireEvent.click(submit);

    // Assert
    const phoneValidation = getByTestId("phone-validation");
    expect(phoneValidation).toBeDefined();
  });

 
});