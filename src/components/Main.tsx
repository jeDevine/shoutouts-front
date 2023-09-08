import { useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import "./Main.css";
import { getShoutouts } from "../services/shoutoutService";
import List from "./List";
import Form from "./Form";

const Main = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const loadShoutouts = async () => {
    setShoutouts(await getShoutouts());
  };
  useEffect(() => {
    loadShoutouts();
  }, []);
  return (
    <div className="Main">
      <Form />
      <List shoutouts={shoutouts} />
    </div>
  );
};

export default Main;
