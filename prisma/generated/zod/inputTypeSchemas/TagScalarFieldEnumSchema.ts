import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id','name','createdAt']);

export default TagScalarFieldEnumSchema;
