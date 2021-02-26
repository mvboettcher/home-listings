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
  }
}
