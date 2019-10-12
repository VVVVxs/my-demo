import React, { Context } from 'react';
const Context: Context<any> = React.createContext({});
const { useReducer, useContext } = React;

export const Provider: React.FC<{ reducer: React.Reducer<any, any>, initValue: any, children: any }>
    = ({ reducer, initValue, children }) => {
        return (
            <Context.Provider value={useReducer(reducer, initValue)}>
                {children}
            </Context.Provider>
        )
    }

export const useAppState = () => useContext(Context);