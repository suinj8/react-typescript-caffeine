import styled from "styled-components";
import fonts from "../../../styles/fonts";

import CommunityCard from "../../../components/CommunityCard";

import { ICommunity } from "../../../types/type";

interface CommunityProps {
  CommunityTitle: string;
  CommunityCards: ICommunity[];
}

const Community = ({ CommunityTitle, CommunityCards }: CommunityProps) => {
  return (
    <CommunitySection>
      <div className="community">
        <div className="comminity-title">{CommunityTitle}</div>
        <div className="community-cards">
          {CommunityCards.map((CommCard: ICommunity) => (
            <CommunityCard
              key={`community-${CommCard.ID}`}
              ID={CommCard.ID}
              type={CommCard.type}
              title={CommCard.title}
              content={CommCard.content}
              comment={CommCard.comment}
            />
          ))}
        </div>
      </div>
    </CommunitySection>
  );
};

const CommunitySection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 64px;

  .community {
    max-width: 960px;
    width: 100%;
    margin-bottom: 200px;

    .community-title {
      width: 100%;
      ${fonts.H2}
      margin-bottom: 9px;
    }
    .community-cards {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }
`;

export default Community;
