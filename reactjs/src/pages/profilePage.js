import LineWithTitle from "../components/lineWithTitle";
import ProfileForm from "../components/profileForm";

export default function ProfilePage() {
    return (
      <div>
        <div>
          <LineWithTitle title="Profil"/>
        </div>
        <div>
          <ProfileForm/>
        </div>
      </div>
    );
  }
  