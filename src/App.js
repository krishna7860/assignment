import './App.css';
import { useEffect, useState } from 'react';
import OpenAI from "openai";
import Chat from './pages/chat';


function App() {

  const [openai, setOpenAI] = useState(null);

  useEffect(() => {
    if (process.env.REACT_APP_OPENAI_API_KEY !== undefined) {
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      setOpenAI(openai);
    } else {
      console.error("OpenAI API Key not found");
    }
  }, []);

  // async function generateOutput() {
  //   if (openai !== null) {
  //     const completion = await openai.chat.completions.create({
  //       messages: [{ role: "system", content: "Write a paragraph on democracy" }],
  //       model: "gpt-4",
  //     });

  //     console.log(completion, "completion");
  //   }

  // }

  return (
    <div className="App">
      <Chat openai={openai} />
    </div>
  );
}

export default App;
