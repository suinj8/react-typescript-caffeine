import Footer from "../../components/Footer";
import CampCard from "../../components/CampCard";
import CommunityCard from "../../components/CommunityCard";

import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import { ICamp, ICommunity } from "../../types/type";

import profileImg from "../../assets/images/Profile.png";
import mainImg from "../../assets/images/main.png";
import leftImg from "../../assets/images/left.png";
import rightImg from "../../assets/images/right.png";
import lineImg from "../../assets/images/line.png";
import popular1 from "../../assets/images/popular1.png";
import popular2 from "../../assets/images/popular2.png";
import popular3 from "../../assets/images/popular3.png";
import popular4 from "../../assets/images/popular4.png";
import sale1 from "../../assets/images/sale1.png";
import sale2 from "../../assets/images/sale2.png";
import sale3 from "../../assets/images/sale3.png";
import sale4 from "../../assets/images/sale4.png";

const dummyPopularData: ICamp[] = [
  {
    ID: 0,
    status: "모집중",
    title: "직접 해보는 페이스북 마케팅 실무",
    sDate: "2월 28일 시작",
    imgURL: `${popular1}`,
  },
  {
    ID: 1,
    status: "모집중",
    title: "React 실무 프로젝트로 역량 업그레이드",
    sDate: "1월 9일 시작",
    imgURL: `${popular2}`,
  },
  {
    ID: 2,
    status: "모집중",
    title: "개발자 없이 SQL로 데이터 추출하고 대시보드 만들기",
    sDate: "2월 13일 시작",
    imgURL: `${popular3}`,
  },
  {
    ID: 3,
    status: "모집중",
    title: "쉽지만 강력한 엑셀로 데이터 분석과 업무 자동화까지",
    sDate: "2월 20일 시작",
    imgURL: `${popular4}`,
  },
];

const dummySaleData: ICamp[] = [
  {
    ID: 4,
    jobs: "IT/백엔드",
    title: "IT 대기업 현업 개발자와 함께하는 백엔드 개발 실무",
    sDate: "1월 28일 부터",
    imgURL: `${sale1}`,
  },
  {
    ID: 5,
    jobs: "IT/SQL",
    title: "SQL 입문부터 활용까지 - 데이터 분석 보고서 작성",
    sDate: "2월 3일 부터",
    imgURL: `${sale2}`,
  },
  {
    ID: 6,
    jobs: "IT/인공지능",
    title: "인공지능을 활용한 챗봇 구축 기획부터 설계, 구현 A to Z",
    sDate: "2월 8일 부터",
    imgURL: `${sale3}`,
  },
  {
    ID: 7,
    jobs: "IT/백엔드",
    title: "클라우드 AWS 구축부터 운영까지 실무 A to Z",
    sDate: "2월 18일 부터",
    imgURL: `${sale4}`,
  },
];

const dummyCommunityData: ICommunity[] = [
  {
    ID: 0,
    type: "취업 고민",
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comment: [
      { ID: 0, picture: "", nickname: "멘토123", content: "안녕하세요." },
      { ID: 1, picture: "", nickname: "멘토123", content: "안녕하세요." },
    ],
  },
  {
    ID: 1,
    type: "취업 고민",
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comment: [
      { ID: 2, picture: "", nickname: "멘토456", content: "안녕하세요." },
      { ID: 3, picture: "", nickname: "멘토456", content: "안녕하세요." },
    ],
  },
  {
    ID: 2,
    type: "취업 고민",
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comment: [
      { ID: 4, picture: "", nickname: "멘토789", content: "안녕하세요." },
      { ID: 5, picture: "", nickname: "멘토789", content: "안녕하세요." },
    ],
  },
  {
    ID: 3,
    type: "취업 고민",
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comment: [
      { ID: 6, picture: "", nickname: "멘토1011", content: "안녕하세요." },
      { ID: 7, picture: "", nickname: "멘토1011", content: "안녕하세요." },
    ],
  },
];

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
            {dummyPopularData.map((data: ICamp) => (
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
            {dummySaleData.map((data: ICamp) => (
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
            {dummyCommunityData.map((data: ICommunity) => (
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
