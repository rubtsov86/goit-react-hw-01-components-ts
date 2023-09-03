import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
  background-color: ${getRandomHexColor};
  color: #fff;
  width: 20%;
  padding: 10px;
  font-size: 14px;
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 10px;
`;
