import LineWithTitle from "../components/lineWithTitle";
import RegisterForm from "../components/registerForm";

const RegisterPage = (props) => {
  return (
    <div>
      <div>
        <LineWithTitle title="Regisztráció" />
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
