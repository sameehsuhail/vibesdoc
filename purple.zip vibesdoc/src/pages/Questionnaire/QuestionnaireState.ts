import * as React from 'react';
import { createContext } from 'react';
import { IGeneralInformationState } from './1GeneralInformation/GeneralInformationState';
import { ILocationAndTravelState } from './2LocationAndTravel/LocationAndTravelState';
import { ITravelContinuedState } from './3TravelContinued/TravelContinuedState';
import { IExposeRiskState } from './4ExposeRisk/ExposeRiskState';
import { IIllHousematesState } from './5IllHousemates/IllHousematesState';
import { IWereYouIllState } from './6WereYouIll/WereYouIllState';
import { IYourSymptomsState } from './7YourSymptoms/YourSymptomsState';
import { ICovidTestingState } from './8CovidTesting/CovidTestingState';
import { IAntibodyTestState } from './9AntibodyTest/AntibodyTestState';
import { IOtherTestsState } from './10OtherTests/OtherTestsState';
import { IEmailConsentState } from './11EmailConsent/EmailConsentState';
import storage from '../../services/storage.service';

enum QuestionnaireActionType {
  ADD_QUESTION_RESULT = 'ADD_QUESTION_RESULT',
}

interface IActiveAndCompleted {
  isCompleted: boolean;
}

export interface IQuestionnaireProp<T> extends IActiveAndCompleted {
  values: T;
}

export interface IQuestionnaireState {
  activePage: string;
  generalInformation: IQuestionnaireProp<IGeneralInformationState>;
  locationAndTravel: IQuestionnaireProp<ILocationAndTravelState>;
  travelContinued: IQuestionnaireProp<ITravelContinuedState>;
  illHousemates: IQuestionnaireProp<IIllHousematesState>;
  wereYouIll: IQuestionnaireProp<IWereYouIllState>;
  exposeRisk: IQuestionnaireProp<IExposeRiskState>;
  yourSymptoms: IQuestionnaireProp<IYourSymptomsState>;
  covidTesting: IQuestionnaireProp<ICovidTestingState>;
  antibodyTest: IQuestionnaireProp<IAntibodyTestState>;
  otherTests: IQuestionnaireProp<IOtherTestsState>;
  emailConsent: IQuestionnaireProp<IEmailConsentState>;
}

type TQuestionnaireValues = IGeneralInformationState
| ILocationAndTravelState
| ITravelContinuedState
| IExposeRiskState
| IIllHousematesState
| IWereYouIllState
| IYourSymptomsState
| ICovidTestingState
| IAntibodyTestState
| IOtherTestsState
| IEmailConsentState;

type TQuestionnaireStateExceptPreviousActivePage = Omit<IQuestionnaireState, 'activePage'>;
export type TQuestionnaireKeys = keyof TQuestionnaireStateExceptPreviousActivePage;

export interface IQuestionnairePayload {
  key: TQuestionnaireKeys,
  value: TQuestionnaireValues,
  activePage: string,
}

interface IAddQuestionResult {
  type: typeof QuestionnaireActionType.ADD_QUESTION_RESULT;
  payload: IQuestionnairePayload
}

type TQuestionnaireActions =
  | IAddQuestionResult;

export const addQuestionResultActionCreator = (payload: IQuestionnairePayload) => ({
  type: QuestionnaireActionType.ADD_QUESTION_RESULT,
  payload,
});

export const QuestionnairePagesPaths: QuestionnairePagePaths = {
  results: '/questionnaire/results',
  generalInformation: '/questionnaire/general-information',
  locationAndTravel: '/questionnaire/location-and-travel',
  travelContinued: '/questionnaire/travel-continued',
  exposeRisk: '/questionnaire/expose-risk',
  illHousemates: '/questionnaire/ill-housemates',
  wereYouIll: '/questionnaire/were-you-ill',
  yourSymptoms: '/questionnaire/your-symptoms',
  covidTesting: '/questionnaire/covid-testing',
  antibodyTest: '/questionnaire/antibody-test',
  otherTests: '/questionnaire/other-tests',
  emailConsent: '/questionnaire/email-consent',
};

export const defaultQuestionnaire: IQuestionnaireState = {
  activePage: QuestionnairePagesPaths.generalInformation,
  generalInformation: {
    values: {
      sex: '',
      age: '',
      health: '',
      healthProblems: [],
      flu: '',
    },
    isCompleted: false,
  },
  locationAndTravel: {
    values: {
      country: '',
      region: '',
      postcode: '',
      travelledToOtherCountries: '',
    },
    isCompleted: false,
  },
  travelContinued: {
    values: {
      highestRiskCountry: '',
      dateEnteredCountry: null,
      dateLeftCountry: null,
    },
    isCompleted: false,
  },
  illHousemates: {
    values: {
      numberOfIllInHousehold: '',
      firstHouseholdIllnessDate: null,
    },
    isCompleted: false,
  },
  wereYouIll: {
    values: {
      hasFeltIll: '',
    },
    isCompleted: false,
  },
  exposeRisk: {
    values: {
      didWork: '',
      avoidCatching: [],
      contactWithCovid19: '',
      amountPeopleLiveWith: '',
      householdIllness: '',
    },
    isCompleted: false,
  },
  yourSymptoms: {
    values: {
      whichSymptoms: [],
      howShortOfBreath: '',
      howBadDidTheyFeel: '',
      howAnxious: '',
      firstSymptoms: null,
      lengthOfTimeOfSymptoms: '',
      wereTheyInfected: '',
    },
    isCompleted: false,
  },
  covidTesting: {
    values: {
      antibodyTest: '',
      dateOfTest: null,
      testType: '',
      testOutcome: '',
    },
    isCompleted: false,
  },
  antibodyTest: {
    values: {
      // testOutcome: '',
      testImageSrc: '',
    },
    isCompleted: false,
  },
  otherTests: {
    values: {
      labTest: '',
      swabTest: '',
      antigenTest: '',
      xrayTest: '',
      diagnosedByDoctor: '',
    },
    isCompleted: false,
  },
  emailConsent: {
    values: {
      emailConsent: '',
      // email: '',
    },
    isCompleted: false,
  },
};

const questionnaireFromStorage = storage.getObject('questionnaire');

export const questionnaireReducer = (state: IQuestionnaireState, action: TQuestionnaireActions) => {
  switch (action.type) {
    case QuestionnaireActionType.ADD_QUESTION_RESULT:
      return {
        ...state,
        [action.payload.key]: {
          values: action.payload.value,
          isCompleted: true,
          isActive: false,
        },
        activePage: action.payload.activePage,
      };

    default:
      return state;
  }
};

// eslint-disable-next-line
export const questionnaireContext = createContext<[IQuestionnaireState, React.Dispatch<TQuestionnaireActions>]>(questionnaireFromStorage || defaultQuestionnaire as any);
export const QuestionnaireProvider = questionnaireContext.Provider;

type QuestionnairePagePaths = { [K in TQuestionnaireKeys | 'results']: string };

export interface INextPageAndSection {
  nextPage: string;
}

export type GenerateNextPageAndSection<T, U = INextPageAndSection> = (values: T) => U;

type TQuestionnaireStateActive = {[K in TQuestionnaireKeys]: boolean};

export const checkQuestionnaireActivity = (pathName: string): TQuestionnaireStateActive => ({
  generalInformation: pathName.includes(QuestionnairePagesPaths.generalInformation),
  locationAndTravel: pathName.includes(QuestionnairePagesPaths.locationAndTravel),
  travelContinued: pathName.includes(QuestionnairePagesPaths.travelContinued),
  exposeRisk: pathName.includes(QuestionnairePagesPaths.exposeRisk),
  illHousemates: pathName.includes(QuestionnairePagesPaths.illHousemates),
  wereYouIll: pathName.includes(QuestionnairePagesPaths.wereYouIll),
  yourSymptoms: pathName.includes(QuestionnairePagesPaths.yourSymptoms),
  covidTesting: pathName.includes(QuestionnairePagesPaths.covidTesting),
  antibodyTest: pathName.includes(QuestionnairePagesPaths.antibodyTest),
  otherTests: pathName.includes(QuestionnairePagesPaths.otherTests),
  emailConsent: pathName.includes(QuestionnairePagesPaths.emailConsent),
});
