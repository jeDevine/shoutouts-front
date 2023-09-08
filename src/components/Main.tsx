import { useCallback, useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import "./Main.css";
import {
  addShoutout,
  deleteShoutout,
  getShoutouts,
} from "../services/shoutoutService";
import List from "./List";
import Form from "./Form";

const Main = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const loadShoutouts = useCallback(async () => {
    setShoutouts(await getShoutouts());
  }, []);

  const onAdd = async (shoutout: Shoutout) => {
    await addShoutout(shoutout);
    loadShoutouts();
  };
  const onDelete = async (id: string) => {
    await deleteShoutout(id);
    loadShoutouts();
  };
  useEffect(() => {
    loadShoutouts();
  }, [loadShoutouts]);
  return (
    <div className="Main">
      <Form onAdd={onAdd} />
      <List shoutouts={shoutouts} onDelete={onDelete} />
    </div>
  );
};

export default Main;
