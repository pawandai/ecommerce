import { Icons } from '@/components/utility/Icons';
import Link from 'next/link';

const SignUp = () => {
  return (
    <>
      <div className='container relative pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center text-center space-y-2'>
            <Icons.logo className='w-20 h-20' />
            <h1 className='text-2xl font-bold'>Create an account</h1>
            <Link href={'/signin'}>Already have an account? Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
