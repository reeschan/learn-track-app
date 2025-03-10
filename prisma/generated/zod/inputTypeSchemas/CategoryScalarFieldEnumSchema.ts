import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','createdAt']);

export default CategoryScalarFieldEnumSchema;
