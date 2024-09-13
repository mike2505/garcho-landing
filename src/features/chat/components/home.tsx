import { styled } from "styled-components";
import { CompanyLogo } from "../assets/company-logo";
import { Grid } from "../assets/grid";
import { useChatContext } from "../contexts/chat-context";
import { HomeHeader } from "./home-header";
import { PopularTopics } from "./popular-topics";
import { Recent } from "./recent-messages";

const Container = styled.section`
  height: 100%;
  overflow: auto;
`;

const Hero = styled.div`
  background-color: var(--clr-primary-opacity);
  padding-bottom: 4rem;
  overflow: hidden;
  position: relative;

  .title {
    padding: 0 1rem;
    margin-top: auto;
    display: block;
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--clr-neutral-200);
    z-index: 1;
  }

  .subtitle {
    padding: 0 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--clr-neutral-100);
    z-index: 1;
  }
`;

type HomeProps = {
  openChat: (id: string) => void;
};

export const Home: React.FC<HomeProps> = ({ openChat }) => {
  const { firstName } = useChatContext();

  return (
    <Container>
      <Hero>
        <HomeHeader />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
          }}
        >
          <div className="opacity-20">
            <Grid />
          </div>
        </div>

        <span className="title">Hello {firstName},</span>
        <span className="subtitle">How can we help?</span>
      </Hero>

      <div
        style={{
          padding: "0 1rem",
          transform: "translateY(-10%)",
        }}
      >
        <Recent
          openChat={openChat}
          logo={<CompanyLogo />}
          companyName="PHARMHOUSE"
        />

        <PopularTopics openChat={openChat} />
      </div>
    </Container>
  );
};
