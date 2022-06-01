import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { translationContext } from '../services/TranslateService';
import codiApiClient from '../services/codi-api-client.service';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const useStyles = makeStyles(() => ({
  root: {
    margin: '5rem 1rem',
    textAlign: 'center',
  },
}));

// const stats = codiApiClient.results

const QuestionnaireResult = () => {
  const [t] = useContext(translationContext);
  const [open, setOpen] =React.useState(true)

  // eslint-disable-next-line @typescript-eslint/semi
  console.log(codiApiClient.getReply)

  const classes = useStyles();
  const handleClose=()=>{
    setOpen(false)
  }
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <div className={classes.root}>
      {/* <h2>{t.RESULT_PAGE_TITLE}</h2>
      <p>{t.RESULT_PAGE_TEXT}</p> */}
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="mx-auto" style={{padding: "46px"}}>{"Thank you for the submision!"}</DialogTitle>
        {/* <DialogContent>
     
        </DialogContent> */}
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
    </ClickAwayListener>
  );
};

export default QuestionnaireResult;