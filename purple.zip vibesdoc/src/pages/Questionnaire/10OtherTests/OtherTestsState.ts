import { FormikProps } from 'formik';

export interface IOtherTestsState {
  labTest: string;
  swabTest: string;
  antigenTest: string;
  xrayTest: string;
  diagnosedByDoctor: string;
}

export type TOtherTestsState = FormikProps<IOtherTestsState>;
