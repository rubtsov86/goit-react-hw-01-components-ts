import { IFriendListItem, FriendListItem } from './FriendListItem';

interface IFriendList {
  friends: IFriendListItem[];
}

export const FriendList: React.FC<IFriendList> = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendListItem
          id={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};
