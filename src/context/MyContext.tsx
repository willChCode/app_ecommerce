import { createContext } from 'react';

interface MyContextType {
  userLog: string;
}

export const MyContext = createContext<MyContextType>({ userLog: '' });
