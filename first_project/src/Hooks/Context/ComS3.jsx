// import React, { useContext } from 'react';
// import { NameContext } from './ContextCom';

// export default function ComS3() {

//     const data = useContext(NameContext);
//     return (
//         <>
//             {/* <h1>Com son-3</h1>

//             <h2>Son3 Value -----</h2> */}

//             <h1>Name---- {data}</h1>

//             <input type="text" />

//         </>
//     );
// }




import React, { useContext } from 'react';
import { NameContext } from './ContextCom';



export default function ComS3() {

    const stateUSer = useContext(NameContext);

    return (
        <>
            <h1>Son-3</h1>


            <input type="text" onChange={(e) => stateUSer.set(e.target.value)} />

            <h1>{stateUSer.user}</h1>

        </>
    );
}

