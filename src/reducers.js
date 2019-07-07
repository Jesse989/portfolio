import { combineReducers } from 'redux';
import {
  ACCELERATE,
  DECELERATE,
  CHANGE_SCREEN,
  SET_LOADING
} from './actions';



const screens = ['welcome', 'skills', 'frontend', 'backend'];
let index = 0;

const screen = (direction) => {
  if (direction === "foward")
    return screens[++index % screens.length];
  else
    return screens[--index % screens.length];
}

const initialState = {
  moving: false,
  direction: null,
  screen: 'welcome',
  loading: true,
  initTime: Date.now()
}

// reducers
function gameView(state = initialState, action) {
  switch (action.type) {
    case ACCELERATE:
      return Object.assign({},
        { ...state },
        { moving: ACCELERATE,
          direction: action.direction,
          loading: true
        }
      );
    case DECELERATE:
    return Object.assign({},
      { ...state },
      { moving: DECELERATE,
        direction: action.direction,
        loading: true
      }
    );
    case CHANGE_SCREEN:
      return {
        moving: false,
        direction: null,
        screen: screen(action.direction),
        loading: false,
        initTime: Date.now()
      }
    case SET_LOADING:
      return Object.assign({},
        {...state},
        { loading: action.status }
      )
  default: return state;
  }

}

// combine reducers
const rootReducer = combineReducers({
  gameView
})


export default rootReducer;
