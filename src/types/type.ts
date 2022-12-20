export interface ICamp {
  ID: number;
  status: "모집중" | "모집완료" | "모집전";
  jobs: string;
  field: string;
}
