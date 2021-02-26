export default function styles(theme) {
  return {
    pageContainer: {
      [theme.breakpoints.up('xs')]: {
        padding: 20,
      },
      [theme.breakpoints.up('lg')]: {
        padding: 40,
      },
    },
    gridContainer: {
      flexGrow: 1,
    },
    loadBtn: {
      paddingLeft: 100,
      paddingRight: 100,
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: 40,
      marginBottom: 40,
      borderRadius: 8,
    },
  }
}
