import { useEffect, useCallback } from 'react';

interface OutsideClickHandlerProps {
	isOpened: boolean;
	onChange?: (newValue: boolean) => void;
	rootRef: React.RefObject<HTMLElement>;
}

export const useOutsideClickHandler = ({
	onChange,
	rootRef,
}: OutsideClickHandlerProps) => {
	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			const target = event.target as Node;
			if (
				rootRef.current &&
				!rootRef.current.contains(target) &&
				document.body.contains(target)
			) {
				onChange?.(false);
			}
		},
		[onChange, rootRef]
	);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [handleClickOutside]);
};
