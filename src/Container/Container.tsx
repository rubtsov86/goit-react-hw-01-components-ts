import { Wrapper } from './Container.styled';

type Props = {
  children: JSX.Element[];
};

export const Container: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
