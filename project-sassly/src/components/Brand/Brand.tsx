import { FC } from "react";
import FictionalCompanyLogo from "../FictionalCompanyLogo/FictionalCompanyLogo";

export type BrandProps = {
  className?: string;
};

const Brand: FC<BrandProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-center py-0 px-[0.187rem] box-border gap-[2.625rem] max-w-full mq750:gap-[1.313rem] mq1225:flex-wrap ${className}`}
    >
      <FictionalCompanyLogo
        propWidth="9.125rem"
        propGap="0.881rem"
        logomark="/logomark.svg"
        propWidth1="2.75rem"
        propPadding="0rem 0rem 0.3rem"
        logotype="/logotype.svg"
        propHeight="1.669rem"
      />
      <FictionalCompanyLogo
        propWidth="11.688rem"
        propGap="0.818rem"
        logomark="/logomark-1.svg"
        propWidth1="2.75rem"
        propPadding="0rem 0rem 0.468rem"
        logotype="/logotype-1.svg"
        propHeight="1.656rem"
      />
      <FictionalCompanyLogo
        propWidth="11.438rem"
        propGap="0.843rem"
        logomark="/logomark-2.svg"
        propWidth1="2.75rem"
        propPadding="0rem 0rem 0.731rem"
        logotype="/logotype-2.svg"
        propHeight="1.275rem"
      />
      <FictionalCompanyLogo
        propWidth="12.125rem"
        propGap="0.868rem"
        logomark="/logomark-3.svg"
        propWidth1="2.438rem"
        propPadding="0rem 0rem 0.268rem"
        logotype="/logotype-3.svg"
        propHeight="1.775rem"
      />
      <FictionalCompanyLogo
        logomark="/logomark-4.svg"
        logotype="/logotype-4.svg"
      />
    </div>
  );
};

export default Brand;
