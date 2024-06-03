import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import constants from "../constants/constants";

const URL = constants.API_URL;

export const queryClient = new QueryClient();

export async function fetchCharacters() {
  console.log("CALLING CHARACTERS");
  try {
    const response = await axios.get(`${URL}characters`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers":
          "access-control-allow-origin, content-type:",
      },
    });

    if (response.status === 400) {
      const error = new Error(
        "An error occurred while fetching characters data"
      );
      error.code = response.status;
      error.info = response.data;
      throw error;
    }

    if (!response.data) {
      const error = new Error(
        "There is no data available for the characters at the moment"
      );
      error.code = response.status;
      error.info = response.data;
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

export async function fetchCharacter({ character }) {
  const FULL_URL = `${URL}characters/${character}`;
  console.log("CALLING CHARACTER");
  try {
    const response = await axios.get(FULL_URL, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers":
          "access-control-allow-origin, content-type:",
      },
    });

    if (response.status === 400) {
      const error = new Error(
        "An error occurred while fetching character data"
      );
      error.code = response.status;
      error.info = response.data;
      throw error;
    }

    if (!response.data) {
      const error = new Error(
        "There is no data available for the character at the moment"
      );
      error.code = response.status;
      error.info = response.data;
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
