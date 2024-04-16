import { useEffect, useCallback } from 'react';

interface OutsideClickHandlerProps {
	isOpened: boolean;
	onChange?: () => void;
	rootRef: React.RefObject<HTMLElement>;
}

export const useOutsideClickHandler = ({
	isOpened,
	onChange,
	rootRef,
}: OutsideClickHandlerProps) => {
	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			const target = event.target as Node;
			if (
				isOpened &&
				rootRef.current &&
				!rootRef.current.contains(target) &&
				document.body.contains(target)
			) {
				onChange?.();
			}
		},
		[isOpened, onChange, rootRef]
	);

	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onChange?.();
		}
	};

	useEffect(() => {
		if (!isOpened) return;

		document.addEventListener('keydown', handleEscape);
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpened, handleEscape, handleClickOutside]);
};
