import React from "react";

export default function ConditionalRendor(props) {
  // return props.isMale ? (<h1>Yes, He is a boy.</h1>) : (<h1>Yes, She is a girl.</h1>);

  // ====================================== OR ==================================================

  if (props.isMale) {
    return (
      <>
        <h1>Yes, He is a boy.</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Yes, She is a Girl.</h1>
      </>
    );
  }

  // ====================================== OR ==================================================

  // return (
  //     <>{
  //         props.isYoung ? <h2>Yes he is Young</h2> : <h2> No he is not Young</h2>
  //     }
  //     </>
  // )
}
