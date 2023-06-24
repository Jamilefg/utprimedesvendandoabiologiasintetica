import Image from "next/image";
import React from "react";

interface ComoFuncionaProps {
  visible: boolean;
}

export const ComoFunciona = ({ visible }: ComoFuncionaProps) => {
  return (
    <div
      className="w-[75rem] relative text-white flex items-start justify-center flex-col"
      style={!visible ? { display: "none" } : {}}
    >
      <Image
        className="w-[55rem] desktop:w-[70rem] desktop:ml-[1rem] ml-48"
        src="/como_funciona.svg"
        width="1920"
        height="1080"
        alt=""
      />
      <Image
        className="absolute w-[10rem] top-[8rem] left-[15rem] desktop:top-[10rem] desktop:left-[7rem]"
        src="/dna_spinning.gif"
        width="800"
        height="800"
        alt=""
      />
      <Image
        className="absolute w-[10rem] right-[26rem] top-[9rem] desktop:top-[10rem] desktop:left-[31rem]"
        src="/lego.gif"
        width="800"
        height="800"
        alt=""
      />
      <Image
        className="absolute w-[10rem] right-[8rem] top-[9rem] desktop:top-[10rem] desktop:right-[11rem]"
        src="/lego.svg"
        width="800"
        height="800"
        alt=""
      />
    </div>
  );
};
