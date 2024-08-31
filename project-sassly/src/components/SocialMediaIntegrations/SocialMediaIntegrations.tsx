import { FC } from "react";
import CardIntegrations from "../CardIntegrations/CardIntegrations";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FC<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-[0rem] px-[16.875rem] pb-[1.312rem] box-border gap-[6.25rem] max-w-full text-center text-[3rem] text-[#fff] font-['DM_Sans'] mq450:gap-[1.563rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[3.125rem] mq750:pl-[8.438rem] mq750:pr-[8.438rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[0.812rem] max-w-full z-[7]">
        <h1 className="m-[0px] relative text-inherit tracking-[-0.03em] leading-[6.313rem] font-bold font-[inherit] inline-block max-w-full mq450:text-[1.813rem] mq450:leading-[1.875rem] mq750:text-[2.375rem] mq750:leading-[2.5rem]">
          Integrated with Social Media
        </h1>
        <div className="self-stretch grid flex-row items-start justify-end gap-[1.5rem] grid-cols-[repeat(3,_minmax(213px,_1fr))] text-[1.5rem] text-[#006fba] mq750:grid-cols-[minmax(213px,_1fr)] mq1225:justify-center mq1225:grid-cols-[repeat(2,_minmax(213px,_369px))]">
          <CardIntegrations
            patern="/patern-1@2x.png"
            propBackgroundColor="#006eea"
            iconFillgoogle="/iconfillfacebook.svg"
            propOverflow="hidden"
            google="Facebook"
            propMinWidth="6.813rem"
            button="Learn More"
            propHeight="3.375rem"
            propAlignSelf="unset"
            propWidth="9.438rem"
            propFlex="unset"
            propMinWidth1="unset"
          />
          <CardIntegrations
            patern="/patern-1@2x.png"
            propBackgroundColor="#0298eb"
            iconFillgoogle="/iconfilltwitter.svg"
            propOverflow="unset"
            google="Twitter"
            propMinWidth="4.938rem"
            button="Learn More"
            propHeight="3.375rem"
            propAlignSelf="unset"
            propWidth="9.438rem"
            propFlex="unset"
            propMinWidth1="unset"
          />
          <CardIntegrations
            patern="/patern-1@2x.png"
            iconFillgoogle="/iconfillgoogle.svg"
            google="Google"
            button="Learn More"
            propHeight="3.375rem"
            propAlignSelf="unset"
            propWidth="9.438rem"
            propFlex="unset"
            propMinWidth1="unset"
          />
        </div>
      </div>
      <div className="mr-[-20.563rem] w-[3.688rem] h-[11rem] relative bg-[#d9d9d9] z-[7]" />
    </section>
  );
};

export default FrameComponent1;
