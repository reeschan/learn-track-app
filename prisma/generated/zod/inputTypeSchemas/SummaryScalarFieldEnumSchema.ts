import { z } from 'zod';

export const SummaryScalarFieldEnumSchema = z.enum(['id','userId','title','content','summary','createdAt','updatedAt']);

export default SummaryScalarFieldEnumSchema;
