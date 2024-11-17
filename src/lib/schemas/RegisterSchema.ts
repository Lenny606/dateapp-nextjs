import {z} from 'zod'

export const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().email({
        message: 'Invalid email address'
    }),
    password: z.string().min(4, {
        message: 'Password must be at least 4 characters long'
    })
})

export type RegisterSchema = z.infer<typeof registerSchema>