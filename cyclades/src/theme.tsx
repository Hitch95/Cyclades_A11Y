import '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    navbar: string;
    footer: string;
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: '#FAF7F4',
      navbar: '#9C2D41',
      footer: '#9C2D41',
    },
  },
  components: {},
});

export default theme;
