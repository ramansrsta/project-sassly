import { FC } from "react";
import Label from "../common/Label/Label";
import Card from "../common/Card/Card";
import Button from "../common/Button/Button";

export type ArticleType = {
  className?: string;
};

const Article: FC<ArticleType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center py-[5rem] px-[1.25rem] box-border gap-[0.812rem] max-w-full z-[7] text-center text-[3rem] text-[#14358a] font-['DM_Sans'] mq750:pt-[3.25rem] mq750:pb-[3.25rem] mq750:box-border ${className}`}
    >
      <h1 className="m-[0px] relative text-inherit tracking-[-0.03em] leading-[6.313rem] font-bold font-[inherit] inline-block max-w-full mq450:text-[1.813rem] mq450:leading-[1.875rem] mq750:text-[2.375rem] mq750:leading-[2.5rem]">{`Our article on grow & tech`}</h1>
      <div className="w-[68.75rem] flex flex-col items-center justify-center gap-[3rem] max-w-full text-left text-[1.5rem] text-[#006fba] mq750:gap-[1.5rem]">
        <div className="self-stretch grid flex-row items-center justify-center py-[0rem] px-[0rem] box-border gap-[1.5rem] max-w-full grid-cols-[repeat(3,_minmax(263px,_1fr))] mq750:grid-cols-[minmax(263px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(263px,_456px))]">
          <div className="h-[23.375rem] shadow-[8px_16px_52px_rgba(126,_138,_253,_0.08)] rounded-[10px] bg-[#fff] overflow-hidden flex flex-col items-start justify-start relative max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-[1.5rem] pl-[1.5rem] pr-[1.25rem] gap-[0.75rem]">
              <h3 className="m-[0px] self-stretch relative text-inherit tracking-[-0.03em] leading-[110%] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.313rem]">
                <p className="m-[0px]">Digital Marketing Strategy</p>
                <p className="m-[0px]">in 2021</p>
              </h3>
              <div className="self-stretch relative text-[1rem] leading-[140%] text-[#68718b]">
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus. Maecenas..
              </div>
            </div>
            <Label
              propBackgroundColor="#ffae00"
              paragraph="Marketing"
              propMinWidth="4rem"
            />
          </div>
          <Card
            desc="Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas.."
            title="Best platform for business and productivity"
            image="/image-1@2x.png"
            paragraph="Technology"
            propBackgroundColor="#0097fe"
            propMinWidth="4.625rem"
          />
          <Card
            desc="Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas.."
            title="Social media can growth your business traffic"
            image="/image-2@2x.png"
            paragraph="Grow"
          />
        </div>
        <Button
          height="3.375rem"
          alignSelf="unset"
          width="9.438rem"
          flex="unset"
          minWidth="unset"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Article;
