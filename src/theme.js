import { createTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';

export default createTheme({
    palette: {
        primary: {
            dark: blueGrey[900],
            light: blueGrey[300],
            main: blueGrey[500],
        },
        secondary: {
            dark: teal[700],
            light: teal[300],
            main: teal[500],
        },
    },
    typography: {
        fontFamily: [
            'apple system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
        ].join(','),
    },
});