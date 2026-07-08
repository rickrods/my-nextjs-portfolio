"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LoadingIndicator from "./loading-indicator";

export const Navigation = () => {
	const ref = useRef(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8 text-base">
						<Link
							href="/about"
							prefetch={true}
							className="duration-200 text-zinc-400 hover:text-zinc-100 relative block"
						>
							<span className="inline-flex items-center">
								About <LoadingIndicator />
							</span>
						</Link>
						<Link
							href="/projects"
							prefetch={true}
							className="duration-200 text-zinc-400 hover:text-zinc-100 relative block"
						>
							<span className="inline-flex items-center">
								Projects <LoadingIndicator />
							</span>
						</Link>
						<Link
							href="/contact"
							prefetch={true}
							className="duration-200 text-zinc-400 hover:text-zinc-100 relative block"
						>
							<span className="inline-flex items-center">
								Contact <LoadingIndicator />
							</span>
						</Link>
					</div>

					<Link
						href={"/"}
						className="duration-200 text-zinc-300 hover:text-zinc-100 text-base"
					>
						Home
					</Link>
				</div>
			</div>
		</header>
	);
};
