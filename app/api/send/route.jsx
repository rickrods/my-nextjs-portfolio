import { Resend } from "resend";
//import { EmailTemplate } from "./../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;

export async function POST(request) {
	try {
		const { firstName, email, message, turnstileToken } = await request.json();

		// Guard Clause for Environment Variables
		if (!process.env.TURNSTILE_SECRET_KEY || !process.env.RESEND_API_KEY) {
			console.error("CRITICAL: Missing API keys in Environment Variables.");
			return Response.json({ error: "Server configuration missing keys" }, { status: 500 });
		}

		// === Turnstile Verification ===
		const turnstileResponse = await fetch(
			"https://challenges.cloudflare.com/turnstile/v0/siteverify",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					secret: process.env.TURNSTILE_SECRET_KEY,
					response: turnstileToken,
					remoteip: request.headers.get("x-forwarded-for") || "",
				}),
			},
		);

		const turnstileData = await turnstileResponse.json();

		if (!turnstileData.success) {
			return Response.json(
				{ error: "CAPTCHA verification failed" },
				{ status: 400 },
			);
		}

		// === Safe Email Sending Setup ===
		// Option A: If you don't use @react-email rendering packages, fallback to safe plain HTML string:
		const htmlString = `
			<h3>New message from ${firstName}</h3>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Message:</strong> ${message}</p>
		`;

		const { data, error } = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>", 
			to: [EMAIL_ADDRESS],
			subject: `New Contact Form Message from ${firstName}`,
			html: htmlString, // Using 'html' string avoids compilation errors common with 'react:' in App Router routes
		});

		if (error) {
			console.error("Resend API Error:", error);
			return Response.json({ error: error.message || "Email failed" }, { status: 500 });
		}

		return Response.json({ success: true, data });
	} catch (err) {
		// This prints the exact runtime error directly into your Vercel logs tab!
		console.error("Captured 500 Route Crash:", err); 
		return Response.json({ error: err.message || "Internal server error" }, { status: 500 });
	}
}