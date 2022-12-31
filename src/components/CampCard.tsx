import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { ICamp } from "../types/type";

import { useMediaQuery } from "react-responsive";

const CampCard = ({ ...campCardProps }: ICamp) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  return (
    <CampCardBox imgURL={campCardProps.imgURL} isDesktop={isDesktop}>
      <article className="campCard-article">
        {campCardProps.status ? (
          <label className="campCard-status">{campCardProps.status}</label>
        ) : (
          <label className="campCard-jobs">{campCardProps.jobs}</label>
        )}
        <label className="campCard-title weight-700">
          {campCardProps.title}
        </label>
        <label className="campCard-sDate">{campCardProps.sDate}</label>
      </article>
    </CampCardBox>
  );
};

const CampCardBox = styled.div<{ imgURL: string; isDesktop: boolean }>`
  flex: 1;
  height: 280px;
  background-image: ${(props) => `url(${props.imgURL})`};
  background-size: 100%;
  border-radius: 10px;
  position: relative;
  width: 100%;
  ${(props) => !props.isDesktop && "margin-bottom: 8px;"}

  .campCard-article {
    display: flex;
    flex-direction: column;
    gap: 11px;
    color: ${colors.white};
    padding: 15px;
    background: linear-gradient(
      180deg,
      rgba(39, 63, 40, 0) 0%,
      rgba(89, 89, 89, 0.558824) 15.62%,
      #000000 70.83%
    );
    border-radius: 0 0 10px 10px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    box-sizing: border-box;

    .campCard-status,
    .campCard-jobs {
      ${fonts.Body2}
    }
    .campCard-title {
      ${fonts.Body2}
    }
    .campCard-sDate {
      ${fonts.Caption}
    }
  }
`;

export default CampCard;
