
export const ACCELERATE = 'ACCELERATE';
export const DECELERATE = 'DECELERATE';
export const CHANGE_SCREEN = 'CHANGE_SCREEN';
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

export function changeScreen(direction) {
  return {
    type: CHANGE_SCREEN,
    direction,
  }
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  }
}
