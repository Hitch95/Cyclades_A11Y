import '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    navbar: string;
    footer: string;
    cream: string;
    burgundyRed: string;
    warmNeutral: string;
    complementaryGreen: string;
    goldAccent: string;
    deepBrown: string;
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: '#FAF7F4',
      navbar: '#9C2D41',
      footer: '#9C2D41',
      cream: '#FAF7F4',
      burgundyRed: '#9C2D41',
      warmNeutral: '#F5E6E8',
      complementaryGreen: '#2D9C7B',
      goldAccent: '#D4A373',
      deepBrown: '#3F2C28',
    },
  },
  components: {},
});

export default theme;
