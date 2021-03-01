import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0F75BF',
    },
  },
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(),
    fontSize: 13,
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
