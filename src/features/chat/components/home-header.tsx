import { styled } from "styled-components";
import { useChatContext } from "../contexts/chat-context";

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem 1rem;
  z-index: 1;
`;

const H2 = styled.h2`
  font-weight: 700;
  color: var(--clr-neutral-100);
`;

const Span = styled.span`
  font-size: 0.8rem;
  color: var(--clr-Neutral-600);
`;

export const HomeHeader: React.FC = () => {
  const { industry } = useChatContext();

  return (
    <Header>
      <H2>{industry}</H2>
      <Span>AI Assistant</Span>
    </Header>
  );
};
