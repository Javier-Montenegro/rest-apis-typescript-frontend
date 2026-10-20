import { object, string, number, boolean, type InferOutput, array, pipe, union, transform } from 'valibot'

export const DraftProductSchema = object({
  name: string(),
  price: number()
})

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: pipe(
    union([number(), string()]),
    transform(Number),
    number()
  ),
  availability: boolean()
})

export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema> 