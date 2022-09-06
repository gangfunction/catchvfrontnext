import PasswordChangeForm from "../../components/member/PasswordChangeForm";
import ProfileStatus from "../../components/profile/ProfileStatus";
import UrlStatus from "../../components/profile/UrlStatus";

function ProfilePage() {
  return (
    <>
      <ProfileStatus/>
      <UrlStatus/>
      <PasswordChangeForm />

    </>
  );
}

export default ProfilePage;
//npm run dev