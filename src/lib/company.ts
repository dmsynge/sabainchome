/**
 * 会社概要 — company profile.
 *
 * Rows whose `value` is null are not shown on the page. Fill them in from the
 * company register (登記事項証明書) and the articles of incorporation (定款).
 */
import { CAL_URL } from '$lib/cal';

export interface ProfileRow {
	ja: string;
	en: string;
	value: { ja: string | string[]; en: string | string[] } | null;
	href?: string;
}

export const profile: ProfileRow[] = [
	{
		ja: '商号',
		en: 'Company name',
		value: { ja: '株式会社鯖', en: 'Saba Inc.' }
	},
	{
		// TODO: e.g. { ja: '代表取締役　〇〇 〇〇', en: 'Representative Director: ...' }
		ja: '代表者',
		en: 'Representative',
		value: null
	},
	{
		// TODO: e.g. { ja: '2024年4月1日', en: '1 April 2024' }
		ja: '設立',
		en: 'Established',
		value: null
	},
	{
		// TODO: e.g. { ja: '1,000,000円', en: '¥1,000,000' }
		ja: '資本金',
		en: 'Paid-in capital',
		value: null
	},
	{
		// TODO: registered head office address
		ja: '本店所在地',
		en: 'Registered office',
		value: null
	},
	{
		// TODO: 13-digit corporate number from the National Tax Agency
		ja: '法人番号',
		en: 'Corporate number',
		value: null
	},
	{
		// TODO: e.g. { ja: '3月', en: 'March' }
		ja: '決算期',
		en: 'Fiscal year end',
		value: null
	},
	{
		ja: '事業内容',
		en: 'Business',
		value: {
			ja: [
				'ソフトウェアおよびウェブサービスの企画・開発・運営',
				'調査・データ分析',
				'グラフィックデザイン・アートディレクション',
				'酒類の輸入・販売'
			],
			en: [
				'Planning, development and operation of software and web services',
				'Research and data analysis',
				'Graphic design and art direction',
				'Import and sale of wine'
			]
		}
	},
	{
		// TODO: e.g. the liquor wholesale licence (酒類卸売業免許) Wombatto trades under
		ja: '許認可',
		en: 'Licences',
		value: null
	},
	{
		ja: 'お問い合わせ',
		en: 'Contact',
		value: { ja: 'オンラインで面談を予約', en: 'Book a call online' },
		href: CAL_URL
	}
];
