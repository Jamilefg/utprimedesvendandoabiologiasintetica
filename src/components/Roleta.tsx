"use client";
import { RoletaContext } from "@/context/RoletaContext";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useContext,
  useEffect,
} from "react";

const Roleta: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [startAngle, setStartAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const { selected, setSelected, setHasChanged, hasChanged } =
    useContext(RoletaContext);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    findNearestElement();

    if (rotation !== 0) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }

    console.log(rotation, hasChanged);
  }, [rotation]);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const wheel = wheelRef.current;
      if (wheel && isDragging) {
        const rect = wheel.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const currentAngle =
          Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
        const angleDiff = currentAngle - startAngle;
        const newRotation = rotation + angleDiff;
        setRotation(newRotation);

        setStartAngle(currentAngle);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, rotation, startAngle]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const wheel = wheelRef.current;
    if (wheel) {
      const rect = wheel.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const startAngle =
        Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
      setStartAngle(startAngle);
      setIsDragging(true);
    }
  };

  function findNearestElement() {
    const selectorElement: HTMLDivElement = document.getElementById(
      "selector"
    ) as HTMLDivElement;
    const targetElements = document.querySelectorAll("#roleta > div");

    if (selectorElement && targetElements.length > 0) {
      let nearestElement: HTMLDivElement = targetElements[0] as HTMLDivElement;
      let shortestDistance = getDistance(selectorElement, nearestElement);

      targetElements.forEach((element) => {
        const distance = getDistance(
          selectorElement,
          element as HTMLDivElement
        );
        if (distance < shortestDistance) {
          shortestDistance = distance;
          nearestElement = element as HTMLDivElement;
        }
      });

      if (hasChanged && nearestElement.tabIndex) {
        setSelected(nearestElement.tabIndex);
      } else {
        setSelected(0);
      }
    }
  }

  function getDistance(element1: HTMLDivElement, element2: HTMLDivElement) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    const centerX1 = rect1.left + rect1.width / 2;
    const centerY1 = rect1.top + rect1.height / 2;
    const centerX2 = rect2.left + rect2.width / 2;
    const centerY2 = rect2.top + rect2.height / 2;

    return Math.sqrt(
      Math.pow(centerX2 - centerX1, 2) + Math.pow(centerY2 - centerY1, 2)
    );
  }

  return (
    <>
      <div
        className={`roleta ${
          isDragging ? "dragging" : ""
        } bg-roleta z-10 rounded-full flex-shrink-0 ml-[-23rem] w-[50rem] h-[50rem] flex items-center justify-center`}
        ref={wheelRef}
        id="roleta"
        style={{ transform: `rotate(${rotation}deg)` }}
        onMouseDown={handleMouseDown}
      >
        <div
          aria-readonly="true"
          style={{ pointerEvents: "none" }}
          draggable="false"
          tabIndex={6}
          className="w-[8rem] bg-blue-500 opacity-0 absolute top-[3.5rem] right-[9.5rem] rotate-[30deg]"
        >
          option 6
        </div>
        <div
          aria-readonly="true"
          style={{ pointerEvents: "none" }}
          draggable="false"
          tabIndex={1}
          className="w-[8rem] bg-blue-500 opacity-0 absolute top-[24rem] right-[-3rem] rotate-[90deg]"
        >
          option 1
        </div>
        <div
          aria-readonly="true"
          style={{ pointerEvents: "none" }}
          draggable="false"
          tabIndex={2}
          className="w-[8rem] bg-blue-500 opacity-0 absolute bottom-[4.5rem] right-[8rem] rotate-[-35deg]"
        >
          option 2
        </div>

        <div
          aria-readonly="true"
          style={{ pointerEvents: "none" }}
          draggable="false"
          tabIndex={3}
          className="w-[8rem] bg-blue-500 opacity-0 absolute bottom-[3rem] left-[10rem] rotate-[30deg]"
        >
          option 3
        </div>
        <div
          aria-readonly="true"
          style={{ pointerEvents: "none" }}
          draggable="false"
          tabIndex={4}
          className="w-[8rem] bg-blue-500 opacity-0 absolute bottom-[23rem] left-[-3rem] rotate-[-90deg]"
        >
          option 4
        </div>
        <div
          aria-readonly="true"
          style={{ pointerEvents: "none" }}
          draggable="false"
          tabIndex={5}
          className="w-[8rem] bg-blue-500 opacity-0 absolute top-[5rem] left-[7.5rem] rotate-[-35deg]"
        >
          option 5
        </div>
      </div>

      <div
        aria-readonly="true"
        style={{ pointerEvents: "none" }}
        draggable="false"
        id="selector"
        className="w-[8rem] h-[2rem] absolute top-half left-[32rem] opacity-1"
      >
        {selected > 0 && (
          <Image
            aria-readonly="true"
            style={{ pointerEvents: "none" }}
            draggable="false"
            className="absolute z-15 w-[3rem] right-[4rem] bottom-[-1rem]"
            src="/seta.svg"
            width="600"
            height="600"
            alt=""
          />
        )}
         {selected === 0 && (
          <Image
            aria-readonly="true"
            style={{ pointerEvents: "none" }}
            draggable="false"
            className="absolute z-15 w-[8rem] right-[4rem] top-[-20rem]"
            src="/girearoletaofc.gif"
            width="600"
            height="600"
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Roleta), { ssr: false });
