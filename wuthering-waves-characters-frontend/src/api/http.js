import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import constants from "../constants/constants";

const URL = constants.API_URL;

export const queryClient = new QueryClient();

export async function fetchCharacters() {
  try {
    const response = await axios.get(`${URL}characters`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });

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
