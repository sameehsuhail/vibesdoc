import { makeStyles } from '@material-ui/core/styles';

const useGlobalCommonStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1% 5%',
    [theme.breakpoints.only('xs')]: {
      padding: '1% 2%',
    },
  },
  modalBody: {
    position: 'relative',
    width: '80%',
    top: '10%',
    left: '10%',
    maxHeight: '80%',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 3, 2),
    fontSize: 'medium',
    [theme.breakpoints.only('xs')]: {
      fontSize: 'small',
    },
  },
}));

export default useGlobalCommonStyles;
