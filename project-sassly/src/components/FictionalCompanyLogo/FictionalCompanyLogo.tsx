import { FC, useMemo, CSSProperties } from "react";

export type FictionalCompanyLogoProps = {
  className?: string;
  logomark?: string;
  logotype?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propWidth1?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
};

const FictionalCompanyLogo: FC<FictionalCompanyLogoProps> = ({
  className = "",
  propWidth,
  propGap,
  logomark,
  propWidth1,
  propPadding,
  logotype,
  propHeight,
}) => {
  const fictionalCompanyLogoStyle = useMemo<CSSProperties>(
    () => ({
      width: propWidth,
      gap: propGap,
    }),
    [propWidth, propGap]
  );

  const logomarkIconStyle = useMemo<CSSProperties>(
    () => ({
      width: propWidth1,
    }),
    [propWidth1]
  );

  const frameDivStyle = useMemo<CSSProperties>(
    () => ({
      padding: propPadding,
    }),
    [propPadding]
  );

  const logotypeIconStyle = useMemo<CSSProperties>(
    () => ({
      height: propHeight,
    }),
    [propHeight]
  );

  return (
    <div
      className={`w-[13.5rem] flex flex-row items-start justify-start py-[0.125rem] px-0 box-border gap-[0.843rem] ${className}`}
      style={fictionalCompanyLogoStyle}
    >
      <img
        className="h-[2.75rem] w-[2.25rem] relative"
        alt="Company Logo Mark"
        src={logomark}
        style={logomarkIconStyle}
      />
      <div
        className="flex-1 flex flex-col items-start justify-start pt-[0.687rem] px-0"
        style={frameDivStyle}
      >
        <img
          className="self-stretch h-[1.269rem] relative max-w-full overflow-hidden shrink-0"
          alt="Company Logo Type"
          src={logotype}
          style={logotypeIconStyle}
        />
      </div>
    </div>
  );
};

export default FictionalCompanyLogo;
