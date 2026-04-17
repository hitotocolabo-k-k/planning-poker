import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleAd } from '../../components/GoogleAd/GoogleAd';

// ガイド項目の型
type GuideItem = {
  title: string;
  description: string;
};

export const GuidePage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <GuideContent />
      <GoogleAd />
    </div>
  );
};

export const GuideContent = () => {
  const { t } = useTranslation();
  const items = t('GuidePage.items', { returnObjects: true }) as GuideItem[];

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='w-full max-w-3xl flex flex-col items-center justify-center my-8'>
        <div className='animate-fade-in-down'>
          <h2 className='text-2xl font-bold mb-4'>{t('GuidePage.title')}</h2>
          <div className='text-base'>
            {items.map((item, idx) => (
              <Fragment key={idx}>
                <p>
                  {idx + 1}. <b>{item.title}</b>:
                  <br />
                  {item.description}
                </p>
                {idx < items.length - 1 && <br />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
