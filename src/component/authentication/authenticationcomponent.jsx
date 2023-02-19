import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from '../sign-up-form/sign-up-form.component';
import SignInForm from '../sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {
  useEffect(() => {
    const getResult = async () => {
      const res = await getRedirectResult(auth);
      createUserDocumentFromAuth(res.user);
    }
    getResult();
  }, []);

  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;