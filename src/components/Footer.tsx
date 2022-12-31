import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  return (
    <FooterBox isDesktop={isDesktop}>
      <footer className="footer-footer">
        {isDesktop ? (
          <>
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
          </>
        ) : (
          <>
            <div className="footer-logoWrapper">
              <div className="footer-logo">Caffeine</div>
              <div className="footer-sns">
                <div className="footer-item"></div>
                <div className="footer-item"></div>
                <div className="footer-item"></div>
              </div>
            </div>
            <div className="footer-content">
              <div>대표: 정수인. 서울특별시 영등포구 영중로 15 </div>
              <br />
              <div>Copyright by (주)카페인. All right reserved.</div>
              <div>이용약관 개인정보처리방침</div>
            </div>
          </>
        )}
      </footer>
    </FooterBox>
  );
};

const FooterBox = styled.div<{ isDesktop: boolean }>`
  width: 100%;
  height: 160px;
  background: ${colors.gray05};
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  ${(props) => !props.isDesktop && "padding-left: 24px; padding-right: 24px;"}

  .footer-footer {
    max-width: 960px;
    ${(props) => props.isDesktop && "display: flex;"}
    width: 100%;
    padding-top: 40px;

    .footer-logoWrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

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
