import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState, RootDispatch } from '@/redux';

export const useRootDispatch: () => RootDispatch = useDispatch;
export const useRootState: TypedUseSelectorHook<RootState> = useSelector;
