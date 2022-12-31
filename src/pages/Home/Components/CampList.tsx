import styled from "styled-components";
import fonts from "../../../styles/fonts";

import CampCard from "../../../components/CampCard";

import { ICamp } from "../../../types/type";
import { useMediaQuery } from "react-responsive";

interface campProps {
  campListTitle: string;
  campListCards: ICamp[];
}

const CampList = ({ campListTitle, campListCards }: campProps) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  return (
    <ListSection isDesktop={isDesktop}>
      <div className="campList">
        <div className="campList-title">{campListTitle}</div>
        <div className="campList-cards">
          {campListCards.map((campCard: ICamp) => (
            <CampCard
              key={`campCard-${campCard.ID}`}
              ID={campCard.ID}
              title={campCard.title}
              sDate={campCard.sDate}
              status={campCard.status}
              jobs={campCard.jobs}
              imgURL={campCard.imgURL}
            />
          ))}
        </div>
      </div>
    </ListSection>
  );
};

const ListSection = styled.section<{ isDesktop: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.isDesktop ? "64px;" : "35px;")};
  ${(props) => !props.isDesktop && "padding-left: 24px; padding-right: 24px;"}

  .campList {
    width: 100%;
    max-width: 960px;

    .campList-title {
      ${fonts.H2}
      margin-bottom: 9px;
    }
    .campList-cards {
      ${(props) => props.isDesktop && "display: flex; gap: 20px;"}
      justify-content: space-between;
    }
  }
`;

export default CampList;
