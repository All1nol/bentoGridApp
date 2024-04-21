import  { createContext, useContext } from 'react';
 export const BoxesContext = createContext();

export const useBoxes = () => useContext(BoxesContext);

const useBoxState = () => useBoxes();

export default useBoxState;
