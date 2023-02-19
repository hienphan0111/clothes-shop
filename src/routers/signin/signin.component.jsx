import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../component/categories/sign-up-form/sign-up-form.component";

const SignIn = () => {
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
    <div>
      <div>
        <button onClick={logGoogleUser}>Click here to SignIn Popup</button>
        <button onClick={signInWithGoogleRedirect}>Click here to SignIn redirect</button>

      </div>
      <div>
        <SignUpForm />

      </div>
    </div>
  );
};

export default SignIn;