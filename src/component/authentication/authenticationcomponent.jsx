import { useEffect, useContext } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from '../sign-up-form/sign-up-form.component';
import SignInForm from '../sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
import { UserContext } from "../../context/user.context";

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

  const val = useContext(UserContext);
  return (
    <div className="authentication-container">
      {
        !val.currentUser &&
        (<>
          <SignInForm />
          <SignUpForm />
        </>)
      }
      {
        val.currentUser &&
        (<>
          <h1>You have already logined</h1>
        </>)
      }
    </div>
  );
};

export default Authentication;