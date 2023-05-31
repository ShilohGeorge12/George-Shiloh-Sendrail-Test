import { Helmet } from 'react-helmet-async';

interface ImetaProps {
	title: string;
	description: string;
	path: string;
}

function MetaData(props: ImetaProps) {
	const { title, description, path } = props;
	return (
		<Helmet>
			<title>{title}</title>
			<meta
				name='description'
				content={description}
			/>
			<meta
				http-equiv='Author'
				content='George Shiloh'
			/>
			<meta
				http-equiv='content-language'
				content='en-us'
			/>
			<meta
				name='color-scheme'
				content='light'
			/>
			<link rel='canonical' href={`http://localhost:7000${path}`} />
		</Helmet>
	);
}
export default MetaData;
