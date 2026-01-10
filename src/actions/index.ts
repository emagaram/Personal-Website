import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';
import { db, Inquiry } from 'astro:db';

const resend = new Resend('re_xxxxxxxxx');


export const server = {
    contact: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
            email: z.string().email('Invalid email address'),
            message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long')
        }),
        handler: async (input) => {
            // Log the contact form submission (you can replace this with email sending logic)
            console.log('Contact form submission:', {
                name: input.name,
                email: input.email,
                message: input.message,
                timestamp: new Date().toISOString()
            });
            await db.insert(Inquiry).values(input);

            return {
                success: true,
            };
        }
    })
};
