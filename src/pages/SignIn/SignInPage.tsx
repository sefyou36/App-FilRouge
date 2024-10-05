/* eslint-disable react/react-in-jsx-scope */
import dynamic from 'next/dynamic';

const SignInPage = dynamic(() => import('../../components/SignInForm/SignInForm'), { ssr: false });

export default SignInPage;