import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";

const docsOptions: DocsLayoutProps = {
	...baseOptions,
	tree: source.pageTree,
	links: [],
	sidebar: {
		tabs: {
			transform(option, node) {
				const meta = source.getNodeMeta(node);
				if (!meta || !node.icon) return option;

				const color = `var(--${meta.file.dirname}-color, var(--color-fd-foreground))`;

				return {
					...option,
					icon: (
						<div
							className="rounded-md p-1 shadow-lg ring-2 [&_svg]:size-5"
							style={
								{
									color,
									border: `1px solid color-mix(in oklab, ${color} 50%, transparent)`,
									"--tw-ring-color": `color-mix(in oklab, ${color} 20%, transparent)`,
								} as object
							}
						>
							{node.icon}
						</div>
					),
				};
			},
		},
	},
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
