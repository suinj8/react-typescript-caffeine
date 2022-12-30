import Footer from "../../components/Footer";
import CampCard from "../../components/CampCard";
import CommunityCard from "../../components/CommunityCard";

import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import { ICamp, ICommunity } from "../../types/type";
import {
  PopularCampSample,
  OnsaleCampSample,
  CommunitySample,
} from "../../apis/test/HomeSample";

import profileImg from "../../assets/images/Profile.png";
import mainImg from "../../assets/images/main.png";
import leftImg from "../../assets/images/left.png";
import rightImg from "../../assets/images/right.png";
import lineImg from "../../assets/images/line.png";

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

      <section>
        <div className="camp">
          <div className="campTitle">인기 부트 캠프</div>
          <div className="campLists">
            {PopularCampSample.map((data: ICamp) => (
              <CampCard
                key={data.ID}
                title={data.title}
                sDate={data.sDate}
                status={data.status}
                imgURL={data.imgURL}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="camp">
          <div className="campTitle">특가 할인 캠프</div>
          <div className="campLists">
            {OnsaleCampSample.map((data: ICamp) => (
              <CampCard
                key={data.ID}
                title={data.title}
                sDate={data.sDate}
                jobs={data.jobs}
                imgURL={data.imgURL}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="banner">
          현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
        </div>
      </section>

      <section className="communityBox">
        <div className="community">
          <div className="communityTitle">커뮤니티</div>
          <div className="communityLists">
            {CommunitySample.map((data: ICommunity) => (
              <CommunityCard
                key={data.ID}
                type={data.type}
                title={data.title}
                content={data.content}
                comment={data.comment}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;

  header {
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

  section {
    display: flex;
    justify-content: center;
    margin-top: 64px;

    .camp {
      max-width: 960px;
      width: 100%;

      .campTitle {
        width: 100%;
        font-family: "Noto Sans";
        ${fonts.H2}
        margin-bottom: 9px;
      }
      .campLists {
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }
    }

    .banner {
      width: 960px;
      max-width: 960px;
      background: ${colors.primary01};
      color: ${colors.white};
      ${fonts.H2}
      padding: 32px;
      box-sizing: border-box;
    }

    .community {
      max-width: 960px;
      width: 100%;
      margin-bottom: 200px;

      .communityTitle {
        width: 100%;
        font-family: "noto sans";
        ${fonts.H2};
        margin-bottom: 9px;
      }
      .communityLists {
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }
    }
  }
`;
