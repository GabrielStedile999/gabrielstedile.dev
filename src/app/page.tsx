import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { Tag } from "@/components/ui/Tag";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

const TECH = [
	"React",
	"TypeScript",
	"Next.js",
	"Node.js",
	"Tailwind CSS",
	"GraphQL",
	"AI Assisted Tools",
];

export default function Home() {
	return (
		<main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-14 px-6 py-20">
			<div className="gradient-hairline fixed inset-x-0 top-0" aria-hidden />

			{/* Mini hero preview */}
			<section className="flex flex-col items-center gap-6 text-center">
				<Pill dot tone="success">
					Open to opportunities
				</Pill>
				<h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
					Gabriel <GradientText>Stedile</GradientText>
				</h1>
				<p className="text-muted max-w-md text-lg">
					Senior Frontend Engineer — React · TypeScript · Node.js · AI
					Integration
				</p>
				<div className="flex flex-wrap justify-center gap-2">
					{TECH.map((tech) => (
						<Tag key={tech}>{tech}</Tag>
					))}
				</div>
			</section>

			{/* Design system preview */}
			<section className="flex flex-col gap-10">
				<SectionHeading
					eyebrow="Under construction"
					title={
						<>
							Building this portfolio <GradientText>in the open</GradientText>
						</>
					}
					description="Design system ready. Sections, interactions and full bilingual content are on the way."
				/>

				<div className="grid gap-6 md:grid-cols-2">
					<TerminalWindow title="build.log">
						<p>
							<span className="text-accent-to">$</span> npm run build
						</p>
						<p className="text-success">✓ compiled successfully</p>
						<p>
							<span className="text-accent-from">phase:</span> 1/6 — design
							system
						</p>
						<p>
							<span className="text-accent-from">next:</span> sections & layout
						</p>
					</TerminalWindow>

					<div className="grid grid-cols-2 gap-4">
						<StatCard value={10} suffix="+" label="Years of experience" />
						<StatCard value={10} suffix="+" label="Apps delivered" />
						<StatCard value={6} label="Global clients" />
						<StatCard value={3} label="Stack layers: UI · API · AI" />
					</div>
				</div>

				<Card className="flex flex-col items-center gap-3 text-center">
					<p className="text-muted text-sm">
						Meanwhile, find me on{" "}
						<a
							className="decoration-accent-from/50 hover:decoration-accent-to text-foreground underline underline-offset-4"
							href="https://www.linkedin.com/in/gabriel-stedile"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>{" "}
						or{" "}
						<a
							className="decoration-accent-from/50 hover:decoration-accent-to text-foreground underline underline-offset-4"
							href="mailto:gabriel.stedile9@gmail.com"
						>
							email
						</a>
						.
					</p>
				</Card>
			</section>
		</main>
	);
}
