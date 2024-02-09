export const Profile = ({ pilot: { name, email, avatar, age, active } }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="180" height="180" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>
      <p>{active ? 'Active' : 'Retired'}</p>
    </div>
  );
};
