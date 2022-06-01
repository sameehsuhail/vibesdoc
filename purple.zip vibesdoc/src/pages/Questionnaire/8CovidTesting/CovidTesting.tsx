import * as React from "react";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useHistory } from "react-router";
import QuestionRadioButton from "../../../components/QuestionRadioButton";
import { translationContext } from "../../../services/TranslateService";
import {
  addQuestionResultActionCreator,
  GenerateNextPageAndSection,
  questionnaireContext,
  QuestionnairePagesPaths,
} from "../QuestionnaireState";
import Footer from "../../../components/Footer";
import HCCSFocusError from "../../../components/HCCSFocusError";
import QuestionDatePicker from "../../../components/QuestionDatePicker";
import useCommonStyles from "../../commonStyles";
import useScrollToTheTop from "../../../hooks/useScrollToTheTop";
import { ICovidTestingState, TCovidTestingState } from "./CovidTestingState";
import BackNextNavigation from "../../../components/BackNextNavigation";
import cImage from "../../../assets/images/test-outcome/c.png";
import cIggImage from "../../../assets/images/test-outcome/c-igg.png";
import cIgmImage from "../../../assets/images/test-outcome/c-igm.png";
import cIgmIggImage from "../../../assets/images/test-outcome/c-igm-igg.png";
import iggImage from "../../../assets/images/test-outcome/igg.png";
import igmImage from "../../../assets/images/test-outcome/igm.png";
import iggIgmImage from "../../../assets/images/test-outcome/igg-igm.png";
import noLinesImage from "../../../assets/images/test-outcome/no-lines.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const covidTestingStateNext: GenerateNextPageAndSection<ICovidTestingState> = (
  values
) => {
  let nextPage: string;

  // if user says 'Sent blood for laboratory antibody test' - go to OtherTest section
  if (values.testType === "1") {
    nextPage = QuestionnairePagesPaths.otherTests;
  }

  // if user says 'No, I've not done an antibody test' - go to final section
  // if user says 'No, but I did a different type of test' - go to OtherTests section
  switch (values.antibodyTest) {
    case "0": {
      nextPage = QuestionnairePagesPaths.results;
      break;
    }
    case "1": {
      nextPage = QuestionnairePagesPaths.otherTests;
      break;
    }
    default: {
      nextPage = QuestionnairePagesPaths.otherTests;
    }
  }
  return { nextPage };
};

const CovidTesting: React.FunctionComponent = () => {
  const [t, , currentLang] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);
  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  const antibodyTestItems = [
    { label: t.COVIDTESTING_DONEANTIBODYTESTQUESTION_NO, value: "0" },
    {
      label: t.COVIDTESTING_DONEANTIBODYTESTQUESTION_NODIFFERENTTEST,
      value: "1",
    },
    { label: t.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESPOSITIVE, value: "2" },
    { label: t.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESNEGATIVE, value: "3" },
    { label: t.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESDONTKNOW, value: "4" },
  ];

  const testOutcomeItems = [
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C,
      value: "0",
      imagePath: cImage,
    },
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGG,
      value: "1",
      imagePath: cIggImage,
    },
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM,
      value: "2",
      imagePath: cIgmImage,
    },
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM_IGG,
      value: "3",
      imagePath: cIgmIggImage,
    },
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG,
      value: "4",
      imagePath: iggImage,
    },
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGM,
      value: "5",
      imagePath: igmImage,
    },
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG_IGM,
      value: "6",
      imagePath: iggIgmImage,
    },
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NOLINES,
      value: "7",
      imagePath: noLinesImage,
    },
    {
      label: t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NONEOFABOVE,
      value: "8",
    },
  ];

  // const testTypeItems = [
  //   { label: t.COVIDTESTING_ANTIBODYTESTKINDQUESTION_RAPIDANTIBODY, value: '0' },
  //   { label: t.COVIDTESTING_ANTIBODYTESTKINDQUESTION_SENTBLOODLABTEST, value: '1' },
  // ];
  const isValid = (testvalue: string) => {
    if (!testvalue) {
      return true;
    } else if (testvalue == "0") {
      return false;
    } else if (parseInt(testvalue) == 1) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <h3 className={commonStyles.textCenter} style={{ color: "#956DF7" }}>
        {t.COVIDTESTING_PAGE_TITLE}
      </h3>
      <Formik
        initialValues={questionnaireState.covidTesting.values}
        // validationSchema={Yup.object({
        //   antibodyTest: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
        //   dateOfTest: Yup.string().notRequired(),
        //   testType: Yup.string(),
        //   testOutcome: Yup.string().required(t.GLOBAL_FORMVALIDATION_REQUIRED),
        // })}
        onSubmit={(values, { setSubmitting }) => {
          const { nextPage } = covidTestingStateNext(values);
          dispatch(
            addQuestionResultActionCreator({
              key: "covidTesting",
              value: values,
              activePage: nextPage,
            })
          );
          setSubmitting(false);
          history.push(nextPage);
        }}
      >
        {(values: TCovidTestingState) => (
          <Form className={classes.root}>
            <QuestionRadioButton
              name="antibodyTest"
              items={antibodyTestItems}
              questionText={t.COVIDTESTING_DONEANTIBODYTESTQUESTION_TEXT}
            />
            {isValid(values.values.antibodyTest) && (
              <>
                <QuestionDatePicker
                  name="dateOfTest"
                  questionText={t.COVIDTESTING_ANTIBODYTESTDATEQUESTION_TEXT}
                  locale={currentLang}
                />
                <QuestionRadioButton
                  name="testOutcome"
                  items={testOutcomeItems}
                  questionText={t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_TEXT}
                />
              </>
            )}
            {/* <QuestionRadioButton
              name="testOutcome"
              items={testOutcomeItems}
              questionText={t.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_TEXT}
            /> */}

            <HCCSFocusError />
            <BackNextNavigation nextButtonText={t.GLOBAL_LABEL_NEXT} />
          </Form>
        )}
      </Formik>
      <Hidden smDown>
        <Footer />
      </Hidden>
    </>
  );
};

export default CovidTesting;
