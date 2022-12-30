import {
  PopularCampSample,
  OnsaleCampSample,
  CommunitySample,
} from "../../apis/test/HomeSample";

import HomeHeader from "./Components/HomeHeader";
import CampList from "./Components/CampList";
import HomeBanner from "./Components/HomeBanner";
import Community from "./Components/Community";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <CampList
        campListTitle="인기 부트 캠프"
        campListCards={PopularCampSample}
      />
      <CampList
        campListTitle="특가 할인 캠프"
        campListCards={OnsaleCampSample}
      />
      <HomeBanner content="현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝" />
      <Community CommunityTitle="커뮤니티" CommunityCards={CommunitySample} />
      <Footer />
    </div>
  );
};

export default Home;
