import Image from "next/image";
import React from "react";

interface OQEBiologiaSinteticaProps {
  visible: boolean;
}

export const OQEBiologiaSintetica = ({
  visible,
}: OQEBiologiaSinteticaProps) => {
  return (
    <div
      className="w-[60rem] text-white flex items-start desktop:ml-[-15rem] desktop:mt-[15rem] justify-center flex-col gap-[4]"
      style={!visible ? { display: "none" } : {}}
    >
      <h2 className="font-droid text-[2rem] mt-[7rem] desktop:text-[3rem] text-center ml-48">
        O que é Biologia Sintética?
      </h2>

      <p className="font-droid text-[1.5rem] mb-[-5rem] desktop:text-[1.7rem] rounded-full text-justify ml-48 desktop:mb-[1rem]">
        A biologia sintética é uma área de estudo que mistura biologia,
        engenharia e computação para criar coisas novas com seres vivos, como
        bactérias ou plantas. É como se fossemos construtores de Lego, mas em
        vez de usar peças de plástico, usamos partes de DNA.
      </p>

      <div>
        <Image
          className="ml-48 desktop:ml-[13rem] mb-[-30rem] w-[50rem] desktop:w-[50rem] desktop:mb-[-25rem]"
          src="/bolinhas.svg"
          width="600"
          height="600"
          alt=""
        />

        <Image
          className="absolute w-[40rem] right-[-15rem] top-[-10rem]"
          src="/dna.svg"
          width="600"
          height="600"
          alt=""
        />
      </div>
    </div>
  );
};
