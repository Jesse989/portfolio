import { combineReducers } from 'redux';
import { ACCELERATE, DECELERATE, CHANGE_SCREEN, SET_LOADING } from './actions';

const screens: string[] = [
  'welcome',
  'skills',
  'frontend',
  'backend',
  'action'
];
let index = 0;

const screen = (direction: string): string => {
  if (direction === 'foward') return screens[++index % screens.length];
  else return screens[--index % screens.length];
};

export type GameView = {
  moving: boolean;
  direction: string;
  screen: string;
  loading: boolean;
  initTime: number;
};

const initialState: GameView = {
  moving: false,
  direction: '',
  screen: 'welcome',
  loading: true,
  initTime: Date.now()
};

interface Action {
  type: string;
  direction: string;
  status: string;
}

// reducers
function gameView(state = initialState, action: Action): GameView {
  switch (action.type) {
    case ACCELERATE:
      return Object.assign(
        {},
        { ...state },
        { moving: ACCELERATE, direction: action.direction, loading: true }
      );
    case DECELERATE:
      return Object.assign(
        {},
        { ...state },
        { moving: DECELERATE, direction: action.direction, loading: true }
      );
    case CHANGE_SCREEN:
      return {
        moving: false,
        direction: '',
        screen: screen(action.direction),
        loading: false,
        initTime: Date.now()
      };
    case SET_LOADING:
      return Object.assign({}, { ...state }, { loading: action.status });
    default:
      return state;
  }
}

export type State = {
  gameView: GameView;
};

// combine reducers
const rootReducer = combineReducers({
  gameView
});

export default rootReducer;
