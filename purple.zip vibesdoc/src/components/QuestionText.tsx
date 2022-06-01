import * as React from 'react';
import {
  FormControl, FormLabel, TextField, Typography,
} from '@material-ui/core';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import QuestionSection from './QuestionSection';
import useCommonStyles from '../pages/commonStyles';

interface IQuestionText {
  name: string;
  questionText: string;
  fieldType?: string;
}

const QuestionText: React.FunctionComponent<IQuestionText> = (props) => {
  const [field, meta] = useField(props);
  const { name, fieldType, questionText } = props;
  const commonStyles = useCommonStyles();
  return (
    <QuestionSection>
      <FormControl component="fieldset" className={commonStyles.fullWidth} id={name}>
        <FormLabel component="legend">
          <Typography variant="h6" color="textSecondary">
            {questionText}
          </Typography>
        </FormLabel>
        <TextField name={name} value={field.value} type={fieldType} onChange={field.onChange} />
        <div className={commonStyles.fieldError}>
          {meta.touched && meta.error ? (
            <ErrorMessage name={name} />
          ) : null}
        </div>
      </FormControl>
    </QuestionSection>
  );
};

QuestionText.propTypes = {
  name: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  fieldType: PropTypes.string,
};

QuestionText.defaultProps = {
  fieldType: 'text',
};

export default QuestionText;
