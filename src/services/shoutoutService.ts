import axios from "axios";
import Shoutout from "../models/Shoutout";

const baseUrl = process.env.REACT_APP_API_URL + "/shoutouts" || "";

export const getShoutouts = async (): Promise<Shoutout[]> => {
  return (await axios.get(`${baseUrl}`)).data;
};

export const addShoutout = async (shoutout: Shoutout): Promise<Shoutout> => {
  return (await axios.post(`${baseUrl}`, shoutout)).data;
};

export const editShoutout = async (
  id: string,
  update: any
): Promise<Shoutout> => {
  return (await axios.put(`${baseUrl}/${encodeURIComponent(id)}`, update)).data;
};

export const deleteShoutout = async (id: string): Promise<void> => {
  return await axios.delete(`${baseUrl}/${encodeURIComponent(id)}`);
};
