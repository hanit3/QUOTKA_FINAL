import {
  GET_SCRAP,
  ISCHECK_SCRAP,
  SUBTRACTION_SCRAP,
  ADDITION_SCRAP,
  SCRAP_LIST,
} from '../actions/types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_SCRAP:
      return { ...state, scrapData: action.payload };
    case ISCHECK_SCRAP:
      return { ...state, isCheck: action.payload };
    case SUBTRACTION_SCRAP:
      return { ...state, subScrap: action.payload };
    case ADDITION_SCRAP:
      return { ...state, addScrap: action.payload };
    case SCRAP_LIST:
      return { ...state, scrapList: action.payload };
    default:
      return state;
  }
}
