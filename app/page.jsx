import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import data from "../data.json";
import Hero from "./components/hero";
import { Navigation } from "./components/nav";
import { RecentActivity } from "./components/recent-activity";
import { getPrimaryUser, getSecondaryUser, getUser } from "./data";

export default async function Home(props) {
	const searchParams = await props.searchParams;

	return <LandingComponent searchParams={searchParams} />;
}

const UserIcon = async ({ promise }) => {
	const user = await promise;

	return (
		<Image
			alt="👨‍💻"
			width={80}
			height={80}
			src={user.avatar_url || "/favicon.ico"}
			className="rounded-full mx-auto"
		/>
	);
};

const UserText = async ({ promise, fallbackName, description }) => {
	const user = await promise;

	return <p>{description || user.bio}</p>;
};

const _TryYourself = ({ customUsername }) => {
	const href = customUsername ? "/" : "/search";

	return (
		<Link
			href={href}
			className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 border-dashed p-2 rounded-sm border-2 border-zinc-500 hover:border-zinc-300"
		>
			{customUsername
				? `Showing: ${customUsername}, click to cancel ❌`
				: "Try yourself"}
		</Link>
	);
};

const UserBlurb = ({ username, userPromise, description, fallbackName }) => {
	return (
		<div className="flex flex-col gap-4 text-center p-4 pt-12 rounded-xl border border-zinc-800 hover:border-zinc-400/50 transition-all duration-500 w-full md:w-1/2 lg:w-2/5">
			<Link href={`/projects?customUsername=${username}`}>
				<Suspense
					fallback={
						<div className="h-20 w-20 rounded-full bg-zinc-800 animate-pulse mx-auto" />
					}
				>
					<UserIcon promise={userPromise} />
				</Suspense>
				<h1 className="z-10 text-3xl text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text bg-white mt-10">
					{username}
				</h1>
			</Link>
			<div className="text-sm text-zinc-400 space-y-2 min-h-[12rem]">
				<Suspense
					fallback={
						<div className="space-y-2">
							<div className="h-4 bg-zinc-800 rounded w-3/4 mx-auto animate-pulse" />
							<div className="h-4 bg-zinc-800 rounded w-full mx-auto animate-pulse" />
							<div className="h-4 bg-zinc-800 rounded w-2/3 mx-auto animate-pulse" />
						</div>
					}
				>
					<UserText
						promise={userPromise}
						fallbackName={fallbackName}
						description={description}
					/>
					<RecentActivity username={username} />
				</Suspense>
			</div>
		</div>
	);
};

const LandingComponent = async ({ searchParams: { customUsername } }) => {
	const primaryUser = customUsername
		? await getUser(customUsername)
		: await getPrimaryUser();
	const username =
		customUsername ||
		primaryUser?.login ||
		process.env.GITHUB_USERNAME ||
		"testuser";
	const primaryUserPromise = Promise.resolve(primaryUser ?? {});

	let secondaryUserPromise;
	let secondaryUsername = "";
	if (!customUsername) {
		const secondaryUser = await getSecondaryUser();
		secondaryUsername =
			secondaryUser?.login || process.env.SECONDARY_GITHUB_USERNAME || "";
		if (secondaryUsername) {
			secondaryUserPromise = Promise.resolve(secondaryUser ?? {});
		}
	}

	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-y-auto bg-linear-to-tl from-black via-zinc-600/20 to-black">
			<Navigation />
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<br /> <br /> <br /> <br />
			<Hero />
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-in bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 animate-fade-in">
				<h2 className="text-3xl text-white font-bold text-center mb-8">
					My Github Accounts
				</h2>
				<div className="flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 w-full max-w-5xl mx-auto">
					<UserBlurb
						username={username}
						userPromise={primaryUserPromise}
						description={data.description}
						fallbackName={username}
					/>
					{secondaryUserPromise && (
						<UserBlurb
							username={secondaryUsername}
							userPromise={secondaryUserPromise}
							description={data.secondaryDescription}
							fallbackName={secondaryUsername}
						/>
					)}
				</div>
			</div>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500">
					<Suspense
						fallback={<div className="w-full h-px min-h-28">Loading...</div>}
					>
						<div className="flex flex-col gap-8"></div>
					</Suspense>
				</h2>
			</div>
		</div>
	);
};
