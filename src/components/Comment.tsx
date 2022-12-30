import styled from "styled-components";
import fonts from "../styles/fonts";

import commentProfile from "../assets/images/commentProfile.png";

const Comment = ({ ...props }) => {
  return (
    <CommentBox picture={props.picture}>
      <div className="comment-picture"></div>

      <div className="comment-contentBox">
        <div className="comment-nickname">{props.nickname}</div>
        <div className="comment-content">{props.content}</div>
      </div>
    </CommentBox>
  );
};

const CommentBox = styled.div<{ picture: string | undefined }>`
  display: flex;
  .comment-picture {
    background-image: ${(props) =>
      props.picture ? `url(${props.picture})` : `url(${commentProfile})`};
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
  .comment-contentBox {
    .comment-nickname {
      ${fonts.Caption};
      font-weight: bold;
    }
    .comment-content {
      ${fonts.Caption}
    }
  }
`;

export default Comment;
