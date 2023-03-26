import React from "react";
import { T1, T2, T3 } from "../assets/img";

const TutorialAllowLocation = () => {
  return (
    <div className="w-full h-full flex flex-col items-start gap-3 m-4">
      <p className="text-lg">
        Nossos serviços utilizam sua localização para encontrar blitz relatadas
        em apps de mapas públicos. <br />
        <br /> Por favor habilite o acesso seguindo o tutorial abaixo:
      </p>
      <p>1º - Toque no cadeado localizado no canto superior esquerdo:</p>
      <div className="w-full h-auto flex items-center justify-center p-4 ">
        <img
          src={T1}
          className="max-h-[100px] bg-white rounded-2xl border-2 border-[#6caaf9] overflow-hidden"
          alt="tutorial-1"
        />
      </div>
      <p>
        2º - Toque no 2º item: <span className="font-bold">Permissões</span>{" "}
      </p>
      <div className="w-full h-auto flex items-center justify-center p-4 ">
        <img
          src={T2}
          className="max-h-[400px] bg-white rounded-2xl border-2 border-[#6caaf9] overflow-hidden"
          alt="tutorial-2"
        />
      </div>
      <p>3º - Habilite o checkbox e recarregue a página</p>
      <div className="w-full h-auto flex items-center justify-center p-4 ">
        <img
          src={T3}
          className="max-h-[400px] bg-white rounded-2xl border-2 border-[#6caaf9] overflow-hidden"
          alt="tutorial-3"
        />
      </div>
    </div>
  );
};

export default TutorialAllowLocation;
