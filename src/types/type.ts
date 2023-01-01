export interface ICamp {
  ID: number;
  status?: "모집중" | "모집완료" | "모집전";
  jobs?: string;
  field?: string;
  title: string;
  sDate: string;
  imgURL: string;
}

export interface IComment {
  ID: number;
  picture?: string;
  nickname: string;
  content: string;
}

export interface ICommunity {
  ID: number;
  type: string;
  title: string;
  content: string;
  comment: IComment[];
}
