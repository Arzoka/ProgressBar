import React, { useState } from 'react';
import ProgressBar from './ReactExample';
import styles from './styles.module.scss';

const Page = () => {
	const [percentage, setPercentage] = useState<number>(0);

	return (
		<>
			<ProgressBar
				percentage={percentage}
				color={'#f00'}
				className={styles.className}
			/>
		</>
	)
};

export default Page;
