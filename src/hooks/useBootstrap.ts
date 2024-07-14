import { useEffect } from 'react';

const setVh = () => {
	document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
};

const useBootstrap = () => {
	useEffect(() => {
		setVh();
		window.addEventListener('resize', setVh);
		return () => {
			window.removeEventListener('resize', setVh);
		};
	}, []);
};

export default useBootstrap;
