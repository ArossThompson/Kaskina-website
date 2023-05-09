export const phoneRegex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface ContactFormState {
  name: string,
  nameValid: boolean,
  email: string,
  emailValid: boolean,
  phoneNumber: string,
  phoneNumberValid: boolean,
  message: string,
  messageValid: boolean,
  marketingCheck: boolean,
  formComplete: boolean,
  formError: boolean,
  formTouched: boolean
}

type Reducer<ContactFormState, A> = (prevState: ContactFormState, action: A) => ContactFormState;

export const initialFormState: ContactFormState = {
  name: "",
  nameValid: false,
  email: "",
  emailValid: false,
  phoneNumber: "",
  phoneNumberValid: true,
  message: "",
  messageValid: false,
  marketingCheck: false,
  formComplete: false,
  formError: false,
  formTouched: false
}

export enum formActionTypeEnum {
  nameInput = "nameInput",
  emailInput = "emailInput", 
  phoneNumberInput = "phoneNumberInput",
  messageInput = "messageInput",
  marketingCheck = "marketingCheck",
  submissionAttempted = "submissionAttempted",
  submissionSuccess = "submissionSuccess",
  submissionError = "submissionError"
}

export const contactFormReducer: Reducer<any, any> = (state: ContactFormState, action: { type: formActionTypeEnum, value: string }) => {
  switch(action.type) {
    case 'nameInput': {
      return {
        ...state,
        name: action.value,
        nameValid: action.value !== ""
      }
    }

    case 'emailInput': {
      return {
        ...state,
        email: action.value,
        emailValid: emailRegex.test(action.value)
      }
    }

    case 'phoneNumberInput': {
      return {
        ...state,
        phoneNumber: action.value,
        phoneNumberValid: phoneRegex.test(action.value) || action.value === ""
      }
    }

    case 'messageInput': {
      return {
        ...state,
        message: action.value,
        messageValid: action.value !== ""
      }
    }

    case 'marketingCheck': {
      return {
        ...state,
        marketingCheck: !state.marketingCheck
      }
    }

    case 'submissionAttempted': {
      return {
        ...state,
        formTouched: true
      };
    }

    case 'submissionSuccess': {
      return {
        ...initialFormState,
        formComplete: true
      };
    }


  }
}

export const formIsValid = (name: boolean, email: boolean, phone: boolean, message: boolean) => {
  return name && email && phone && message;
}