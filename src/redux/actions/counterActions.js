import { TITLE, SUBTITLE, DESCRIPTION  } from "../actionTypes/actionTypes";


const title = (payload) => {
  return {
    type: TITLE,
    payload,
  };
};

const subtitle = (payload) => {
  return {
    type: SUBTITLE,
    payload,
  };
};

const description = (payload) => {
  return {
    type: DESCRIPTION,
    payload,
  };
};

export { title, subtitle, description };