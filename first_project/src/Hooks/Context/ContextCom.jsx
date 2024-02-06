import React, { createContext, useState } from 'react';
import ComF from './ComF';
import ComU from './ComU';

export const NameContext = createContext();

export default function ContextCom() {

    const [user, setUser] = useState("Niihar");

    return (
        <>

            <NameContext.Provider value={{ set: setUser, user: user }}>
                <ComF />

                <ComU />
            </NameContext.Provider>
        </>
    );
}
