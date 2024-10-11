import React from 'react';

const ProgressBar = ({ percentage, color, className = '' }) => {
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
