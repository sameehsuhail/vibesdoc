import { makeStyles } from '@material-ui/core/styles';

const useCommonStyles = makeStyles((theme) => ({
  fullWidth: {
    width: '100%',
  },
  textCenter: {
    textAlign: 'center',
  },
  questionOption: {
    color: theme.palette.primary.main,
    fontSize: '14px',
    padding: '10px 15px',
    marginBottom: '10px',
    border: '1px solid transparent',
    "&:hover": {
      border: 'solid 1px',
      borderColor: theme.palette.primary.light,
      borderRadius: '3px',
    }

  },
  activeQuestionOption: {
    background: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  fieldError: {
    color: theme.palette.error.main,
    fontSize: '14px',
    marginBottom: '10px',
  },
}));

export default useCommonStyles;
