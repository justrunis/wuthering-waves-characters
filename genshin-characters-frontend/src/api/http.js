import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

const URL = "https://genshin.jmp.blue/";

export const queryClient = new QueryClient();

export async function fetchCharacters() {
  try {
    const response = await axios.get(`${URL}characters`);

    if (response.status === 400) {
      const error = new Error(
        "An error occurred while fetching characters data"
      );
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    if (!response.data) {
      const error = new Error(
        "An error occurred while fetching characters data"
      );
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return error.response.data;
    } else {
      return error;
    }
  }
}

export async function fetchCharacter({ id }) {
  try {
    console.log("fetchCharacter", id);
    const FULL_URL = `${URL}characters/${id}`;
    console.log("FULL_URL", FULL_URL);
    const response = await axios.get(FULL_URL);
    if (response.status === 400) {
      const error = new Error(
        "An error occurred while fetching character data"
      );
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    if (!response.data) {
      const error = new Error(
        "An error occurred while fetching character data"
      );
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return error.response.data;
    } else {
      return error;
    }
  }
}
