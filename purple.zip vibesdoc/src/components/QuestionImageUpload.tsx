import * as React from 'react';
import {
  FormControl, FormLabel, Input, Typography,
} from '@material-ui/core';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import QuestionSection from './QuestionSection';
import useCommonStyles from '../pages/commonStyles';

interface IQuestionText {
  name: string;
  questionText: string;
  exampleSrc?: string;
  exampleAlt?: string;
}

const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = (error: ProgressEvent<FileReader>) => reject(error);
});

const useStyles = makeStyles((theme) => ({
  example: {
    marginLeft: '1rem',
    marginBottom: '1rem',
    width: '50%',
    [theme.breakpoints.only('xs')]: {
      width: '70%',
    },
  },
  uploadedImage: {
    marginLeft: '1rem',
    width:300,
    height:300
  }
}));

const QuestionImageUpload: React.FunctionComponent<IQuestionText> = (props) => {
  const [field, meta] = useField(props);
  const {
    name, questionText, exampleSrc, exampleAlt,
  } = props;
  const { setFieldValue } = useFormikContext();
  const classes = useStyles();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const file = (event.target as HTMLInputElement).files[0];

    toBase64(file).then((base64: string) => {
      setFieldValue(name, base64);
    }).catch((err) => {
      console.error(err); // eslint-disable-line
      setFieldValue(name, '');
    });
  };

  const fileInputProps = {
    accept: '.jpg, .jpeg, .png, .svg',
  };
  const commonStyles = useCommonStyles();
  const isExampleExist = Boolean(exampleAlt && exampleSrc);

  return (
    <QuestionSection>
      <FormControl component="fieldset" className={commonStyles.fullWidth} id={name}>
        <FormLabel component="legend">
          <Typography variant="h6" color="textSecondary">
            {questionText}
          </Typography>
        </FormLabel>
        { isExampleExist
          && (
          <div>
            <img src={exampleSrc} alt={exampleAlt} className={classes.example} />
          </div>
          )}
           <span style={{marginLeft:"20%",marginBottom:"20px"}}>Preview</span>
        <div>
          {
            field.value ? <img id="tests" src={field.value} alt=""  className={classes.uploadedImage} /> : ''
          }
        </div>
        
        <Input name={name} type="file" inputProps={fileInputProps} onChange={onFileChange} />
        <div className={commonStyles.fieldError}>
          {meta.touched && meta.error ? (
            <ErrorMessage name={name} />
          ) : null}
        </div>
      </FormControl>
    </QuestionSection>
  );
};

QuestionImageUpload.defaultProps = {
  exampleAlt: '',
  exampleSrc: '',
};

QuestionImageUpload.propTypes = {
  name: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  exampleSrc: PropTypes.string,
  exampleAlt: PropTypes.string,
};

export default QuestionImageUpload;
