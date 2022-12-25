import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Container = styled.div`
  width: 100%;
  height: 160px;
  background: ${colors.gray05};
  display: flex;
  justify-content: center;

  footer {
    max-width: 960px;
    display: flex;
    width: 100%;
    padding-top: 40px;

    .logo {
      flex: 1;
      font-family: "Roboto Slab";
      color: ${colors.primary01};
      ${fonts.H3}
    }

    .content {
      flex: 5;
      label {
        font-family: "Noto Sans CJK KR";
      }
    }

    .sns {
      display: flex;
      gap: 10px;

      .item {
        width: 30px;
        height: 32px;
        background: ${colors.gray04};
        border-radius: 50%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <footer>
        <div className="logo">Caffeine</div>
        <div className="content">
          <div>대표: 정수인. 서울특별시 영등포구 영중로 15 </div>
          <br />
          <div>Copyright by (주)카페인. All right reserved.</div>
          <div>이용약관 개인정보처리방침</div>
        </div>
        <div className="sns">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
