import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [pageStatus, setPageStatus] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageStatus.fontFamilyOption.value,
					'--font-size': pageStatus.fontSizeOption.value,
					'--font-color': pageStatus.fontColor.value,
					'--container-width': pageStatus.contentWidth.value,
					'--bg-color': pageStatus.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm submitHandler={setPageStatus} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
