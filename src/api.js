const API_URL = process.env.REACT_APP_API_URL

export default async function fetchListings() {
  try {
    const getRequest = await fetch(API_URL + '/listings')
    const data = await getRequest.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
