'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const axios = require('axios');
const BASE = 'https://data.sfgov.org/resource/rqzj-sfat.json';
/**
 *
 * @param {String} long - longitude should be passed as DD.DD e.g. -122.39
 * @param {String} lat  - latitude, should be passed as DD.DD e.g. 37.79
 * @param {String} keyword - a keyword to search by
 * @param {String} token - App token, you can get your own by registering at https://data.sfgov.org/profile/edit/developer_settings
 */
async function getFoodTrucks(long, lat, keyword, token) {
  if (keyword.length < 3) {
    try {
      const response = await axios.get(
        `${BASE}?status=APPROVED&$where=within_circle(location,${lat},${long},1600)&$order=longitude%20DESC`,
        { dataType: 'json', data: { $$apptoken: token } }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const response = await axios.get(
        `${BASE}?status=APPROVED&$where=fooditems like '%25${keyword}%25' AND within_circle(location,${lat},${long},1600)&$order=longitude%20DESC`,
        { dataType: 'json', data: { $$apptoken: token } }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

exports.getFoodTrucks = getFoodTrucks;
