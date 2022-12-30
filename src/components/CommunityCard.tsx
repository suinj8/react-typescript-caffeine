import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { IComment } from "../types/type";

import Comment from "./Comment";

const CommunityCard = ({ ...props }) => {
  return (
    <Container>
      <article>
        <div className="chipBox">
          <div className="view">조회수 TOP</div>
          <div className="type">{props.type}</div>
        </div>
        <div className="title">{props.title}</div>
        <div className="content">{props.content}</div>

        <div className="comment">
          {props.comment.map((data: IComment) => (
            <Comment
              ID={data.ID}
              picture={data.picture}
              nickname={data.nickname}
              content={data.content}
            />
          ))}
          <button className="commentMore">+더보기</button>
        </div>
      </article>
    </Container>
  );
};

const Container = styled.div<{}>`
  flex: 1;
  height: 320px;
  border-radius: 10px;
  box-sizing: border-box;
  background: ${colors.white};
  border: 1px solid ${colors.gray04};
  padding: 16px;

  article {
    width: 100%;
    height: 100%;
    position: relative;

    .chipBox {
      gap: 5px;
      ${fonts.Caption}
      display: flex;
      margin-bottom: 8px;

      .view {
        background: ${colors.primary01};
        color: ${colors.white};
        padding: 4px;
        border-radius: 4px;
      }
      .type {
        background: ${colors.gray04};
        color: ${colors.black};
        padding: 4px;
        border-radius: 4px;
      }
    }
    .title {
      font-family: "Noto Sans";
      font-weight: bold;
      margin-bottom: 10px;
    }
    .content {
      font-family: "Noto Sans CJK KR";
    }

    .comment {
      position: absolute;
      gap: 16px;
      bottom: 0px;
      display: flex;
      flex-direction: column;
      width: 100%;

      .commentMore {
        width: 100%;
        border: 0px;
        background: ${colors.white};
        color: ${colors.secondary01};
        ${fonts.Caption}
        text-align: center;
      }
    }
  }
`;

export default CommunityCard;
