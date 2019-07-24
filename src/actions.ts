export const ACCELERATE = 'ACCELERATE';
export const DECELERATE = 'DECELERATE';
export const CHANGE_SCREEN = 'CHANGE_SCREEN';
export const SET_LOADING = 'SET_LOADING';

export type Accelerate = {
  type: string;
  direction: string;
};

export function accelerate(direction: string): Accelerate {
  return {
    type: ACCELERATE,
    direction
  };
}

export type Decelerate = {
  type: string;
  direction: string;
};

export function decelerate(direction: string): Decelerate {
  return {
    type: DECELERATE,
    direction
  };
}

export type ChangeScreen = {
  type: string;
  direction: string;
};

export function changeScreen(direction: string): ChangeScreen {
  return {
    type: CHANGE_SCREEN,
    direction
  };
}

export type SetLoading = {
  type: string;
  status: boolean;
};

export function setLoading(status: boolean): SetLoading {
  return {
    type: SET_LOADING,
    status
  };
}
