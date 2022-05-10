import React,
{
  useContext
} from 'react';

import { NumberContext, NumberProvider } from './contexts/NumberContext';

import './App.css'

const App = ({ children }) => {
  return (
    <NumberProvider>
        <h1>Hello World!</h1>
    </NumberProvider>
  );
};

export default App;