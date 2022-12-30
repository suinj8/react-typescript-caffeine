import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

interface BannerContent {
  content: string;
}

const HomeBanner = ({ content }: BannerContent) => {
  return (
    <BannerSection>
      <div className="banner-content">{content}</div>
    </BannerSection>
  );
};

const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 64px;

  .banner-content {
    width: 100%;
    max-width: 960px;
    background: ${colors.primary01};
    color: ${colors.white};
    ${fonts.H2}
    padding: 32px;
    box-sizing: border-box;
  }
`;

export default HomeBanner;
