import { env } from "@/utils/env";
import axios from "axios";

const sendMessage = (message: string) => {
  try {
    const url = `https://api.telegram.org/bot${env.TOKEN_TELEGRAM}/sendMessage`;

    axios.post(url, {
      chat_id: env.CHAT_ID_TELEGRAM,
      text: message,
    });
  } catch (error) {
    console.log(error);
  }
};

export const telegramService = {
  sendMessage,
};
