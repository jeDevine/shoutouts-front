import Shoutout from "../models/Shoutout";
import Card from "./Card";
import "./List.css";

interface Props {
  shoutouts: Shoutout[];
  onDelete: (id: string) => void;
}

const List = ({ shoutouts, onDelete }: Props) => {
  return (
    <ul className="List">
      {shoutouts.map((item) => (
        <Card shoutout={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default List;
