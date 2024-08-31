import { FunctionComponent } from "react";
import ReportAutomation from "../ReportAutomation/ReportAutomation";
import Button from "../common/Button/Button";

export type BrandContentType = {
  className?: string;
};

const BrandContent: FunctionComponent<BrandContentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[10rem] box-border max-w-full text-center text-[3rem] text-[#14358a] font-['DM_Sans'] mq750:pb-[4.25rem] mq750:box-border mq1050:pb-[6.5rem] mq1050:box-border ${className}`}
    >
      <div className="w-[68.75rem] flex flex-col items-start justify-start gap-[3rem] max-w-full mq750:gap-[1.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <h1 className="m-[0px] w-[36rem] relative text-inherit tracking-[-0.03em] leading-[105%] font-bold font-[inherit] inline-block max-w-full mq450:text-[1.813rem] mq450:leading-[1.875rem] mq750:text-[2.375rem] mq750:leading-[2.5rem]">
              <p className="m-[0px]">We optimize marketing for</p>
              <p className="m-[0px]">business continuity</p>
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[2.231rem] max-w-full text-left text-[1.5rem] text-[#006fba] mq750:gap-[1.125rem]">
            <div className="w-[14.563rem] flex flex-col items-start justify-start pt-[4.406rem] px-[0rem] pb-[0rem] box-border mq750:pt-[2.875rem] mq750:box-border">
              <div className="self-stretch flex flex-col items-start justify-center gap-[4rem]">
                <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="rounded-[10px] [background:linear-gradient(52.37deg,_#0097fe,_#14358a)] flex flex-col items-center justify-center p-[1rem]">
                    <img
                      className="w-[2rem] h-[2rem] relative object-cover"
                      alt=""
                      src="/iconoutlinelayers@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                    <h3 className="m-[0px] h-[3.25rem] relative text-inherit tracking-[-0.03em] leading-[110%] font-bold font-[inherit] inline-block mq450:text-[1.188rem] mq450:leading-[1.313rem]">
                      <p className="m-[0px]">Accurate Data</p>
                      <p className="m-[0px]">Science</p>
                    </h3>
                    <div className="relative text-[1rem] leading-[140%] text-[#68718b]">
                      <p className="m-[0px]">Cum sociis natoque penatibus</p>
                      <p className="m-[0px]">{`et magnis dis parturient `}</p>
                    </div>
                  </div>
                </div>
                <ReportAutomation
                  iconOutlinepieChart="/iconoutlinepiechart@2x.png"
                  report="Report"
                  automation="Automation"
                  montesNasceturRidiculusMus="Montes, nascetur ridiculus mus."
                  donecQuamFelis="Donec quam felis, "
                />
              </div>
            </div>
            <div className="w-[8.788rem] relative text-[0.569rem] tracking-[-0.02em] text-[#0097fe] hidden h-[0.875rem] shrink-0">
              Compared to $90,897 Last year
            </div>
            <div className="h-[37.313rem] flex-1 relative min-w-[22.875rem] max-w-full text-[0.719rem] text-[#68718b] mq450:h-auto mq450:min-h-[597] mq450:min-w-full">
              <div className="absolute top-[4.688rem] left-[20.65rem] w-[14.513rem] h-[14.25rem]">
                <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] shadow-[8px_24px_96px_rgba(126,_138,_253,_0.08)] rounded-[10px] bg-[#fff] w-[12.475rem] z-[2]" />
                <div className="absolute top-[8.688rem] left-[3.906rem] shadow-[0px_4px_20px_rgba(38,_38,_38,_0.04)] rounded-[100px] bg-[#fff] w-[10.606rem] h-[1.638rem] z-[3]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_20px_rgba(38,_38,_38,_0.04)] rounded-[100px] bg-[#fff] hidden" />
                  <div className="absolute h-[22.14%] w-[82.38%] top-[40.84%] right-[8.84%] bottom-[37.02%] left-[8.78%] rounded-[4px] bg-[#0097fe] z-[1]" />
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] w-[32.256rem] flex flex-col items-start justify-start pt-[6rem] pb-[3.812rem] pl-[4rem] pr-[0.25rem] box-border gap-[0.812rem] max-w-full">
                <img
                  className="w-[20.65rem] h-[7.813rem] absolute !m-[0] right-[-1.806rem] bottom-[7.75rem]"
                  loading="lazy"
                  alt=""
                  src="/pattern.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[14.312rem] pr-[1.25rem]">
                  <div className="w-[5.55rem] relative tracking-[-0.02em] inline-block shrink-0 z-[3]">
                    Sales trend
                  </div>
                </div>
                <div className="self-stretch h-[25.75rem] relative max-w-full text-center text-[1.388rem] text-[#03133d] mq450:h-auto mq450:min-h-[412]">
                  <div className="absolute top-[0rem] left-[0rem] shadow-[16px_32px_74px_rgba(126,_138,_253,_0.08)] rounded-[10px] bg-[#fff] w-[21.188rem] flex flex-col items-start justify-start pt-[1.512rem] px-[1.375rem] pb-[1.437rem] box-border gap-[1.387rem] max-w-full z-[1]">
                    <div className="w-[21.188rem] h-[25.75rem] relative shadow-[16px_32px_74px_rgba(126,_138,_253,_0.08)] rounded-[10px] bg-[#fff] hidden max-w-full z-[0]" />
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.812rem] pr-[1.875rem]">
                      <b className="flex-1 relative tracking-[-0.02em] z-[1] mq450:text-[1.125rem]">
                        Global Statistic
                      </b>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[2.062rem] pr-[2.125rem] text-[0.556rem]">
                      <div className="flex-1 flex flex-row items-start justify-start pt-[1.587rem] px-[1.562rem] pb-[1.668rem] relative z-[1]">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group-401.svg"
                        />
                        <div className="flex-1 flex flex-row items-start justify-start pt-[1.5rem] px-[1.5rem] pb-[1.4rem] relative">
                          <img
                            className="h-full w-full absolute !m-[0] top-[0rem] right-[0.125rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="/group-402.svg"
                          />
                          <div className="flex-1 flex flex-col items-end justify-start pt-[1.75rem] pb-[1.8rem] pl-[1rem] pr-[1.062rem] relative gap-[0.337rem]">
                            <img
                              className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[2]"
                              alt=""
                              src="/group-403.svg"
                            />
                            <div className="flex flex-row items-start justify-end py-[0rem] pl-[2.062rem] pr-[2rem]">
                              <img
                                className="h-[1.881rem] w-[1.881rem] relative z-[3]"
                                alt=""
                                src="/group-344.svg"
                              />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.437rem] pr-[0.5rem]">
                                <div className="flex-1 relative tracking-[-0.02em] shrink-0 z-[3]">
                                  Traffic Growth
                                </div>
                              </div>
                              <b className="self-stretch relative text-[1.619rem] tracking-[-0.02em] leading-[1.575rem] shrink-0 z-[3] mt-[-0.138rem] mq450:text-[1.313rem] mq450:leading-[1.25rem]">
                                68%
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.875rem] mq450:flex-wrap">
                      <div className="flex-1 shadow-[0px_4.9px_16.48px_rgba(28,_36,_105,_0.05)] rounded-[8px] bg-[#fff] flex flex-col items-start justify-start pt-[1.881rem] px-[0.625rem] pb-[0.575rem] box-border relative gap-[0.668rem] min-w-[5.688rem] z-[1]">
                        <div className="w-[8.75rem] h-[3.875rem] relative shadow-[0px_4.9px_16.48px_rgba(28,_36,_105,_0.05)] rounded-[8px] bg-[#fff] hidden z-[0]" />
                        <div className="w-[3.488rem] h-[0.375rem] absolute !m-[0] top-[0.719rem] left-[0.688rem] rounded-[4px] bg-[#c4d2f6] z-[1]" />
                        <div className="w-[7.313rem] h-[0.375rem] relative rounded-[4px] bg-[#edf1fc] z-[1]" />
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0.125rem]">
                          <div className="h-[0.375rem] flex-1 relative rounded-[4px] bg-[#edf1fc] z-[1]" />
                        </div>
                      </div>
                      <div className="flex-1 shadow-[0px_4.9px_16.48px_rgba(28,_36,_105,_0.05)] rounded-[8px] bg-[#fff] flex flex-col items-start justify-start pt-[1.881rem] px-[0.625rem] pb-[0.575rem] box-border relative gap-[0.668rem] min-w-[5.688rem] z-[1]">
                        <div className="w-[8.75rem] h-[3.875rem] relative shadow-[0px_4.9px_16.48px_rgba(28,_36,_105,_0.05)] rounded-[8px] bg-[#fff] hidden z-[0]" />
                        <div className="w-[3.488rem] h-[0.375rem] absolute !m-[0] top-[0.719rem] left-[0.688rem] rounded-[4px] bg-[#c4d2f6] z-[1]" />
                        <div className="w-[7.313rem] h-[0.375rem] relative rounded-[4px] bg-[#edf1fc] z-[1]" />
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0.125rem]">
                          <div className="h-[0.375rem] flex-1 relative rounded-[4px] bg-[#edf1fc] z-[1]" />
                        </div>
                      </div>
                    </div>
                    <b className="w-[5.55rem] absolute !m-[0] top-[-0.687rem] right-[-2.112rem] text-[1.969rem] tracking-[-0.02em] inline-block text-left z-[3] mq450:text-[1.188rem] mq750:text-[1.563rem]">
                      68%
                    </b>
                    <img
                      className="w-[9.381rem] h-[2.825rem] absolute !m-[0] top-[2.188rem] right-[-6.312rem] z-[3]"
                      loading="lazy"
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                  <div className="absolute top-[8.563rem] left-[18.119rem] shadow-[0px_4.9px_16.48px_rgba(28,_36,_105,_0.05)] rounded-[100px] bg-[#fff] w-[9.856rem] h-[1.456rem] z-[3]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4.9px_16.48px_rgba(28,_36,_105,_0.05)] rounded-[100px] bg-[#fff] hidden" />
                    <div className="absolute h-[24.89%] w-[81.04%] top-[37.34%] right-[10.78%] bottom-[37.77%] left-[8.18%] rounded-[4px] bg-[#edf1fc] z-[1]" />
                  </div>
                </div>
                <img
                  className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/social-media.svg"
                />
              </div>
            </div>
            <div className="w-[14.563rem] flex flex-col items-start justify-start pt-[4.406rem] px-[0rem] pb-[0rem] box-border mq750:pt-[2.875rem] mq750:box-border">
              <div className="self-stretch flex flex-col items-start justify-center gap-[4rem]">
                <ReportAutomation
                  propAlignSelf="unset"
                  iconOutlinepieChart="/iconoutlinekeypad@2x.png"
                  propAlignSelf1="unset"
                  report="Fully"
                  automation="Integrations"
                  propHeight="unset"
                  propDisplay="unset"
                  montesNasceturRidiculusMus="Cum sociis natoque penatibus"
                  donecQuamFelis="et magnis dis parturient "
                />
                <ReportAutomation
                  propAlignSelf="stretch"
                  iconOutlinepieChart="/iconoutlinetrendingup.svg"
                  propAlignSelf1="stretch"
                  report="Advanced"
                  automation="Analytics"
                  propHeight="2.75rem"
                  propDisplay="inline-block"
                  montesNasceturRidiculusMus="Montes, nascetur ridiculus mus."
                  donecQuamFelis="Donec quam felis, "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[3.375rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border">
          <Button
            height="unset"
            alignSelf="stretch"
            width="9.438rem"
            flex="unset"
            minWidth="unset"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandContent;
