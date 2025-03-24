import { z } from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(3, "First Name must be at least 3 characters long"),
    lastName: z.string().min(3, "Last Name must be at least 3 characters long"),
    email: z.string().email("Invalid email format"),
    phone: z.string().optional(),
    message: z.string().min(10, "Messages must be at least 10 characters long"),
    services: z.array(z.string()).optional(),

});