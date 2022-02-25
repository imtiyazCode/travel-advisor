import axios from "axios";

const URL = '';


export const getPlacesData = async (type, ne, sw) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        // 'x-rapidapi-key': '7e78794b15mshc37285efdbaae40p16ed7djsnd7aa947d8617'
        'x-rapidapi-key': '1900a6e48emshad4e30e1194e195p1b3a66jsnd5d4a6d875bf'
      }
    });
    return data;
  }
  catch (error) {
    console.log(error);
  }
}