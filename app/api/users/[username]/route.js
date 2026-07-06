import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
	const { username } = params;

	const response = await fetch(`https://api.github.com/users/${username}`, {
		headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
	});
	const data = await response.json();

	return NextResponse.json(data);
}
