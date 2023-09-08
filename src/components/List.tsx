import Shoutout from "../models/Shoutout";
import Card from "./Card";
import "./List.css";

interface Props {
  shoutouts: Shoutout[];
}

const List = ({ shoutouts }: Props) => {
  return (
    <ul className="List">
      {shoutouts.map((item) => (
        <Card shoutout={item} />
      ))}
    </ul>
  );
};

export default List;
