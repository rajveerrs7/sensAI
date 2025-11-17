import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ai-career-builder",
  name: "AI Career Builder",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
