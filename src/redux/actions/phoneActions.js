
import * as types from "../actionTypes/actionTypes";



export const setPhoneCategories = (categories) => ({
  type: types.SET_PHONE_CATEGORIES,
  payload: categories,
});

export const setSmartphones = (phones) => ({
  type: types.SET_SMARTPHONES,
  payload: phones,
});

export const fetchPhoneCategories = () => {
  return (dispatch) => {
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPhoneCategories(data));
      })
      .catch((error) => console.error('Error fetching phone categories:', error));
  };
};

export const fetchSmartphones = () => {
  return (dispatch) => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setSmartphones(data.products));
      })
      .catch((error) => console.error('Error fetching smartphones:', error));
  };
};
