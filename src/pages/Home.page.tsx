import React, { useState } from "react";
import { showError as error } from "../utils/errorType";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const Home = () => {
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
  };

  return (
    <div>
      <div>
        <button onClick={obtainLocation}>Click-me 4</button>
      </div>
    </div>
  );
};

export default Home;
