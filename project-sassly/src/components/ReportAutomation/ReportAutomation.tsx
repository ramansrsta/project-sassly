import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ReportAutomationType = {
  className?: string;
  iconOutlinepieChart?: string;
  report?: string;
  automation?: string;
  montesNasceturRidiculusMus?: string;
  donecQuamFelis?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const ReportAutomation: FunctionComponent<ReportAutomationType> = ({
  className = "",
  iconOutlinepieChart,
  report,
  automation,
  montesNasceturRidiculusMus,
  donecQuamFelis,
  propAlignSelf,
  propAlignSelf1,
  propHeight,
  propDisplay,
}) => {
  const reportAutomationStyle: CSSProperties = useMemo(
    () => ({
      alignSelf: propAlignSelf,
    }),
    [propAlignSelf]
  );

  const textStyle: CSSProperties = useMemo(
    () => ({
      alignSelf: propAlignSelf1,
    }),
    [propAlignSelf1]
  );

  const montesNasceturRidiculusContainerStyle: CSSProperties = useMemo(
    () => ({
      height: propHeight,
      display: propDisplay,
    }),
    [propHeight, propDisplay]
  );

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1.5rem] text-[#006fba] font-['DM_Sans'] ${className}`}
      style={reportAutomationStyle}
    >
      <div className="rounded-[10px] [background:linear-gradient(52.37deg,_#0097fe,_#14358a)] flex flex-col items-center justify-center p-[1rem] gap-[0.625rem]">
        <img
          className="w-[2rem] h-[2rem] relative object-cover"
          loading="lazy"
          alt=""
          src={iconOutlinepieChart}
        />
        <div className="w-[5.5rem] h-[5.5rem] relative rounded-[50%] [background:linear-gradient(135deg,_#ebf7ff,_rgba(235,_247,_255,_0))] hidden" />
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]"
        style={textStyle}
      >
        <h3 className="m-[0px] relative text-inherit tracking-[-0.03em] leading-[110%] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.313rem]">
          <p className="m-[0px]">{report}</p>
          <p className="m-[0px]">{automation}</p>
        </h3>
        <div
          className="h-[2.75rem] relative text-[1rem] leading-[140%] text-[#68718b] inline-block"
          style={montesNasceturRidiculusContainerStyle}
        >
          <p className="m-[0px]">{montesNasceturRidiculusMus}</p>
          <p className="m-[0px]">{donecQuamFelis}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportAutomation;
