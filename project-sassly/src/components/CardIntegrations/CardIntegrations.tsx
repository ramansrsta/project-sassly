import { FC, useMemo, type CSSProperties } from "react";
import Button from "../common/Button/Button";

export type CardIntegrationsType = {
  className?: string;
  patern?: string;
  iconFillgoogle?: string;
  google?: string;
  button?: string;
  propHeight?: string;
  propAlignSelf?: string;
  propWidth?: string;
  propFlex?: string;
  propMinWidth1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propMinWidth?: CSSProperties["minWidth"];
};

const CardIntegrations: FC<CardIntegrationsType> = ({
  className = "",
  patern,
  propBackgroundColor,
  iconFillgoogle,
  propOverflow,
  google,
  propMinWidth,
  button,
  propHeight,
  propAlignSelf,
  propWidth,
  propFlex,
  propMinWidth1,
}) => {
  const iconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const iconFillgoogleStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const googleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`rounded-[10px] bg-[#fff] overflow-hidden flex flex-col items-center justify-start p-[1.5rem] relative gap-[3rem] text-center text-[1.5rem] text-[#006fba] font-['DM_Sans'] mq450:gap-[1.5rem] ${className}`}
    >
      <img
        className="w-[23.438rem] h-[15rem] absolute !m-[0] top-[0rem] left-[0rem] object-cover"
        alt=""
        src={patern}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] z-[1]">
        <div
          className="rounded-[10px] bg-[#e95c49] flex flex-row items-start justify-start p-[0.5rem]"
          style={iconStyle}
        >
          <img
            className="h-[3rem] w-[3rem] relative"
            loading="lazy"
            alt=""
            src={iconFillgoogle}
            style={iconFillgoogleStyle}
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
          <h3
            className="m-[0px] relative text-inherit tracking-[-0.03em] leading-[110%] font-bold font-[inherit] inline-block min-w-[4.875rem] mq450:text-[1.188rem] mq450:leading-[1.313rem]"
            style={googleStyle}
          >
            {google}
          </h3>
          <div className="h-[4.125rem] relative text-[1rem] leading-[140%] text-[#68718b] inline-block">
            <p className="m-[0px]">Lorem ipsum dolor sit amet,</p>
            <p className="m-[0px]">consectetur adipiscing elit. Duis</p>
            <p className="m-[0px]">risus dui faucibus eu.</p>
          </div>
        </div>
      </div>
      <Button
        height={propHeight}
        alignSelf={propAlignSelf}
        width={propWidth}
        flex={propFlex}
        minWidth={propMinWidth1}
      >
        {button}
      </Button>
    </div>
  );
};

export default CardIntegrations;
