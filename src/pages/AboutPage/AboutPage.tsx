import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider } from '../../components/Divider/Divider';
import { GoogleAd } from '../../components/GoogleAd/GoogleAd';
import { BenefitsSVG } from '../../components/SVGs/Benefits';
import { BestPracticeSVG } from '../../components/SVGs/BestPractice';
import { HowSVG } from '../../components/SVGs/How';
import { WhatSVG } from '../../components/SVGs/What';

// リストアイテムの型（howItWorks / benefits / bestPractices 共通）
type LetteredItem = {
  title: string;
  description: string;
};

export const AboutPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <AboutPlanningPokerContent />
      <GoogleAd />
    </div>
  );
};

export const AboutPlanningPokerContent = () => {
  const { t } = useTranslation();

  // 配列・オブジェクトを翻訳 JSON から直接取得する
  const whatIsParagraphs = t('HomePage.about.whatIs.paragraphs', {
    returnObjects: true,
  }) as string[];
  const howItems = t('HomePage.about.howItWorks.items', {
    returnObjects: true,
  }) as LetteredItem[];
  const benefitItems = t('HomePage.about.benefits.items', {
    returnObjects: true,
  }) as LetteredItem[];
  const bestPracticeItems = t('HomePage.about.bestPractices.items', {
    returnObjects: true,
  }) as LetteredItem[];

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='animate-fade-in-down'>
        {/* What is Agile Planning Poker */}
        <div className='flex flex-col lg:flex-row w-full items-center justify-center my-8'>
          <div className='w-full lg:w-1/2 px-4 mb-8 lg:mb-0'>
            <div className='HomePageContainer'>
              <h2 className='text-2xl font-bold mb-4'>
                {t('HomePage.about.whatIs.title')}
              </h2>
              <p className='text-base'>
                {whatIsParagraphs.map((paragraph, idx) => (
                  <Fragment key={idx}>
                    {paragraph}
                    {idx < whatIsParagraphs.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4 flex justify-center'>
            <div className='HomePageContainer p-4'>
              <WhatSVG />
            </div>
          </div>
        </div>

        <Divider />
        {/* How Agile Planning Poker Works */}
        <div className='flex flex-col lg:flex-row w-full items-center justify-center my-8'>
          <div className='w-full lg:w-1/2 px-4 flex justify-center mb-8 lg:mb-0'>
            <div className='HomePageContainer p-4'>
              <HowSVG />
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='HomePageContainer'>
              <h2 className='text-2xl font-bold mb-4'>
                {t('HomePage.about.howItWorks.title')}
              </h2>
              <LetteredList items={howItems} />
            </div>
          </div>
        </div>

        <Divider />
        {/* Benefits of Agile Planning Poker */}
        <div className='flex flex-col lg:flex-row w-full items-center justify-center my-8'>
          <div className='w-full lg:w-1/2 px-4 mb-8 lg:mb-0'>
            <div className='HomePageContainer'>
              <h2 className='text-2xl font-bold mb-4'>
                {t('HomePage.about.benefits.title')}
              </h2>
              <LetteredList items={benefitItems} />
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4 flex justify-center'>
            <div className='HomePageContainer p-4'>
              <BenefitsSVG />
            </div>
          </div>
        </div>

        <Divider />
        {/* Best Practices for Agile Planning Poker */}
        <div className='flex flex-col lg:flex-row w-full items-center justify-center my-8'>
          <div className='w-full lg:w-1/2 px-4 flex justify-center mb-8 lg:mb-0'>
            <div className='HomePageContainer p-4'>
              <BestPracticeSVG />
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='HomePageContainer'>
              <h2 className='text-2xl font-bold mb-4'>
                {t('HomePage.about.bestPractices.title')}
              </h2>
              <LetteredList items={bestPracticeItems} />
              <p className='text-base mt-4'>
                {t('HomePage.about.bestPractices.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// a. / b. / c. ... の接頭辞付きリストを描画する共通コンポーネント
const LetteredList = ({ items }: { items: LetteredItem[] }) => (
  <p className='text-base'>
    {items.map((item, idx) => (
      <Fragment key={idx}>
        {String.fromCharCode(97 + idx)}. <b>{item.title}</b>: {item.description}
        {idx < items.length - 1 && <br />}
      </Fragment>
    ))}
  </p>
);
