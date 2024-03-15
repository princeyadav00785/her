"use client";
import { cn } from "../../utils/cn";
import { CardStack } from "./card-stack";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);
const cards: Card[] = [
    {
      id: 1,
      name: "",
      designation: "",
      content: "Her kindness and compassion know no bounds, touching the lives of everyone she meets. She goes out of her way to make others feel valued and appreciated, leaving a lasting impression of warmth and sincerity.",
    },
    {
      id: 2,
      name: "",
      designation: "",
      content: "She has a heart of gold, always ready to lend a helping hand and spread positivity. Her genuine care for others shines through in every interaction, making her a pillar of support and encouragement.",
    },
    {
      id: 3,
      name: "",
      designation: "",
      content: "Her inner beauty radiates outward, making her presence a source of joy and inspiration. She exudes grace and elegance, captivating everyone with her charm and humility.",
    },
    {
      id: 4,
      name: "",
      designation: "",
      content: "She carries herself with poise and confidence, embodying grace in every step. Her strength and resilience are evident in the way she faces challenges with determination and grace.",
    },
    {
      id: 5,
      name: "",
      designation: "",
      content: "Her smile lights up the darkest of days, bringing warmth and comfort to those around her. Her infectious laughter fills the room with happiness, lifting spirits and brightening moods.",
    },
    {
      id: 6,
      name: "",
      designation: "",
      content: "She is a beacon of positivity, spreading laughter and happiness wherever she goes. Her optimism is contagious, inspiring others to embrace life with enthusiasm and joy.",
    },
    {
      id: 7,
      name: "",
      designation: "",
      content: "Her beauty is not just skin deep; it emanates from the depths of her soul. Her inner radiance shines through, illuminating the world with her grace, kindness, and compassion.",
    },
    {
      id: 8,
      name: "",
      designation: "",
      content: "She is a true gem, cherished by all who have the privilege of knowing her. Her presence brings comfort and joy to those around her, enriching their lives with her kindness and love.",
    },
  ];
  
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
       <div className="w-[250px] m-auto mt-24 ">
       <div className="text-3xl underline shadow-lg ">
          More About her!!
        </div>
       </div>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
       
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <CardStack items={cards}/> {/* Render the CardStack component */}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
