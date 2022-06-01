import * as React from 'react';
import classnames from 'classnames';
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography,
} from '@material-ui/core';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import QuestionSection from './QuestionSection';
import useCommonStyles from '../pages/commonStyles';
import male from "../assets/images/oneb.svg";
import Female from "../assets/images/onea.svg";

interface IQuestionRadioButtonItem {
  label?: string;
  value?: string;
  imagePath?: string;
}

interface IQuestionRadioButton {
  name: string
  items: IQuestionRadioButtonItem[];
  questionText: string;
}

const QuestionRadioButton: React.FunctionComponent<IQuestionRadioButton> = (props) => {
  const [field, meta] = useField(props);
  const { name, items, questionText } = props;
  const commonStyles = useCommonStyles();
  // console.log(items.label,"DFGHJKFGHJK")

  return (
    <QuestionSection>
      <FormControl component="fieldset" className={commonStyles.fullWidth} id={name}>
        <FormLabel component="legend">
          <Typography variant="h6" color="textSecondary">
            {questionText}
          </Typography>
        </FormLabel>
        <div className={commonStyles.fieldError}>
          {meta.touched && meta.error ? (
            <ErrorMessage name={name} />
          ) : null}
        </div>
        <RadioGroup aria-label={name} name={name} value={field.value} onChange={field.onChange}>
          {items.length===9?<>
           <div  style={{display:"flex", flexWrap: "wrap", justifyContent: "center" ,padding: "3px"}}>
           {
            items.map((item) => (
              <div  key={item.value}>
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  label={item.label}
                  className={classnames([commonStyles.fullWidth, commonStyles.questionOption,
                    { [commonStyles.activeQuestionOption]: field.value === item.value }])}
                  // control={}
                  control={<Radio inputProps={{ 'aria-label': item.label }}  style={{color:"#8f0af7"}}/>}
                />
                {
                  item.imagePath ? <div className="d-flex"><img src={item.imagePath} alt={item.label} /></div> : ''
                }
              </div>
            ))
          } 
          </div>
          </>:
         <>
         {items.length===3 && items[0].label==="Male"?<>
          {
            items.map((item) => (
              <div className="rajat123" key={item.value} style={{display: "flex", position : "relative"}}>
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  label={item.label}
                  className={classnames([commonStyles.fullWidth, commonStyles.questionOption,
                    { [commonStyles.activeQuestionOption]: field.value === item.value }])}
                  control={
                      <Radio inputProps={{ 'aria-label': item.label }}  style={{color:"#8f0af7"}}/>
                  }
                />
                <div   className="rajat123df"   style={{position : "absolute", right : "39px", top: "14px"}}>
                  {item.label === "Male" ?<><img src={male} alt= "" height="35px" width="35px"/></>:(item.label==="Female")?<><img src={Female} alt= "" height="35px" width="35px"/></>:null}
                </div>
                 
                {
                  item.imagePath ? <div className="d-flex"><img src={item.imagePath} alt={item.label} /></div> : ''
                }
              </div>
            ))
          } 
         </>:<>
         {
            items.map((item) => (
              <div  className="rajat44"  key={item.value}>
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  label={item.label}
                  className={classnames([commonStyles.fullWidth, commonStyles.questionOption,
                    { [commonStyles.activeQuestionOption]: field.value === item.value }])}
                  control={<Radio inputProps={{ 'aria-label': item.label }}  style={{color:"#8f0af7"}}/>}
                />
                {
                  item.imagePath ? <div className="d-flex"    ><img src={item.imagePath} alt={item.label} /></div> : ''
                }
              </div>
            ))
          } 
         </>}
           
        </>}
          {/* </>} */}
        </RadioGroup>
      </FormControl>
    </QuestionSection>
  );
};

QuestionRadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  })).isRequired,
  questionText: PropTypes.string.isRequired,
};

export default QuestionRadioButton;