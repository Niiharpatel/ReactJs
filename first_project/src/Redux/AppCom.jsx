import React from 'react';
import { Provider } from 'react-redux';
import { store } from './ReduxStore';
import AmountCom from './amountCom';
import CountCom from './countCom';
import GetDataCom from './UI/GetDataCom';
import UserCom from './UI/UserCom';

export default function AppCom() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
                <Provider store={store}>
                    {/* <AmountCom /> */}

                    {/* <CountCom /> */}

                     <GetDataCom />

                    <UserCom /> 
                </Provider>
            </div>
        </>
    );
}
