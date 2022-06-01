import { FormikProps } from 'formik';

export interface IAntibodyTestState {
  // testOutcome: string;
  testImageSrc: string;
}

export type TAntibodyTestState = FormikProps<IAntibodyTestState>;
