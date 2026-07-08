import { Card } from "../components/card";
import ContactForm from "../components/contact-form"; // Client component
import { Navigation } from "../components/nav";
import { getPrimaryUser } from "../data";

export default async function Contacts(props) {
	const searchParams = await props.searchParams;
	const { customUsername } = searchParams;

	const primaryUser = await getPrimaryUser();
	const _username =
		customUsername || primaryUser?.login || process.env.GITHUB_USERNAME;

	return (
		<div className="bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />

			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="w-full max-w-2xl mx-auto mt-32 sm:mt-0">
					{/* Header */}
					<div className="mb-12 text-center">
						<h1 className="text-4xl font-medium tracking-tight text-white font-display">
							Get in Touch
						</h1>
						<p className="mt-3 text-zinc-400">
							Send me a message and I'll get back to you soon.
						</p>
					</div>

					{/* Contact Form */}
					<Card>
						<div className="p-8 md:p-12">
							<ContactForm />
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
