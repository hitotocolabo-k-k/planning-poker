import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

// 各見積もり例の型
type ExampleItem = {
  userStory: string;
  estimation: string;
  rationale: string;
};

export const ExamplesPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <ExamplesContent />
    </div>
  );
};

export const ExamplesContent = () => {
  const { t } = useTranslation();

  // 例のリストと共通ラベルを翻訳 JSON から取得
  const items = t('ExamplesPage.items', { returnObjects: true }) as ExampleItem[];
  const userStoryLabel = t('ExamplesPage.labels.userStory');
  const estimationLabel = t('ExamplesPage.labels.estimation');
  const rationaleLabel = t('ExamplesPage.labels.rationale');
  const noteLabel = t('ExamplesPage.labels.note');

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='w-full max-w-3xl flex flex-col items-center justify-center my-8'>
        <div className='animate-fade-in-down'>
          <h2 className='text-2xl font-bold mb-4'>{t('ExamplesPage.title')}</h2>
          <div className='text-base'>
            {items.map((item, idx) => (
              <Fragment key={idx}>
                <p>
                  <b>{userStoryLabel}</b> {item.userStory}
                  <br />
                  <br />
                  <b>{estimationLabel}</b> {item.estimation}
                  <br />
                  <br />
                  <b>{rationaleLabel}</b> {item.rationale}
                </p>
                <hr className='my-6 border-t border-gray-300' />
              </Fragment>
            ))}

            <p>
              <b>{noteLabel}</b> {t('ExamplesPage.note')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
