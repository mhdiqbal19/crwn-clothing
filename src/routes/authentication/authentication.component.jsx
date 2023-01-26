import SingInForm from "../../components/sing-in-form/sign-in-form.component";
import SignUpForm from "../../components/sing-up-form/sign-up-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SingInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
