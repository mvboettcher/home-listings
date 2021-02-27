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
    pageHeader: {
      marginBottom: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    listingCount: {
      [theme.breakpoints.down('xs')]: {
        marginBottom: 20,
      },
    },
    sortByBtn: {
      borderRadius: 0,
      marginLeft: 10,
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
