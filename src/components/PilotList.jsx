import { Profile } from './Profile';

export const PilotList = ({ items }) => {
  return (
    <ul>
      {items.map(value => (
        <li key={value.id}>
          <Profile pilot={value} />
        </li>
      ))}
    </ul>
  );
};
