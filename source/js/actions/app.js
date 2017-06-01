export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SHOW_ALAMR = 'SHOW_ALAMR';
export const CLOSE_ALAMR = 'CLOSE_ALAMR';
export const TOOGLE_FLIP_ITEM = 'TOOGLE_FLIP_ITEM';
export const TOOGLE_CHECK_ITEM = 'TOOGLE_CHECK_ITEM';

export function add_item(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function remove_item(id) {
  return {
    type: REMOVE_ITEM,
    payload: id
  };
}

export function check_item(data) {
  return {
    type: TOOGLE_CHECK_ITEM,
    payload: data 
  };
}

export function flip_item(data) {
  return {
    type: TOOGLE_FLIP_ITEM,
    payload: data 
  };
}

export function show_alarm(id) {
  return {
    type: SHOW_ALAMR,
    payload: id
  };
}

export function close_alarm(shouldRemove) {
  return {
    type: CLOSE_ALAMR,
    payload: shouldRemove
  };
}
