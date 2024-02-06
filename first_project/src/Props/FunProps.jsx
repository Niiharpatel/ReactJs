// import React, { useState } from "react";

// export default function FunProps(props) {      // Change props value using useState...

//     let [changeName, setChangeName] = useState(props.name);

//     function changeNameFun() {
//         let upperCaseName = changeName?.toUpperCase();
//         setChangeName(upperCaseName);
//     }
//     return (
//         <div>
//             {/* <h1>{props.name}</h1> */}

//             {/* <h1>{props?.obj?.name}</h1> */}

//             <h1>{changeName}</h1>

//             <button onClick={() => changeNameFun()}>Click Here</button>
//         </div>
//     )
// }
//

import React, { useState } from "react";

export default function FunProps(props) {
  let [changeName, setChangeName] = useState(props.name);

  function changeNameFun() {
    let upperCaseName = changeName?.toUpperCase();
    setChangeName(upperCaseName);
  }

  return (
    <>
      <div>
        <h1>{changeName}</h1>
        <button onClick={() => changeNameFun()}>Click Here</button>
      </div>
    </>
  );
}
