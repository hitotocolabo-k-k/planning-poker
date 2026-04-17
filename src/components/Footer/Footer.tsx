import { CopyrightSVG } from '../SVGs/CopyrightSVG';

export const Footer = () => {
  // 社内利用版ではフッター全体を非表示（著作権は LICENSE ファイルで担保）
  // 必要になったらこの return null を削除して元の表示に戻せる
  return null;

  // eslint-disable-next-line no-unreachable
  return (
    <footer>
      <div className='border-b border-gray-300'></div>
      <div className='flex w-full items-center justify-center p-2'>
        <div className='flex items-center justify-center'>
          <CopyrightSVG />
          <p className='text-sm pl-1 pb-0.5'>hellomuthu23</p>
        </div>
      </div>
    </footer>
  );
};
