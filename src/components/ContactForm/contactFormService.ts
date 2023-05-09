import axios from 'axios';

export interface TemplateParams {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  marketing: string
}

export const emailRequest = async (templateParams: TemplateParams) => {
  const emailData = {
    service_id: "service_dv2598r",
    template_id: "template_n75sk5q",
    user_id: "WnHZ6Cfgq8x0y5EMD",
    template_params: templateParams
  }

  try {
    const { data, status } = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      emailData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      }
    )
    return status;
  }

  catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.status;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}