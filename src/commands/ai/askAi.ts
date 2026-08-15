/**
 * Sends user text to backend and returns a response from AI service
 *
 * @param user_message - User input string
 * @returns AiResponse object containing the AI reply and timestamp
 * @example
 * const res = await askAi("Hello Yae Miko!");
 * console.log(res.response);
 *
 * Backend Repo: https://github.com/OuOSama/YAE-BACKEND/blob/main/src/modules/ai/model.ts
 */

// type from our backend
interface AiResponse {
	response: string
	timestamp: Date
}

export async function askAi(text: string): Promise<AiResponse> {
	const res = await fetch(`${process.env.BACKEND_URL}/ai/chat`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ user_message: text }),
	})

	const data: AiResponse = await res.json()
	return data
}
