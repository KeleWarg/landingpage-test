import React from "react";
import { GridRow, GridCol } from "../../../../components/ui/grid";
import { RatingsSection } from "../RatingsSection/RatingsSection";
import { MethodologySection } from "../MethodologySection/MethodologySection";
import { TeamSection } from "../TeamSection/TeamSection";

interface EvaluationSectionProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface NavigationTab {
  id: string;
  label: string;
  width: string;
}

interface StatisticData {
  number: string;
  title: string;
  description: string;
}

const NAVIGATION_TABS: NavigationTab[] = [
  { id: "overview", label: "Overview", width: "w-[132px]" },
  { id: "methodology", label: "Our Methodology", width: "w-[192px]" },
  { id: "research", label: "Data Research", width: "w-[176px]" },
  { id: "team", label: "Our Team", width: "w-[142px]" },
];

const STATISTICS_DATA: StatisticData[] = [
  {
    number: "90,024+",
    title: "Datapoints Evaluated",
    description: "This is a sample sentence with a character limit set at 84 characters as max-limit..",
  },
  {
    number: "2,600",
    title: "Pet Owners Surveyed",
    description: "This is a sample sentence with a character limit set at 84 characters as max-limit..",
  },
  {
    number: "300",
    title: "Breeds Assessed",
    description: "This is a sample sentence with a character limit set at 84 characters as max-limit..",
  },
  {
    number: "36",
    title: "Coverage Categories",
    description: "This is a sample sentence with a character limit set at 84 characters as max-limit..",
  },
];

const TabButton: React.FC<{
  tab: NavigationTab;
  isActive: boolean;
  onClick: () => void;
}> = ({ tab, isActive, onClick }) => {
  if (isActive) {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer h-14 bg-black shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-[40px] justify-center items-center gap-2 flex ${tab.width}`}
      >
        <div className="px-4 py-2">
          <div className="text-center text-white text-base font-work-sans font-semibold leading-[15px] break-words">
            {tab.label}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer h-14 bg-[#FAFAFB] shadow-[0px_0px_0.5px_rgba(0,0,0,0.11)_inset] rounded-[28px] flex-col justify-start items-start gap-2 inline-flex ${tab.width}`}
    >
      <div className="h-14 px-4 justify-start items-center inline-flex">
        <div className="justify-start items-center flex">
          <div className="w-[38px] h-6 pr-[14px] inline-flex flex-col justify-start items-start">
            <div className="w-6 h-6 flex justify-center items-center">
              <img
                src="/Plus.svg"
                alt="Plus icon"
                className="w-6 h-6"
              />
            </div>
          </div>
          <div className="text-center justify-center flex flex-col text-[#1D1D1F] text-sm font-work-sans font-semibold leading-5 break-words">
            {tab.label}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatisticCard: React.FC<{ stat: StatisticData; index: number }> = ({ stat, index }) => (
  <div className="flex-1 min-w-[144px] flex-col justify-start items-start gap-3 inline-flex">
    <div className={`self-stretch text-white text-2xl leading-[29px] break-words font-schnyder-bold schnyder-test ai-style-change-${10 + index}`} style={{ fontFamily: 'Schnyder S', fontWeight: 700 }}>
      {stat.number}
    </div>
    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch text-white text-sm font-semibold leading-6 break-words" style={{ fontFamily: 'Work Sans' }}>
        {stat.title}
      </div>
      <div className="self-stretch text-white text-xs leading-5 break-words" style={{ fontFamily: 'Work Sans' }}>
        {stat.description}
      </div>
    </div>
  </div>
);

const OverviewSection: React.FC = () => (
  <div className="methodology-overview ai-style-change-7">
    <div className="flex flex-col gap-6">
      <div 
        className="Overview-text"
        data-show-read-more="false" 
        style={{
          width: '100%', 
          height: '100%', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          gap: '4px', 
          display: 'inline-flex'
        }}
      >
        <div style={{
          alignSelf: 'stretch', 
          color: 'var(--Color-Foreground-fg-body, #383C43)', 
          fontSize: '18px', 
          fontFamily: 'Georgia', 
          fontWeight: '400', 
          lineHeight: '26px', 
          wordWrap: 'break-word',
          marginBottom: '24px'
        }} className="ai-style-change-8">
          We analyzed key coverage factors—costs, pay-the-vet-directly options, 24/7 tele-vet access, and wellness add-ons. We reviewed 900,024 pet-insurance rates across the U.S., spanning 34 categories, and surveyed 2,600 pet parents across 300 breeds to deliver a comprehensive, transparent comparison. Data is updated regularly.
        </div>
      </div>
    </div>

    <div className="methodology-datapoint-block Overview-datapoints">
      <div className="w-full px-6 py-8 relative flex flex-col justify-start items-start gap-10 overflow-hidden ai-style-change-9">
        {/* Background Image */}
        <div className="w-full h-[295px] absolute left-0 top-0 overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src="/MethodologyImg.png" 
            alt="Background"
          />
        </div>

        {/* Header Section */}
        <div className="self-stretch justify-between items-center inline-flex flex-wrap relative z-10">
          <div className="max-w-[600px] min-w-[272px] text-white text-2xl font-semibold leading-[30px] break-words" style={{ fontFamily: 'Work Sans' }}>
            How We Evaluate Pet Insurance Providers
          </div>
          <div className="justify-end items-start gap-6 flex flex-wrap">
            <div className="w-[196px] justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                <img src="/Verified1.svg" alt="Verified" className="w-6 h-6" />
              </div>
              <div className="flex-1 justify-center items-center flex">
                <div className="flex-1 justify-center flex flex-col text-white text-sm font-semibold leading-6 break-words" style={{ fontFamily: 'Work Sans' }}>
                  EXPERT REVIEWED
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <img src="/tooltip.svg" alt="Tooltip" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="self-stretch justify-start items-start gap-5 inline-flex flex-wrap relative z-10">
          {STATISTICS_DATA.map((stat, index) => (
            <StatisticCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const EvaluationSection: React.FC<EvaluationSectionProps> = ({ 
  activeSection, 
  setActiveSection 
}) => {
  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "methodology":
        return (
          <>
            <RatingsSection />
            <MethodologySection />
          </>
        );
      case "research":
        return <div>Data Research content coming soon...</div>;
      case "team":
        return <TeamSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <section id="methodology" className="w-full border-t [border-top-style:solid] border-[#ced4db] flex flex-col py-8">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <header className="mb-8">
            <h1 
              style={{
                justifyContent: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                color: 'black', 
                fontSize: '40px', 
                fontFamily: 'Schnyder S', 
                fontWeight: '700', 
                lineHeight: '48px', 
                wordWrap: 'break-word'
              }}
            >
              How We Found The Best Pet Insurance Companies
            </h1>
          </header>
          
          <nav className="w-full justify-start items-center gap-4 inline-flex">
            {NAVIGATION_TABS.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeSection === tab.id}
                onClick={() => setActiveSection(tab.id)}
              />
            ))}
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-8">
        <div className="col-span-12">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};