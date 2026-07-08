import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Navigation } from "../components/nav";

export default function AboutPage() {
	return (
		<div className="bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen pb-24">
			<Navigation />

			<div className="container mx-auto px-4 pt-32 max-w-3xl">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-medium tracking-tight text-white mb-4">
						About Me
					</h1>
					<p className="text-xl text-zinc-400">Systems Engineer</p>
				</div>

				<div className="space-y-12 text-zinc-300">
					{/* Introduction */}
					<div>
						<p className="text-lg leading-relaxed">
							Hi, I'm Jason. I've spent more than two decades solving technology
							problems—from supporting enterprise networks and Windows servers
							to building modern web applications, blockchain infrastructure,
							and cloud services. I enjoy taking complex ideas and turning them
							into software that's fast, reliable, and easy to maintain. Whether
							I'm building a Next.js application, automating infrastructure, or
							researching security issues, I like understanding how things work
							from the ground up.
						</p>
					</div>

					{/* Professional Summary */}
					<div>
						<h2 className="text-2xl font-semibold text-white mb-4">
							Professional Journey
						</h2>
						<p className="leading-relaxed">
							My career began in technical support and systems administration
							during the early days of commercial internet. Over the years I
							worked with everything from Windows Active Directory and Cisco
							networking to Linux servers, virtualization, and enterprise
							infrastructure.
						</p>
						<p className="mt-4 leading-relaxed">
							As the industry evolved, so did my interests. I transitioned into
							web development, automation, DevOps, and eventually blockchain
							infrastructure. Building production systems taught me that great
							software isn't just about writing code—it's about reliability,
							observability, security, and creating tools people can depend on.
						</p>
						<p className="mt-4 leading-relaxed">
							Most recently, I founded and operated ImStaked, a blockchain
							staking platform that grew to more than $1.5 million in delegated
							assets. Along the way I designed distributed infrastructure, built
							APIs, implemented authentication systems, and maintained highly
							available services running around the clock.
						</p>
					</div>

					{/* Skills */}
					<div>
						<h2 className="text-2xl font-semibold text-white mb-6">
							Technical Skills
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
							<div>
								<h3 className="font-medium text-white mb-2">
									Languages &amp; Frameworks
								</h3>
								<p className="text-zinc-400">
									JavaScript, TypeScript, Python, Go, Rust, PHP, Bash
								</p>
							</div>
							<div>
								<h3 className="font-medium text-white mb-2">Frontend</h3>
								<p className="text-zinc-400">
									React, Next.js, Tailwind CSS, Wordpress
								</p>
							</div>
							<div>
								<h3 className="font-medium text-white mb-2">Backend</h3>
								<p className="text-zinc-400">
									Node.js, APIs, MySQL, PostgreSQL, MariaDB, Supabase
								</p>
							</div>
							<div>
								<h3 className="font-medium text-white mb-2">
									Infrastructure &amp; DevOps
								</h3>
								<p className="text-zinc-400">
									Docker, Kubernetes, Terraform, Ansible, Jenkins, KVM,
									LAMP/LEMP, GitHub, Gitpod
								</p>
							</div>
							<div>
								<h3 className="font-medium text-white mb-2">Monitoring</h3>
								<p className="text-zinc-400">Grafana, Prometheus, SolarWinds</p>
							</div>
							<div>
								<h3 className="font-medium text-white mb-2">Security</h3>
								<p className="text-zinc-400">OAuth, JWT, Keycloak, Auth0</p>
							</div>
						</div>
					</div>

					{/* Achievements */}
					<div>
						<h2 className="text-2xl font-semibold text-white mb-6">
							Notable Achievements
						</h2>
						<ul className="space-y-6">
							<li className="border-l-2 border-zinc-700 pl-6">
								<strong className="text-white">
									Arweave Hackathon Winner (2019)
								</strong>
								<br />
								Built an automated archival system that became one of the
								highest-volume applications on the network.
							</li>
							<li className="border-l-2 border-zinc-700 pl-6">
								<strong className="text-white">
									Mina Protocol Bug Bounty (2021)
								</strong>
								<br />
								Discovered and responsibly disclosed a critical vulnerability
								that could have compromised the test network.
							</li>
							<li className="border-l-2 border-zinc-700 pl-6">
								<strong className="text-white">ImStaked Platform</strong>
								<br />
								Designed and operated highly available blockchain infrastructure
								supporting millions in delegated assets.
							</li>
						</ul>
					</div>
				</div>

				{/* Contact / Closing */}
				<div className="mt-20 text-center border-t border-zinc-800 pt-12">
					<p className="text-zinc-400 mb-6">
						If you're looking for someone who enjoys solving difficult technical
						problems and building dependable software, I'd love to connect.
						Whether it's a full-stack application, infrastructure project, or
						simply talking technology, feel free to reach out.{" "}
					</p>
					<div className="flex justify-center gap-8">
						<a
							href="https://github.com/rickrods"
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
						>
							<FaGithub size={20} />
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/rickrods/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
						>
							<FaLinkedin size={20} />
							LinkedIn
						</a>
						<a
							href="/contact"
							className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
						>
							<FaEnvelope size={20} />
							Email
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
