import { z } from 'zod';

/////////////////////////////////////////
// CHAT GPT HISTORY SCHEMA
/////////////////////////////////////////

export const ChatGPTHistorySchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ChatGPTHistory = z.infer<typeof ChatGPTHistorySchema>

export default ChatGPTHistorySchema;
