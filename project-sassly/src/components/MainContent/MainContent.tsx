import { FC } from "react";
import Button from "../common/Button/Button";
import AllTrafic from "../AllTrafic/AllTrafic";

export type MainContentType = {
  className?: string;
};

const MainContent: FC<MainContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[7.5rem] box-border max-w-full mq750:pb-[3.188rem] mq750:box-border mq1225:pb-[4.875rem] mq1225:box-border ${className}`}
    >
      <form className="m-[0px] w-[63.5rem] flex flex-col items-start justify-start gap-[3rem] max-w-full mq750:gap-[1.5rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[47.438rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
            <h1 className="m-[0px] mb-[3rem] h-[8.25rem] relative text-[3.75rem] tracking-[-0.03em] leading-[110%] font-bold font-['DM_Sans'] text-[#fff] text-center inline-block z-[1] mq450:text-[2.25rem] mq450:leading-[2.5rem] mq750:text-[3rem] mq750:leading-[3.313rem]">
              <p className="m-[0px]">Advanced analytics to grow</p>
              <p className="m-[0px]">your business</p>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.375rem]">
              <div className="h-[3rem] relative text-[1.125rem] leading-[135%] font-['DM_Sans'] text-[#e6e8ec] text-center inline-block z-[1]">
                <p className="m-[0px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="m-[0px]">
                  Diam ut id nisl tellus rhoncus, imperdiet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[20.438rem] flex flex-row items-start justify-center flex-wrap content-start gap-[1rem] max-w-full z-[1]">
            <Button
              height="4rem"
              alignSelf="unset"
              width="unset"
              flex="1"
              minWidth="6.75rem"
            >
              Start now
            </Button>
            <Button
              height="4rem"
              alignSelf="unset"
              width="9.063rem"
              flex="unset"
              minWidth="unset"
            >
              Trial
            </Button>
          </div>
        </div>
        <div className="self-stretch [filter:drop-shadow(16px_32px_74px_rgba(126,_138,_253,_0.08))] flex flex-col items-start justify-start p-[1.5rem] box-border relative gap-[1rem] max-w-full z-[1] mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border">
          {/* <img
            className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full  max-h-full object-cover"
            alt=""
            src="/texture-bg@2x.png"
          /> */}
          <div className="w-[57.063rem] flex flex-row items-start justify-center flex-wrap content-start gap-[1.562rem] max-w-full">
            <div className="w-[3.625rem] flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="self-stretch h-[0.875rem] relative max-w-full overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/menu.svg"
              />
            </div>
            <div className="flex-1 rounded-[10px] bg-[#fff] flex flex-row items-start justify-start py-[0.75rem] px-[0.937rem] box-border min-w-[9.75rem] max-w-full z-[1]">
              <div className="relative text-[1rem] leading-[140%] font-['DM_Sans'] text-[#cdd0d8] text-left">
                www.saas.com/users
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-[10px] bg-[#fff] flex flex-col items-start justify-start p-[1.5rem] box-border gap-[1.5rem] max-w-full z-[1] mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border">
            <div className="w-[60.5rem] h-[31.5rem] relative rounded-[10px] bg-[#fff] hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[1rem]">
              <AllTrafic
                icon="/icon.svg"
                allTraffic="All Traffic"
                k="574.34k"
              />
              <div className="flex-1 rounded-[10px] bg-[#fff] border-[#f5f5f5] border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[1rem] pb-[1.25rem] gap-[3.75rem] min-w-[11.188rem] z-[2] mq450:gap-[1.875rem] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative text-[0.875rem] leading-[1.25rem] font-medium font-['DM_Sans'] text-[#cdd0d8] text-left inline-block min-w-[7.188rem]">
                    Spent this month
                  </div>
                  <b className="relative text-[1.5rem] tracking-[-0.03em] leading-[110%] inline-block font-['DM_Sans'] text-[#1b2559] text-left min-w-[4.75rem] whitespace-nowrap mq450:text-[1.188rem] mq450:leading-[1.313rem]">
                    $682.5
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.518rem]">
                    <img
                      className="self-stretch w-[0.388rem] relative max-h-full object-contain min-h-[2.5rem]"
                      alt=""
                      src="/bar-3@2x.png"
                    />
                    <img
                      className="self-stretch w-[0.388rem] relative max-h-full object-contain min-h-[2.5rem]"
                      alt=""
                      src="/bar-4@2x.png"
                    />
                    <img
                      className="self-stretch w-[0.388rem] relative max-h-full object-contain min-h-[2.5rem]"
                      alt=""
                      src="/bar-5@2x.png"
                    />
                    <img
                      className="self-stretch w-[0.388rem] relative max-h-full object-contain min-h-[2.5rem]"
                      alt=""
                      src="/bar-6@2x.png"
                    />
                    <img
                      className="self-stretch w-[0.388rem] relative max-h-full object-contain min-h-[2.5rem]"
                      alt=""
                      src="/bar-7@2x.png"
                    />
                  </div>
                </div>
              </div>
              <AllTrafic
                icon="/icon-1.svg"
                allTraffic="Earnings"
                propMinWidth="3.563rem"
                k="$350.40"
                propMinWidth1="5.875rem"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[1rem] max-w-full mq1050:flex-wrap">
              <div className="flex-1 rounded-[10px] bg-[#fff] border-[#f5f5f5] border-[1.2px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[1.375rem] pl-[1.437rem] pr-[1.375rem] gap-[1rem] min-w-[18.625rem] max-w-full z-[2]">
                <div className="self-stretch h-[5.875rem] shadow-[0px_19.1px_42.39px_rgba(112,_144,_176,_0.12)] rounded-[10px] [background:linear-gradient(135deg,_#ac60e5,_#0c87f0)] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[1rem] px-[1rem] pb-[1.187rem] box-border max-w-full gap-[1.25rem]">
                  <div className="h-[5.938rem] w-[25.688rem] relative rounded-[10px] [background:linear-gradient(135deg,_#ac60e5,_#0c87f0)] hidden max-w-full" />
                  <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                    <div className="relative text-[1rem] leading-[140%] font-medium font-['DM_Sans'] text-[#e9edf7] text-left inline-block min-w-[7rem] z-[2]">
                      Credit Balance
                    </div>
                    <b className="relative text-[2rem] tracking-[-0.03em] leading-[110%] inline-block font-['DM_Sans'] text-[#fff] text-left min-w-[6.813rem] whitespace-nowrap z-[2] mq450:text-[1.188rem] mq450:leading-[1.313rem] mq750:text-[1.625rem] mq750:leading-[1.75rem]">
                      $25,215
                    </b>
                  </div>
                  <div className="mt-[-5.044rem] h-[14.044rem] w-[12.85rem] flex flex-row items-start justify-start relative shrink-0">
                    <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                      <img
                        className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[2]"
                        alt=""
                        src="/shadow.svg"
                      />
                      <img
                        className="absolute top-[5.044rem] left-[9.55rem] w-[1.5rem] h-[1.5rem] overflow-hidden z-[3]"
                        alt=""
                        src="/more.svg"
                      />
                      <img
                        className="absolute top-[7.794rem] left-[7.05rem] w-[4rem] h-[1.125rem] z-[3]"
                        alt=""
                        src="/graph.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                  <div className="relative text-[0.875rem] leading-[1.25rem] font-medium font-['DM_Sans'] text-[#cdd0d8] text-left inline-block min-w-[2.938rem]">
                    Recent
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                      <div className="w-[8.313rem] flex flex-col items-start justify-start gap-[1rem]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                              <div className="w-[2.5rem] h-[2.5rem] relative">
                                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-[#f6f7fe] w-full h-full" />
                                <img
                                  className="absolute w-3/5 top-[0.5rem] right-[20%] left-[20%] rounded-[6px] max-w-full overflow-hidden h-[1.5rem] object-cover z-[1]"
                                  alt=""
                                  src="/image-19@2x.png"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                              <b className="relative text-[0.875rem] leading-[1.25rem] inline-block font-['DM_Sans'] text-[#1b2559] text-left min-w-[4.375rem]">
                                Instagram
                              </b>
                              <div className="relative text-[0.875rem] leading-[1.25rem] font-medium font-['DM_Sans'] text-[#cdd0d8] text-left inline-block min-w-[4.938rem] whitespace-nowrap">
                                Today, 16:36
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                              <img
                                className="w-[2.5rem] h-[2.5rem] relative"
                                alt=""
                                src="/icon-2.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                              <b className="relative text-[0.875rem] leading-[1.25rem] inline-block font-['DM_Sans'] text-[#1b2559] text-left min-w-[3.063rem]">
                                Twitter
                              </b>
                              <div className="relative text-[0.875rem] leading-[1.25rem] font-medium font-['DM_Sans'] text-[#cdd0d8] text-left inline-block min-w-[5.313rem] whitespace-nowrap">
                                23 Jun, 13:06
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[2.5rem] h-[2.5rem] relative"
                              alt=""
                              src="/icon-3.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                            <b className="relative text-[0.875rem] leading-[1.25rem] inline-block font-['DM_Sans'] text-[#1b2559] text-left min-w-[4.188rem]">
                              Facebook
                            </b>
                            <div className="relative text-[0.875rem] leading-[1.25rem] font-medium font-['DM_Sans'] text-[#cdd0d8] text-left inline-block min-w-[5.125rem] whitespace-nowrap">
                              21 Jun, 19:04
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
                        <div className="flex flex-col items-end justify-start gap-[2.375rem]">
                          <div className="flex flex-row items-start justify-end py-[0rem] pl-[0.25rem] pr-[0.062rem]">
                            <b className="relative text-[0.875rem] leading-[1.25rem] inline-block font-['DM_Sans'] text-[#1b2559] text-right min-w-[1.875rem]">
                              125k
                            </b>
                          </div>
                          <div className="flex flex-row items-start justify-end py-[0rem] pl-[0rem] pr-[0.062rem]">
                            <b className="relative text-[0.875rem] leading-[1.25rem] inline-block font-['DM_Sans'] text-[#1b2559] text-right min-w-[2.125rem]">
                              100K
                            </b>
                          </div>
                          <b className="relative text-[0.875rem] leading-[1.25rem] inline-block font-['DM_Sans'] text-[#1b2559] text-right min-w-[1.875rem]">
                            110K
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[21.5rem] w-[27.875rem] rounded-[10px] bg-[#fff] border-[#f5f5f5] border-[1.2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[1.5rem] px-[1.5rem] pb-[13.062rem] gap-[2rem] min-w-[27.875rem] max-w-full z-[2] mq750:gap-[1rem] mq750:pt-[1.25rem] mq750:pb-[8.5rem] mq750:box-border mq750:min-w-full mq1050:flex-1">
                <div className="w-[17.188rem] flex flex-row items-start justify-between shrink-0 gap-[1.25rem]">
                  <div className="w-[9.563rem] flex flex-col items-start justify-start gap-[1rem]">
                    <div className="flex flex-col items-end justify-start gap-[0.125rem]">
                      <div className="relative text-[1rem] leading-[140%] font-medium font-['DM_Sans'] text-[#cdd0d8] text-center">
                        This month earnings
                      </div>
                      <div className="flex flex-row items-start justify-end py-[0rem] pl-[1.062rem] pr-[1rem]">
                        <b className="relative text-[2.5rem] tracking-[-0.03em] leading-[110%] inline-block font-['DM_Sans'] text-[#1b2559] text-center min-w-[7.5rem] whitespace-nowrap mq450:text-[1.5rem] mq450:leading-[1.625rem] mq750:text-[2rem] mq750:leading-[2.188rem]">
                          $801.5
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[3.187rem] pr-[3.25rem]">
                      <div className="flex-1 rounded-[10000px] bg-[rgba(5,205,153,0.1)] flex flex-row items-start justify-start py-[0.125rem] px-[0.062rem]">
                        <b className="relative text-[0.831rem] tracking-[-0.02em] leading-[1.438rem] inline-block font-['DM_Sans'] text-[#05cd99] text-center min-w-[2.938rem]">
                          +2.45%
                        </b>
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-[2rem] w-[2rem] relative rounded-[7.76px] overflow-hidden shrink-0"
                    alt=""
                    src="/chart-button.svg"
                  />
                </div>
                <img
                  className="mr-[-3.169rem] w-[32.181rem] h-[14.069rem] relative shrink-0 max-w-[131%]"
                  alt=""
                  src="/graph-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default MainContent;
