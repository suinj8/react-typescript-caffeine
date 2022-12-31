import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

import profileImg from "../../../assets/images/Profile.png";
import mainImg from "../../../assets/images/main.png";
import leftImg from "../../../assets/images/left.png";
import rightImg from "../../../assets/images/right.png";
import lineImg from "../../../assets/images/line.png";

import { useMediaQuery } from "react-responsive";

const HomeHeader = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  return (
    <Header isDesktop={isDesktop}>
      <div className="header-content">
        <nav className="header-nav">
          <div className="header-logo">Caffeine</div>
          <div className="header-profile"></div>
        </nav>

        <section className="header-section">
          <div className="header-title weight-700">
            개발은
            <br />
            카페인과 함께
            {isDesktop && (
              <div className="header-chevron">
                <div className="header-line"></div>
                <div className="header-left"></div>
                <div className="header-right"></div>
              </div>
            )}
          </div>
          <div className="header-mainImg"></div>
        </section>
      </div>
    </Header>
  );
};

const Header = styled.header<{ isDesktop: boolean }>`
  height: ${(props) => (props.isDesktop ? "560px" : "367px")};
  display: flex;
  justify-content: center;
  background: ${(props) =>
    props.isDesktop
      ? "linear-gradient(97.88deg,#854bff -84.42%,#7179ff 15.02%,#6d83ff 36.89%,#698bff 54.79%,#6499ff 80.65%,#659bf7 108.49%,#669fea 148.27%,#69a9cd 197.99%,#6cb1b2 239.75%)"
      : `${colors.primary01}`};
  ${(props) => !props.isDesktop && "padding-left : 24px; padding-right: 24px;"}

  .header-content {
    max-width: 960px;
    width: 100%;

    .header-nav {
      width: 100%;
      display: flex;
      height: 64px;
      align-items: center;
      justify-content: space-between;

      .header-logo {
        ${(props) => (props.isDesktop ? fonts.H2 : fonts.H4)}
        color: ${colors.white};
      }

      .header-profile {
        width: 17px;
        height: 20px;
        background-image: url(${profileImg});
      }
    }

    .header-section {
      ${(props) =>
        props.isDesktop
          ? "display: flex; justify-content: space-between; align-items: flex-end;margin-top: 56px; margin-bottom: 56px;"
          : "margin-top: 10px; margin-bottom: 20px;"}

      .header-title {
        ${(props) =>
          props.isDesktop
            ? "font-size: 48px; line-height: 65px;"
            : `margin-bottom: 10px; ${fonts.H3}`}
        color: ${colors.white};

        .header-chevron {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .header-line {
            width: 245px;
            height: 1px;
            background-image: url(${lineImg});
          }
          .header-left {
            width: 12px;
            height: 20px;
            background-image: url(${leftImg});
          }
          .header-right {
            width: 12px;
            height: 20px;
            background-image: url(${rightImg});
          }
        }
      }

      .header-mainImg {
        background-image: url(${mainImg});
        background-size: ${(props) =>
          props.isDesktop ? "600px, 400px;" : "100%;"}
        width: ${(props) => (props.isDesktop ? "600px;" : "100%;")}
        height: ${(props) => (props.isDesktop ? "400px" : "200px")};
        border-radius: 10px;
      }
    }
  }
`;

export default HomeHeader;
