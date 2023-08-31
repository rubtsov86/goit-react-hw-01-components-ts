export interface IFriendListItem {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export const FriendListItem: React.FC<IFriendListItem> = ({
  id,
  avatar,
  name,
  isOnline,
}) => {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};