"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Intro } from "@/components/Intro";
import Roleta from "@/components/Roleta";
import { RoletaContext } from "@/context/RoletaContext";
import { OQEBiologiaSintetica } from "@/components/OQEBiologiaSintetica";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Aplicacao } from "@/components/Aplicacao";
import { Utprimers } from "@/components/Utprimers";
import { Projetos } from "@/components/Projetos";
import { Igem } from "./Igem";

export function App() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const { selected } = useContext(RoletaContext);

  if (domLoaded)
    return (
      <div className="overflow-hidden w-screen h-screen grid grid-cols-2 gap-0 ">
        <div className="flex w-[37rem] justify-center items-center relative">
          <Roleta />
          <Image
            src="/utprime_logo_hd.png"
            className="w-[38.2rem] h-[38.2rem] ml-[-22rem] absolute z-10"
            width={1920}
            height={1080}
            style={{ pointerEvents: "none" }}
            draggable="false"
            aria-readonly="true"
            alt=""
          />
        </div>

        <main className=" flex justify-center items-center ml-[-23rem] ">
          <Intro visible={selected === 0 ? true : false} />
          <OQEBiologiaSintetica visible={selected === 1 ? true : false} />
          <ComoFunciona visible={selected === 2 ? true : false} />
          <Aplicacao visible={selected === 3 ? true : false} />
          <Utprimers visible={selected === 4 ? true : false} />
          <Projetos visible={selected === 5 ? true : false} />
          <Igem visible={selected === 6 ? true : false} />
        </main>
      </div>
    );
}
