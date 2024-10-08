import { styled } from "styled-components";
import { HelpnodeIcon } from "../assets/helpnode-icon";

const FooterStyles = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding-bottom: 0.5rem;

  .first {
    font-size: 0.7rem;
    font-weight: 300;
    color: var(--clr-text-100);
  }

  .second {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--clr-text-100);
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <span className="first">Powered by</span>
      <HelpnodeIcon />
      <span className="second">Helpnode</span>
    </FooterStyles>
  );
};
