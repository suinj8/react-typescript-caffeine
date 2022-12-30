import { ICamp, ICommunity } from "../../types/type";

import popular1 from "../../assets/images/popular1.png";
import popular2 from "../../assets/images/popular2.png";
import popular3 from "../../assets/images/popular3.png";
import popular4 from "../../assets/images/popular4.png";
import sale1 from "../../assets/images/sale1.png";
import sale2 from "../../assets/images/sale2.png";
import sale3 from "../../assets/images/sale3.png";
import sale4 from "../../assets/images/sale4.png";

export const PopularCampSample: ICamp[] = [
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

export const OnsaleCampSample: ICamp[] = [
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

export const CommunitySample: ICommunity[] = [
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
