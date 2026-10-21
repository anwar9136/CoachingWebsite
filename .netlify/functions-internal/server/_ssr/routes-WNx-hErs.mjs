import { i as __toESM } from "../_runtime.mjs";
import { t as siteConfig } from "./siteConfig-WB2wm6jN.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as ChartLine, D as ArrowRight, E as ArrowUpRight, S as Check, T as BookOpen, _ as LoaderCircle, a as SquareArrowOutUpRight, b as CircleCheck, c as Plus, d as MessageSquare, f as MessageCircle, g as Mail, h as MapPin, i as User, l as Phone, m as Menu, n as X, o as Sparkles, p as MessageCircleQuestionMark, r as Users, s as Quote, t as lucide_react_exports, u as Navigation, v as Clock, w as Camera, x as CircleAlert, y as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-WNx-hErs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Turn any section on/off.
*/
var sectionsConfig = {
	trust: false,
	courses: true,
	about: true,
	whyChooseUs: true,
	faculty: true,
	results: true,
	fees: true,
	testimonials: false,
	faq: true,
	visit: true,
	enquiry: true,
	contact: false,
	whatsappButton: true
};
/** Courses. Add, remove or reorder objects — the site updates automatically. */
var courseConfig = {
	eyebrow: "Courses",
	title: "Programmes built around your goal.",
	description: "Choose a course by class and subject. Every programme includes study material, weekly tests and doubt sessions.",
	items: [
		{
			title: "Foundation Programme",
			level: "CLASS 8 – 10",
			subjects: [
				"Maths",
				"Science",
				"English"
			],
			description: "Build strong basics for boards and future competitive exams with concept-led classes.",
			duration: "1 year",
			cta: {
				label: "Enquire",
				href: "#enquiry"
			}
		},
		{
			title: "Board Excellence",
			level: "CLASS 11 – 12",
			subjects: [
				"Physics",
				"Chemistry",
				"Maths",
				"Biology"
			],
			description: "Complete CBSE/State board syllabus coverage with chapter tests and answer-writing practice.",
			duration: "1–2 years",
			featured: true,
			cta: {
				label: "Enquire",
				href: "#enquiry"
			}
		},
		{
			title: "JEE Main & Advanced",
			level: "CLASS 11 – 12 & DROPPERS",
			subjects: [
				"Physics",
				"Chemistry",
				"Maths"
			],
			description: "Problem-solving focused preparation with full-length mock tests and performance analysis.",
			duration: "2 years",
			cta: {
				label: "Enquire",
				href: "#enquiry"
			}
		},
		{
			title: "NEET Preparation",
			level: "CLASS 11 – 12 & DROPPERS",
			subjects: [
				"Physics",
				"Chemistry",
				"Biology"
			],
			description: "NCERT-centred teaching, daily practice questions and regular NEET-pattern tests.",
			duration: "2 years",
			cta: {
				label: "Enquire",
				href: "#enquiry"
			}
		}
	]
};
/** "Why choose us" features. `icon` is any Lucide icon name (see lucide.dev). */
var featuresConfig = {
	eyebrow: "Why choose us",
	title: "Everything a serious student needs, nothing they don't.",
	items: [
		{
			icon: "Users",
			title: "Small batches",
			text: "Limited seats per batch so every question gets answered."
		},
		{
			icon: "ClipboardCheck",
			title: "Weekly tests",
			text: "Regular tests with detailed analysis to spot weak areas early."
		},
		{
			icon: "BookOpen",
			title: "Curated material",
			text: "Clear notes and practice sheets prepared by our faculty."
		},
		{
			icon: "MessageCircleQuestion",
			title: "Doubt sessions",
			text: "Dedicated one-on-one time to clear doubts every week."
		},
		{
			icon: "LineChart",
			title: "Progress reports",
			text: "Parents receive monthly updates on attendance and scores."
		},
		{
			icon: "MapPin",
			title: "Convenient location",
			text: "Easy to reach, safe and well-lit classrooms."
		}
	]
};
/**
* Faculty. `photo` is optional — without it, initials are shown.
* SAMPLE PROFILES: replace with real, verified details before going live.
*/
var facultyConfig = {
	eyebrow: "Faculty",
	title: "Teachers who make it click.",
	isSample: true,
	items: [
		{
			name: "Priya Sharma",
			photo: "",
			qualification: "M.Sc. Mathematics",
			subjects: ["Mathematics"],
			bio: "Known for breaking tough problems into simple, logical steps."
		},
		{
			name: "Rajesh Iyer",
			photo: "",
			qualification: "M.Sc. Physics, B.Ed.",
			subjects: ["Physics"],
			bio: "Brings physics to life with everyday examples and experiments."
		},
		{
			name: "Ananya Rao",
			photo: "",
			qualification: "M.Sc. Chemistry",
			subjects: ["Chemistry"],
			bio: "Focuses on NCERT mastery and clear reaction mechanisms."
		}
	]
};
/**
* Testimonials. Use only genuine reviews with permission.
* Leave `items: []` until real testimonials are supplied — the section hides itself.
*/
var testimonialConfig = {
	eyebrow: "Testimonials",
	title: "What students and parents say",
	isSample: false,
	items: []
};
var faqConfig = {
	eyebrow: "FAQ",
	title: "Questions parents often ask.",
	items: [
		{
			q: "Which classes and subjects do you cover?",
			a: "We teach classes 8 to 12 across Maths, Science, English, Physics, Chemistry and Biology, plus JEE and NEET preparation."
		},
		{
			q: "Can my child attend a demo class first?",
			a: "Yes. Book a free demo class using the form below and we'll call you to fix a convenient time."
		},
		{
			q: "How big are the batches?",
			a: "Batches are kept small so teachers can give individual attention. Exact size depends on the course."
		},
		{
			q: "How do parents track progress?",
			a: "We share test results regularly and hold parent-teacher meetings every month."
		},
		{
			q: "What are the fees and batch timings?",
			a: "See the fees and timings table above. Real figures replace the brackets before launch — or message us on WhatsApp for the latest details."
		}
	]
};
var hasContent = {
	trust: () => siteConfig.trust.length > 0,
	courses: () => courseConfig.items.length > 0,
	about: () => Boolean(siteConfig.about.title || siteConfig.about.paragraphs.length),
	whyChooseUs: () => featuresConfig.items.length > 0,
	faculty: () => facultyConfig.items.length > 0,
	results: () => true,
	fees: () => true,
	testimonials: () => testimonialConfig.items.length > 0,
	faq: () => faqConfig.items.length > 0,
	visit: () => Boolean(siteConfig.contact.address || siteConfig.contact.mapUrl || siteConfig.contact.mapEmbedUrl),
	enquiry: () => true,
	contact: () => Boolean(siteConfig.contact.phone || siteConfig.contact.email || siteConfig.contact.address),
	whatsappButton: () => Boolean(siteConfig.contact.whatsapp)
};
/** A section shows only if enabled in sectionsConfig AND it has content. */
function isSectionVisible(key) {
	if (!sectionsConfig[key]) return false;
	return hasContent[key] ? hasContent[key]() : true;
}
/** Navigation links. `href` points to a section id. Links to disabled sections are hidden automatically. */
var navigationConfig = {
	links: [
		{
			label: "Courses",
			href: "#courses",
			section: "courses"
		},
		{
			label: "About",
			href: "#about",
			section: "about"
		},
		{
			label: "Faculty",
			href: "#faculty",
			section: "faculty"
		},
		{
			label: "Fees & timings",
			href: "#fees",
			section: "fees"
		},
		{
			label: "FAQ",
			href: "#faq",
			section: "faq"
		},
		{
			label: "Contact",
			href: "#enquiry",
			section: "enquiry"
		}
	],
	enquiryButton: {
		label: "Book free demo",
		href: "#enquiry"
	}
};
function Logo({ inverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				width: "36px",
				height: "36px",
				borderRadius: "10px",
				background: inverse ? "var(--saffron)" : "var(--navy)",
				display: "grid",
				placeItems: "center",
				flexShrink: 0
			},
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					color: inverse ? "var(--navy)" : "var(--saffron)",
					fontWeight: 700,
					fontSize: "19px",
					lineHeight: 1,
					fontFamily: "var(--font-sans)"
				},
				children: "A"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				fontSize: "18px",
				fontWeight: 600,
				color: inverse ? "var(--on-dark-headings)" : "var(--navy)",
				letterSpacing: "-0.02em"
			},
			children: siteConfig.name
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const links = navigationConfig.links.filter((l) => !l.section || isSectionVisible(l.section));
	const btn = navigationConfig.enquiryButton;
	(0, import_react.useEffect)(() => {
		const onResize = () => {
			if (window.innerWidth >= 900) setOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	(0, import_react.useEffect)(() => {
		const updateScrolledState = () => setScrolled(window.scrollY > 8);
		updateScrolledState();
		window.addEventListener("scroll", updateScrolledState, { passive: true });
		return () => window.removeEventListener("scroll", updateScrolledState);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const timingText = siteConfig.contact.hours?.[0] ? `${siteConfig.contact.hours[0].days} · ${siteConfig.contact.hours[0].time}` : "Mon – Sat · 8:00 AM – 8:00 PM";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "announcement-bar",
			role: "region",
			"aria-label": "Announcement",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page announcement-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "announcement-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "announcement-dot",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admissions open for 2026–27" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "announcement-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: timingText })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: cn("site-header", scrolled && "site-header-scrolled", open && "nav-open"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-page flex h-full items-center justify-between",
				"aria-label": "Main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "flex items-center shrink-0 transition-opacity hover:opacity-85",
						"aria-label": `${siteConfig.name} home`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden items-center gap-1 md:flex",
						id: "desktop-nav",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "nav-link",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [btn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: btn.href,
							className: "btn-saffron btn-saffron-sm hidden sm:inline-flex",
							id: "nav-demo-btn",
							children: "Book free demo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "nav-hamburger-btn",
							id: "hamburger-btn",
							onClick: () => setOpen((o) => !o),
							"aria-expanded": open,
							"aria-controls": "mobile-nav-panel",
							"aria-label": open ? "Close menu" : "Open menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								size: 20,
								strokeWidth: 2,
								"aria-hidden": true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								size: 20,
								strokeWidth: 2,
								"aria-hidden": true
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav-panel",
			className: cn("mobile-nav-panel", open && "is-open"),
			"aria-label": "Mobile navigation",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "mobile-nav-link",
						onClick: () => setOpen(false),
						children: l.label
					}) }, l.href))
				}), btn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: btn.href,
					onClick: () => setOpen(false),
					className: "btn-saffron w-full mt-6",
					style: { justifyContent: "center" },
					children: "Book free demo"
				})]
			})
		})
	] });
}
function Icon({ name, className }) {
	const Cmp = name && lucide_react_exports[name] || Sparkles;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, {
		className,
		"aria-hidden": true
	});
}
function Reveal({ children, className, delay = 0, as: Tag = "div", ...rest }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
			el.classList.add("is-visible");
			return;
		}
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				el.classList.add("is-visible");
				io.disconnect();
			}
		}, {
			threshold: .08,
			rootMargin: "0px 0px -4% 0px"
		});
		io.observe(el);
		document.documentElement.classList.add("motion-ready");
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", className),
		style: { transitionDelay: `${delay}ms` },
		...rest,
		children
	});
}
function SectionHeading({ eyebrow, title, description, tone = "default", titleClassName }) {
	const inv = tone === "inverse";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
		eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("eyebrow", inv && "why-eyebrow"),
			children: eyebrow
		}),
		title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: cn("section-heading-h2", inv && "!text-white", titleClassName),
			children: title
		}),
		description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("mt-4 text-[17px] leading-relaxed", inv ? "text-[#A3A9B6]" : "text-[#5B616E]"),
			style: { maxWidth: "48ch" },
			children: description
		})
	] });
}
function FaqItem({ question, answer, defaultOpen = false }) {
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "faq-item",
		"data-open": String(open),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "faq-trigger",
			onClick: () => setOpen((o) => !o),
			"aria-expanded": open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "faq-icon-tile",
				"aria-hidden": "true",
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					size: 15,
					strokeWidth: 2
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					size: 15,
					strokeWidth: 2
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "faq-body",
			"aria-hidden": !open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "faq-body-inner",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "faq-answer",
					children: answer
				})
			})
		})]
	});
}
var academyLinks = [
	{
		label: "About",
		href: "#about",
		section: "about"
	},
	{
		label: "Faculty",
		href: "#faculty",
		section: "faculty"
	},
	{
		label: "Fees & timings",
		href: "#fees",
		section: "fees"
	},
	{
		label: "Contact",
		href: "#enquiry",
		section: "enquiry"
	}
];
function Footer() {
	const c = siteConfig.contact;
	const hours = c.hours[0] ? `${c.hours[0].days} · ${c.hours[0].time}` : "Mon – Sat · 8:00 AM – 8:00 PM";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "site-footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "footer-top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "footer-brand",
						"aria-label": `${siteConfig.name} home`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "footer-logo-mark",
							"aria-hidden": "true",
							children: "A"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "footer-logo-name",
							children: siteConfig.name
						})]
					}), siteConfig.footer.blurb && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-tagline",
						children: siteConfig.footer.blurb
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-col-title",
						children: "Programmes"
					}), courseConfig.items.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#courses",
						className: "footer-link",
						children: course.title
					}, course.title))] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-col-title",
						children: "Academy"
					}), academyLinks.filter((l) => !l.section || isSectionVisible(l.section)).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "footer-link",
						children: l.label
					}, l.href))] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				className: "footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: siteConfig.footer.copyright }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: hours })]
			})]
		})
	});
}
/** Indian mobile: optional +91/91/0 prefix, then 10 digits starting 6-9. */
function isValidIndianPhone(input) {
	const digits = input.replace(/[\s\-()]/g, "");
	return /^(?:\+?91|0)?[6-9]\d{9}$/.test(digits);
}
function whatsappLink(number, message = "") {
	return `https://wa.me/${number.replace(/\D/g, "")}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}
function telLink(phone) {
	return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
/** Google Maps search / embed query from address or a maps.google.com ?q= link. */
function mapsPlaceQuery(address, mapUrl) {
	if (address?.trim()) return address.trim();
	if (!mapUrl?.trim()) return "";
	try {
		const q = new URL(mapUrl).searchParams.get("q");
		if (q?.trim()) return q.trim();
	} catch {}
	return mapUrl.trim();
}
function googleMapsEmbedUrl(query) {
	return `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=en&z=16&output=embed`;
}
function googleMapsDirectionsUrl(destination) {
	return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}
function googleMapsPlaceUrl(query) {
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappLink(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: "sticky-whatsapp-btn",
		id: "sticky-whatsapp",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
				size: 21,
				strokeWidth: 2,
				fill: "#FFFFFF",
				color: "#25D366",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sticky-whatsapp-label",
				children: "Chat with us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sticky-whatsapp-pulse-dot",
				"aria-hidden": "true"
			})
		]
	});
}
var devanagariTagline = "मज़बूत नींव, बड़े लक्ष्य";
function Hero() {
	const c = siteConfig.contact;
	const waUrl = whatsappLink(c.whatsapp, c.whatsappMessage);
	const parallaxRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const media = parallaxRef.current;
		if (!media) return;
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		const mobile = window.matchMedia("(max-width: 899px)");
		let frame = 0;
		const update = () => {
			frame = 0;
			if (reducedMotion.matches || mobile.matches) {
				media.style.transform = "";
				media.style.willChange = "";
				return;
			}
			const container = media.parentElement;
			if (!container) return;
			const bounds = container.getBoundingClientRect();
			const progress = (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height);
			const offset = Math.max(-10, Math.min(10, (progress - .5) * 20));
			media.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
			media.style.willChange = "transform";
		};
		const scheduleUpdate = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", scheduleUpdate, { passive: true });
		window.addEventListener("resize", scheduleUpdate);
		reducedMotion.addEventListener("change", scheduleUpdate);
		mobile.addEventListener("change", scheduleUpdate);
		return () => {
			window.removeEventListener("scroll", scheduleUpdate);
			window.removeEventListener("resize", scheduleUpdate);
			reducedMotion.removeEventListener("change", scheduleUpdate);
			mobile.removeEventListener("change", scheduleUpdate);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "hero-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page hero-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-eyebrow-wrapper anim-hero anim-hero-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow hero-eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "saffron-dot",
								"aria-hidden": "true"
							}), "School tuition · Boards · JEE · NEET"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-title anim-hero anim-hero-2",
						children: [
							"Build strong",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"foundations.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Achieve ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-highlight-underline",
								children: "bigger goals."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-tagline anim-hero anim-hero-3",
						children: devanagariTagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-desc anim-hero anim-hero-3",
						children: "Small batches, experienced teachers and weekly doubt-clearing sessions for school tuition, board exam support and JEE/NEET preparation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-ctas anim-hero anim-hero-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#enquiry",
							className: "btn-saffron",
							id: "hero-book-demo-btn",
							children: ["Book a free demo class", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 18,
								strokeWidth: 2,
								"aria-hidden": true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#courses",
							className: "btn-ghost",
							id: "hero-explore-courses-btn",
							children: "Explore our courses"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-whatsapp-row anim-hero anim-hero-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hero-whatsapp-link",
							id: "hero-whatsapp-cta",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-whatsapp-icon-circle",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									size: 18,
									strokeWidth: 2,
									fill: "#FFFFFF",
									color: "#25D366"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-whatsapp-text",
								children: "Chat on WhatsApp"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-exam-strip anim-hero anim-hero-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-exam-label",
							children: "Coaching for"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-exam-items",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CBSE" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-exam-dot",
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "State Board" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-exam-dot",
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "JEE" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-exam-dot",
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NEET" })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-right anim-hero anim-hero-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-photo-container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: parallaxRef,
						className: "hero-photo-parallax",
						children: siteConfig.hero.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: siteConfig.hero.image,
							alt: siteConfig.hero.imageAlt,
							className: "hero-photo-img"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-photo-fallback",
							role: "img",
							"aria-label": siteConfig.hero.imagePlaceholder,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-photo-slot",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hero-photo-camera",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
											size: 24,
											strokeWidth: 1.75
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-photo-slot-title",
										children: siteConfig.hero.imagePlaceholder
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-photo-slot-sub",
										children: siteConfig.hero.imageGuidance
									})
								]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hero-photo-saffron-strip",
						"aria-hidden": "true"
					})]
				}), siteConfig.hero.imageCallouts.map((callout, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `hero-float-card ${index === 0 ? "hero-float-top-left" : "hero-float-bottom-right"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `hero-float-icon-tile ${index === 0 ? "hero-float-icon-tint" : "hero-float-icon-navy"}`,
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: callout.icon,
							className: `h-4 w-4 ${index === 1 ? "text-[#E7A044]" : "text-[#101827]"}`
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hero-float-title",
						children: callout.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hero-float-sub",
						children: callout.text
					})] })]
				}, callout.title))]
			})]
		})
	});
}
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Learning approach",
		className: "trust-strip",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page grid md:grid-cols-3",
			children: siteConfig.trust.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 60,
				className: "trust-item flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "trust-icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: t.icon,
						className: "h-5 w-5"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-foreground",
						children: t.label
					}), t.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted-foreground",
						children: t.text
					})]
				})]
			}, t.label))
		})
	});
}
function Courses() {
	const [activeTab, setActiveTab] = (0, import_react.useState)(0);
	const tab0Courses = courseConfig.items.slice(0, 2);
	const tab1Courses = courseConfig.items.slice(2, 4);
	const currentCourses = activeTab === 0 ? tab0Courses : tab1Courses;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "courses",
		className: "courses-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "courses-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "courses-header-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "saffron-dot",
								"aria-hidden": "true"
							}), courseConfig.eyebrow]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-heading-h2",
							children: courseConfig.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "courses-header-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "courses-header-desc",
							children: "Every programme includes study material, weekly tests and doubt sessions."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					className: "courses-tab-wrapper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "courses-tab-track",
						role: "tablist",
						"aria-label": "Course categories",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							role: "tab",
							"aria-selected": activeTab === 0,
							id: "tab-school-boards",
							"aria-controls": "panel-school-boards",
							className: `courses-tab-btn ${activeTab === 0 ? "is-active" : ""}`,
							onClick: () => setActiveTab(0),
							children: "School & Boards · Classes 8–12"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							role: "tab",
							"aria-selected": activeTab === 1,
							id: "tab-jee-neet",
							"aria-controls": "panel-jee-neet",
							className: `courses-tab-btn ${activeTab === 1 ? "is-active" : ""}`,
							onClick: () => setActiveTab(1),
							children: "JEE & NEET"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: activeTab === 0 ? "panel-school-boards" : "panel-jee-neet",
					role: "tabpanel",
					"aria-labelledby": activeTab === 0 ? "tab-school-boards" : "tab-jee-neet",
					className: "courses-grid courses-grid-enter",
					children: currentCourses.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 70,
						as: "article",
						className: "course-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "course-card-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "course-class-text",
									children: c.level
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "course-number-tile",
									"aria-hidden": "true",
									children: String(i + 1).padStart(2, "0")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "course-card-title",
								children: c.title
							}),
							c.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "course-card-desc",
								children: c.description
							}),
							c.subjects && c.subjects.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "course-subjects-line",
								children: c.subjects.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "course-spacer" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "course-card-footer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "course-duration-text",
									children: ["Duration · ", c.duration]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: c.cta?.href || "#enquiry",
									className: "course-enquire-link",
									"aria-label": `Enquire about ${c.title}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 17,
										strokeWidth: 2.2,
										className: "course-enquire-arrow",
										"aria-hidden": "true"
									})]
								})]
							})
						]
					}, c.title))
				}, activeTab)
			]
		})
	});
}
function About() {
	const a = siteConfig.about;
	const checkItems = a.highlights;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "about-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page about-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "about-photo-wrapper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "about-photo-container",
					children: a.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: a.image,
						alt: a.imageAlt,
						className: "about-photo-img"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-photo-slot",
						role: "img",
						"aria-label": a.imagePlaceholder,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
								size: 26,
								strokeWidth: 1.75,
								color: "#6B7280",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "about-photo-slot-title",
								children: a.imagePlaceholder
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "about-photo-slot-sub",
								children: a.imageGuidance
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-mission-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "about-mission-eyebrow",
						children: "OUR MISSION"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "about-mission-text",
						children: a.mission || "Help every student build the understanding and habits that last beyond the exam."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "about-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "saffron-dot",
							"aria-hidden": "true"
						}), a.eyebrow || "ABOUT US"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-heading-h2 about-title",
						children: a.title || "A focused place to learn, ask and grow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "about-desc",
						children: a.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "about-check-grid",
						children: checkItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-check-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "about-check-circle",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 14,
									strokeWidth: 2.5,
									color: "#101827"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "about-check-label",
								children: item
							})]
						}, item))
					})
				]
			})]
		})
	});
}
function WhyChooseUs() {
	const items = [
		{
			icon: Users,
			title: "Small batches",
			text: "Limited seats per batch so every question gets answered."
		},
		{
			icon: ClipboardCheck,
			title: "Weekly tests",
			text: "Regular tests with detailed analysis to spot weak areas early."
		},
		{
			icon: BookOpen,
			title: "Curated material",
			text: "Clear notes and practice sheets prepared by our faculty."
		},
		{
			icon: MessageCircleQuestionMark,
			title: "Doubt sessions",
			text: "Dedicated one-on-one time to clear doubts every week."
		},
		{
			icon: ChartLine,
			title: "Parent updates",
			text: "Monthly updates on attendance and scores, plus parent meetings."
		},
		{
			icon: MapPin,
			title: "Convenient location",
			text: "Easy to reach, safe and well-lit classrooms."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "why-section jaali-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "why-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow why-eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "saffron-dot",
						"aria-hidden": "true"
					}), featuresConfig.eyebrow || "WHY CHOOSE APEX"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-heading-h2 why-title",
					children: featuresConfig.title || "Everything a serious student needs, nothing they don't."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-grid-box",
				children: items.map((item, i) => {
					const IconCmp = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 55,
						className: "why-cell",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "why-icon-tile",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCmp, {
									size: 22,
									strokeWidth: 1.75,
									color: "#E7A044"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "why-cell-title",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "why-cell-desc",
								children: item.text
							})
						]
					}, item.title);
				})
			})]
		})
	});
}
function Faculty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faculty",
		className: "faculty-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "saffron-dot",
					"aria-hidden": "true"
				}), facultyConfig.eyebrow]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-heading-h2 faculty-title",
				children: facultyConfig.title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "faculty-grid",
				children: facultyConfig.items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 80,
					as: "article",
					className: "faculty-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `faculty-photo-tile ${f.photo ? "" : "faculty-photo-placeholder"}`,
						children: [
							f.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: f.photo,
								alt: f.name,
								width: 480,
								height: 320,
								loading: "lazy",
								className: "faculty-photo-img"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "faculty-silhouette",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "faculty-silhouette-head" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "faculty-silhouette-body" })]
							}),
							f.subjects?.[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "faculty-subject-pill",
								children: f.subjects[0]
							}),
							!f.photo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "faculty-photo-slot",
								children: "Photo slot"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faculty-info",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "faculty-name",
								children: f.name
							}),
							f.qualification && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "faculty-qual",
								children: f.qualification
							}),
							f.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "faculty-bio",
								children: f.bio
							})
						]
					})]
				}, f.name))
			})]
		})
	});
}
/**
* Results & achievements. Only publish VERIFIED results.
* Set `items: []` (or disable in sectionsConfig) if the client has none.
*/
var resultsConfig = {
	eyebrow: "Results",
	title: "Progress we're proud of",
	isSample: false,
	items: []
};
function Results() {
	const hasRealData = resultsConfig.items && resultsConfig.items.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "results",
		className: "results-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "results-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "results-header-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "saffron-dot",
							"aria-hidden": "true"
						}), "RESULTS & ACHIEVERS"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-heading-h2 results-title",
						children: "Our students, in their own words and marks."
					})]
				}), !hasRealData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "results-preview-note",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Design preview: this section only appears on the live site once real, verified results are added." })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "results-grid",
				children: hasRealData ? resultsConfig.items.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 70,
					as: "article",
					className: "result-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "result-avatar",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								size: 32,
								strokeWidth: 1.5,
								color: "#6B7280"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "result-score",
							children: r.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "result-name",
							children: r.label
						}),
						r.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "result-meta",
							children: r.note
						})
					]
				}, i)) : [
					{
						score: "[Score / Rank]",
						name: "[Student name]",
						examYear: "[Exam · Year]"
					},
					{
						score: "[Score / Rank]",
						name: "[Student name]",
						examYear: "[Exam · Year]"
					},
					{
						score: "[Score / Rank]",
						name: "[Student name]",
						examYear: "[Exam · Year]"
					},
					{
						score: "[Score / Rank]",
						name: "[Student name]",
						examYear: "[Exam · Year]"
					}
				].map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 70,
					as: "article",
					className: "result-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "result-avatar",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								size: 32,
								strokeWidth: 1.5,
								color: "#6B7280"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "result-score",
							children: card.score
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "result-name",
							children: card.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "result-meta",
							children: card.examYear
						})
					]
				}, i))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section-y container-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: testimonialConfig.eyebrow,
			title: testimonialConfig.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-6 md:grid-cols-3",
			children: testimonialConfig.items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
							className: "h-8 w-8 text-accent",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-5 flex-1 text-lg leading-relaxed text-foreground",
							children: [
								"“",
								t.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: t.name
							}), t.role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: t.role
							})]
						})
					]
				})
			}, i))
		})]
	});
}
/**
* Fees & batch timings.
* Leave `timing` / `fee` empty (or use bracket placeholders) until real figures are confirmed.
*/
var feesConfig = {
	eyebrow: "Fees & timings",
	title: "Clear fees, clear batch timings.",
	description: "Parents shouldn't have to call to find out. Real figures replace the brackets before launch.",
	cta: {
		label: "Ask about a batch",
		href: "#enquiry"
	},
	columns: [
		"Programme",
		"Timings",
		"Fees"
	],
	items: [
		{
			programme: "Foundation Programme",
			level: "Class 8 – 10",
			timing: "[Batch timing]",
			fee: "₹ [Amount]"
		},
		{
			programme: "Board Excellence",
			level: "Class 11 – 12",
			timing: "[Batch timing]",
			fee: "₹ [Amount]"
		},
		{
			programme: "JEE Main & Advanced",
			level: "Class 11 – 12 & Droppers",
			timing: "[Batch timing]",
			fee: "₹ [Amount]"
		},
		{
			programme: "NEET Preparation",
			level: "Class 11 – 12 & Droppers",
			timing: "[Batch timing]",
			fee: "₹ [Amount]"
		}
	]
};
function Fees() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "fees",
		className: "fees-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page fees-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "fees-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "saffron-dot",
							"aria-hidden": "true"
						}), feesConfig.eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-heading-h2 fees-title",
						children: feesConfig.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "fees-desc",
						children: feesConfig.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: feesConfig.cta.href,
						className: "btn-navy fees-cta",
						children: feesConfig.cta.label
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				className: "fees-table-card",
				role: "table",
				"aria-label": "Programme fees and timings",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fees-table-head",
					role: "row",
					children: feesConfig.columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						role: "columnheader",
						children: col
					}, col))
				}), feesConfig.items.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fees-table-row",
					role: "row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "cell",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "fees-prog-name",
								children: row.programme
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "fees-prog-level",
								children: row.level
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "cell",
							className: "fees-timing",
							children: row.timing
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "cell",
							className: "fees-amount",
							children: row.fee
						})
					]
				}, row.programme))]
			})]
		})
	});
}
function Faq() {
	const wa = siteConfig.contact.whatsapp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "faq-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page faq-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "faq-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "saffron-dot",
							"aria-hidden": "true"
						}), faqConfig.eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-heading-h2 faq-title",
						children: faqConfig.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faq-talk-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "faq-talk-title",
								children: "Still have questions?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "faq-talk-sub",
								children: "Message us on WhatsApp and we'll help you choose the right programme."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappLink(wa, siteConfig.contact.whatsappMessage),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-navy btn-navy-sm",
								children: "Chat on WhatsApp"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				className: "faq-accordion-card",
				role: "list",
				children: faqConfig.items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "listitem",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqItem, {
						question: f.q,
						answer: f.a,
						defaultOpen: i === 0
					})
				}, f.q))
			})]
		})
	});
}
function VisitMap() {
	const c = siteConfig.contact;
	const hours = c.hours[0] ? `${c.hours[0].days} · ${c.hours[0].time}` : "Mon – Sat · 8:00 AM – 8:00 PM";
	const placeQuery = mapsPlaceQuery(c.address, c.mapUrl);
	const embedSrc = c.mapEmbedUrl?.trim() || (placeQuery ? googleMapsEmbedUrl(placeQuery) : "");
	const directionsUrl = placeQuery ? googleMapsDirectionsUrl(placeQuery) : c.mapUrl || "#";
	const openMapsUrl = placeQuery ? googleMapsPlaceUrl(placeQuery) : c.mapUrl || directionsUrl;
	const addressText = c.address?.trim() || "[Centre address, area, city, PIN]";
	const landmarkText = c.landmark?.trim();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "visit",
		className: "visit-map-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "visit-map-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "visit-map-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "saffron-dot",
								"aria-hidden": "true"
							}), "Visit us"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "visit-map-title",
							children: "Visit the centre, meet the teachers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "visit-map-info-list",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "visit-map-info-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "visit-map-info-icon",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											size: 18,
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "visit-map-info-text",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "visit-map-info-label",
											children: "Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "visit-map-info-value",
											children: addressText
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "visit-map-info-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "visit-map-info-icon",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											size: 18,
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "visit-map-info-text",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "visit-map-info-label",
											children: "Open"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "visit-map-info-value",
											children: hours
										})]
									})]
								}),
								(landmarkText || siteConfig.isDemo) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "visit-map-info-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "visit-map-info-icon",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
											size: 18,
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "visit-map-info-text",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "visit-map-info-label",
											children: "Landmark"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "visit-map-info-value",
											children: landmarkText || "[Nearby landmark or station]"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "visit-map-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: directionsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-saffron visit-map-btn",
								id: "visit-get-directions-btn",
								children: ["Get directions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 17,
									strokeWidth: 2.2,
									"aria-hidden": true
								})]
							}), c.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: telLink(c.phone),
								className: "btn-ghost visit-map-btn",
								id: "visit-call-btn",
								children: "Call the centre"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "btn-ghost visit-map-btn visit-map-btn-disabled",
								"aria-disabled": "true",
								children: "Call the centre"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "visit-map-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "visit-map-frame",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "visit-map-decor",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "visit-map-decor-blocks" }), !embedSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "visit-map-marker-stack",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "visit-map-marker-label",
										children: siteConfig.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "visit-map-marker-pin" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "visit-map-marker-glow" })
								]
							})]
						}), embedSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `Map showing ${siteConfig.name}`,
							className: "visit-map-iframe",
							src: embedSrc,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							allowFullScreen: true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "visit-map-preview-note",
							children: "Preview: add an address or map URL in site settings to show the live map."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: openMapsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "visit-map-open-btn",
						"aria-label": `Open ${siteConfig.name} in Google Maps`,
						id: "visit-open-maps-btn",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareArrowOutUpRight, {
							size: 18,
							strokeWidth: 2,
							"aria-hidden": true
						})
					})]
				})]
			})
		})
	});
}
/**
* Enquiry form settings.
* provider:
*  - "whatsapp": opens WhatsApp with the enquiry pre-filled (no backend needed).
*  - "endpoint": POSTs JSON to `endpoint` (Formspree, Getform, your own API…).
*  - "none":     form shows a clear "not connected" message — nothing is faked.
*/
var formConfig = {
	provider: "whatsapp",
	endpoint: "",
	eyebrow: "Free demo class",
	title: "Book a free demo class",
	description: "Share a few details and our team will get in touch to schedule a demo at a time that suits you.",
	classOptions: [
		"Class 8",
		"Class 9",
		"Class 10",
		"Class 11",
		"Class 12",
		"Dropper"
	],
	submitLabel: "Request a callback",
	successMessage: "Thank you! We'll contact you shortly.",
	whatsappSuccessMessage: "WhatsApp has opened with your enquiry — just press send."
};
var schema = objectType({
	name: stringType().trim().min(2, "Please enter a name").max(80),
	phone: stringType().trim().refine(isValidIndianPhone, "Enter a valid 10-digit Indian mobile number"),
	studentClass: stringType().min(1, "Please select a class"),
	course: stringType().min(1, "Please select a programme")
});
var empty = {
	name: "",
	phone: "",
	studentClass: formConfig.classOptions[0] ?? "",
	course: courseConfig.items[0]?.title ?? ""
};
function Enquiry() {
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)({ type: "idle" });
	const set = (k) => (e) => {
		setValues((v) => ({
			...v,
			[k]: e.target.value
		}));
		setErrors((er) => ({
			...er,
			[k]: void 0
		}));
	};
	async function onSubmit(e) {
		e.preventDefault();
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const errs = {};
			parsed.error.issues.forEach((i) => {
				errs[i.path[0]] ??= i.message;
			});
			setErrors(errs);
			return;
		}
		const d = parsed.data;
		setStatus({ type: "loading" });
		try {
			if (formConfig.provider === "endpoint" && formConfig.endpoint) {
				if (!(await fetch(formConfig.endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					},
					body: JSON.stringify(d)
				})).ok) throw new Error("Request failed");
				setStatus({
					type: "success",
					message: formConfig.successMessage
				});
				setValues(empty);
			} else if (formConfig.provider === "whatsapp" && siteConfig.contact.whatsapp) {
				const text = `Demo class enquiry\nName: ${d.name}\nPhone: ${d.phone}\nClass: ${d.studentClass}\nProgramme: ${d.course}`;
				window.open(whatsappLink(siteConfig.contact.whatsapp, text), "_blank", "noopener");
				setStatus({
					type: "success",
					message: formConfig.whatsappSuccessMessage
				});
			} else setStatus({
				type: "error",
				message: `Online enquiries aren't connected yet. Please call us${siteConfig.contact.phone ? ` at ${siteConfig.contact.phone}` : ""}.`
			});
		} catch {
			setStatus({
				type: "error",
				message: "Something went wrong sending your enquiry. Please try again or call us."
			});
		}
	}
	const err = (k) => errors[k] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		id: `${k}-err`,
		className: "form-error",
		role: "alert",
		children: errors[k]
	});
	const aria = (k) => ({
		"aria-invalid": !!errors[k],
		"aria-describedby": errors[k] ? `${k}-err` : void 0
	});
	const c = siteConfig.contact;
	const hours = c.hours[0] ? `${c.hours[0].days} · ${c.hours[0].time}` : "Mon – Sat · 8:00 AM – 8:00 PM";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "enquiry",
		className: "contact-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-big-card jaali-pattern",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow contact-eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "saffron-dot",
								"aria-hidden": "true"
							}), "Contact"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "contact-h2",
							children: "Book a free demo class."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "contact-desc",
							children: "Sit in on a class, meet the teachers and see how we teach before you decide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-info-list",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contact-info-item",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "contact-info-icon",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											size: 16,
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hours })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contact-info-item",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "contact-info-icon",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											size: 16,
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.address || "[Centre address]" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contact-info-item",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "contact-info-icon",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											size: 16,
											strokeWidth: 1.75
										})
									}), c.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: telLink(c.phone),
										className: "contact-info-link",
										children: c.phone
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "[Phone / WhatsApp number]" })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-form-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "contact-form-title",
						children: "Request a callback"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						noValidate: true,
						onSubmit,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "form-field",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "enq-name",
											className: "form-label",
											children: "Student or parent name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "enq-name",
											required: true,
											autoComplete: "name",
											placeholder: "Full name",
											value: values.name,
											onChange: set("name"),
											className: cn("form-input", errors.name && "error"),
											...aria("name")
										}),
										err("name")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "form-field",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "enq-phone",
											className: "form-label",
											children: "Phone number"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "enq-phone",
											type: "tel",
											inputMode: "tel",
											required: true,
											autoComplete: "tel",
											placeholder: "10-digit mobile number",
											value: values.phone,
											onChange: set("phone"),
											className: cn("form-input", errors.phone && "error"),
											...aria("phone")
										}),
										err("phone")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "form-grid form-grid-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "form-field",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "enq-class",
												className: "form-label",
												children: "Class"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												id: "enq-class",
												required: true,
												value: values.studentClass,
												onChange: set("studentClass"),
												className: cn("form-input form-select", errors.studentClass && "error"),
												...aria("studentClass"),
												children: formConfig.classOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: opt }, opt))
											}),
											err("studentClass")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "form-field",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "enq-course",
												className: "form-label",
												children: "Interested programme"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												id: "enq-course",
												required: true,
												value: values.course,
												onChange: set("course"),
												className: cn("form-input form-select", errors.course && "error"),
												...aria("course"),
												children: courseConfig.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item.title }, item.title))
											}),
											err("course")
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: status.type === "loading",
									className: "btn-primary contact-submit",
									id: "enq-submit-btn",
									children: [status.type === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 18,
										className: "animate-spin",
										"aria-hidden": true
									}) : null, status.type === "loading" ? "Sending…" : formConfig.submitLabel]
								}),
								c.whatsapp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappLink(c.whatsapp, c.whatsappMessage),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "contact-whatsapp-btn",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										size: 18,
										strokeWidth: 2,
										color: "#25D366",
										"aria-hidden": true
									}), "Or chat on WhatsApp"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"aria-live": "polite",
							children: [status.type === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "form-status form-status-ok",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									size: 16,
									className: "mt-0.5 shrink-0",
									"aria-hidden": true
								}), status.message]
							}), status.type === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								role: "alert",
								className: "form-status form-status-err",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
									size: 16,
									className: "mt-0.5 shrink-0",
									"aria-hidden": true
								}), status.message]
							})]
						})]
					})]
				})]
			}) })
		})
	});
}
function Item({ icon: I, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "contact-item flex gap-4 border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-10 w-10 shrink-0 place-items-center bg-muted text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-muted-foreground",
				children
			})]
		})]
	});
}
function Contact() {
	const c = siteConfig.contact;
	const link = "font-medium text-foreground underline-offset-4 hover:text-primary hover:underline";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section-y bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: "Visit us or get in touch"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: [
					c.address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
						icon: MapPin,
						title: "Address",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.address }), c.mapUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: c.mapUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: `${link} mt-2 inline-block text-sm`,
							children: "Open in Google Maps →"
						})]
					}),
					c.hours.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: Clock,
						title: "Opening hours",
						children: c.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-foreground",
								children: [h.days, ":"]
							}),
							" ",
							h.time
						] }, h.days))
					}),
					c.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: Phone,
						title: "Phone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: telLink(c.phone),
							className: link,
							children: c.phone
						})
					}),
					c.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: Mail,
						title: "Email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${c.email}`,
							className: `${link} break-all`,
							children: c.email
						})
					}),
					c.whatsapp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: MessageCircle,
						title: "WhatsApp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink(c.whatsapp, c.whatsappMessage),
							target: "_blank",
							rel: "noopener noreferrer",
							className: link,
							children: "Chat with us on WhatsApp"
						})
					})
				]
			})]
		})
	});
}
/** Section order — reorder here; visibility comes from sectionsConfig. */
var sections = [
	["trust", Trust],
	["courses", Courses],
	["about", About],
	["whyChooseUs", WhyChooseUs],
	["results", Results],
	["faculty", Faculty],
	["fees", Fees],
	["testimonials", Testimonials],
	["faq", Faq],
	["visit", VisitMap],
	["enquiry", Enquiry],
	["contact", Contact]
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), sections.map(([key, Section]) => isSectionVisible(key) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {}, key) : null)] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		isSectionVisible("whatsappButton") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
	] });
}
//#endregion
export { Index as component };
