import {
  useSelector as originalUseSelector,
  useDispatch as originalUseDispatch,
} from "react-redux";

export const useDispatch = () => originalUseDispatch();
export const useSelector = (state) => originalUseSelector(state);
