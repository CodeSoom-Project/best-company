import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
