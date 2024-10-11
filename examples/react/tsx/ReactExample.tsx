import React, { FC } from 'react';

const ProgressBar: FC<{
	percentage: number;
	color: string;
	className?: string;
}> = ({ percentage, color, className = '' }) => {
	return (
		<div
			className={className}
			style={{
				background: `linear-gradient(90deg, ${color} ${percentage}%, transparent ${percentage}%)`,
			}}
		/>
	);
};

export default ProgressBar;
