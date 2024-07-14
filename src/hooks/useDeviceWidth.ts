import { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';

const useDeviceWidth = () => {
	const theme = useTheme();
	const [windowSize, setWindowSize] = useState(0);

	useEffect(() => {
		function handleResize() {
			setWindowSize(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		windowSize,
		isMobile: windowSize < theme.breakpoint.largeMax,
	};
};

export default useDeviceWidth;
