import { ADD_CARD, MOVE_CARD } from "./actionTypes";

let nextCardId = 0;

export const addCard = (title: string, desc: string) => ({
  type: ADD_CARD,
  payload: {
    id: ++nextCardId,
    title,
    desc
  }
})

export const moveCard = (id: number, status: string) => ({
  type: MOVE_CARD,
  payload: {
    id,
    status
  }
})
