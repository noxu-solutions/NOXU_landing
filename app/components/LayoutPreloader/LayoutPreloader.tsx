import { useEffect } from 'react';
import Loader from '../Loader/Loader';

const LayoutPreloader = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementsByTagName('body')[0].classList.add('loaded');
			setTimeout(() => {
				// @ts-ignore
				document.getElementById('layout-preloader').style.display = 'none';
			}, 100);
		}, 1500);
	}, []);

	return (
		<div id='layout-preloader'>
			<Loader size='large' />
		</div>
	);
};

export default LayoutPreloader;
