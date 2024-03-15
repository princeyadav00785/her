import { cn } from "../../utils/cn";
import React from "react";
import { motion } from "framer-motion";
import { CardStack } from "./card-stack";


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
  

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      {/* <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      /> */}
     <CardStack items={cards}/>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
