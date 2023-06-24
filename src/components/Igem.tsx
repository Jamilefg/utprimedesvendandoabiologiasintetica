import Image from "next/image";
import React from "react";

interface IgemProps {
  visible: boolean;
}

export const Igem = ({ visible }: IgemProps) => {
  return (
    <div
      className="w-[60rem] desktop:w-[110rem] relative text-white flex items-start flex-col gap-[4]"
      style={!visible ? { display: "none" } : {}}
    >
      <Image
        className="w-[110rem] ml-[5rem]"
        src="/IGEM.svg"
        width="2920"
        height="2080"
        alt=""
      />
    </div>
  );
};
