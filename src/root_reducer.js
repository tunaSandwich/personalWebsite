import { combineReducers } from 'redux';
import NavsReducer from './reducers/reducer_navs';
import  ActiveNav from './reducers/reducer_nav_select';

const rootReducer = combineReducers({
  navs: NavsReducer,
  activeNav: ActiveNav,
});

export default rootReducer;
