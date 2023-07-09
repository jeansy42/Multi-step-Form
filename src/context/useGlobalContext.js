import {useContext} from 'react'
import {Context} from './GlobalContext'
export const useGlobalContext = () => {
  const context = useContext(Context);
  return context;
};
