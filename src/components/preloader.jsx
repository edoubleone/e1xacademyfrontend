import React from "react";
import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

const Preloader = () => {

  return (
    <>
        <ReactLoading
          type={"bars"}
          color={"#03fc4e"}
          height={100}
          width={100}
        />
     
    </>
  );
}

export default Preloader;