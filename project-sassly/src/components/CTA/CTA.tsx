import { FC } from "react";
import Button from "../Button/Button";

export type CTAType = {
  className?: string;
};

const CTA: FC<CTAType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#ebf7ff] flex flex-col items-center justify-start pt-[5rem] pb-[11.937rem] pl-[1.312rem] pr-[1.25rem] box-border relative gap-[3rem] max-w-full z-[8] text-center text-[3rem] text-[#14358a] font-['DM_Sans'] mq750:gap-[1.5rem] mq750:pt-[3.25rem] mq750:pb-[7.75rem] mq750:box-border ${className}`}
    >
      <img
        className="w-[100.5rem] h-[32.25rem] absolute !m-[0] bottom-[-1.312rem] left-[-10.5rem]"
        alt=""
        src="/backgroundcta.svg"
      />
      <div className="w-[44.563rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
        <h1 className="mb-[2rem] h-[3.125rem] relative text-inherit tracking-[-0.03em] leading-[105%] font-bold font-[inherit] inline-block z-[1] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq750:text-[2.375rem] mq750:leading-[2.5rem]">
          Let's start growing your business
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.375rem] text-[1.125rem] text-[#68718b]">
          <div className="h-[3rem] relative leading-[135%] inline-block z-[1]">
            <p className="m-[0px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="m-[0px]">Diam ut id nisl tellus rhoncus, imperdiet</p>
          </div>
        </div>
      </div>
      <div className="w-[44.563rem] flex flex-row items-start justify-center max-w-full">
        <div className="w-[21.25rem] flex flex-row items-start justify-start flex-wrap content-start gap-[1.5rem] max-w-full">
          <Button
            height="3.375rem"
            alignSelf="unset"
            width="unset"
            flex="1"
            minWidth="6.688rem"
          >
            Register Now
          </Button>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
