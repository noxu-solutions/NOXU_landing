import { FC, useEffect } from 'react';
import { PreloaderWrapper } from './Preloader.styles';
import Loader from '../Loader/Loader';

interface OwnProps {
	isLoaded: boolean;
	setIsLoaded: (value: boolean) => void;
}

const Preloader: FC<OwnProps> = ({ isLoaded, setIsLoaded }) => {
	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 1000);
	}, [setIsLoaded]);

	return (
		<PreloaderWrapper loaded={isLoaded}>
			<Loader size='large' />
		</PreloaderWrapper>
	);
};

export default Preloader;
