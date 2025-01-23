import { z } from 'zod';

export const ChatGPTHistoryScalarFieldEnumSchema = z.enum(['id','userId','title','content','summary','createdAt','updatedAt']);

export default ChatGPTHistoryScalarFieldEnumSchema;
