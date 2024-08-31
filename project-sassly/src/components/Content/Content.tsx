import { FC } from "react";
import Navbar from "../NavBar/NavBar";

export type ContentProps = {
  className?: string;
};

const Content: FC<ContentProps> = ({ className = "" }) => {
  return (
    <section
      className={`flex h-[10.375rem] w-full flex-row items-start justify-start pt-0 px-0 pb-[5rem] box-border ${className}`}
    >
      <Navbar />
    </section>
  );
};

export default Content;
