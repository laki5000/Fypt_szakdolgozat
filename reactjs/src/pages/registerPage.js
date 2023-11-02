import LineWithTitle from '../components/lineWithTitle';
import RegisterForm from '../components/registerForm';

export default function RegisterPage() {
    return (
      <div>
        <div>
          <LineWithTitle title="Regisztráció"/>
        </div>
        <div>
          <RegisterForm/>
        </div>
      </div>
    );
  }
  