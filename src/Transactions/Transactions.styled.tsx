import styled from '@emotion/styled';

export const TH = styled.th`
  width: 80px;
  padding: 10px;
  text-align: center;
  background-color: blue;
`;

export const TD = styled.td`
  width: 80px;
  padding: 10px;
  text-align: center;
`;

export const TR = styled.tr`
  &:nth-child(2n) {
    background-color: grey;
  }
`;
