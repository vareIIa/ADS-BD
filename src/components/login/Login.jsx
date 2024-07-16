import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <GoogleOAuthProvider clientId='131477099100-1jh414uqm62dm529pprahnpj2i37en5i.apps.googleusercontent.com'>
      <div className='pag1'>
        <div className='image'>
          <img src='./assets/logoLogin.svg' alt='Logo' />
        </div>
        <div className='login'>
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={responseGoogle}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
