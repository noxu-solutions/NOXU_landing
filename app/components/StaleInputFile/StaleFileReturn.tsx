'use client';
import { FC } from 'react';
import { FileReturnWrap } from './StaleInputFile.styles';

interface OwnProps {
	isUploading: boolean;
	isFailedToUpload: boolean;
	item: any;
	onRemoveFile?: (file: any) => any;
	error?: string;
}

const StaleFileReturn: FC<OwnProps> = ({ item, isUploading, isFailedToUpload, onRemoveFile, error = '' }) => {
	const isUploaded = !isUploading && !isFailedToUpload;

	return (
		<FileReturnWrap error={!!error}>
			<div className='wrap'>
				<svg className='pdf'>
					<use xlinkHref='#file-ico' />
				</svg>
				<p>{item.file.name}</p>

				{isUploaded ? (
					<div
						className='row'
						style={{
							marginTop: 0,
						}}>
						<svg onClick={() => onRemoveFile?.(item)} className='icon' fill='#000'>
							<use xlinkHref='#cross-ico' />
						</svg>
					</div>
				) : isUploading ? (
					<svg className='icon loader' fill='#3468EE'>
						<use xlinkHref='#loading-ico' />
					</svg>
				) : (
					<svg className='icon loader' fill='#3468EE'>
						<use xlinkHref='#refresh-ico' />
					</svg>
				)}
			</div>

			{error && <span className='error'>{error}</span>}
		</FileReturnWrap>
	);
};

export default StaleFileReturn;
