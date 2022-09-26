import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import companysSlice from "../slice/companysSlice";

const rootReducer = combineReducers({
  companys: companysSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
