import OpenAI from "openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5050;
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/", async (request, response) => {
  const { allMessages } = request.body;

  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
        Vreau sa te comporti ca un intervievator. Eu sunt caditatul, iar tu imi vei pune intrebari tehnice. Prima data voi introduce numele tehnologiei pentru care vreau sa imi pui intrebarile (exemplu: html, css, javascript, react, etc.), iar tu te vei comporta ca un intervievator. Pune-mi cate o intrebare pe rand din tehnologia pe care am ales-o. Pune-mi intrebarile si asteapta raspunsurile mele. Nu scrie explicatia direct. Vei scrie explicatia abia dupa ce voi raspunde la intrebarea curenta. Dupa aceea, imi vei oferi o noua intrebare, procesul repetandu-se. Daca nu stiu raspunsul la o intrebare, tu vei oferi explicatia, urmata de o noua interbare. Pune-mi intrebarile una cate una si asteapta raspunsul meu. Tu imi vei spune daca este corect sau gresit raspunsul meu, oferindu-mi si o explicatie scurta. Fii strict cu raspunsurile pe care le voi da intrebarilor tale. Noua intrebare pe care o adresezi trebuie sa fie pe un rand nou.
                
        Exemplu derulare interviu:
        
        Eu: CSS;
        Tu: Care este diferenta dintre ID si class?
        Eu: ID este pentru a seta marginea, iar class pentru padding.
        Tu: Incorect. Un ID trebuie să fie unic pe pagină, în timp ce o clasă poate fi folosită de mai multe elemente. De obicei, folosim ID-uri pentru stilizarea elementelor unice și clase pentru stilizarea mai multor elemente similare.
        
        Urmatoarea intrebare: Ce reprezinta box model?
        `,
      },
      ...allMessages,
    ],
  });

  response.json({
    output: result.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
