import React from "react";

const Header = () => {
  return (
    <header className="h-16 sticky top-0 z-40 w-full backdrop-blur flex justify-center items-center transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/90 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="h-fit w-[70rem] flex justify-between p-2 text-sm ">
        <div className="left">Next App</div>
        <div className="left">其他导航，暂未开发</div>
      </div>
    </header>
  );
};

export default Header;
