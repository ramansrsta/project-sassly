import React from "react";
import Button from "../Button/Button";

export type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex-1 flex flex-row items-start justify-center py-[1.312rem] px-[1.25rem] box-border gap-[8.687rem] max-w-full z-[1] text-center text-[1rem] text-[#fff] font-['DM_Sans'] mq450:gap-[1.063rem] mq750:gap-[2.188rem] mq1225:gap-[4.313rem] ${className}`}
    >
      <div className="w-[11rem] flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pl-[0rem] pr-[1.25rem] box-border text-left text-[2rem]">
        <h1 className="m-[0px] relative text-inherit tracking-[-0.03em] leading-[2.125rem] font-bold font-[inherit] inline-block min-w-[6rem] whitespace-nowrap">
          Saasly
        </h1>
      </div>
      <div className="w-[30.125rem] flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border max-w-full mq1050:w-[0rem]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq1050:hidden">
          <b className="relative leading-[140%] inline-block min-w-[2.875rem]">
            Home
          </b>
          <div className="relative leading-[140%] inline-block min-w-[2.875rem]">
            About
          </div>
          <div className="relative leading-[140%] inline-block min-w-[3.188rem]">
            Pricing
          </div>
          <div className="relative leading-[140%] inline-block min-w-[2rem]">
            Blog
          </div>
          <div className="relative leading-[140%] inline-block min-w-[2.25rem]">
            Jobs
          </div>
        </div>
      </div>
      <div className="self-stretch w-[10.25rem] flex flex-row items-start justify-start gap-[1rem]">
        <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[140%] inline-block min-w-[3.063rem] whitespace-nowrap">
            Sign in
          </div>
        </div>
        <Button
          height="unset"
          alignSelf="stretch"
          width="unset"
          flex="1"
          minWidth="unset"
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
