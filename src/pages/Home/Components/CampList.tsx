import styled from "styled-components";
import fonts from "../../../styles/fonts";

import CampCard from "../../../components/CampCard";

import { ICamp } from "../../../types/type";

interface campProps {
  campListTitle: string;
  campListCards: ICamp[];
}

const CampList = ({ campListTitle, campListCards }: campProps) => {
  return (
    <ListSection>
      <div className="campList">
        <div className="campList-title">{campListTitle}</div>
        <div className="campList-cards">
          {campListCards.map((campCard: ICamp) => (
            <CampCard
              key={`campCard-${campCard.ID}`}
              title={campCard.title}
              sDate={campCard.sDate}
              status={campCard.status}
              imgURL={campCard.imgURL}
            />
          ))}
        </div>
      </div>
    </ListSection>
  );
};

const ListSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 64px;

  .campList {
    width: 100%;
    max-width: 960px;

    .campList-title {
      ${fonts.H2}
      margin-bottom: 9px;
    }
    .campList-cards {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }
`;

export default CampList;
