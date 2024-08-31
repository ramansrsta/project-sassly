import { FC } from "react";
import Content from "../components/Content/Content";
import MainContent from "../components/MainContent/MainContent";
import FrameComponent from "../components/FrameComponent/FrameComponent";
import BrandContent from "../components/BrandContent/BrandContent";
import DataAnalytics from "../components/DataAnalytics/DataAnalytics";
import SocialMediaIntegrations from "../components/SocialMediaIntegrations/SocialMediaIntegrations";
import Article from "../components/Article/Article";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Homepage: FC = () => {
  return (
    <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <img
        className="w-[139.375rem] h-[50.375rem] absolute !m-[0] top-[0rem] left-[calc(50%_-_1115px)]"
        alt=""
        src="/backgroundhero.svg"
      />
      <Content />
      <MainContent />
      <FrameComponent />
      <BrandContent />
      <img
        className="w-[41.25rem] h-[13rem] absolute !m-[0] top-[90.313rem] left-[-24.562rem] z-[5]"
        alt=""
        src="/pattern-1.svg"
      />
      <DataAnalytics />
      <img
        className="w-[82.831rem] h-[104.188rem] absolute !m-[0] top-[152.125rem] right-[-1.394rem] z-[5]"
        alt=""
        src="/patern.svg"
      />
      <img
        className="w-[109.313rem] h-[65.625rem] absolute !m-[0] bottom-[122.688rem] left-[-13.062rem] z-[6]"
        alt=""
        src="/background-integrations.svg"
      />
      <SocialMediaIntegrations />
      <Article />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <CTA />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
