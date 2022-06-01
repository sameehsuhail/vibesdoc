import * as React from "react";
import { useContext } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { useHistory } from "react-router";
import { translationContext } from "../../../services/TranslateService";
import QuestionSelect from "../../../components/QuestionSelect";
import QuestionDatePicker from "../../../components/QuestionDatePicker";
import {
  addQuestionResultActionCreator,
  questionnaireContext,
  QuestionnairePagesPaths,
} from "../QuestionnaireState";
import Footer from "../../../components/Footer";
import HCCSFocusError from "../../../components/HCCSFocusError";
import countries from "../../../services/countries-translate.service";
import useCommonStyles from "../../commonStyles";
import useScrollToTheTop from "../../../hooks/useScrollToTheTop";
import BackNextNavigation from "../../../components/BackNextNavigation";
import { any, number } from "prop-types";
import Axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const TravelContinued = () => {
  const [t, , currentLang] = useContext(translationContext);
  const [questionnaireState, dispatch] = useContext(questionnaireContext);
  const history = useHistory();
  const classes = useStyles();
  const commonStyles = useCommonStyles();
  useScrollToTheTop();

  const [countryItems, setCountryItems] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`https://app.vibesdoc.com/api/v1/country`)
      .then((res) => {
        var countries = Array();
        res.data.countries.map((elem = Object()) => {
          let obj = {
            label: elem.name,
            value: elem.name,
          };
          countries.push(obj);
        });
        setCountryItems(countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h3 className={commonStyles.textCenter} style={{ color: "#956DF7" }}>
        {t.TRAVELCONTINUED_PAGE_TITLE}
      </h3>
      <Formik
        initialValues={questionnaireState.travelContinued.values}
        validationSchema={Yup.object({
          highestRiskCountry: Yup.string().required(),
          dateEnteredCountry: Yup.string().required(),
          dateLeftCountry: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            addQuestionResultActionCreator({
              key: "travelContinued",
              value: values,
              activePage: QuestionnairePagesPaths.exposeRisk,
            })
          );
          setSubmitting(false);
          history.push(QuestionnairePagesPaths.exposeRisk);
        }}
      >
        {() => (
          <Form className={classes.root}>
            <QuestionSelect
              name="highestRiskCountry"
              questionText={t.TRAVELCONTINUED_VISITEDCOUNTRY_TEXT}
              items={countryItems}
            />
            <QuestionDatePicker
              name="dateEnteredCountry"
              questionText={t.TRAVELCONTINUED_VISITEDENTERDATE_TEXT}
              locale={currentLang}
            />
            <QuestionDatePicker
              name="dateLeftCountry"
              locale={currentLang}
              questionText={t.TRAVELCONTINUED_VISITEDLEAVEDATE_TEXT}
            />
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

export default TravelContinued;
