/**
 * 会社概要 — company profile.
 *
 * Laid out along the lines of https://aaam.jp/columns/company-profile-guide:
 * the facts a visitor checks against the company register (name,
 * representative, address, establishment) come first,
 * then the optional facts (business, capital, employees, licences). Every
 * value must match the register (登記事項証明書) exactly.
 *
 * Rows whose `lines` is empty are not shown. Copy lives inside functions so
 * that wuchale can translate it for the locale of the current request.
 */
import { CAL_URL } from '$lib/cal';

export const EMAIL = 'info@sabainc.jp';

export type ProfileLine = string | { text: string; href: string };

export interface ProfileRow {
	label: string;
	lines: ProfileLine[];
}

/** Shown as the page's 最終更新日. Bump it whenever a fact changes. */
export const UPDATED = '2026-11-19';

export function getProfile(): ProfileRow[] {
	return [
		{
			label: 'Company name',
			lines: ['Saba Inc. (株式会社鯖)']
		},
		{
			label: 'Representative',
			lines: ['Django Merope Synge, Representative Director']
		},
		{
			label: 'Address',
			lines: [/* @wc-include */ '1413 Futami, Shimanto, Kōchi 787-0153, Japan']
		},
		{
			label: 'Established',
			lines: [/* @wc-include */ '28 January 2026']
		},
		{
			label: 'Capital',
			lines: [/* @wc-include */ '¥5,000,000']
		},
		{
			label: 'Employees',
			lines: [/* @wc-include */ '2 (as of November 2026)']
		},
		{
			label: 'Business',
			lines: [
				'Planning, development and operation of software and web services',
				'Research and data analysis',
				'Graphic design and art direction',
				'Import and sale of wine'
			]
		},
		{
			label: 'Corporate number',
			lines: ['7490001011271']
		},
		{
			label: 'Fiscal year end',
			lines: [/* @wc-include */ '31 December']
		},
		{
			// No phone number on purpose: email and online booking only.
			label: 'Contact',
			lines: [
				{ text: EMAIL, href: `mailto:${EMAIL}` },
				{ text: 'Book a call online', href: CAL_URL }
			]
		}
	];
}
