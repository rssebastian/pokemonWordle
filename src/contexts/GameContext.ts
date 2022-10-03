import { createContext } from 'react';
import { AppContextInterface } from '../interfaces';

export const GameContext = createContext<AppContextInterface | null>(null);
