export const NAV_ITEM_SELECTED = 'NAV_ITEM_SELECTED';

export function selectNav(nav){
  //return action object
  return{
    type: NAV_ITEM_SELECTED,
    payload: nav
  }
}
