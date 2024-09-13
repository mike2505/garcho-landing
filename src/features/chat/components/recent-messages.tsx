import { styled } from "styled-components";
import { AngleRightIcon } from "../assets/angle-right-icon";
import { SendIcon } from "../assets/send-icon";
import { useCreateChat } from "../hooks/use-create-chat";

type RecentProps = {
  openChat: (id: string) => void;
  logo: React.ReactNode;
  companyName: string;
};

const Container = styled.section`
  background-color: var(--clr-bg-100);
  border-radius: 6px;
  border: 1px solid var(--clr-neutral-200);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 0.4rem;
  padding: 1rem;
`;

const H2 = styled.h2`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--clr-text-100);
`;

const RecentMessage = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;

  &:hover {
    background-color: var(--clr-bg-200);
  }

  &:active {
    background-color: var(--clr-bg-300);
  }

  .content {
    flex: 1;
    display: grid;
    text-align: start;

    .text {
      color: var(--clr-text-100);
      font-size: 0.9rem;
    }

    .company {
      color: var(--clr-text-300);
      font-size: 0.8rem;
    }
  }
`;

const Button = styled.button`
  background-color: var(--clr-primary-100);
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--clr-primary);
  font-weight: 600;
  border-radius: 6px;

  &:hover {
    background-color: var(--clr-primary-200);
  }

  &:active {
    background-color: var(--clr-primary-300);
  }
`;

export const Recent: React.FC<RecentProps> = ({
  openChat,
  logo,
  companyName,
}) => {
  const { mutate, isPending } = useCreateChat({ openChat });

  return (
    <Container>
      {/* <H2>Recent message:</H2> */}

      {/* <RecentMessage>
        {logo}
        <div className="content">
          <span className="text">I understand. Goodbye.</span>
          <span className="company">{companyName} Support</span>
        </div>

        <AngleRightIcon />
      </RecentMessage> */}

      <Button disabled={isPending} onClick={() => mutate({})}>
        {isPending ? "Starting chat..." : "Start a new chat"}
        <SendIcon />
      </Button>
    </Container>
  );
};
