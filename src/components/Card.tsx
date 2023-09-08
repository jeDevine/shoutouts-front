import Shoutout from "../models/Shoutout";
import "./Card.css";

interface Props {
  onDelete: (id: string) => void;
  shoutout: Shoutout;
}

const Card = ({ shoutout, onDelete }: Props) => {
  return (
    <li className="Card">
      <p>To: {shoutout.to}</p>
      <p>{shoutout.message}</p>
      <p>From: {shoutout.from}</p>
      <button onClick={() => onDelete(shoutout._id!)}>delete</button>
    </li>
  );
};

export default Card;
