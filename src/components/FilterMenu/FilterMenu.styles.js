export default function styles(theme) {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        paddingBottom: 10,
      },
    },
    filterMenuBtn: {
      borderRadius: 0,
      marginLeft: 10,
    },
    filterGroup: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    btnGroup: {
      padding: 6,
      marginBottom: 6,
    },
    closeBtn: {
      display: 'flex',
      justifyContent: 'end',
      marginRight: 8,
    },
  }
}
