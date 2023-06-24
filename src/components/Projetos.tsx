import Image from "next/image";
import React from "react";

interface ProjetosProps {
  visible: boolean;
}

export const Projetos = ({ visible }: ProjetosProps) => {
  return (
    <div
      className="w-[60rem] desktop:w-[110rem] relative text-white flex items-start flex-col gap-[4]"
      style={!visible ? { display: "none" } : {}}
    >
      <Image
        className="w-[110rem] ml-[5rem]"
        src="/projetos.svg"
        width="2920"
        height="2080"
        alt=""
      />
    </div>
  );
};
