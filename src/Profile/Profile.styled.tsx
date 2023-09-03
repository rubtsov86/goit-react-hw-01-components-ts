import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 5px;
  border: 1px solid grey;
  width: 220px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type InfoProps = {
  fontWeight?: number;
};

export const Info = styled.p<InfoProps>`
  margin: 0;
  font-weight: ${props => props.fontWeight};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ProfileImage = styled.img`
  display: block;
  width: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const StatsList = styled.ul`
  width: 200px;
  padding: 0;
  margin-bottom: 0;
  list-style: none;
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

export const StatsListItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 33%;
  border: 1px solid grey;
  font-size: 12px;
  background-color: lightgray;
`;

export const StatsListItemInfo = styled.span`
  display: block;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
