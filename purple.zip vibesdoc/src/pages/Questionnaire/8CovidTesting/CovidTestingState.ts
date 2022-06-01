import { FormikProps } from 'formik';

export interface ICovidTestingState {
  antibodyTest: string;
  dateOfTest: string;
  testType: string;
  testOutcome: string;
}

export type TCovidTestingState = FormikProps<ICovidTestingState>;
