import dotenv from "dotenv";
dotenv.config();

import { getToken } from "./auth.js";
import { createEvent } from "./createEvent.js";

async function main() {
  try {
    console.log("Hämtar access token...");
    const token = await getToken();
    console.log("Skapar kalenderhändelse...");
    const result = await createEvent(token, process.env.USER_ID);
    console.log("Event skapades:", result.id);
  } catch (err) {
    console.error("Fel:", err.response?.data ?? err.message);
  }
}

main();
