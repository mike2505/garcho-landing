import { styled } from "styled-components";
import { AngleRightIcon } from "../assets/angle-right-icon";
import { useCreateChat } from "../hooks/use-create-chat";
import { useGetInfo } from "../hooks/use-get-info";

type TopicsProps = {
  openChat: (id: string) => void;
};

export const PopularTopics: React.FC<TopicsProps> = ({ openChat }) => {
  const { data: info, isLoading } = useGetInfo();
  const { mutate } = useCreateChat({ openChat });

  if (isLoading) {
    return null;
  }

  return (
    <Container>
      <H2>Popular topics:</H2>
      <TopicsList>
        {info?.topics.map((topic) => (
          <Topic
            key={new Date().getTime() + topic.name}
            onClick={() => mutate({ question: topic.message })}
          >
            {topic.name}
            <AngleRightIcon />
          </Topic>
        ))}
      </TopicsList>
    </Container>
  );
};

const Container = styled.section``;

const H2 = styled.h2`
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.5rem 0.2rem;
  color: var(--clr-text-100);
`;

const TopicsList = styled.div`
  background-color: var(--clr-bg-100);
  border-radius: 6px;
  border: 1px solid var(--clr-neutral-200);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 0.4rem;
  padding: 0.4rem;
`;

const Topic = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-radius: 6px;
  color: var(--clr-text-100);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--clr-bg-200);
  }

  &:active {
    background-color: var(--clr-bg-300);
  }
`;
