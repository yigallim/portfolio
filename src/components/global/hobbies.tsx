import React from "react";
import { cn } from "@/lib/utils";
import { Piano, Gamepad, Eclipse } from "lucide-react";
import { GiShuttlecock } from "react-icons/gi";

type HobbyProps = {
  color: string;
  name: string;
  level: number;
  lineGradient: string;
  Icon: React.ElementType;
};

const Hobby = ({ color, name, level, lineGradient, Icon }: HobbyProps) => {
  if (level > 100) throw "Invalid level values.";
  return (
    <div className="flex items-center flex-1 space-x-2xs w-full">
      <div
        className={cn(
          "rounded-[25%] h-full max-md:min-h-[3rem] min-h-[2.75rem] aspect-square relative shadow-[0_0_8px_1px_rgba(0,0,0,.16)]",
          color
        )}
      >
        <Icon className="size-[50%] absolute-center text-white" />
      </div>
      <div className="font-medium flex-1">
        <p className="leading-none">{name}</p>
        <div
          className={cn("h-[0.4rem] lg:h-[0.45rem] bg-black rounded-full mt-3xs")}
          style={{ width: `${level}%`, background: lineGradient }}
        />
      </div>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className="px-md flex flex-col h-full space-y-2xs w-full mr-md">
      <Hobby
        color="bg-red-600"
        name="Snooker"
        level={100}
        lineGradient="linear-gradient(to right, #FFC1C1 5%, #FF0000)"
        Icon={Eclipse}
      />
      <Hobby
        color="bg-orange-600"
        name="Badminton"
        level={75}
        lineGradient="linear-gradient(to right, #FFE4B2 5%, #FF8C00)"
        Icon={GiShuttlecock}
      />
      <Hobby
        color="bg-zinc-600"
        name="Piano"
        level={40}
        lineGradient="linear-gradient(to right, #E0E0E0 5%, #808080)"
        Icon={Piano}
      />
      <Hobby
        color="bg-blue-600"
        name="Gaming"
        level={30}
        lineGradient="linear-gradient(to right, #B0DFFF 5%, #0000FF)"
        Icon={Gamepad}
      />
    </div>
  );
};

export default Hobbies;
