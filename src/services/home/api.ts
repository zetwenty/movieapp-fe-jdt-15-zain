import axiosWithConfig from "../api";
import { ResponseData } from "../type";

export const getTrending = async (page: number) => {
  try {
    const response = await axiosWithConfig.get(
      `trending/all/day?language=en-US&page=${page}`
    );
    console.log({ response });

    return response.data as ResponseData;
  } catch (error) {}
};
