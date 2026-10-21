//#region node_modules/.nitro/vite/services/ssr/assets/siteConfig-WB2wm6jN.js
/**
* siteConfig — every general detail about the institute.
* Replace these values for each new client. No UI component contains client text.
* Leave an optional field as "" (or remove it) to hide it on the website.
*/
var siteConfig = {
	name: "Apex Academy",
	shortName: "Apex",
	tagline: "Coaching for Classes 8–12, JEE & NEET",
	/** Path to a logo image (e.g. imported asset). Leave "" to use the text monogram. */
	logo: "",
	/** Set true while the site uses demo content. Shows a small notice in the footer. */
	isDemo: true,
	hero: {
		eyebrow: "Admissions open for 2026–27",
		headline: "Big goals start with a clearer way to learn.",
		highlight: "clearer way to learn.",
		description: "Small batches, experienced teachers and weekly doubt-clearing sessions for school, board and entrance exam preparation.",
		/** Add a client photo here, e.g. "/images/classroom.jpg". Leave empty to show the placeholder. */
		image: "",
		imageAlt: "Students and teacher in a classroom",
		imagePlaceholder: "Real classroom photo goes here",
		imageGuidance: "",
		imageCallouts: [{
			icon: "MessageCircleQuestion",
			title: "Weekly doubt sessions",
			text: "One-on-one with faculty"
		}, {
			icon: "ClipboardCheck",
			title: "Weekly tests",
			text: "With detailed analysis"
		}],
		primaryCta: {
			label: "Explore courses",
			href: "#courses"
		},
		secondaryCta: {
			label: "Book a free demo class",
			href: "#enquiry"
		}
	},
	/** Trust indicators. Omit `value` to show only the label & text (no invented numbers). */
	trust: [
		{
			icon: "Lightbulb",
			label: "Concept-first teaching",
			text: "Build understanding before moving to speed and complexity."
		},
		{
			icon: "NotebookPen",
			label: "Structured practice",
			text: "Make progress through focused lessons and regular practice."
		},
		{
			icon: "MessageCircleQuestion",
			label: "Room to ask",
			text: "A learning environment where questions are always welcome."
		}
	],
	about: {
		eyebrow: "About us",
		title: "A focused place to learn, ask and grow.",
		/** Add a client photo here, e.g. "/images/study-group.jpg". Leave empty to show the placeholder. */
		image: "",
		imageAlt: "Students studying together at the institute",
		imagePlaceholder: "Photo of the institute or a study group",
		imageGuidance: "",
		paragraphs: ["Apex Academy is a neighbourhood coaching centre that values clarity over cramming.", "Our approach is simple: explain every concept from first principles, practise until it feels natural, and track each student's progress with regular tests and parent updates."],
		mission: "Our mission is to help every student build the understanding and habits that last beyond the exam.",
		highlights: [
			"Concept-first teaching",
			"Weekly tests & analysis",
			"Monthly parent meetings",
			"Weekly doubt sessions"
		]
	},
	contact: {
		phone: "+91 98765 43210",
		email: "hello@apexacademy.example",
		address: "2nd Floor, Sample Plaza, MG Road, Bengaluru, Karnataka 560001",
		/** Shown in the Visit Us section. Leave "" to hide the landmark row. */
		landmark: "Near Trinity Metro Station, MG Road",
		mapUrl: "https://maps.google.com/?q=MG+Road+Bengaluru",
		/** Optional full iframe src. Leave "" to auto-build from address / mapUrl. */
		mapEmbedUrl: "",
		/** International format, digits only (country code + number). */
		whatsapp: "919876543210",
		whatsappMessage: "Hello! I'd like to know more about your courses.",
		hours: [{
			days: "Mon – Sat",
			time: "8:00 AM – 8:00 PM"
		}, {
			days: "Sunday",
			time: "9:00 AM – 1:00 PM"
		}]
	},
	social: [
		{
			platform: "Instagram",
			url: "https://instagram.com/"
		},
		{
			platform: "Facebook",
			url: "https://facebook.com/"
		},
		{
			platform: "Youtube",
			url: "https://youtube.com/"
		}
	],
	seo: {
		title: "Apex Academy — Coaching for Classes 8–12, JEE & NEET",
		description: "Small-batch coaching for school, board and entrance exams with experienced teachers and weekly doubt sessions. Book a free demo class.",
		favicon: "/favicon.ico"
	},
	footer: {
		blurb: "Coaching for classes 8–12, boards, JEE and NEET. Small batches, clear concepts, steady progress.",
		copyright: `© ${(/* @__PURE__ */ new Date()).getFullYear()} Apex Academy`,
		credit: {
			label: "Website by Climbr Studio",
			url: ""
		}
	}
};
//#endregion
export { siteConfig as t };
