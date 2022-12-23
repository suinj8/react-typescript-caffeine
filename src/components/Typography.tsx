import { ITypography } from "../types/type";

const Typography = (props: ITypography) => {
  return <label className={`Typography ${props.type}`}>{props.text}</label>;
};

export default Typography;
