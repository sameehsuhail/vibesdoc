import { FormikProps } from 'formik';

export interface IEmailConsentState {
  emailConsent: string;
  // email: string;
}

export type TEmailConsentState = FormikProps<IEmailConsentState>;
