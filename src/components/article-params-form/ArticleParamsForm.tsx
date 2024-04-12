import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, useRef } from 'react';
import { outsideClickHandler } from './sidebar/outsideClickHandler';

import styles from './ArticleParamsForm.module.scss';



export const ArticleParamsForm = () => {
	const [isOpened, setIsOpen] = useState<boolean>(false);
	const rootRef = useRef<HTMLDivElement>(null);


	const openForm = () => {
		setIsOpen(!isOpened);
	};

	outsideClickHandler({
		isOpened,
		onClose: () => setIsOpen(false),
		rootRef
	   });

	return (
		<div ref={rootRef}>
			<ArrowButton isOpened={isOpened} onClick={openForm}/>
			<aside className={styles.container} ref={rootRef}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
