import axios from "axios";

export const postLogin = async (payload: LoginType) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      payload
    );
  } catch (error) {}
};
