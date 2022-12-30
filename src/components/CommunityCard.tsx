import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { IComment } from "../types/type";

import Comment from "./Comment";

interface CommunityCardProps {
  ID: number;
  type: string;
  title: string;
  content: string;
  comment: IComment[];
}

const CommunityCard = ({ ...CommunityCard }: CommunityCardProps) => {
  return (
    <CommunityCardBox>
      <article className="commCard-article">
        <div className="commCard-chipbox">
          <div className="commCard-view">조회수 TOP</div>
          <div className="commCard-type">{CommunityCard.type}</div>
        </div>
        <div className="commCard-title">{CommunityCard.title}</div>
        <div className="commCard-content">{CommunityCard.content}</div>

        <div className="commCard-comment">
          {CommunityCard.comment.map((comment: IComment) => (
            <Comment
              key={`comment-${comment.ID}`}
              picture={comment.picture}
              nickname={comment.nickname}
              content={comment.content}
            />
          ))}
          <button className="commentMore">+더보기</button>
        </div>
      </article>
    </CommunityCardBox>
  );
};

const CommunityCardBox = styled.div`
  flex: 1;
  height: 320px;
  border-radius: 10px;
  box-sizing: border-box;
  background: ${colors.white};
  border: 1px solid ${colors.gray04};
  padding: 16px;

  .commCard-article {
    width: 100%;
    height: 100%;
    position: relative;

    .commCard-chipbox {
      gap: 5px;
      ${fonts.Caption}
      display: flex;
      margin-bottom: 8px;

      .commCard-view {
        background: ${colors.primary01};
        color: ${colors.white};
        padding: 4px;
        border-radius: 4px;
      }
      .commCard-type {
        background: ${colors.gray04};
        color: ${colors.black};
        padding: 4px;
        border-radius: 4px;
      }
    }
    .commCard-title {
      font-weight: bold;
      margin-bottom: 10px;
    }

    .commCard-comment {
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
