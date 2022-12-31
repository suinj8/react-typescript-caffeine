import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { ICamp } from "../types/type";

const CampCard = ({ ...campCardProps }: ICamp) => {
  return (
    <Container imgURL={campCardProps.imgURL}>
      <article className="campCard-article">
        {campCardProps.status ? (
          <label className="campCard-status">{campCardProps.status}</label>
        ) : (
          <label className="campCard-jobs">{campCardProps.jobs}</label>
        )}
        <label className="campCard-title">{campCardProps.title}</label>
        <label className="campCard-sDate">{campCardProps.sDate}</label>
      </article>
    </Container>
  );
};

const Container = styled.div<{ imgURL: string }>`
  flex: 1;
  height: 280px;
  background-image: ${(props) => `url(${props.imgURL})`};
  border-radius: 10px;
  position: relative;

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
    margin-top: 65%;
    border-radius: 0 0 10px 10px;
    position: absolute;
    bottom: 0px;

    .campCard-status,
    .campCard-jobs {
      ${fonts.Body2}
    }
    .campCard-title {
      ${fonts.Body2}
      font-weight: 700;
    }
    .campCard-sDate {
      ${fonts.Caption}
    }
  }
`;

export default CampCard;
