import * as React from 'react';
import {
  FormControl, FormLabel, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import format from 'date-fns/format';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import dateTranslateService from '../services/date-translate.service';
import QuestionSection from './QuestionSection';
import useCommonStyles from '../pages/commonStyles';
import moment from 'moment'


const useStyles = makeStyles((theme) => ({
  datepickerWrapper:{
    position:'relative'
  }
}));


class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date: Date) {
    return format(date, 'PP', { locale: this.locale });
  }
}

interface IQuestionDatePicker {
  name: string;
  questionText: string;
  locale: string;
}

const QuestionDatePicker: React.FunctionComponent<IQuestionDatePicker> = (props) => {
  const [field, meta] = useField(props);
  const { name, questionText, locale: currentLang } = props;
  const { setFieldValue } = useFormikContext();
  const locale = dateTranslateService.getLocale(currentLang);
  const commonStyles = useCommonStyles();
  const classes = useStyles();

  return (
    <QuestionSection>
      <MuiPickersUtilsProvider utils={LocalizedUtils} locale={locale}>
        <FormControl component="fieldset" className={commonStyles.fullWidth} id={name}>
          <FormLabel component="legend">
            <Typography variant="h6" color="textSecondary">
              {questionText}
            </Typography>
          </FormLabel>
          <div style={{position:'relative',width:'100%'}} className={classes.datepickerWrapper}>
          <KeyboardDatePicker
            name={name}
            placeholder="mm/dd/yyyy"
            clearable
            autoOk
            format="mm/dd/yyyy"
            onChange={(value) => {
              setFieldValue(name, value);
            }}
            value={field.value}
            animateYearScrolling={false}
          />
           <span style={{position:'absolute',left:0,color:'#8f0af7'}}>{field.value?moment(field.value).format('MM/DD/YYYY'):"mm/dd/yyyy"}</span>
            </div>
          <div className={commonStyles.fieldError}>
            {meta.touched && meta.error ? (
              'Required'
            ) : null}
          </div>
        </FormControl>
      </MuiPickersUtilsProvider>
    </QuestionSection>
  );
};

QuestionDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default QuestionDatePicker;
