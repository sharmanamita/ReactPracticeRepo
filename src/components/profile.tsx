import { ProfileCard } from "./profileCard";

const Profile = () => {
  return (
    <ProfileCard
      name="Namita"
      age={28}
      greeting={<strong>Hello, My name is Namita!</strong>}
    >
      <p>Hobbies: Reading, Travelling</p>
      <button>Save</button>
    </ProfileCard>
  );
};

export default Profile;
