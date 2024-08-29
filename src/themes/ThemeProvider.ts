import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, yellow } from '@mui/material/colors';

const baseTheme = createTheme({
    palette: {
        background: {
          default: '#252222',
        }


    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        allVariants: {
            fontSize: '1.3rem',
            fontWeight: 300,
            lineHeight: 'auto',
            color: '#B3B3B3'
        },

        h1: {
            fontSize: '2.3rem',
            color: '#F2F2F2'
        }
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
                img {
                    display: block;
                    width: 100%;
                }
            `,
        },

        MuiLink: {
          styleOverrides: {
            root: {
              color: yellow[700], 
              textDecoration: 'none', 
              
              '&:hover': {
                color: amber[700], 
              },
            },
          },
        },
    }    
})

export default baseTheme;