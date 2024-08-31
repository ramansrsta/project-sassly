import { FC } from "react";
import TrackingData from "../TrackingData/TrackingData";

export type DataAnalyticsType = {
  className?: string;
};

const DataAnalytics: FC<DataAnalyticsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[23.562rem] box-border max-w-full text-center text-[3rem] text-[#14358a] font-['DM_Sans'] mq750:pb-[6.438rem] mq750:box-border mq1050:pb-[9.938rem] mq1050:box-border mq1225:pb-[15.313rem] mq1225:box-border ${className}`}
    >
      <div className="w-[68.75rem] flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <h1 className="m-[0px] w-[37.375rem] relative text-inherit tracking-[-0.03em] leading-[105%] font-bold font-[inherit] inline-block max-w-full mq450:text-[1.813rem] mq450:leading-[1.875rem] mq750:text-[2.375rem] mq750:leading-[2.5rem]">
            <p className="m-[0px]">We make it easy to track all</p>
            <p className="m-[0px]">data analytics</p>
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4rem] max-w-full text-left text-[2rem] text-[#006fba] mq750:gap-[1rem] mq1225:gap-[2rem]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[6.937rem] max-w-full mq750:gap-[1.75rem] mq1050:flex-wrap mq1225:gap-[3.438rem]">
            <TrackingData
              iconOutlinetimer="/iconoutlinetimer@2x.png"
              realTimeDataAnalytics="Real Time Data Analytics"
              penatibusEtMagnisDisParturient="penatibus et magnis dis parturient montes, nascetur "
              button="Learn More"
              propHeight="3.375rem"
              propAlignSelf="unset"
              propWidth="9.438rem"
              propFlex="unset"
              propMinWidth="unset"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-[7.75rem] px-[0rem] pb-[0rem] box-border relative min-w-[20.688rem] max-w-full text-center text-[0.75rem] text-[#68718b] mq450:pt-[5.063rem] mq450:box-border">
              <div className="self-stretch h-[17.625rem] relative rounded-[10px] bg-[#fff] max-w-full mq450:h-auto mq450:min-h-[282]">
                <div className="absolute top-[1.938rem] left-[1.5rem] border-[#e6e8ec] border-r-[1px] border-solid box-border w-[0.063rem] h-[12.938rem]" />
                <div className="absolute top-[2.063rem] left-[1.875rem] w-[28.438rem] h-[13.813rem]">
                  <div className="absolute top-[12.438rem] left-[26.75rem] border-[#e6e8ec] border-r-[1px] border-solid box-border w-[0.063rem] h-[0.688rem] z-[2]" />
                  <div className="absolute top-[12.438rem] left-[20.25rem] border-[#e6e8ec] border-r-[1px] border-solid box-border w-[0.063rem] h-[0.688rem] z-[2]" />
                  <div className="absolute top-[12.438rem] left-[7.938rem] border-[#e6e8ec] border-r-[1px] border-solid box-border w-[0.063rem] h-[0.688rem] z-[2]" />
                  <div className="absolute top-[12.438rem] left-[1.25rem] border-[#e6e8ec] border-r-[1px] border-solid box-border w-[0.063rem] h-[0.688rem] z-[2]" />
                  <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-full h-full"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className="absolute top-[4.063rem] left-[13.875rem] w-[0.063rem] h-[9rem] z-[2]"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <div className="absolute top-[12.531rem] left-[13.688rem] rounded-[50%] bg-[#fff] border-[#0097fe] border-[0px] border-solid box-border w-[0.506rem] h-[0.506rem] z-[3]" />
                  </div>
                </div>
                <div className="absolute top-[2.125rem] left-[1.5rem] w-[28.813rem] flex flex-col items-end justify-start gap-[3.125rem] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0.187rem] pr-[0.125rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                      <div className="h-[9.563rem] flex-1 relative max-w-full">
                        <img
                          className="absolute top-[0rem] left-[0rem] w-full h-full z-[1]"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <div className="absolute top-[3.563rem] left-[13.75rem] rounded-[50%] bg-[#fff] border-[#0097fe] border-[0px] border-solid box-border w-[0.794rem] h-[0.794rem] z-[3]" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                    <div className="self-stretch h-[0.063rem] relative border-[#e6e8ec] border-t-[1px] border-solid box-border z-[1]" />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                      <div className="w-[3.875rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.625rem] box-border">
                        <div className="self-stretch relative inline-block min-w-[3.25rem] whitespace-nowrap z-[1]">
                          10:30 AM
                        </div>
                      </div>
                      <div className="relative inline-block min-w-[2.938rem] whitespace-nowrap z-[1]">
                        11:30 AM
                      </div>
                      <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.312rem]">
                        <div className="relative inline-block min-w-[3.125rem] whitespace-nowrap z-[1]">
                          12:30 AM
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.312rem]">
                        <div className="relative inline-block min-w-[3.125rem] whitespace-nowrap z-[1]">
                          01:30 PM
                        </div>
                      </div>
                      <div className="relative inline-block min-w-[3.375rem] whitespace-nowrap z-[1]">
                        02:30 PM
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute top-[0.563rem] left-[8.25rem] rounded-[10px] w-[3rem] h-[3rem] z-[4]"
                  loading="lazy"
                  alt=""
                  src="/twitter.svg"
                />
                <div className="absolute top-[-7.75rem] right-[2.938rem] rounded-[10px] [background:linear-gradient(135deg,_#ac60e5,_#0c87f0)] w-[12.188rem] flex flex-col items-start justify-start py-[0.75rem] px-[1.5rem] box-border gap-[0.375rem] z-[4] text-[1.125rem] text-[#fff]">
                  <div className="w-[12.125rem] h-[12.813rem] relative rounded-[10px] [background:linear-gradient(135deg,_#ac60e5,_#0c87f0)] hidden" />
                  <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.687rem] pr-[0.562rem]">
                    <b className="relative leading-[1.563rem] inline-block min-w-[7.938rem] z-[1]">
                      Traffic Growth
                    </b>
                  </div>
                  <div className="relative text-[0.75rem] z-[1]">
                    Total traffic growth of 45%
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.5rem] pr-[0.687rem] text-[0.875rem]">
                    <div className="h-[8rem] flex-1 relative">
                      <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%]  w-full h-full z-[3]" />
                        <div className="absolute top-[2.438rem] left-[2.063rem] leading-[1.25rem] inline-block min-w-[4rem] z-[4]">
                          Facebook
                        </div>
                      </div>
                      <div className="absolute w-[calc(100%_-_8px)] top-[0.25rem] right-[0.25rem] left-[0.25rem] h-[7.5rem] text-[1.5rem]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-[#ffcc5e] w-full h-full z-[2]" />
                        <div className="absolute top-[3.688rem] left-[2.25rem] flex flex-row items-start justify-start">
                          <div className="h-[7.5rem] w-[7.5rem] absolute !m-[0] top-[-3.687rem] left-[-2.25rem] rounded-[50%] bg-[#0097fe] z-[1]" />
                          <b className="relative tracking-[-0.03em] leading-[1.688rem] inline-block min-w-[3.125rem] z-[3] mq450:text-[1.188rem] mq450:leading-[1.313rem]">
                            36%
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="w-[3rem] h-[3rem] absolute !m-[0] top-[2.438rem] left-[1.5rem] rounded-[10px]"
                loading="lazy"
                alt=""
                src="/fb.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center relative gap-[6.937rem] max-w-full text-center text-[1.113rem] text-[#e9edf7] mq750:gap-[1.75rem] mq1050:flex-wrap mq1225:gap-[3.438rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[20.688rem] max-w-full">
              <div className="self-stretch h-[20.625rem] relative max-w-full">
                <div className="absolute top-[0rem] left-[0rem] rounded-[11.11px] bg-[#fff] w-full h-[19.725rem] overflow-hidden flex flex-col items-start justify-start pt-[1.668rem] px-[0rem] pb-[11.525rem] box-border gap-[2.775rem] max-w-full mq750:gap-[1.375rem]">
                  <div className="flex flex-row items-start justify-start py-[0rem] pl-[1.625rem] pr-[1.687rem] box-border max-w-full">
                    <div className="h-[6.531rem] w-[28.481rem] rounded-[11.11px] [background:linear-gradient(135deg,_#ac60e5,_#0c87f0)] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[1.112rem] px-[1.062rem] pb-[1.043rem] box-border gap-[1.25rem] max-w-full">
                      <div className="h-[6.531rem] w-[28.481rem] relative rounded-[11.11px] [background:linear-gradient(135deg,_#ac60e5,_#0c87f0)] hidden max-w-full" />
                      <div className="flex flex-col items-start justify-start gap-[0.312rem]">
                        <div className="relative leading-[1.563rem] font-medium inline-block min-w-[7.75rem] z-[2]">
                          Credit Balance
                        </div>
                        <b className="relative text-[2.225rem] tracking-[-0.03em] leading-[2.5rem] inline-block text-[#fff] min-w-[7.625rem] whitespace-nowrap z-[2] mq450:text-[1.313rem] mq450:leading-[1.438rem] mq750:text-[1.75rem] mq750:leading-[1.938rem]">
                          $25,215
                        </b>
                      </div>
                      <div className="mt-[-5.607rem] w-[14.281rem] flex flex-row items-start justify-start shrink-0">
                        <div className="h-[15.606rem] flex-1 relative">
                          <img
                            className="absolute top-[0rem] left-[0rem] w-full h-full z-[2]"
                            alt=""
                            src="/shadow-1.svg"
                          />
                          <div className="absolute top-[5.606rem] left-[10.619rem] w-[1.669rem] h-[1.669rem]">
                            <img
                              className="absolute top-[0rem] left-[0rem] w-full h-full overflow-hidden"
                              alt=""
                            />
                            <img
                              className="absolute top-[0rem] left-[0rem] w-full h-full overflow-hidden z-[4]"
                              alt=""
                              src="/more-2.svg"
                            />
                          </div>
                          <img
                            className="absolute top-[8.663rem] left-[7.838rem] w-[4.444rem] h-[1.25rem] z-[3]"
                            alt=""
                            src="/graph-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[9.863rem] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/grapik.svg"
                  />
                </div>
                <div className="absolute top-[16.875rem] left-[1.813rem] rounded-[10px] bg-[#fff] w-[12rem] h-[3.75rem] z-[1]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[10px] bg-[#fff] w-full h-full hidden" />
                  <div className="absolute top-[1.5rem] left-[1.125rem] rounded-[10px] bg-[#0097fe] w-[9.75rem] h-[0.75rem] z-[1]" />
                </div>
              </div>
              <div className="w-[22.625rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                <div className="h-[3.75rem] w-[12rem] relative rounded-[10px] bg-[#fff]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[10px] bg-[#fff] w-full h-full hidden" />
                  <div className="absolute top-[1.5rem] left-[1.125rem] rounded-[10px] bg-[#f7edfe] w-[9.75rem] h-[0.75rem] z-[1]" />
                </div>
              </div>
            </div>
            <img
              className="h-[11.625rem] w-[11.625rem] absolute !m-[0] bottom-[0rem] left-[20.188rem] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/shield@2x.png"
            />
            <TrackingData
              propPadding="3.25rem 0rem 0rem"
              iconOutlinetimer="/iconoutlinelock@2x.png"
              propGap="0.75rem"
              realTimeDataAnalytics="Safely Security"
              propDisplay="unset"
              penatibusEtMagnisDisParturient="penatibus et magnis dis parturient montes, nascetur"
              button="Learn More"
              propHeight="3.375rem"
              propAlignSelf="unset"
              propWidth="9.438rem"
              propFlex="unset"
              propMinWidth="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[6.937rem] max-w-full text-[0.788rem] text-[#68718b] mq750:gap-[1.75rem] mq1050:flex-wrap mq1225:gap-[3.438rem]">
            <TrackingData
              propPadding="3.25rem 0rem 0rem"
              iconOutlinetimer="/iconoutlinemonitor@2x.png"
              propGap="0.75rem"
              realTimeDataAnalytics="Multiple Platform"
              propDisplay="unset"
              penatibusEtMagnisDisParturient="enatibus et magnis dis parturient montes, nascetur"
              button="Learn More"
              propHeight="3.375rem"
              propAlignSelf="unset"
              propWidth="9.438rem"
              propFlex="unset"
              propMinWidth="unset"
            />
            <div className="flex-1 shadow-[8px_24px_96px_rgba(126,_138,_253,_0.08)] overflow-hidden flex flex-col items-end justify-start pt-[4rem] pb-[1.562rem] pl-[0rem] pr-[0.937rem] box-border min-w-[20.688rem] max-w-full mq450:pt-[2.625rem] mq450:pb-[1.25rem] mq450:box-border">
              <div className="w-[24.625rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                <div className="w-[11.5rem] shadow-[0px_5.7px_18.86px_rgba(28,_36,_105,_0.05)] rounded-[9.16px] [background:linear-gradient(135deg,_#ac60e5,_#0c87f0)] flex flex-col items-start justify-start pt-[1rem] pb-[0.937rem] pl-[1.125rem] pr-[1.062rem] box-border gap-[1.375rem] z-[3]">
                  <div className="w-[11.5rem] h-[5.625rem] relative shadow-[0px_5.7px_18.86px_rgba(28,_36,_105,_0.05)] rounded-[9.16px] [background:linear-gradient(135deg,_#ac60e5,_#0c87f0)] hidden" />
                  <div className="w-[3.994rem] h-[0.5rem] relative rounded-[4.58px] bg-[#fff] z-[1]" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.812rem]">
                    <div className="self-stretch h-[0.5rem] relative rounded-[4.58px] bg-[#fff] z-[1]" />
                    <div className="self-stretch h-[0.5rem] relative rounded-[4.58px] bg-[#fff] z-[1]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch [filter:drop-shadow(8px_24px_96px_rgba(126,_138,_253,_0.08))] flex flex-col items-start justify-start pt-[3.8rem] pb-[0rem] pl-[1.562rem] pr-[0.875rem] mt-[-2.494rem]">
                <div className="w-[13.413rem] rounded-[10.47px] bg-[#fff] flex flex-col items-start justify-start pt-[1.281rem] px-[1.375rem] pb-[0.943rem] box-border relative gap-[1.043rem] z-[2]">
                  <div className="w-[13.413rem] h-[12.888rem] relative rounded-[10.47px] bg-[#fff] hidden z-[0]" />
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.312rem]">
                      <div className="relative inline-block min-w-[4.125rem] z-[1]">
                        Sales trend
                      </div>
                      <b className="relative text-[2.094rem] tracking-[-0.03em] leading-[2.313rem] inline-block text-[#03133d] min-w-[4.375rem] z-[1] mq450:text-[1.25rem] mq450:leading-[1.375rem] mq750:text-[1.688rem] mq750:leading-[1.813rem]">
                        68%
                      </b>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.125rem] pb-[0.256rem]">
                    <img
                      className="h-[3.006rem] w-[9.681rem] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/grafik.svg"
                    />
                  </div>
                  <div className="w-[9.375rem] flex flex-col items-start justify-start gap-[0.687rem]">
                    <div className="w-[4.375rem] h-[0.5rem] relative rounded-[10.47px] bg-[#edf1fc] z-[1]" />
                    <div className="self-stretch h-[0.5rem] relative rounded-[10.47px] bg-[#edf1fc] z-[1]" />
                  </div>
                  <div className="w-[31.856rem] h-[18.25rem] absolute !m-[0] top-[-3.794rem] right-[-16.875rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[10.47px] bg-[#fff] w-full h-full" />
                    <div className="absolute top-[2.225rem] left-[0rem] rounded-t-[0px] rounded-b-[10.47px] bg-[rgba(235,247,255,0.2)] w-[31.856rem] h-[16.025rem] z-[1]" />
                    <img
                      className="absolute top-[0.781rem] left-[1.569rem] w-[3.925rem] h-[0.788rem] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/circle.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.062rem] mt-[-12.888rem] text-center text-[1.306rem] text-[#060c3b]">
                  <div className="w-[13.413rem] rounded-[10.47px] bg-[#fff] flex flex-col items-end justify-start pt-[0.781rem] pb-[0.943rem] pl-[1.437rem] pr-[2rem] box-border gap-[1.575rem] z-[2]">
                    <div className="w-[13.413rem] h-[12.888rem] relative rounded-[10.47px] bg-[#fff] hidden" />
                    <div className="flex flex-row items-start justify-end py-[0rem] px-[2.687rem]">
                      <img
                        className="h-[3.794rem] w-[3.794rem] relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group-350.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[1.356rem]">
                      <div className="w-[9.156rem] flex flex-row items-start justify-end py-[0rem] px-[0.187rem] box-border">
                        <div className="h-[2.75rem] flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="flex flex-col items-start justify-start gap-[0.131rem]">
                            <b className="relative leading-[1.438rem] inline-block min-w-[2.75rem] z-[1] mq450:text-[1.063rem] mq450:leading-[1.125rem]">
                              62%
                            </b>
                            <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.375rem] pr-[0.437rem] text-[1.044rem] text-[#5d6180]">
                              <div className="relative leading-[110%] inline-block min-w-[1.938rem] z-[1]">
                                July
                              </div>
                            </div>
                          </div>
                          <div className="h-[2.813rem] w-[0.063rem] relative border-[#b4b6c4] border-r-[1px] border-solid box-border opacity-[0.3] z-[1]" />
                          <div className="flex flex-col items-end justify-start gap-[0.131rem]">
                            <div className="flex flex-row items-start justify-end py-[0rem] pl-[0.312rem] pr-[0.187rem]">
                              <b className="relative leading-[1.438rem] inline-block min-w-[2.813rem] z-[1] mq450:text-[1.063rem] mq450:leading-[1.125rem]">
                                38%
                              </b>
                            </div>
                            <div className="relative text-[1.044rem] leading-[110%] text-[#5d6180] inline-block min-w-[3.375rem] z-[1]">
                              August
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start relative">
                        <div className="h-[0.5rem] w-[3.313rem] absolute !m-[0] bottom-[0rem] left-[0rem] rounded-[10.47px] bg-[#edf1fc] z-[1]" />
                        <div className="flex-1 flex flex-col items-end justify-start gap-[0.687rem]">
                          <div className="self-stretch h-[0.5rem] relative rounded-[10.47px] bg-[#edf1fc] z-[1]" />
                          <div className="w-[6.188rem] h-[0.5rem] relative rounded-[10.47px] bg-[#edf1fc] z-[1]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;
