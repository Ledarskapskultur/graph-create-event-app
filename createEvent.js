import axios from "axios";

export async function createEvent(accessToken, userId) {
  const url = `https://graph.microsoft.com/v1.0/users/${userId}/events`;

  const event = {
    subject: "Testmöte via Graph",
    start: { dateTime: "2025-08-01T10:00:00", timeZone: "Europe/Stockholm" },
    end:   { dateTime: "2025-08-01T11:00:00", timeZone: "Europe/Stockholm" },
    body:  { contentType: "HTML", content: "Test skapat via Graph API" }
  };

  const response = await axios.post(url, event, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  });
  return response.data;
}
