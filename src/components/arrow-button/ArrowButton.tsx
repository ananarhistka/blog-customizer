import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
//export type OnClick = () => void;

export type ArrowButtonProps = {
	isOpened: boolean;
	onClick: () => void;
};

export const ArrowButton = ({ isOpened, onClick }: ArrowButtonProps) => {

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpened && styles.container_open)}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpened })}
			/>
		</div>
	);
};