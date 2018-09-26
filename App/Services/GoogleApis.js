import apisauce from 'apisauce'
import Config from 'react-native-config'

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
      key: Config.GOOGLE_MAPS_API_KEY
    })

  return {
    reverseGeocode
  }
}

export default {
  create
}
