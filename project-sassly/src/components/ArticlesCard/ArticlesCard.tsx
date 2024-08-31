import { FC } from "react";
import Label from "../Label/Label";

export type ArticlesCardProps = {
  className?: string;
  desc?: string;
  title?: string;
  image?: string;
  paragraph?: string;
  propBackgroundColor?: string;
  propMinWidth?: string;
};

const ArticlesCard: FC<ArticlesCardProps> = ({
  className = "",
  desc = "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..",
  title = "Social media can grow your business traffic",
  image,
  paragraph,
  propBackgroundColor,
  propMinWidth,
}) => {
  return (
    <div
      className={`h-[23.375rem] shadow-lg rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start relative max-w-full text-left text-xl text-[#006fba] font-dm-sans ${className}`}
    >
      <img
        className="self-stretch flex-1 max-w-full object-cover"
        alt={title}
        src={image}
      />
      <div className="flex flex-col items-start justify-start py-6 px-6 gap-3">
        <h3 className="m-0 self-stretch tracking-tight leading-[110%] font-bold mq450:text-[1.188rem] mq450:leading-[1.313rem]">
          {title}
        </h3>
        <div className="self-stretch text-base leading-[140%] text-[#68718b]">
          {desc}
        </div>
      </div>
      <Label
        propBackgroundColor={propBackgroundColor}
        paragraph={paragraph}
        propMinWidth={propMinWidth}
      />
    </div>
  );
};

export default ArticlesCard;
