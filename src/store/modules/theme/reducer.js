import produce from "immer";

const INITIAL_STATE = {
  mode: "dark",
};

export default function theme(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@theme/SWITCH_TO_DARK": {
        draft.mode = "dark";
        break;
      }
      case "@theme/SWITCH_TO_LIGHT": {
        draft.mode = "light";
        break;
      }
      default:
    }
  });
}
