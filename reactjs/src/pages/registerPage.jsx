import LineWithTitle from "../components/lineWithTitle";
import RegisterForm from "../components/registerForm";

const RegisterPage = (props) => {
  return (
    <div>
      <div className="slide2">
        <LineWithTitle title="Regisztráció" />
      </div>
      <div className="slide1">
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
