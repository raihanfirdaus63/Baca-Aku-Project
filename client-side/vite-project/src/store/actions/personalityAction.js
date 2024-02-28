// store/action/personality.js
import { FIND_PERSONALITY } from "./actionType";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://server.bacaaku.com";

export const fetchDataPersonality = (dataForm) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/findPersonality`, {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        },
      });
      if (response.ok) {
        const personalities = await response.json();
        dispatch(fetchPersonality(personalities));
      } else {
        console.log('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during personality fetch:', error);
    }
  };
};

const fetchPersonality = (personalities) => {
  return {
    type: FIND_PERSONALITY,
    payload: personalities,
  };
};
