import * as types from "./actionTypes";
import { SinglePokemon, Settings, Page } from "../../Types";

export function setLists(payload: SinglePokemon[]) {
  return { type: types.SET_LISTS, payload };
}

export function changeList() {
  return { type: types.CHANGE_LIST };
}

export function setSettings(payload: Settings) {
  return { type: types.SET_SETTINGS, payload };
}

export function setPage(payload: Page) {
  return { type: types.SET_PAGE, payload };
}
