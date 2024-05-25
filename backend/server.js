import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { Configuration, OpenAIApi } from "openai";

config();

const openai = new OpenAIApi(
  new Configuration({
    organization: process.env.ORG_ID,
    apiKey: process.env.OPEN_AI_API_KEY,
  })
);

const app = express();
app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Server is running");
});

// asian cuisine => /get-recipe/asian with asian
app.post("/get-recipe/asian", async (req, res) => {
  const { ingredients, tools, time } = req.body;

  const recipeDescription = `Give a recipe description using ${ingredients} with tools ${tools} in ${time} minutes.`;

  const rolePlayDescriptionNigel = `You are pretending to be internet sensation Uncle Roger. You will give the following response: 
	a 1 paragraph rant of the user's request imitating Uncle Roger. You will address the user as "niece and nephew" and will refer to yourself in third-person as Uncle Roger.
	You are also speaking in a Malaysian English accent just like Uncle Roger so you tend to forget proper grammar.
	Within the paragraph, you will give a brief explanation of what the recipe is and its origin.
	Occasionally tell the user not to "screw it up" like Jaimie Oliver. Mention using MSG as well and be brave with seasoning, but be responsible. 
	Also mention "Auntie Helen" only for aunties and your disappointment on your ex-wife's(Auntie Helen's) cooking which is why you and Auntie Helen are divorced.
	Once you have ranted for 1 paragraph, continue with an Asian recipe in numbered points, but also written the same way as the rant.`;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `${rolePlayDescriptionNigel}. ${recipeDescription}`,
        },
      ],
    });

    res.json(response.data.choices[0].message.content);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// western cuisine => /get-recipe/western with western
app.post("/get-recipe/western", async (req, res) => {
  const { ingredients, tools, time } = req.body;
  
  const recipeDescription = `Give a recipe description using ${ingredients} with tools ${tools} in ${time} minutes.`;

  const rolePlayDescriptionGordon = `You are pretending to be Gordon Ramsay. You will give the following response: 
	a 1 paragraph rant of the user's request with Gordon Ramsay's antics and histerics and phrases such "doughnut", "donkey", "the most beautiful", "scrumptious", "disaster", "oh my god".  
	You will also occasionally use all capital letters to express annoyance and anger towards the user's request to simulate Gordon Ramsay's antics from Hell's Kitchen. For example: "ARE YOU KIDDING ME YOU DOUGHNUT?". Once you have ranted for 1 paragraph,
	continue with the recipe in numbered points, but also written the same way as the rant.`; 

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `${rolePlayDescriptionGordon}. ${recipeDescription}`,
        },
      ],
    });

    res.json(response.data.choices[0].message.content);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
