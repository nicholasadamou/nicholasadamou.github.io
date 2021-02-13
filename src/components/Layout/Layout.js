import {Helmet} from 'react-helmet';

import 'carbon-components/scss/globals/scss/styles.scss';
import 'bulma/css/bulma.min.css';

import GlobalStyles from '../../sass/GlobalStyles';

const Layout = (props) => (
	<>
		<GlobalStyles/>
		<Helmet htmlAttributes={{lang: 'en'}} title="Nicholas Adamou">
			<link rel="icon" href="/assets/favicons/favicon.ico"/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="57x57"
				href="/assets/favicons/apple-touch-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="114x114"
				href="/assets/favicons/apple-touch-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="72x72"
				href="/assets/favicons/apple-touch-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="144x144"
				href="/assets/favicons/apple-touch-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="60x60"
				href="/assets/favicons/apple-touch-icon-60x60.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="120x120"
				href="/assets/favicons/apple-touch-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="76x76"
				href="/assets/favicons/apple-touch-icon-76x76.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="152x152"
				href="/assets/favicons/apple-touch-icon-152x152.png"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/assets/favicons/favicon-196x196.png"
				sizes="196x196"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/assets/favicons/favicon-96x96.png"
				sizes="96x96"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/assets/favicons/favicon-32x32.png"
				sizes="32x32"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/assets/favicons/favicon-16x16.png"
				sizes="16x16"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/assets/favicons/favicon-128.png"
				sizes="128x128"
			/>

			<meta name="application-name" content="Nicholas Adamou"/>
			<meta name="msapplication-TileColor" content="#FFFFFF"/>
			<meta
				name="msapplication-TileImage"
				content="/assets/favicons/mstile-144x144.png"
			/>
			<meta
				name="msapplication-square70x70logo"
				content="/assets/favicons/mstile-70x70.png"
			/>
			<meta
				name="msapplication-square150x150logo"
				content="/assets/favicons/mstile-150x150.png"
			/>
			<meta
				name="msapplication-wide310x150logo"
				content="/assets/favicons/mstile-310x150.png"
			/>
			<meta
				name="msapplication-square310x310logo"
				content="/assets/favicons/mstile-310x310.png"
			/>

			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700;900&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto:wght@400;700;900&display=swap"
				rel="stylesheet"
			/>
		</Helmet>

		{props.children}
	</>
);

export default Layout;
