import { FC } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FC<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start pt-[12.687rem] pb-[2.5rem] pl-[10.5rem] pr-[8.375rem] box-border relative gap-[4.625rem] max-w-full z-[9] mt-[-12.625rem] text-left text-[2rem] text-[#fff] font-['DM_Sans'] mq450:gap-[1.125rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq750:gap-[2.313rem] mq750:pl-[5.25rem] mq750:pr-[4.188rem] mq750:box-border mq1050:pb-[1.625rem] mq1050:box-border ${className}`}
    >
      <img
        className="w-[121.063rem] h-[62rem] absolute !m-[0] top-[-4.5rem] right-[-22.75rem]"
        alt=""
        src="/background-footer.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[8.875rem] max-w-full mq450:gap-[1.125rem] mq750:gap-[2.188rem] mq1225:gap-[4.438rem] mq1225:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[11.375rem] px-[0rem] pb-[0rem] box-border min-w-[19rem] mq450:pt-[12.688rem] mq450:box-border mq1225:flex-1">
            <div className="flex flex-col items-start justify-start gap-[2rem] z-[1] mq450:gap-[1rem]">
              <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                <h1 className="m-[0px] relative text-inherit tracking-[-0.03em] leading-[2.125rem] font-bold font-[inherit] inline-block min-w-[6rem] mq450:text-[1.188rem] mq450:leading-[1.25rem] mq750:text-[1.625rem] mq750:leading-[1.688rem]">
                  Saasly
                </h1>
                <div className="h-[4.125rem] relative text-[1rem] leading-[140%] inline-block">
                  <p className="m-[0px]">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                  <p className="m-[0px]">
                    adipiscing elit. Diam ut id nisl tellus
                  </p>
                  <p className="m-[0px]">rhoncus, imperdiet</p>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1rem]">
                <div className="rounded-[10px] bg-[rgba(255,255,255,0.2)] flex flex-row items-center justify-center p-[0.5rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/iconfillglobe@2x.png"
                  />
                </div>
                <div className="rounded-[10px] bg-[rgba(255,255,255,0.2)] flex flex-row items-center justify-center p-[0.5rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative"
                    alt=""
                    src="/iconfillfacebook-1.svg"
                  />
                </div>
                <div className="rounded-[10px] bg-[rgba(255,255,255,0.2)] flex flex-row items-center justify-center p-[0.5rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative"
                    alt=""
                    src="/iconfilltwitter-1.svg"
                  />
                </div>
                <div className="rounded-[10px] bg-[rgba(255,255,255,0.2)] flex flex-row items-center justify-center p-[0.5rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative"
                    alt=""
                    src="/iconfillgoogle-1.svg"
                  />
                </div>
                <div className="rounded-[10px] bg-[rgba(255,255,255,0.2)] flex flex-row items-center justify-center p-[0.5rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/iconfilllinkedin@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-between min-w-[28rem] max-w-full gap-[1.25rem] text-[1.125rem] mq750:flex-wrap mq1050:min-w-full">
            <div className="w-[6.5rem] flex flex-col items-start justify-start gap-[1rem] z-[1]">
              <b className="w-[4.875rem] relative leading-[135%] inline-block">
                Pages
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1rem]">
                <div className="relative leading-[140%] inline-block min-w-[4.5rem]">
                  Home V1
                </div>
                <div className="relative leading-[140%] inline-block min-w-[4.5rem]">
                  Home V2
                </div>
                <div className="relative leading-[140%] inline-block min-w-[4.25rem]">
                  Home V3
                </div>
                <div className="self-stretch relative leading-[140%]">
                  About 1
                </div>
                <div className="self-stretch relative leading-[140%]">
                  About 2
                </div>
                <div className="self-stretch relative leading-[140%]">
                  Blog 1
                </div>
                <div className="self-stretch relative leading-[140%]">
                  Blog 2
                </div>
                <div className="relative leading-[140%] inline-block min-w-[5.5rem]">
                  Blog Single
                </div>
                <div className="self-stretch relative leading-[140%]">
                  Job 1
                </div>
                <div className="self-stretch relative leading-[140%]">
                  Job 2
                </div>
                <div className="self-stretch relative leading-[140%]">
                  Job Single
                </div>
                <div className="self-stretch relative leading-[140%]">
                  Pricing 1
                </div>
                <div className="self-stretch relative leading-[140%]">
                  Pricing 2
                </div>
                <div className="relative leading-[140%] inline-block min-w-[6.5rem]">
                  Help Center 1
                </div>
              </div>
            </div>
            <div className="w-[9.438rem] flex flex-col items-start justify-start pt-[2.25rem] pb-[0rem] pl-[0rem] pr-[2.125rem] box-border text-[1rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] z-[1]">
                <div className="relative leading-[140%] inline-block min-w-[7.313rem]">
                  Help Center V2
                </div>
                <div className="w-[6.5rem] relative leading-[140%] inline-block">
                  FAQ V1
                </div>
                <div className="w-[6.5rem] relative leading-[140%] inline-block">
                  FAQ V2
                </div>
                <div className="w-[6.5rem] relative leading-[140%] inline-block">
                  FAQ Detail
                </div>
                <div className="w-[6.5rem] relative leading-[140%] inline-block">
                  Contact V1
                </div>
                <div className="w-[6.5rem] relative leading-[140%] inline-block">
                  Contact V2
                </div>
                <div className="w-[6.5rem] relative leading-[140%] inline-block">
                  Checkout
                </div>
              </div>
            </div>
            <div className="w-[9.438rem] flex flex-col items-start justify-start gap-[1rem] z-[1]">
              <b className="relative leading-[135%] inline-block min-w-[7.25rem]">
                Utility Pages
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1rem]">
                <div className="w-[6.5rem] relative leading-[140%] inline-block">
                  Sign In
                </div>
                <div className="w-[6.5rem] relative leading-[140%] inline-block whitespace-nowrap">
                  Sign Up
                </div>
                <div className="w-[9rem] relative leading-[140%] inline-block">
                  Forgot Password
                </div>
                <div className="w-[9rem] relative leading-[140%] inline-block">
                  Reset Password
                </div>
                <div className="self-stretch relative leading-[140%]">
                  Email Confirmation
                </div>
                <div className="w-[6rem] relative leading-[140%] inline-block">
                  404 Page
                </div>
                <div className="w-[7rem] relative leading-[140%] inline-block">
                  Coming Soon
                </div>
                <div className="relative leading-[140%] inline-block min-w-[6rem]">
                  Style Guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[69rem] flex flex-col items-start justify-start gap-[1.437rem] max-w-full z-[1] text-center text-[1rem]">
        <div className="self-stretch h-[0.063rem] relative border-[#fff] border-t-[1px] border-solid box-border opacity-[0.3]" />
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[43.188rem] relative leading-[1.438rem] inline-block shrink-0 max-w-full">
            <span>{`Copyright Stairs | Designed by `}</span>
            <b className="text-[#0097fe]">Design Mate</b>
            <span>{` - Powered by `}</span>
            <b className="text-[#0097fe]">Webflow</b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
