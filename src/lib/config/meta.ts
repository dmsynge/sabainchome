export const SITE_URL = 'https://saba.inc';

export function getSiteConfig() {
	return {
		name: 'Saba Inc. — 株式会社鯖',
		description:
			'Saba Inc. (株式会社鯖) is a small, independent company working between Japan and Australia.',
		url: SITE_URL,
		ogImage: `${SITE_URL}/og.png`,
		keywords: [
			/* @wc-ignore */ 'Saba Inc',
			'株式会社鯖',
			'80a',
			/* @wc-ignore */ 'Actionblocks',
			/* @wc-ignore */ 'Voiceblocks',
			/* @wc-ignore */ 'Belcoda',
			/* @wc-ignore */ 'Right Price Meats',
			/* @wc-ignore */ 'Wombatto',
			/* @wc-ignore */ 'Mari Uchida Design',
			'campaign technology',
			'organising software'
		]
	};
}
