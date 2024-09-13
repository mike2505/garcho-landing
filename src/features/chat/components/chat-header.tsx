import { styled } from "styled-components";
import { AngleLeftIcon } from "../assets/angle-left-icon";
import { useChatContext } from "../contexts/chat-context";

type ChatHeaderProps = {
  goBack: () => void;
};

const Header = styled.header`
  position: sticky;
  top: 0;
  height: 64px;
  background-color: var(--clr-primary-100);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: var(--clr-bg-100);

  .content {
    flex: 1;
    display: grid;

    .company {
      font-size: 0.9rem;
      font-weight: 600;
    }

    .subtitle {
      font-size: 0.9rem;
      color: var(--clr-bg-200);
    }
  }

  button {
    margin-left: auto;
    border-radius: 10px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus-visible {
      outline: 2px solid var(--clr-bg-100);
    }
  }
`;

export const ChatHeader: React.FC<ChatHeaderProps> = ({ goBack }) => {
  const { industry } = useChatContext();

  return (
    <Header>
      <button type="button" onClick={goBack}>
        <AngleLeftIcon />
      </button>

      <div className="content">
        <span className="company truncate">{industry}</span>
        <span className="subtitle truncate">Support assistant</span>
      </div>
    </Header>
  );
};
