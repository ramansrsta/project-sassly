import { FC, useMemo, CSSProperties } from "react";

export type LabelProps = {
  className?: string;
  paragraph?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Label: FC<LabelProps> = ({
  className = "",
  propBackgroundColor,
  paragraph,
  propMinWidth,
}) => {
  const labelStyle: CSSProperties = useMemo(
    () => ({
      backgroundColor: propBackgroundColor,
    }),
    [propBackgroundColor]
  );

  const paragraphStyle: CSSProperties = useMemo(
    () => ({
      minWidth: propMinWidth,
    }),
    [propMinWidth]
  );

  return (
    <div
      className={`absolute top-4 left-4 rounded-md bg-[#00c150] flex items-center justify-center py-1 px-2 text-xs text-white font-dm-sans ${className}`}
      style={labelStyle}
    >
      <div className="relative leading-5 inline-block" style={paragraphStyle}>
        {paragraph}
      </div>
    </div>
  );
};

export default Label;
