import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";

function App() {
  return (
    <AnimatePresence>
      <main className="w-screen h-auto flex flex-col">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
    </AnimatePresence>
  );
}

export default App;
