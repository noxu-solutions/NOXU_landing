'use client';
import { FC, ReactNode } from 'react';
import { InputFileWrap } from './StaleInputFile.styles';
import StaleFileReturn from './StaleFileReturn';

export interface IFileWithId {
	file: File;
	id: string;
}

interface OwnProps {
	files?: IFileWithId[];
	uploadingFilesIds?: string[];
	failedUploadFilesIds?: string[];
	onChange: (files: IFileWithId[]) => void | Promise<void>;
	onRemoveFile?: (file: IFileWithId) => void | Promise<void>;
	accept?: string;
	multiple?: boolean;
	trigger?: ReactNode;
	id?: string;
	style?: React.CSSProperties;
}

const StaleInputFile: FC<OwnProps> = ({
	files = [],
	uploadingFilesIds,
	failedUploadFilesIds,
	onChange,
	onRemoveFile,
	accept,
	multiple = true,
	trigger,
	id = 'file',
	style = {},
}) => {
	const renderUploadLabel = () => {
		if (!files?.length || (files?.length && multiple)) {
			return trigger;
		}
	};

	const renderFiles = () => {
		if (!files?.length) {
			return null;
		}

		if (multiple) {
			return (
				<>
					{files.map((item: any) => {
						const isUploading = uploadingFilesIds?.includes(item.id);
						const isFailedToUpload = failedUploadFilesIds?.includes(item.id);

						return <StaleFileReturn isUploading={!!isUploading} isFailedToUpload={!!isFailedToUpload} key={item.id} item={item} onRemoveFile={onRemoveFile} />;
					})}
				</>
			);
		}

		return (
			<StaleFileReturn
				isUploading={!!uploadingFilesIds?.includes(files[0].id)}
				isFailedToUpload={!!failedUploadFilesIds?.includes(files[0].id)}
				key={files[0].id}
				item={files[0]}
				onRemoveFile={onRemoveFile}
			/>
		);
	};

	return (
		<InputFileWrap style={style}>
			<input
				className='input'
				id={id}
				type='file'
				accept={accept}
				multiple={multiple}
				onChange={(event) =>
					onChange(
						Array.from(event.target.files || []).map((item) => ({
							file: item,
							id: `${Math.floor(Math.random() * 100)}`,
						})),
					)
				}
				onClick={(event) => {
					event.currentTarget.value = '';
				}}
			/>
			{renderUploadLabel()}
			{renderFiles()}
		</InputFileWrap>
	);
};

export default StaleInputFile;
