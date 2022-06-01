import { FormikProps } from 'formik';

export interface IExposeRiskState {
  didWork: string;
  avoidCatching: string[];
  contactWithCovid19: string;
  amountPeopleLiveWith: number | string;
  householdIllness: string;
}

export type TExposeRiskState = FormikProps<IExposeRiskState>;
