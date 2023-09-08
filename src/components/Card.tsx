import Shoutout from "../models/Shoutout";
import "./Card.css";

interface Props {
  shoutout: Shoutout;
}

const Card = ({ shoutout }: Props) => {
  return (
    <li className="Card">
      <p>To: {shoutout.to}</p>
      <p>{shoutout.message}</p>
      <p>From: {shoutout.from}</p>
    </li>
  );
};

export default Card;
