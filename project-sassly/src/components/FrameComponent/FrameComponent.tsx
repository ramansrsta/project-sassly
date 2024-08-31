import { FC } from "react";
import Brand from "../Brand/Brand";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FC<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[10rem] box-border max-w-full ${className}`}
    >
      <Brand />
    </section>
  );
};

export default FrameComponent;
