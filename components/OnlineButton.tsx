import React from "react";

export const OnlineButton = () => {
  return (
    <button className="relative block mx-auto group  cursor-pointer w-fit">
      <span
        className={`relative inline-block px-3 py-1.5 text-lg font-bold tracking-widest text-white border border-current group-active:text-opacity-75 rounded-md bg-secondary hover:bg-ternary transition-colors duration-200`}
      >
        Order Now
      </span>
    </button>
  );
};

export const OnlineButton2 = () => {
  return (
    <button className="relative block mx-auto group  cursor-pointer w-fit">
      <span
        className={`relative inline-block px-3 py-1.5 text-lg font-bold tracking-widest text-white border border-current group-active:text-opacity-75 rounded-md bg-green hover:bg-ternary transition-colors duration-200`}
      >
        Order Now
      </span>
    </button>
  );
};
