import { FormikProps } from 'formik';

export interface IGeneralInformationState {
  sex: string;
  age: string;
  health: string;
  healthProblems: string[];
  flu: string;
}

export type TGeneralInformationState = FormikProps<IGeneralInformationState>;
