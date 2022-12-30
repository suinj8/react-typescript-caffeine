import Footer from "../../components/Footer";
import CommunityCard from "../../components/CommunityCard";

import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import { ICommunity } from "../../types/type";
import {
  PopularCampSample,
  OnsaleCampSample,
  CommunitySample,
} from "../../apis/test/HomeSample";

import HomeHeader from "./Components/HomeHeader";
import CampList from "./Components/CampList";

const Home = () => {
  return (
    <Container>
      <HomeHeader />

      <CampList
        campListTitle="인기 부트 캠프"
        campListCards={PopularCampSample}
      />
      <CampList
        campListTitle="특가 할인 캠프"
        campListCards={OnsaleCampSample}
      />

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

  section {
    display: flex;
    justify-content: center;
    margin-top: 64px;

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
