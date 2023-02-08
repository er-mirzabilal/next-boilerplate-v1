import type { ReactNode } from 'react';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className='w-full px-1 text-gray-700 antialiased bg-green-300'>
    <div className='mx-auto max-w-screen-md bg-slate-50 text-center'>
    

      <main className='content py-5 text-xl'>{props.children}</main>
    </div>
  </div>
);

export { Main };
