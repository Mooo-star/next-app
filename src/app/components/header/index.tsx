import React from "react";
import Icon from "@/components/icon";

const Header = () => {
  /**
   * TODO
   * 如何判断当前是什么主题 light / dark 。
   * 如何跟随系统呢
   */

  return (
    <header className="h-16 sticky top-0 z-40 w-full backdrop-blur flex justify-center items-center transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/90 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="h-fit w-[70rem] flex justify-between items-center p-2 text-sm ">
        <a href="/" className="left cursor-pointer">
          Next App
        </a>
        <div className="left flex items-center jusitfy-center">
          <div className="icons ml-6 pl-6 border-l border-solid  border-slate-200 dark:border-slate-800">
            <a
              href="https://github.com/Mooo-star"
              className="srelative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity p-1"
            >
              <Icon key="github" name="github" />
            </a>
            <div className="ml-6 group relative max-w-fit inline-flex items-center justify-start touch-none tap-highlight-transparent p-1 w-8 h-8 transition-opacity hover:opacity-80 cursor-pointer">
              <Icon key="sun" name="sun" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
