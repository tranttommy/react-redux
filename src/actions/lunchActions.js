export const ADD_DRINK = 'ADD_DRINK';
export const ADD_SANDWICH = 'ADD_SANDWICH';
export const ADD_CHIP = 'ADD_CHIP';
export const REMOVE_DRINKS = 'REMOVE_DRINKS';
export const REMOVE_SANDWICHES = 'REMOVE_SANDWICHES';
export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const CANCEL_LUNCH = 'CANCEL_LUNCH';

export const addDrink = drink => ({ type: ADD_DRINK, payload: drink });
export const addSandwich = sandwich => ({ type: ADD_SANDWICH, payload: sandwich });
export const addChip = chip => ({ type: ADD_CHIP, payload: chip });
export const removeDrinks = () => ({ type: REMOVE_DRINKS });
export const removeSandwiches = () => ({ type: REMOVE_SANDWICHES });
export const removeChips = () => ({ type: REMOVE_CHIPS });
export const cancelLunch = () => ({ type: CANCEL_LUNCH });
