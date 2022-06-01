import { IQuestionnaireState } from '../pages/Questionnaire/QuestionnaireState';
import QuestionnaireBoolean from '../pages/Questionnaire/questionnaire-boolean.enum';

export interface QuestionnaireRequestGeneralInformation {
  sex: number;
  age: string;
  health: number;
  mildHeartCondition?: boolean;
  chronicHeartCondition?: boolean;
  mildLungCondition?: boolean;
  chronicLungCondition?: boolean;
  mildDiabetes?: boolean;
  chronicDiabetes?: boolean;
  recentCancer?: boolean;
  pastCancer?: boolean;
  reducedKidneyFunction?: boolean;
  chronicLiverDisease?: boolean;
  onImmunosuppressant?: boolean;
  pregnant?: boolean;
  fluVaccine: boolean;
}

export interface QuestionnaireBodyLocationAndTravel {
  country: string;
  postcode: string;
  travelledToOtherCountries: number;
}

export interface QuestionnaireBodyTravelContinued {
  highestRiskCountry: string;
  dateEnteredCountry: number;
  dateLeftCountry: number;
}

export interface QuestionnaireBodyExposureRisk {
  didWork: number;
  keepDistanceFromOthers?: boolean;
  mask?: boolean;
  timeInVehicles?: boolean;
  washedHands?: boolean;
  contactWithCovid19: number;
  amountPeopleLiveWith: number;
  householdIllness: number;
}

export interface QuestionnaireBodyIllHousemates {
  numberOfIllInHousehold: number;
  firstHouseholdIllnessDate: number;
}

export interface QuestionnaireBodyWereYouIll {
  hasFeltIll: number;
}

export interface QuestionnaireBodyYourSymptoms {
  achyJointsMuscles?: boolean;
  headaches?: boolean;
  chills?: boolean;
  congestedNose?: boolean;
  coughWithSputum?: boolean;
  dryCough?: boolean;
  fever?: boolean;
  fatigue?: boolean;
  lossTasteSmell?: boolean;
  runnyNose?: boolean;
  shortnessOfBreath?: boolean;
  skinRash?: boolean;
  sneezing?: boolean;
  soreThroat?: boolean;
  stomachUpsetDiarrhoea?: boolean;
  nausea?: boolean;
  howShortOfBreath: number;
  howBadDidTheyFeel: number;
  howAnxious: number;
  firstSymptoms: number;
  lengthOfTimeOfSymptoms: number;
  wereTheyInfected: number;
}

export interface QuestionnaireBodyCovidTesting {
  antibodyTest: number;
  dateOfTest: number;
  testType: number;
  testOutcome: number;
}

export interface QuestionnaireBodyAntibodyTest {
  // testOutcome: number;
  testImageSrc: string;
}

export interface QuestionnaireBodyOtherTests {
  labTest: number;
  swabTest: number;
  antigenTest: number;
  xrayTest: number;
  diagnosedByDoctor: number;
}

export interface QuestionnaireBodyEmailConsent {
  emailConsent: boolean;
  // email: string;
}

export interface QuestionnaireRequestBody {
  generalInformation: QuestionnaireRequestGeneralInformation;
  locationAndTravel: QuestionnaireBodyLocationAndTravel;
  travelContinued: QuestionnaireBodyTravelContinued;
  exposureRisk: QuestionnaireBodyExposureRisk;
  illHousemates: QuestionnaireBodyIllHousemates;
  wereYouIll: QuestionnaireBodyWereYouIll;
  yourSymptoms: QuestionnaireBodyYourSymptoms;
  covidTesting: QuestionnaireBodyCovidTesting;
  antibodyTest: QuestionnaireBodyAntibodyTest;
  otherTests: QuestionnaireBodyOtherTests;
  emailConsent: QuestionnaireBodyEmailConsent;
}

const mapEnumRadios = (v: string): number => {
  const mapped = parseInt(v, 10);
  return Number.isNaN(mapped) ? undefined : mapped;
};

const mapCheckboxValues = (values: string[]): { [key: string]: boolean } => {
  const reduceCheckboxArray = (obj: any, val: string) => {
    obj[val] = true; // eslint-disable-line
    return obj;
  };
  return values.reduce(reduceCheckboxArray, {});
};

const mapBooleanRadios = (boolString: string): boolean => {
  if (boolString === QuestionnaireBoolean.false) {
    return true;
  }

  if (boolString === QuestionnaireBoolean.false) {
    return false;
  }

  return undefined;
};

const mapText = (v: string): string => v || undefined;

// Returns Epoch time in millis.
const mapDate = (dateIsoString: string) => (dateIsoString ? Date.parse(dateIsoString) : undefined);

const mapNumberInput = (v: number | string): number => (typeof v === 'number' ? v : undefined);

const mapImage = (v: string) => v || undefined;

const parseQuestionnaireForm = (state: IQuestionnaireState): QuestionnaireRequestBody => ({
  generalInformation: {
    sex: mapEnumRadios(state.generalInformation.values.sex),
    age: mapText(state.generalInformation.values.age),
    health: mapEnumRadios(state.generalInformation.values.health),
    ...mapCheckboxValues(state.generalInformation.values.healthProblems),
    fluVaccine: mapBooleanRadios(state.generalInformation.values.flu),
  },
  locationAndTravel: {
    country: mapText(state.locationAndTravel.values.country),
    postcode: mapText(state.locationAndTravel.values.postcode),
    travelledToOtherCountries:
      mapEnumRadios(state.locationAndTravel.values.travelledToOtherCountries),
  },
  travelContinued: {
    highestRiskCountry: mapText(state.travelContinued.values.highestRiskCountry),
    dateEnteredCountry: mapDate(state.travelContinued.values.dateEnteredCountry),
    dateLeftCountry: mapDate(state.travelContinued.values.dateLeftCountry),
  },
  exposureRisk: {
    didWork: mapEnumRadios(state.exposeRisk.values.didWork),
    ...mapCheckboxValues(state.exposeRisk.values.avoidCatching),
    contactWithCovid19: mapEnumRadios(state.exposeRisk.values.contactWithCovid19),
    amountPeopleLiveWith: mapNumberInput(state.exposeRisk.values.amountPeopleLiveWith),
    householdIllness: mapEnumRadios(state.exposeRisk.values.householdIllness),
  },
  illHousemates: {
    numberOfIllInHousehold: mapNumberInput(state.illHousemates.values.numberOfIllInHousehold),
    firstHouseholdIllnessDate: mapDate(state.illHousemates.values.firstHouseholdIllnessDate),
  },
  wereYouIll: {
    hasFeltIll: mapEnumRadios(state.wereYouIll.values.hasFeltIll),
  },
  yourSymptoms: {
    ...mapCheckboxValues(state.yourSymptoms.values.whichSymptoms),
    howShortOfBreath: mapEnumRadios(state.yourSymptoms.values.howShortOfBreath),
    howBadDidTheyFeel: mapEnumRadios(state.yourSymptoms.values.howBadDidTheyFeel),
    howAnxious: mapEnumRadios(state.yourSymptoms.values.howAnxious),
    firstSymptoms: mapDate(state.yourSymptoms.values.firstSymptoms),
    lengthOfTimeOfSymptoms: mapEnumRadios(state.yourSymptoms.values.lengthOfTimeOfSymptoms),
    wereTheyInfected: mapEnumRadios(state.yourSymptoms.values.wereTheyInfected),
  },
  covidTesting: {
    antibodyTest: mapEnumRadios(state.covidTesting.values.antibodyTest),
    dateOfTest: mapDate(state.covidTesting.values.dateOfTest),
    testType: mapEnumRadios(state.covidTesting.values.testType),
    testOutcome: mapEnumRadios(state.covidTesting.values.testOutcome),
  },
  antibodyTest: {
    // testOutcome: mapEnumRadios(state.antibodyTest.values.testOutcome),
    testImageSrc: mapImage(state.antibodyTest.values.testImageSrc),
  },
  otherTests: {
    labTest: mapEnumRadios(state.otherTests.values.labTest),
    swabTest: mapEnumRadios(state.otherTests.values.swabTest),
    antigenTest: mapEnumRadios(state.otherTests.values.antigenTest),
    xrayTest: mapEnumRadios(state.otherTests.values.xrayTest),
    diagnosedByDoctor: mapEnumRadios(state.otherTests.values.diagnosedByDoctor),
  },
  emailConsent: {
    emailConsent: mapBooleanRadios(state.emailConsent.values.emailConsent),
    // email: mapText(state.emailConsent.values.email),
  },
});

export default {
  parseQuestionnaireForm,
};
