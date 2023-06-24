import Image from "next/image";
import React from "react";

interface UtprimersProps {
  visible: boolean;
}

export const Utprimers = ({ visible }: UtprimersProps) => {
  return (
    <div
      className="w-[60rem] desktop:w-[80rem] mr-[-30rem]  mt-[-15rem]  text-white flex items-start flex-col gap-[4]"
      style={!visible ? { display: "none" } : {}}
    >
      <Image
        className="absolute w-[50rem] mr-[10rem] desktop:w-[60rem] desktop:right-4 right-[-4rem] top-[0rem] desktop:mr-[12.5rem]"
        src="/utprimers.svg"
        width="2920"
        height="2080"
        alt=""
      />

      <Image
        className="absolute w-[23.2rem] desktop:w-[30rem] desktop:h-[18rem] h-[15.7rem] desktop:bottom-[5rem] bottom-[5rem] desktop:right-[10rem] right-[6.2rem]"
        src="/foto1.png"
        width="1920"
        height="1080"
        alt=""
      />

      <Image
        className="absolute w-[23.5rem] desktop:w-[30.2rem] desktop:h-[18rem] bottom-[5rem] desktop:bottom-[5rem]  desktop:right-[43rem] right-[30rem] h-[15.7rem] "
        src="/foto2.png"
        width="1920"
        height="1080"
        alt=""
      />
    </div>
  );
};
