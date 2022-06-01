import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ef97fd',
      main: '#956DF7',
      dark: '#6406af'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    common: {
      white: '#ffffff',
    },
    secondary: {
      light: '#FF9A77',
      main: '#ef97fd',
      // dark: will be calculated from palette.secondary.main,
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#ffffff',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#956DF7',
      secondary: '#4F4F4F',
      disabled: '#ef97fd',
    },
    action: {
      active: '#8f0af7',
      hover: '#8f0af7',
    },
  },
  typography: {
    fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

export default theme;
