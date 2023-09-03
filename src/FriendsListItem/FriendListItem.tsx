import { Status, Item, FriendImage } from './FriendsListItem.styled';

export interface IFriendListItem {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export const FriendListItem: React.FC<
  Pick<IFriendListItem, 'avatar' | 'isOnline' | 'name'>
> = ({ avatar, name, isOnline }) => {
  return (
    <Item className="item">
      <Status isOnline={isOnline}></Status>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};
