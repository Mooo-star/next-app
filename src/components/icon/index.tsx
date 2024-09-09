import React, { FC } from "react";
import Sun from "./sun";
import Moon from "./moon";
import Github from "./github";

const ICON_MAP = {
  sun: <Sun />,
  moon: <Moon />,
  github: <Github />,
};

interface IProps {
  name: keyof typeof ICON_MAP;
}

const Icon: FC<IProps> = ({ name }) => {
  return ICON_MAP[name];
};

export default Icon;
