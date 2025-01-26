import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          maxWidth: '1200px', // Replace with your desired maxWidth
        },
      },
    },
  },
});

export default theme;