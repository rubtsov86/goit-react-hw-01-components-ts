import styled from '@emotion/styled';

export const Status = styled.span<{ isOnline: boolean }>`
  background-color: ${({ isOnline, theme }) => {
    console.log(theme.color.primary);
    return isOnline === true ? 'green' : 'red';
  }};
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  border: 1px solid grey;
  padding: 5px;
  width: 150px;
  border-radius: 5px;
`;

export const FriendImage = styled.img`
  display: block;
  margin-right: 10px;
  margin-left: 10px;
`;
