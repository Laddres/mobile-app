import apisauce from 'apisauce'

const create = (baseURL = 'https://maps.googleapis.com') => {
  const api = apisauce.create({
    baseURL,
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  })

  const reverseGeocode = (lat, lng) =>
    api.get(`/maps/api/geocode/json`, {
      latlng: `${lat},${lng}`,
      result_type: 'administrative_area_level_1',
      key: 'AIzaSyAxlNg5sbR4KNaWRy4n57HlYaiI81-2sfI'
    })

  return {
    reverseGeocode
  }
}

export default {
  create
}
