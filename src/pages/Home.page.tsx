import React, { useState } from "react";
import { motion } from "framer-motion";
// import { showError as error } from "../utils/errorType";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import SpinnerLoading from "../components/SpinnerLoading";
import TutorialAllowLocation from "../components/TutorialAllowLocation";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allowLocation, setAllowLocation] = useState(false);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function showError(error: any) {
    let err_text;

    switch (error.code) {
      case error.PERMISSION_DENIED:
        err_text = "User denied the request for Geolocation";
        alert(
          "Por favor recarregue a página e permita o acesso a localização..."
        );
        setAllowLocation(true);
        break;
      case error.POSITION_UNAVAILABLE:
        err_text = "Location information is unavailable";
        break;
      case error.TIMEOUT:
        err_text = "The request to get user location timed out";
        alert("Please Set Your Location Mode on High Accuracy...");
        break;
      case error.UNKNOWN_ERROR:
        err_text = "An unknown error occurred";
        break;
      default:
        console.log("default");
        break;
    }
  }

  const getLocation = async (position: any) => {
    const now = new Date();
    const coords = position.coords;
    const mapsLink = `https://www.google.com/maps/place/${coords.latitude}+${coords.longitude}`;

    try {
      // const docRef = await addDoc(collection(firestore, "locations"), {
      //   maps: mapsLink,
      //   timestamp: now,
      // });
    } catch (error: any) {
      console.log(error.tostring());
    }
  };

  const obtainLocation = () => {
    navigator.geolocation.getCurrentPosition(getLocation, showError, options);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const disableLoading = () => {
    setLoading(false);
    return true;
  };

  return (
    <div className="h-full min-h-screen w-screen pb-3 flex flex-col bg-gradient-to-br from-[#2B31A5] to-[#6265EB] gap-3">
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
            height="300px"
            title="maps"
            src="https://maps.google.com/maps?q=cascavel&t=&z=12&ie=UTF8&iwloc=&output=embed"
          />
        </motion.div>
        <div className="m-4">
          <p className="text-white font-semibold pb-4 before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-16  before:bg-gradient-to-r from-[#6CAAF9] to-white">
            Como Funciona?
          </p>
          <p className="text-sm text-white">
            Nossos serviços utilizam dados fornecidos por mapas publicos onde
            usuários como você relatam blitz e paradas da 🚔. Compilando todos
            os resultados no mapa acima de acordo com sua localização em
            qualquer lugar do Brasil!
          </p>
        </div>
      </div>
      {/* loading */}
      {loading && (
        <div className="absolute w-screen h-screen flex items-center justify-center backdrop-blur-sm bg-white/30">
          <SpinnerLoading />
        </div>
      )}
      {/* allow location */}
      {allowLocation && (
        <div className="absolute z-50 w-screen h-full flex items-center justify-center backdrop-blur-sm bg-white/90">
          <TutorialAllowLocation />
        </div>
      )}
    </div>
  );
};

export default Home;
