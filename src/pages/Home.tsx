import Footer from "../components/Footer";

import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import profileImg from "../assets/images/Profile.png";
import mainImg from "../assets/images/main.png";
import leftImg from "../assets/images/left.png";
import rightImg from "../assets/images/right.png";
import lineImg from "../assets/images/line.png";

const Container = styled.div`
  width: 100%;

  header {
    width: 100%;
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
    .content {
      max-width: 960px;
      width: 100%;

      nav {
        width: 100%;
        display: flex;
        height: 64px;
        align-items: center;
        justify-content: space-between;

        .logo {
          font-family: "Roboto Slab";
          ${fonts.H2}
          color: ${colors.white}
        }
        .profile {
          width: 17px;
          height: 20px;
          background-image: url(${profileImg});
        }
      }

      section {
        display: flex;
        margin-top: 56px;
        margin-bottom: 56px;
        height: auto;
        justify-content: space-between;
        align-items: flex-end;

        .title {
          font-size: 48px;
          font-weight: 700;
          line-height: 65px;
          color: ${colors.white};
          .chevron {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .line {
              width: 245px;
              height: 1px;
              background-image: url(${lineImg});
            }
            .left {
              width: 12px;
              height: 20px;
              background-image: url(${leftImg});
            }
            .right {
              width: 12px;
              height: 20px;
              background-image: url(${rightImg});
            }
          }
        }

        .mainImg {
          background-image: url(${mainImg});
          background-size: 600px, 400px;
          width: 600px;
          height: 400px;
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <header>
        <div className="content">
          <nav>
            <div className="logo">Caffeine</div>
            <div className="profile"></div>
          </nav>

          <section>
            <div className="title">
              개발은
              <br />
              카페인과 함께
              <div className="chevron">
                <div className="line"></div>
                <div className="left"></div>
                <div className="right"></div>
              </div>
            </div>
            <div className="mainImg"></div>
          </section>
        </div>
      </header>

      <Footer />
    </Container>
  );
};

export default Home;
