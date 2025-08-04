"use client";
import { BugAntIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
interface PullToLightProps {
  enabled: boolean;
  pull: number;
  dragging: boolean;
  handleMouseDown: () => void;
  handleMouseMove: (e: React.MouseEvent|React.TouchEvent) => void;
  handleMouseUp: () => void;
}
const PullToLight = ({
  enabled,
  dragging,
  pull,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
}: PullToLightProps) => {
  return (
    <div className="flex flex-row gap-0 items-flex-start height-150px">
      <Image
        className=" transition-all duration-500"
        src={enabled ? "/images/lightOn.png" : "/images/lightOff.png"} // Path to your image (local or remote)
        alt="Description of the image" // Required for accessibility
        width={150} // Original width of the image (or desired width for optimization)
        height={170} // Original height of the image (or desired height for optimization)
      />
      {/* Thread + Bulb */}
      <div className="relative flex flex-col items-center">
        <div
          className="w-0.5 bg-gray-400"
          style={{ height: `${100 + pull}px` }}
        ></div>
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          className={`bg-yellow-300 hover:bg-yellow-400 p-1 rounded-full shadow-md transition-transform ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ transform: `translateY(${pull}px)` }}
        >
          <BugAntIcon
            className={`h-3 w-3 ${
              enabled ? "text-yellow-600 drop-shadow-xl" : "text-gray-500"
            } transition-colors duration-500`}
          />
        </div>
      </div>
    </div>
  );
};

export default PullToLight;
