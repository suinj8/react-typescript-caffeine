import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const CampCard = ({ ...props }) => {
  return (
    <Container imgURL={props.imgURL}>
      <article>
        {props.status ? (
          <label className="status">{props.status}</label>
        ) : (
          <label className="jobs">{props.jobs}</label>
        )}
        <label className="title">{props.title}</label>
        <label className="sDate">{props.sDate}</label>
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

  article {
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

    .status,
    .jobs {
      font-family: "Noto Sans CJK KR";
      ${fonts.Body2}
    }
    .title {
      font-family: "Noto Sans";
      ${fonts.Body2}
      font-weight: 700;
    }
    .sDate {
      font-family: "Noto Sans";
      ${fonts.Caption}
    }
  }
`;

export default CampCard;
