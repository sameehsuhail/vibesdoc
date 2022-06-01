import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

interface IQuestionSectionProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 80px 80px 80px',
    borderRadius: '12px',
    background: theme.palette.background.paper,
    marginBottom: '25px',
    [theme.breakpoints.only('xs')]: {
      padding: '10px 5px 10px 20px',
      '& h6': {
        fontSize: '18px',
      },
      '& span': {
        fontSize: '14px',
      },
    },
  },
}));

const QuestionSection: React.FunctionComponent<IQuestionSectionProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

QuestionSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default QuestionSection;
