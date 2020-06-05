const axios = require('axios');
const BASE = 'https://data.sfgov.org/resource/rqzj-sfat.json';
/**
 *
 * @param {String} long - longitude should be passed as DD.DD e.g. -122.39
 * @param {String} lat  - latitude, should be passed as DD.DD e.g. 37.79
 * @param {String} token - App token, you can get your own by registering at https://data.sfgov.org/profile/edit/developer_settings
 */
async function getFoodTrucks(long, lat, token) {
  try {
    const response = await axios.get(
      `${BASE}?status=APPROVED&$where=within_circle(location,${lat},${long},1600)&$order=longitude%20DESC`,
      { dataType: 'json', data: { $$apptoken: token } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getFoodTrucks };
