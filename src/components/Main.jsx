import React from "react";
import HeaderImage from "../assets/images/header image.png";
import arrowImage from "../assets/images/arrow.png";
import crossImage from "../assets/images/cross.png";
import slice from "../assets/images/slice.png";

function Main() {
  return (
    // <div>
    //   <div>
    //     <img src={HeaderImage} alt="headerImage" />
    //     <div>
    //       <div className="container mx-auto">
    //         <div className="w-1/2 mt-20">
    //           <h1 className="pb-8 text-6xl font-bold">
    //             Find The Right <br></br> Course For Your <br></br> Future
    //           </h1>
    //           <p className="pb-4 text-xl font-bold">
    //             We Provide A Cost Effective Virtual Learning <br></br>
    //             Service to Bridge The Gap Of Professional<br></br>Transition
    //             into IT
    //           </p>
    //           <button className="bg-red-400 hover:bg-red-600 text-white  py-4 px-8 rounded-lg w-60">
    //             Get started
    //           </button>
    //         </div>

    //         <div className="flex mt-12">
    //           <div className="w-64 bg-blue-200 p-8 flex justify-center items-center rounded-3xl">
    //             <p className="text-center">Tableau</p>
    //           </div>

    //           <div className="w-64 bg-green-200 p-4 flex justify-center items-center rounded-3xl">
    //             Microsoft SQL Server
    //           </div>

    //           <div className="w-64 bg-red-200 p-4 flex justify-center items-center rounded-3xl">
    //             Google Cloud
    //           </div>

    //           <div className="w-64 bg-yellow-200 p-4 flex justify-center items-center rounded-3xl">
    //             Python
    //           </div>

    //           <div className="w-64 bg-purple-200 p-4 flex justify-center items-center rounded-3xl">
    //             PowerBi
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container mx-auto">
    //     <div className="w-1/2 mt-20">
    //       <h1 className="pb-8 text-6xl font-bold">
    //         Find The Right <br></br> Course For Your <br></br> Future
    //       </h1>
    //       <p className="pb-4 text-xl font-bold">
    //         We Provide A Cost Effective Virtual Learning <br></br>
    //         Service to Bridge The Gap Of Professional<br></br>Transition into IT
    //       </p>
    //       <button className="bg-red-400 hover:bg-red-600 text-white  py-4 px-8 rounded-lg w-60">
    //         Get started
    //       </button>
    //     </div>

    //     <div className="flex mt-12">
    //       <div className="w-64 bg-blue-200 p-8 flex justify-center items-center rounded-3xl">
    //         <p className="text-center">Tableau</p>
    //       </div>

    //       <div className="w-64 bg-green-200 p-4 flex justify-center items-center rounded-3xl">
    //         Microsoft SQL Server
    //       </div>

    //       <div className="w-64 bg-red-200 p-4 flex justify-center items-center rounded-3xl">
    //         Google Cloud
    //       </div>

    //       <div className="w-64 bg-yellow-200 p-4 flex justify-center items-center rounded-3xl">
    //         Python
    //       </div>

    //       <div className="w-64 bg-purple-200 p-4 flex justify-center items-center rounded-3xl">
    //         PowerBi
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto flex">
      <div className="w-1/2 relative">
        <div className="mt-20">
          <h1 className="pb-8 text-6xl font-bold">
            Find The Right <br /> Course For Your <br /> Future
          </h1>
          <p className="pb-4 text-xl ">
            We Provide A Cost Effective Virtual Learning <br />
            Service to Bridge The Gap Of Professional
            <br />
            Transition into IT
          </p>
          <button className="bg-[#e46601] hover:bg-[#e46601] text-white py-4 px-8 rounded-lg w-60">
            Get started
          </button>
        </div>

        <div className="absolute bottom-8 left-0 flex">
          <div className="w-64 bg-blue-200 p-8 flex justify-center items-center rounded-3xl">
            <p className="text-center">Tableau</p>
          </div>

          <div className="w-64 bg-green-200 p-4 flex justify-center items-center rounded-3xl">
            Microsoft SQL Server
          </div>

          <div className="w-64 bg-red-200 p-4 flex justify-center items-center rounded-3xl">
            Google Cloud
          </div>

          <div className="w-64 bg-yellow-200 p-4 flex justify-center items-center rounded-3xl">
            Python
          </div>

          <div className="w-64 bg-purple-200 p-4 flex justify-center items-center rounded-3xl">
            PowerBi
          </div>
        </div>
      </div>

      <div className="w-1/2 ">
        <img
          src={HeaderImage}
          alt="headerImage"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Main;
