import { ReactComponent as EmptySvg } from "../assets/empty.svg";
import Result from "./Result";

type EmptyProps = {
  message?: string;
  title: string;
};

const Empty = ({ message, title }: EmptyProps) => {
  return <Result image={<EmptySvg />} subTitle={message} title={title} />;
};

export default Empty;
