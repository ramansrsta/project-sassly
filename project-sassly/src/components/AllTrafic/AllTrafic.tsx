import { FC, useMemo, CSSProperties } from "react";

export type AllTraficProps = {
  className?: string;
  icon?: string;
  allTraffic?: string;
  k?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const AllTrafic: FC<AllTraficProps> = ({
  className = "",
  icon,
  allTraffic,
  propMinWidth,
  k,
  propMinWidth1,
}) => {
  const allTrafficStyle = useMemo(
    () => ({ minWidth: propMinWidth }),
    [propMinWidth]
  );
  const kStyle = useMemo(() => ({ minWidth: propMinWidth1 }), [propMinWidth1]);

  return (
    <div
      className={`flex-1 rounded-lg bg-white border border-[#f5f5f5] box-border overflow-hidden flex flex-row items-start justify-start py-[0.875rem] px-4 gap-4 min-w-[11.188rem] z-2 text-left text-sm text-[#cdd0d8] font-dm-sans mq450:flex-wrap ${className}`}
    >
      {icon && (
        <img
          className="h-14 w-14 relative min-h-[3.5rem]"
          loading="lazy"
          alt="Icon"
          src={icon}
        />
      )}
      <div className="flex flex-col items-start justify-start pt-0.5">
        <div className="flex flex-col items-start justify-start gap-1">
          <div
            className="relative leading-5 font-medium inline-block min-w-[3.875rem]"
            style={allTrafficStyle}
          >
            {allTraffic}
          </div>
          <b
            className="relative text-[1.5rem] tracking-tight leading-[110%] inline-block text-[#1b2559] min-w-[5.438rem] mq450:text-[1.188rem] mq450:leading-[1.313rem]"
            style={kStyle}
          >
            {k}
          </b>
        </div>
      </div>
    </div>
  );
};

export default AllTrafic;
