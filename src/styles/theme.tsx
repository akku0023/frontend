import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFF00',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 85, // adjust the height as needed
        },
      },
    },
  },
});

export default customTheme;
