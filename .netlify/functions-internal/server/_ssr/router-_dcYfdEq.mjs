import { i as __toESM } from "../_runtime.mjs";
import { t as siteConfig } from "./siteConfig-WB2wm6jN.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-_dcYfdEq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-60NgOGMS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
/**
* themeConfig — Apex Academy tokens per design specification.
*/
var themeConfig = {
	colors: {
		navy: "#101827",
		ivory: "#F7F5EF",
		white: "#FFFFFF",
		cream: "#FBFAF6",
		line: "#E5E0D2",
		chip: "#F2EFE5",
		slot: "#E9E4D4",
		slotBorder: "#B9B39C",
		saffron: "#E7A044",
		saffronHover: "#EDAE5C",
		saffronLight: "#F3C987",
		saffronTint: "#FBEBD0",
		textMuted: "#4B5563",
		textSoft: "#6B7280",
		onDarkHeadings: "#F7F5EF",
		onDarkParagraphs: "#C9CEDA",
		onDarkCards: "#B8C0D0",
		onDarkFooterLinks: "#A9B0BF",
		onDarkFooterMuted: "#8A93A6",
		footerBg: "#0A1020",
		whatsapp: "#25D366",
		ghostBorder: "#D9D5C8",
		inputBorder: "#CFCABB",
		examBorder: "#DDD8C9",
		examDot: "#C7C1AE",
		examText: "#3B4353",
		primary: "#101827",
		primaryForeground: "#FFFFFF",
		background: "#F7F5EF",
		foreground: "#101827",
		border: "#E5E0D2",
		destructive: "#DC2626",
		accent: "#E7A044",
		accentForeground: "#101827"
	},
	fonts: {
		sans: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
		devanagari: "'Noto Sans Devanagari', -apple-system, BlinkMacSystemFont, sans-serif",
		googleFontsUrl: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@500;600&display=swap"
	},
	radius: {
		hero: "32px",
		about: "28px",
		card: "24px",
		mission: "20px",
		chip: "18px",
		tile: "12px",
		input: "12px",
		pill: "999px"
	}
};
/** Converts the theme tokens to CSS variables consumed by src/styles.css */
function themeToCssVars(t = themeConfig) {
	const c = t.colors;
	const r = t.radius;
	const vars = {
		"--navy": c.navy,
		"--ivory": c.ivory,
		"--white": c.white,
		"--cream": c.cream,
		"--line": c.line,
		"--chip": c.chip,
		"--slot": c.slot,
		"--slot-border": c.slotBorder,
		"--saffron": c.saffron,
		"--saffron-hover": c.saffronHover,
		"--saffron-light": c.saffronLight,
		"--saffron-tint": c.saffronTint,
		"--text-muted": c.textMuted,
		"--text-soft": c.textSoft,
		"--on-dark-headings": c.onDarkHeadings,
		"--on-dark-paragraphs": c.onDarkParagraphs,
		"--on-dark-cards": c.onDarkCards,
		"--on-dark-footer-links": c.onDarkFooterLinks,
		"--on-dark-footer-muted": c.onDarkFooterMuted,
		"--footer-bg": c.footerBg,
		"--whatsapp": c.whatsapp,
		"--ghost-border": c.ghostBorder,
		"--input-border": c.inputBorder,
		"--exam-border": c.examBorder,
		"--exam-dot": c.examDot,
		"--exam-text": c.examText,
		"--r-hero": r.hero,
		"--r-about": r.about,
		"--r-card": r.card,
		"--r-mission": r.mission,
		"--r-chip": r.chip,
		"--r-tile": r.tile,
		"--r-input": r.input,
		"--r-pill": r.pill,
		"--shadow-chip": "0 18px 36px -14px rgba(16,24,39,0.30)",
		"--shadow-hero": "0 40px 80px -30px rgba(16,24,39,0.55)",
		"--shadow-card-hover": "0 24px 48px -20px rgba(16,24,39,0.28)",
		"--shadow-contact": "0 40px 80px -32px rgba(16,24,39,0.60)",
		"--shadow-saffron-btn": "0 10px 24px -10px rgba(231,160,68,0.8)",
		"--font-sans": t.fonts.sans,
		"--font-devanagari": t.fonts.devanagari,
		"--background": c.ivory,
		"--foreground": c.navy,
		"--ink": c.navy,
		"--muted": c.textMuted,
		"--soft": c.textSoft,
		"--surface": c.chip,
		"--accent": c.saffron,
		"--line-color": c.line
	};
	return `:root{${Object.entries(vars).map(([k, v]) => `${k}:${v}`).join(";")}}`;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: siteConfig.seo.title },
			{
				name: "description",
				content: siteConfig.seo.description
			},
			{
				name: "theme-color",
				content: themeConfig.colors.primary
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			...themeConfig.fonts.googleFontsUrl ? [{
				rel: "stylesheet",
				href: themeConfig.fonts.googleFontsUrl
			}] : [],
			{
				rel: "icon",
				href: siteConfig.seo.favicon
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: themeToCssVars() } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-WNx-hErs.mjs");
/** Section order — reorder here; visibility comes from sectionsConfig. */
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: siteConfig.seo.title },
		{
			name: "description",
			content: siteConfig.seo.description
		},
		{
			property: "og:title",
			content: siteConfig.seo.title
		},
		{
			property: "og:description",
			content: siteConfig.seo.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
