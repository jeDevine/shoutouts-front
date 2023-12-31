import { FormEvent, useState } from "react";
import "./Form.css";
import Shoutout from "../models/Shoutout";

interface Props {
  onAdd: (shoutout: Shoutout) => void;
}

const Form = ({ onAdd }: Props) => {
  const [to, setTo] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd({ to, from, message });
  };
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor="to">To:</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From:</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        placeholder="Your Message Here!"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button>Add</button>
    </form>
  );
};

export default Form;
