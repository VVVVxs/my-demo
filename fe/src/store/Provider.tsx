import * as React from 'react';
import reducer from './reducer';
const Context = React.createContext({});

const Provider: React.FC = (props) => {
    return (
        <Context.Provider value={reducer}>
        </Context.Provider>
    )
}