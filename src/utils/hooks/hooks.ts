//dependencies
import { useDispatch, useSelector } from "react-redux";

//interfaces
import { AppDispatch, RootState } from "../../interfaces";

//store hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
