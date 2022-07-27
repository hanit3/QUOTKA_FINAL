import axios from 'axios';
import {
  GET_SCRAP,
  ISCHECK_SCRAP,
  SUBTRACTION_SCRAP,
  ADDITION_SCRAP,
  SCRAP_LIST,
} from './types';

// 좋아요 보기
export function getScrap(Scrap) {
  const request = axios
    .post('/api/scrap/scrapCounts', Scrap)
    .then(response => response.data);

  return {
    type: GET_SCRAP,
    payload: request,
  };
}

// 좋아요 클릭 확인 (1회)
export function ischeckScrap(Scrap) {
  const request = axios
    .post('/api/scrap/scrapped', Scrap)
    .then(response => response.data);

  return {
    type: ISCHECK_SCRAP,
    payload: request,
  };
}

// 좋아요 1 차감
export function subtractionScrap(Scrap) {
  const request = axios
    .post('/api/scrap/disscrap', Scrap)
    .then(response => response.data);

  return {
    type: SUBTRACTION_SCRAP,
    payload: request,
  };
}

// 좋아요 1 증가
export function additionScrap(Scrap) {
  const request = axios
    .post('/api/scrap', Scrap)
    .then(response => response.data);

  return {
    type: ADDITION_SCRAP,
    payload: request,
  };
}

// 좋아요 리스트
export function scrapList({ userFrom: userFrom }) {
  const request = axios
    .post('/api/scrap/scraps', { userFrom: userFrom })
    .then(response => response.data);

  return {
    type: SCRAP_LIST,
    payload: request,
  };
}
