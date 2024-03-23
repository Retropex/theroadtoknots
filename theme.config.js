export default {
	github: "https://github.com/Retropex/theroadtonode",
	docsRepositoryBase: "https://github.com/Retropex/theroadtonode/blob/master",
	titleSuffix: " – The Road to Knots",
	i18n: [
		{ locale: 'en', text: 'English' },
	],
	logo: (
		<>
			<span className="mr-2 font-extrabold hidden md:inline">The Road to Knots</span>
			<span className="text-gray-600 font-normal hidden md:inline">
				A thorough guide for making your own Bitcoin and Lightning node
			</span>
		</>
	),
	head: (
		<>
			<meta charSet="utf-8"></meta>
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="Content-Language" content="en, nl" />
			<meta name="description" content="A thorough guide for making your own Bitcoin and Lightning node" />
			<meta name="og:description" content="A thorough guide for making your own Bitcoin and Lightning node" />
			<meta name="og:title" content="The Road to Knots" />
			<meta name="og:image" content="https://scratch-knots.orangepill.ovh/thermal-paste.png" />
			<meta name="og:url" content="https://scratch-knots.orangepill.ovh" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:image" content="https://scratch-knots.orangepill.ovh/thermal-paste.png" />
			<meta name="twitter:site:domain" content="https://scratch-knots.orangepill.ovh" />
			<meta name="twitter:url" content="https://scratch-knots.orangepill.ovh" />
			<meta name="apple-mobile-web-app-title" content="The Road to Knots" />
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/favicon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
		</>
	),
	search: true,
	prevLinks: true,
	nextLinks: true,
	footer: true,
	footerEditLink: "Edit this page on GitHub",
	footerText: <>{new Date().getFullYear()} © The Road to Knots.</>,
	floatTOC: true,
	defaultMenuCollapsed: true
}
