import { useReducer, useState } from "react";
import { FaInfo, FaInstagram, FaCheck, FaExclamation} from "react-icons/fa";
import {
  contactFormReducer,
  initialFormState,
  formActionTypeEnum,
  formIsValid,
} from "./contactForm.util";
import "./contactForm.scss";
import { emailRequest, TemplateParams } from "./contactFormService";

export const ContactForm = () => {
  const [formState, dispatchFormState] = useReducer(
    contactFormReducer,
    initialFormState
  );

  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const handleInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    actionType: formActionTypeEnum
  ) => {
    dispatchFormState({
      type: actionType,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatchFormState({
      type: formActionTypeEnum.submissionAttempted,
    });

    if (
      formIsValid(
        formState.nameValid,
        formState.emailValid,
        formState.phoneNumberValid,
        formState.messageValid
      )
    ) {
      dispatchFormState({
        type: formActionTypeEnum.submissionSuccess,
      });

      handleEmailRequest({
        name: formState.name,
        email: formState.email,
        phoneNumber: formState.phoneNumber,
        marketing: formState.marketingCheck ? "Yes" : "No",
        message: formState.message,
      });
    }
  };

  const handleEmailRequest = async (FormData: TemplateParams) => {
    setLoading(true);
    const response = await emailRequest(FormData);
    if(response && response.toString().startsWith("2")) {
      setError(false);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  if( loading ) {
    return (
      <div className="contact-form contact-form__loading">
        Loading...
      </div>
    );
  }

  if (formState.formComplete && !error && !loading) {
    return (
      <div className="contact-form contact-form__completed">
        <FaCheck size={30} />
        <p>Thank you so much for submitting your request.</p>
        <p>I will be in touch shortly.</p>
        <p>
          Alternatively, you can always contact me directly at{" "}
          <a href="mailto:kaskinabookings@gmail.com">
          kaskinabookings@gmail.com
          </a>
        </p>
        <p>
          Or call/text me on <a href="tel:07851339369">07851339369</a>
        </p>
        <p>
          Thank you for your support, please feel free to follow me on{" "}
          <a href="https://www.instagram.com/kaskina_skinandlaser/">
            Instagram
          </a>
        </p>
      </div>
    );
  }

  if (error && !loading) {
    return (
      <div className="contact-form contact-form__completed contact-form__completed--error">
        <FaExclamation size={30} />
        <p>Unfortunately there has been an error and we will not have received your message.</p>
        <p>I'm really sorry for any invoncenience.</p>
        <p>
          Alternatively, you can always contact me directly at{" "}
          <a href="mailto:kaskinabookings@gmail.com">
            kaskinabookings@gmail.com@gmail.com
          </a>
        </p>
        <p>
          Or call/text me on <a href="tel:07851339369">07851339369</a>
        </p>
        <p>
          Thank you for your support, please feel free to follow me on{" "}
          <a href="https://www.instagram.com/kaskina_skinandlaser/">
            Instagram
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Contact me to book</h3>
      <p className="contact-form__alternative">
        Alternatively, you can simply message me on{" "}
        <a href="https://www.instagram.com/kaskina_skinandlaser/">
          <FaInstagram />
          Instagram
        </a>
      </p>
      <hr />
      <div className="form-group">
        <label htmlFor="name">
          Name <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          value={formState.name}
          onChange={(e) => handleInputs(e, formActionTypeEnum.nameInput)}
        />
        {!formState.nameValid && formState.formTouched && (
          <div className="validation-error" data-testid="name-validation">
            <FaInfo size={16} /> Please enter your name
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email address <span className="required-asterisk">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter your email address"
          value={formState.email}
          onChange={(e) => handleInputs(e, formActionTypeEnum.emailInput)}
        />
        {!formState.emailValid && formState.formTouched && (
          <div className="validation-error" data-testid="email-validation">
            <FaInfo size={16} /> Please enter a valid email address
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          data-testid="phone-input"
          className="form-control"
          id="phoneNumber"
          aria-describedby="emailHelp"
          placeholder="Enter your phone number"
          value={formState.phoneNumber}
          onChange={(e) => handleInputs(e, formActionTypeEnum.phoneNumberInput)}
        />

        {!formState.phoneNumberValid && formState.formTouched && (
          <div className="validation-error" data-testid="phone-validation">
            <FaInfo size={16} /> Please enter a valid phone number
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message <span className="required-asterisk">*</span>
        </label>
        <textarea
          className="form-control"
          id="message"
          rows={3}
          value={formState.message}
          onChange={(e) => handleInputs(e, formActionTypeEnum.messageInput)}
        ></textarea>

        {!formState.messageValid && formState.formTouched && (
          <div className="validation-error" data-testid="message-validation">
            <FaInfo size={16} /> Please enter a message
          </div>
        )}
      </div>
      <hr />

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="marketingCheck"
          checked={formState.marketingCheck}
          onChange={(e) => handleInputs(e, formActionTypeEnum.marketingCheck)}
        />
        <label className="form-check-label" htmlFor="marketingCheck">
          Tick here if you want to receive further marketing communication about
          Kaskina Skin and Laser treatments and products
        </label>
      </div>

      <hr />
      <div className="form-submit" >
        <button type="submit" className="btn btn-primary" data-testid="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};
