
export const ACCELERATE = 'ACCELERATE';
export const DECELERATE = 'DECELERATE';
export const VISIBLE_SCREEN = 'VISIBLE_SCREEN';
export const SET_LOADING = 'SET_LOADING';

export function accelerate(direction) {
  return {
    type: ACCELERATE,
    direction,
  }
}

export function decelerate(direction) {
  return {
    type: DECELERATE,
    direction,
  }
}

export function visibleScreen() {
  return {
    type: VISIBLE_SCREEN,
  }
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  }
}
