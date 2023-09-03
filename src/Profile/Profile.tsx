import React from 'react';

import {
  Container,
  ProfileImage,
  ProfileDescription,
  Info,
  StatsList,
  StatsListItem,
  StatsListItemInfo,
} from './Profile.styled';

interface Profile {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

export const Profile: React.FC<Profile> = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) => (
  <Container>
    <ProfileDescription>
      <ProfileImage src={avatar} alt={username} />
      <Info fontWeight={700}>{username}</Info>
      <Info>{tag}</Info>
      <Info>{location}</Info>
    </ProfileDescription>

    <StatsList>
      <StatsListItem>
        <StatsListItemInfo className="label">Followers</StatsListItemInfo>
        <StatsListItemInfo className="quantity">{followers}</StatsListItemInfo>
      </StatsListItem>
      <StatsListItem>
        <StatsListItemInfo>Views</StatsListItemInfo>
        <StatsListItemInfo className="quantity">{views}</StatsListItemInfo>
      </StatsListItem>
      <StatsListItem>
        <StatsListItemInfo className="label">Likes</StatsListItemInfo>
        <StatsListItemInfo className="quantity">{likes}</StatsListItemInfo>
      </StatsListItem>
    </StatsList>
  </Container>
);
