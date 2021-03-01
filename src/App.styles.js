export default function styles(theme) {
  return {
    loadingContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    listingsContainer: {
      [theme.breakpoints.up('xs')]: {
        padding: 20,
        paddingTop: 120,
      },
      [theme.breakpoints.up('sm')]: {
        padding: 20,
        paddingTop: 140,
      },
      [theme.breakpoints.up('lg')]: {
        padding: 40,
        paddingTop: 140,
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
