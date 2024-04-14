import React, { useRef, useState, FormEvent } from 'react';
import clsx from 'clsx';
import { RadioGroup } from '../radio-group';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
	ArticleStateType,
} from 'src/constants/articleProps';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { outsideClickHandler } from './sidebar/outsideClickHandler';
import { Text } from '../text';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';

type ArticleParamsFormProps = {
	submitHandler: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	submitHandler,
}: ArticleParamsFormProps) => {
	const [isOpened, setIsOpen] = useState(false);
	const [submitForm, setSubmitForm] = useState(defaultArticleState);
	const rootRef = useRef<HTMLDivElement>(null);
	const [fontSize, setFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [fontFamily, setFontFamily] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [fontColor, setFontColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);
	const [contentWidth, setContentWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);

	const openForm = () => {
		setIsOpen(!isOpened);
	};

	outsideClickHandler({
		isOpened,
		onClose: () => setIsOpen(false),
		rootRef,
	});

	const updateFontSizeOption = (value: OptionType) => {
		setFontSize(value);
	};

	const updateFontFamilyOption = (selected: OptionType) => {
		setFontFamily(selected);
	};

	const fontColorOption = (selected: OptionType) => {
		setFontColor(selected);
	};

	const backgroundColorOption = (selected: OptionType) => {
		setBackgroundColor(selected);
	};

	const contentWidthOption = (selected: OptionType) => {
		setContentWidth(selected);
	};

	function sendingForm(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		submitHandler(submitForm);
	}

	const sentForm = () => {
		setSubmitForm(defaultArticleState);
		submitHandler(defaultArticleState);
	};

	return (
		<div ref={rootRef}>
			<ArrowButton isOpened={isOpened} onClick={openForm} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpened,
				})}>
				<form className={styles.form} onSubmit={sendingForm} onReset={sentForm}>
					<Text weight={800} size={31} uppercase dynamicLite>
						задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={fontFamily}
						onChange={updateFontFamilyOption}
						title='шрифт'></Select>
					<RadioGroup
						options={fontSizeOptions}
						name='fontSize'
						selected={fontSize}
						onChange={updateFontSizeOption}
						title='размер шрифта'
					/>
					<Select
						options={fontColors}
						selected={fontColor}
						onChange={fontColorOption}
						title='цвет шрифта'></Select>
					<Select
						options={backgroundColors}
						selected={backgroundColor}
						onChange={backgroundColorOption}
						title='цвет фона'></Select>
					<Select
						options={contentWidthArr}
						selected={contentWidth}
						onChange={contentWidthOption}
						title='ширина контента'></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
