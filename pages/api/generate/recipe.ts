import openai from "@/utils/openai";
import { generateRecipePrompt } from "@/utils/prompts";

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const completion = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: generateRecipePrompt(req.body.meal),
				temperature: 0.7,
				max_tokens: 256,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0,
			});
			res.status(201).json({ result: completion.data.choices[0].text });
		} catch (error) {
			console.log(error.response);
			res
				.status(error.response.status)
				.json({ error: error.response.statusText });
		}
	}
}
