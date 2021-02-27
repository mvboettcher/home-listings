import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0F75BF',
    },
  },
  typography: {
    fontSize: 13,
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
