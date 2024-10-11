import React, { useState } from 'react';
import ProgressBar from './ReactExample';

const Page = () => {
	const [percentage, setPercentage] = useState(0);

	return (
		<>
			<ProgressBar
				percentage={percentage}
				color={'#f00'}
				className={'className'}
			/>
		</>
	)
};

export default Page;
