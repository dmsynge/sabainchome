export type Group = 'civic' | 'design' | 'trade';

export interface Product {
	slug: string;
	name: string;
	/** Short label shown above the name. */
	kind: string;
	/** One line, used in lists and meta descriptions. */
	summary: string;
	/** The product's own headline, quoted on its page. */
	headline: string;
	/** English gloss when the headline is in another language. */
	headlineTranslation?: string;
	headlineLang?: string;
	url: string;
	domain: string;
	group: Group;
	where: string;
	audience: string;
	status: string;
	/** Tint for the product's plate. */
	tone: string;
	/** Text shown large on the plate. */
	plate: string;
	intro: string[];
	highlights: { title: string; text: string }[];
}

export const groups: Record<Group, { title: string; blurb: string }> = {
	civic: {
		title: 'Tools for organisers',
		blurb:
			'Software and research for campaigns, movements and the people who power them.'
	},
	design: {
		title: 'Design',
		blurb: 'Brand identity, illustration and art direction across Japan and Australia.'
	},
	trade: {
		title: 'Businesses we run',
		blurb: 'Real shops and real stock. Small trades, done carefully.'
	}
};

export const products: Product[] = [
	{
		slug: '80a',
		name: '80a',
		kind: 'Campaign technology & research',
		summary: 'Technology and research for forward-thinking progressive campaigns.',
		headline: 'Technology and research for forward-thinking progressive campaigns.',
		url: 'https://80a.co',
		domain: '80a.co',
		group: 'civic',
		where: 'Australia',
		audience: 'Progressive candidates, campaigns and advocacy groups',
		status: 'Working with campaigns',
		tone: '#2f4a3e',
		plate: '80a',
		intro: [
			'80a is our campaign practice. We work alongside progressive campaigns in Australia, building the tools they use and doing the research that tells them where to put their effort.',
			'Most campaigns run on a patchwork of spreadsheets and goodwill. 80a brings the kind of technology and analysis that usually only the biggest operations can afford to smaller, faster-moving teams, and stays close enough to the work to change things when the campaign changes.'
		],
		highlights: [
			{
				title: 'Volunteer and field tools',
				text: 'Action hubs, rosters and polling-day tools that give supporters a clear next step and give organisers a clear picture.'
			},
			{
				title: 'Phone research',
				text: 'Fast, affordable surveys of real voters through VoiceBlocks, our AI-native phone research platform.'
			},
			{
				title: 'Electorate analysis',
				text: 'Seat-level modelling, demographics and results analysis, written up so the people making decisions can use it.'
			},
			{
				title: 'Hands-on support',
				text: 'We set things up with you, train your team and stay on call through the campaign.'
			}
		]
	},
	{
		slug: 'actionblocks',
		name: 'ActionBlocks',
		kind: 'Volunteer action hub',
		summary: 'A self-organising volunteer hub that gives every supporter a useful next step.',
		headline: 'Your campaign’s central volunteer action hub.',
		url: 'https://actionblocks.org',
		domain: 'actionblocks.org',
		group: 'civic',
		where: 'Victoria, Australia',
		audience: 'Candidates and campaign teams, starting with the 2026 Victorian state election',
		status: 'Live',
		tone: '#8a4a2b',
		plate: 'Action­Blocks',
		intro: [
			'Campaigns are good at getting people to say “I want to help” and much worse at what happens next. ActionBlocks gives every campaign a branded hub where supporters can see exactly what they can do, whether that is an hour of door-knocking, a shift in the office, or ten minutes online from the couch.',
			'Each action is a short guided flow. Supporters earn points as they go, and bigger responsibilities unlock over time, such as writing letters to the editor, running a street stall or leading a team. Organisers see who did what and get a heads-up when someone puts their hand up.'
		],
		highlights: [
			{
				title: 'One place to help',
				text: 'Every way to get involved, online and in person, on a single board in the campaign’s own branding.'
			},
			{
				title: 'Guided actions',
				text: 'A library of ready-made actions, from following the campaign on social media to checking enrolment and signing up to volunteer.'
			},
			{
				title: 'Momentum built in',
				text: 'Points, progress and reminders turn a first sign-up into a habit, with new actions added as the campaign moves.'
			},
			{
				title: 'Set up with you',
				text: 'A 30-minute call, then we build your hub with your branding, links and starter actions. You edit and share.'
			}
		]
	},
	{
		slug: 'voiceblocks',
		name: 'VoiceBlocks',
		kind: 'AI-native phone research',
		summary: 'Phone surveys conducted by an AI interviewer, with every answer traceable to a transcript.',
		headline: 'AI-native phone research for your team.',
		url: 'https://voiceblocks.80a.co',
		domain: 'voiceblocks.80a.co',
		group: 'civic',
		where: 'Australia',
		audience: 'Campaigns, advocacy groups and researchers',
		status: 'Invitation only',
		tone: '#29435a',
		plate: 'Voice­Blocks',
		intro: [
			'VoiceBlocks runs phone surveys by having a conversation. You write a short questionnaire, upload a list, and an AI interviewer calls people, asks the questions naturally, follows up when an answer is unclear and records the whole call.',
			'Every completed interview is kept as a full transcript, and answers are pulled out of the conversation and linked back to what was actually said. Results can be weighted to the population you care about, and you can ask questions of the data in plain English.'
		],
		highlights: [
			{
				title: 'Write it like a conversation',
				text: 'Build a questionnaire in minutes, reorder questions, and try it on your own phone before anyone else is called.'
			},
			{
				title: 'Quotas, budgets and limits',
				text: 'Set calling hours, attempt limits, demographic targets and a spending cap, and let the campaign stop itself when it is done.'
			},
			{
				title: 'Answers you can check',
				text: 'Every response links to the transcript it came from, so nobody has to take the numbers on trust.'
			},
			{
				title: 'Ask your data',
				text: 'Weighted results, cross-tabs and an analyst you can question in plain English, grounded in the real responses.'
			}
		]
	},
	{
		slug: 'belcoda',
		name: 'Belcoda',
		kind: 'Organising software',
		summary: 'Organising software for distributed communities, built WhatsApp-first and mobile-first.',
		headline: 'Software for a new generation of organizing.',
		url: 'https://belcoda.org',
		domain: 'belcoda.org',
		group: 'civic',
		where: 'Worldwide, with a focus on the Global South',
		audience: 'Grassroots groups, community networks and international NGOs',
		status: 'Live, free for grassroots groups',
		tone: '#4a3d66',
		plate: 'Belcoda',
		intro: [
			'Belcoda is organising software for large, distributed communities: networks of people who are connected, active and pulling in the same direction without waiting for instructions from the top.',
			'It is built for the way most of the world actually organises, which is on a phone, on WhatsApp, often on a slow connection. People, groups, messaging and events live in one place, and the whole thing works in any language and on any device. It is free for grassroots organisations, and Belcoda is stewarded by a non-profit foundation, Stichting Belcoda.'
		],
		highlights: [
			{
				title: 'WhatsApp-first',
				text: 'Messaging, sign-ups and actions that happen where people already are, including group chats and QR codes.'
			},
			{
				title: 'Community and events',
				text: 'Manage people and groups, then organise, recruit for and run events across the whole network.'
			},
			{
				title: 'Fast everywhere',
				text: 'Designed to feel instant on cheap phones and poor connections. Some organisations run entirely from mobile.'
			},
			{
				title: 'Open to your stack',
				text: 'An API, webhooks and an SDK so Belcoda can sit in front of the systems you already use.'
			}
		]
	},
	{
		slug: 'mariuchida',
		name: 'Mari Uchida Design',
		kind: 'Graphic design & art direction',
		summary: 'Brand identity, illustration, packaging and art direction, crossing borders and genres.',
		headline: 'I love making stuff.',
		url: 'https://mariuchida.com',
		domain: 'mariuchida.com',
		group: 'design',
		where: 'Japan and Australia',
		audience: 'Brands, institutions and cultural projects',
		status: 'Independent studio',
		tone: '#6a3e4c',
		plate: 'Mari Uchida',
		intro: [
			'Mari Uchida Design is the graphic design and art direction practice of Mari Uchida, a designer born in Osaka and trained in Sydney, with an MA from the University of New South Wales. The work moves between Japan and Australia, and between genres.',
			'Projects range from brand identities and design systems to illustration, packaging, websites, motion graphics, and cross-cultural art projects and exhibitions. Clients have included Torrens University Australia, Johnson & Johnson, Hi-5 and the Japanese Film Festival.'
		],
		highlights: [
			{
				title: 'Brand identity',
				text: 'Identities and design systems that hold together across print, screen and motion.'
			},
			{
				title: 'Illustration',
				text: 'Icons, illustrations and sketches with a personality of their own.'
			},
			{
				title: 'Packaging and print',
				text: 'Catalogues, packaging and printed matter, made to be picked up and kept.'
			},
			{
				title: 'Across cultures',
				text: 'Localisation and cross-cultural projects for Japanese and Australian audiences, from someone at home in both.'
			}
		]
	},
	{
		slug: 'rightpricemeats',
		name: 'Right Price Meats',
		kind: 'Local butcher',
		summary: 'A local butcher in Bridgewater, Tasmania. Good meat, honest prices.',
		headline: 'Good meat. Honest prices.',
		url: 'https://rightpricemeats.com.au',
		domain: 'rightpricemeats.com.au',
		group: 'trade',
		where: 'Bridgewater, Tasmania',
		audience: 'Local families and households',
		status: 'Open six days a week',
		tone: '#7a2f2a',
		plate: 'Right Price Meats',
		intro: [
			'Right Price Meats is a neighbourhood butcher at Cove Hill Fair in Bridgewater, just north of Hobart. It sells fresh, tasty meat at prices that make sense for a weeknight dinner or a full freezer.',
			'Most of the trade is family meat packs, made up fresh for the fridge or freezer, and at the end of the year, Christmas packs with ham, roasts and barbecue favourites. Behind the counter is friendly, practical advice on cuts, portions and getting the most out of every shop.'
		],
		highlights: [
			{
				title: 'Meat packs',
				text: 'Family-sized packs to stock the freezer and cover the week’s dinners.'
			},
			{
				title: 'Christmas packs',
				text: 'Glazed ham, roasts, turkey and barbecue favourites for Christmas Day and Boxing Day.'
			},
			{
				title: 'Fair every day',
				text: 'Honest prices for small shops and big ones, not just on special.'
			},
			{
				title: 'Local advice',
				text: 'Help with cuts and portions from people who know the customers by name.'
			}
		]
	},
	{
		slug: 'wombatto',
		name: 'Wombatto',
		kind: 'Australian wine importer, Japan',
		summary: 'Small-producer Australian wines, chosen in person and imported directly to Japan.',
		headline: 'オーストラリアの地元で愛され、まだ日本では知られていないワイン',
		headlineTranslation: 'Wines loved at home in Australia, and not yet known in Japan.',
		headlineLang: 'ja',
		url: 'https://wombatto.com',
		domain: 'wombatto.com',
		group: 'trade',
		where: 'Japan',
		audience: 'Sommeliers, restaurants and liquor retailers in Japan',
		status: 'First lineup in preparation',
		tone: '#5a4a2c',
		plate: 'Wombatto',
		intro: [
			'Wombatto brings wines that Australians love, but that almost nobody in Japan has heard of yet, to restaurants and wine shops in Japan.',
			'We visit small wineries, taste with the people who make the wine, and choose with help from local sommeliers and wine professionals. Reputation matters less than what is in the glass. Wombatto is the only importer of these wines in Japan and brings them in small lots, from regions including the Barossa Valley, Frankland River, Murrumbateman and Denman.'
		],
		highlights: [
			{
				title: 'Chosen in person',
				text: 'Every wine is selected after visiting the producer and tasting at the source.'
			},
			{
				title: 'Small producers',
				text: 'Well-made wines with a local following, picked for flavour and character rather than fame.'
			},
			{
				title: 'Direct to Japan',
				text: 'Imported directly in small quantities, with Wombatto as the sole distributor in Japan.'
			},
			{
				title: 'For the trade',
				text: 'Sommeliers and retailers can request tastings and samples through Wombatto’s LINE account.'
			}
		]
	}
];

export function getProduct(slug: string) {
	return products.find((p) => p.slug === slug);
}
