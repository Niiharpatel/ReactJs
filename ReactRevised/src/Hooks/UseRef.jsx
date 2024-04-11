// import React, { useEffect, useRef, useState } from 'react';

// export default function UseRef() {
//   const [count, setcount] = useState(0);

//   const a = useRef(0);

//   useEffect(() => {
//     a.current = a.current + 1;
//     console.log(`rerendering and value of a is ${a.current}`);
//   });

//   return (
//     <>
//       <div>
//         <h1>Count: {count}</h1> <br />
//         <br />
//         <button onClick={() => setcount(count + 1)}>Click</button>
//       </div>
//     </>
//   );
// }

// ================================== UseCase - 2 =============================================

// import React, { useEffect, useRef, useState } from "react";

// export default function UseRef() {
//   const [count, setcount] = useState(0);

//   const btnRef = useRef();

//   useEffect(() => {
//     console.log("First Rendering...");
//     btnRef.current.style.backgroundColor = "red";
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Count: {count}</h1> <br />
//         <br />
//         <button ref={btnRef} onClick={() => setcount(count + 1)}>
//           Click
//         </button>
//       </div>
//     </>
//   );
// }
