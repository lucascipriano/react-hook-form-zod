import { z } from "zod";


export const formSchema = z.object({
  name: z.string().min(3, "Mínimo de 3 caracteres").max(50),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, "Mínimo de 6 caracteres"),
  passwordConfirm: z.string().min(6, "Mínimo de 6 caracteres"),
  profession: z.enum(['developer', 'other']).refine(value => value !== undefined),
  privacyPolicy: z.boolean().refine(value => value === true, "Concorde com os termos para proseguir"),
})

export type formData = z.infer<typeof formSchema>