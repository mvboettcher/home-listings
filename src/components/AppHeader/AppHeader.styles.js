export default function styles(theme) {
  return {
    appBar: {
      backgroundColor: '#fff',
      padding: 20,
    },
    toolBar: {
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
  }
}
