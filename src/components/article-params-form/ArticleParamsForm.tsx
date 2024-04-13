import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { RadioGroup } from '../radio-group';
import { fontSizeOptions, OptionType, defaultArticleState } from '../../constants/articleProps';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { outsideClickHandler } from './sidebar/outsideClickHandler';

import styles from './ArticleParamsForm.module.scss';

const ArticleParamsForm = () => {
  const [isOpened, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<OptionType>(defaultArticleState.fontSizeOption);

  const openForm = () => {
    setIsOpen(!isOpened);
  };

  outsideClickHandler({
    isOpened,
    onClose: () => setIsOpen(false),
    rootRef
  });

  const updateFontSizeOption = (value: OptionType) => {
    setFontSize(value);
  };

  return (
    <div ref={rootRef}>
      <ArrowButton isOpened={isOpened} onClick={openForm} />
      <aside className={clsx(styles.container, { [styles.container_open]: isOpened })}>
        <form className={styles.form}>
          <RadioGroup options={fontSizeOptions} name="fontSize" selected={fontSize} onChange={updateFontSizeOption} title="размер шрифта"/>
          <div className={styles.bottomContainer}>
            <Button title="Сбросить" type="reset" />
            <Button title="Применить" type="submit" />
          </div>
        </form>
      </aside>
    </div>
  );
};
