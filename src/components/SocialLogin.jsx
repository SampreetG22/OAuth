import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase_config";

function SocialLogin() {
  const provider = new GoogleAuthProvider();

  const signUpWithGoogle = () => {
    console.log("Called");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential.accessToken, result.user);
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error, credential);
      });
  };
  return (
    <div className="social-login">
      <button className="social-button" onClick={signUpWithGoogle}>
        <img src="google.svg" alt="Google" className="social-icon" />
        Google
      </button>
      <button className="social-button">
        <img src="apple.svg" alt="Apple" className="social-icon" />
        Apple
      </button>
    </div>
  );
}

export default SocialLogin;
