import { BuiltInProviderType } from 'next-auth/providers';
import { ClientSafeProvider, getProviders, LiteralUnion, signIn  } from 'next-auth/react';
import Header from '../../components/Header';

const SignIn = ({ providers }: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> ) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
          className="w-80" 
          src="https://i.imgur.com/t0Cb491.png" 
          alt="" 
        />
        <p className="font-xs italic">
          This is not a REAL app, it is built for educational purposes only.
        </p>
        <p className="font-xs">
          Created by Brawer Nuñez
        </p>

        <div className="mt-40">
          {
            Object.values(providers).map(({ id, name }) => (
              <div key={ name }>
                <button 
                  className="p-3 bg-blue-500 rounded-lg text-white"
                  onClick={() => signIn( id, { callbackUrl: "/"} )}
                >
                    Sign in with { name }
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SignIn;

export const getServerSideProps = async() => {
  const providers = await getProviders();
  
  return {
    props: {
      providers
    }
  }
}
