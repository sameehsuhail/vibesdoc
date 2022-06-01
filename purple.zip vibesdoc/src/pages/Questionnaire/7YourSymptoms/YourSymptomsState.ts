import { FormikProps } from 'formik';

export interface IYourSymptomsState {
  whichSymptoms: string[];
  howShortOfBreath: string;
  howBadDidTheyFeel: string;
  howAnxious: string;
  firstSymptoms: string;
  lengthOfTimeOfSymptoms: string;
  wereTheyInfected: string;
}

export type TYourSymptomsState = FormikProps<IYourSymptomsState>;
