import FETCH_CAFELIST from './cafe-api';
import SEAT_DB from './cafe-db';

export const USER_PREFS = 'USER_PREFS';
export const SUBMIT_PREFS = 'SUBMIT_PREFS';
//export const NEIGHBORHOOD_PREFS = 'NEIGBHORHOOD_PREFS';
export const FETCH_COORD = 'FETCH_COORD';
export const PULL_CAFE = 'PULL_CAFE';
export const ORDER_CAFELIST = 'ORDER_CAFELIST';

export function setPreferences(pref) {
  return {
    type: USER_PREFS,
    payload: pref
  }
};

// // To be used for coordinate substitution
// export function setNeighborhood(neighborhood) {
//   return {
//     type: NEIGHBORHOOD_PREFS,
//     payload: neighborhood
//   }
// };

export function fetchCoordinates(position) {
  return {
    type: FETCH_COORD,
    payload: position
  }
};

export function submitPrefList(preferences) {
  let googleCafeList = FETCH_CAFELIST;
  let seats = SEAT_DB;
  
  return {
    type: SUBMIT_PREFS,
    payload: ''
  }
};

export function pullCafeForForm(cafeInfo) {  
  return {
    type: PULL_CAFE,
    payload: cafeInfo
  }
};

export function orderCafeList(orderPref) {
  return {
    type: ORDER_CAFELIST,
    payload: orderPref
  }
}