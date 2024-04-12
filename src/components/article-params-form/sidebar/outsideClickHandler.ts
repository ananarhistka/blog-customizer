import { useEffect } from 'react';

type TOutsideClickHandler = {
  isOpened: boolean;
  onClose?: () => void;
  rootRef: React.RefObject<HTMLElement>;
};

export const outsideClickHandler = ({ isOpened, onClose, rootRef }: TOutsideClickHandler) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && rootRef.current && !rootRef.current.contains(target)) {
        onClose && onClose();
      }
    };

    if (isOpened) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpened, onClose, rootRef]);
};
