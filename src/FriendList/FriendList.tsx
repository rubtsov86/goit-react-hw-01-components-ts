import {
  IFriendListItem,
  FriendListItem,
} from '../FriendsListItem/FriendListItem';
import { List } from './FriendList.styled';

interface IFriendList {
  friends: IFriendListItem[];
}

export const FriendList: React.FC<IFriendList> = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </List>
  );
};
