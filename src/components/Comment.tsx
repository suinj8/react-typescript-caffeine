import styled from "styled-components";
import fonts from "../styles/fonts";

import commentProfile from "../assets/images/commentProfile.png";

const Container = styled.div<{ picture: string | undefined }>`
  display: flex;

  .picture {
    background-image: ${(props) =>
      props.picture ? `url(${props.picture})` : `url(${commentProfile})`};
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
  .contentBox {
    .nickname {
      ${fonts.Caption};
      font-weight: bold;
    }
    .content {
      ${fonts.Caption}
    }
  }
`;

const Comment = ({ ...props }) => {
  return (
    <Container picture={props.picture}>
      <div className="picture"></div>

      <div className="contentBox">
        <div className="nickname">{props.nickname}</div>
        <div className="content">{props.content}</div>
      </div>
    </Container>
  );
};

export default Comment;
