import { FC, useMemo, type CSSProperties } from "react";
import Button from "../Button/Button";

export type TrackingDataType = {
  className?: string;
  iconOutlinetimer?: string;
  realTimeDataAnalytics?: string;
  penatibusEtMagnisDisParturient?: string;
  button?: string;
  propHeight?: string;
  propAlignSelf?: string;
  propWidth?: string;
  propFlex?: string;
  propMinWidth?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propDisplay?: CSSProperties["display"];
};

const TrackingData: FC<TrackingDataType> = ({
  className = "",
  propPadding,
  iconOutlinetimer,
  propGap,
  realTimeDataAnalytics,
  propDisplay,
  penatibusEtMagnisDisParturient,
  button,
  propHeight,
  propAlignSelf,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const trackingDataStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const headlineStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const realTimeDataStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className={`w-[30rem] flex flex-col items-start justify-start pt-[3.218rem] px-[0rem] pb-[0rem] box-border min-w-[30rem] max-w-full text-left text-[2rem] text-[#006fba] font-['DM_Sans'] mq450:pt-[2.063rem] mq450:box-border mq750:min-w-full mq1050:flex-1 ${className}`}
      style={trackingDataStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[3rem] max-w-full mq750:gap-[1.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
          <div className="rounded-[10px] [background:linear-gradient(52.37deg,_#0097fe,_#14358a)] flex flex-row items-center justify-center p-[1rem] gap-[0.5rem]">
            <img
              className="h-[2rem] w-[2rem] relative object-cover"
              loading="lazy"
              alt=""
              src={iconOutlinetimer}
            />
            <div className="h-[4.5rem] w-[4.5rem] relative rounded-[50%] [background:linear-gradient(135deg,_#ebf7ff,_rgba(235,_247,_255,_0))] hidden" />
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[0.812rem] max-w-full"
            style={headlineStyle}
          >
            <h1
              className="m-[0px] relative text-inherit tracking-[-0.03em] leading-[105%] font-bold font-[inherit] inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.25rem] mq750:text-[1.625rem] mq750:leading-[1.688rem]"
              style={realTimeDataStyle}
            >
              {realTimeDataAnalytics}
            </h1>
            <div className="h-[4.125rem] relative text-[1rem] leading-[140%] text-[#68718b] inline-block">
              <p className="m-[0px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              </p>
              <p className="m-[0px]">
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              </p>
              <p className="m-[0px]">{penatibusEtMagnisDisParturient}</p>
            </div>
          </div>
        </div>
        <Button
          height={propHeight}
          alignSelf={propAlignSelf}
          width={propWidth}
          flex={propFlex}
          minWidth={propMinWidth}
        >
          {button}
        </Button>
      </div>
    </div>
  );
};

export default TrackingData;
