import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Footer = () => {
  return (
    <FooterBox>
      <footer className="footer-footer">
        <div className="footer-logo">Caffeine</div>
        <div className="footer-content">
          <div>대표: 정수인. 서울특별시 영등포구 영중로 15 </div>
          <br />
          <div>Copyright by (주)카페인. All right reserved.</div>
          <div>이용약관 개인정보처리방침</div>
        </div>
        <div className="footer-sns">
          <div className="footer-item"></div>
          <div className="footer-item"></div>
          <div className="footer-item"></div>
        </div>
      </footer>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  width: 100%;
  height: 160px;
  background: ${colors.gray05};
  display: flex;
  justify-content: center;

  .footer-footer {
    max-width: 960px;
    display: flex;
    width: 100%;
    padding-top: 40px;

    .footer-logo {
      flex: 1;
      color: ${colors.primary01};
      ${fonts.H3}
    }

    .footer-content {
      flex: 5;
    }

    .footer-sns {
      display: flex;
      gap: 10px;

      .footer-item {
        width: 30px;
        height: 32px;
        background: ${colors.gray04};
        border-radius: 50%;
      }
    }
  }
`;

export default Footer;
