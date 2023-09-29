import React from "react";
import background from "../../assets/images/header.jpeg";
import HeaderImage from "../../assets/images/header image.png";
import { motion } from "framer-motion";

function Main() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const imgVariants = {
    initial: {
      opacity: 0,
      y: 100, // Move the image 100px down initially
    },
    animate: {
      opacity: 1,
      y: 0, // Move the image back to its original position
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  };
  const buttonVariants = {
    hover: {
      y: -5, // Move the button 5 pixels up on hover
    },
    tap: {
      scale: 0.95, // Scale the button down when clicked
    },
  };
  return (
    <div className="w-full relative" style={backgroundImageStyle}>
      <div className="max-w-6xl  mx-auto lg:flex  px-4">
        <div className="lg:w-1/2 w-full">
          <motion.div
            variants={imgVariants} // Apply animation variants
            initial="initial"
            animate="animate"
          >
            <div className="lg:mt-20 mt-8">
              <h1 className="pb-8 lg:text-6xl text-4xl font-bold md:flex  gradient-text-combined  ">
                Find The Right <br /> Course For Your <br /> Future
              </h1>

              <p className="pb-4 lg:text-xl text-md  ">
                We offer a diverse range of courses curated to shape your
                future. Whether you're looking to enhance your skills or explore
                <br></br>
                new horizons, our platform provides the perfect opportunity to
                find the right course tailored to your aspirations.
              </p>
              <motion.button
                className="bg-custom-button hover:bg-custom-button text-white py-4 px-8 rounded-lg lg:w-60 w-full "
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get started
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full">
          <img
            src={HeaderImage}
            alt="headerImage"
            className="h-full object-cover lg:mt-0 mt-3 lg:w-full w-2/3 mx-auto"
            loading="lazy" // Add this line for lazy loading
          />
        </div>
      </div>
      <div className="lg:absolute max-w-6xl mx-auto flex flex-wrap lg:bottom-12 left-0 right-0 space-y-2 lg:space-y-0 lg:mt-0 mt-3  px-4">
        <div className="lg:w-40 w-full bg-blue-200 p-4  flex justify-center items-center rounded-3xl">
          <p className="text-center">Tableau</p>
        </div>

        <div className="lg:w-64 w-full bg-green-200 p-4 flex justify-center items-center rounded-3xl">
          Microsoft SQL Server
        </div>

        <div className="lg:w-40 w-full bg-red-200 p-4 flex justify-center items-center rounded-3xl">
          Google Cloud
        </div>

        <div className="lg:w-40 w-full bg-yellow-200 p-4 flex justify-center items-center rounded-3xl">
          Python
        </div>

        <div className="lg:w-40 w-full bg-purple-200 p-4 flex justify-center items-center rounded-3xl">
          PowerBi
        </div>
      </div>
    </div>
  );
}

export default Main;
