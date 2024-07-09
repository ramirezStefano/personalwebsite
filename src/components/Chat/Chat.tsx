import { FC, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";

const Chat: FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const apiUrl =
        "https://platform.openai.com/playground/chat?models=gpt-3.5-turbo-1106";
      const apiKey = "sk-proj-HLA6dF8iQK1MIsJv7tx9T3BlbkFJmoOrueRjl3OhVTiWO8Rt";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const requestBody = {
        messages: [{ role: "user", content: input }],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <Grid>
        <Grid>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={sendMessage}>Send</Button>
        </Grid>
        <Grid>
          <Typography>{response}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export { Chat };
