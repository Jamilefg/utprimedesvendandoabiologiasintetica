import Image from "next/image";
import React from "react";

interface AplicacaoProps {
  visible: boolean;
}

export const Aplicacao = ({ visible }: AplicacaoProps) => {
  return (
    <div
      className="w-[55rem] desktop:w-[75rem] text-white flex items-start justify-center flex-col ml-32 desktop:ml-[-4rem] "
      style={!visible ? { display: "none" } : {}}
    >
      <Image
        className="w-[75rem]"
        src="/aplicacoes.svg"
        width="2920"
        height="2080"
        alt=""
      />

      <Image
        className="absolute w-[20rem] top-[-5rem] right-[-5.9rem] rotate-[-68deg]"
        src="/icon.svg"
        width={800}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        height={800}
        alt=""
      />
    </div>
  );
};
