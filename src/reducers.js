import { combineReducers } from 'redux';
import {
  ACCELERATE,
  DECELERATE,
  VISIBLE_SCREEN,
  SET_LOADING
} from './actions';



const screens = ['welcome', 'skills'];
let index = 0;
const screen = () => {
  return screens[++index % screens.length]
}

const initialState = {
  moving: false,
  direction: null,
  screen: 'welcome',
  loading: true
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
    case VISIBLE_SCREEN:
      return {
        moving: false,
        direction: null,
        screen: screen(),
        loading: false
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
