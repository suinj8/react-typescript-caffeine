import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

import profileImg from "../../../assets/images/Profile.png";
import mainImg from "../../../assets/images/main.png";
import leftImg from "../../../assets/images/left.png";
import rightImg from "../../../assets/images/right.png";
import lineImg from "../../../assets/images/line.png";

const HomeHeader = () => {
  return (
    <Header>
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
            <div className="header-chevron">
              <div className="header-line"></div>
              <div className="header-left"></div>
              <div className="header-right"></div>
            </div>
          </div>
          <div className="header-mainImg"></div>
        </section>
      </div>
    </Header>
  );
};

const Header = styled.header`
  height: 560px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    97.88deg,
    #854bff -84.42%,
    #7179ff 15.02%,
    #6d83ff 36.89%,
    #698bff 54.79%,
    #6499ff 80.65%,
    #659bf7 108.49%,
    #669fea 148.27%,
    #69a9cd 197.99%,
    #6cb1b2 239.75%
  );

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
        ${fonts.H2}
        color: ${colors.white}
      }

      .header-profile {
        width: 17px;
        height: 20px;
        background-image: url(${profileImg});
      }
    }

    .header-section {
      display: flex;
      margin-top: 56px;
      margin-bottom: 56px;
      justify-content: space-between;
      align-items: flex-end;

      .header-title {
        font-size: 48px;
        line-height: 65px;
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
        background-size: 600px, 400px;
        width: 600px;
        height: 400px;
      }
    }
  }
`;

export default HomeHeader;
