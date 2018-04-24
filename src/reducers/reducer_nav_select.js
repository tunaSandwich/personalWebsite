import { NAV_ITEM_SELECTED } from '../actions/index';
import NavsReducer from './reducer_navs';

//Default selected nav is first in array... Lucas Garza
const initialNav = NavsReducer()[0];

//Passing current selected nav
export default function(state = initialNav, action){
  // Warning -  Expected a default case  default-case
  switch(action.type){
    case  NAV_ITEM_SELECTED:
    return action.payload;
  }
  //if we dont care about state just return the state
  return state;
}
