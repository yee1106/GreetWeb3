const Background = () => {
	return (
		<>
			<svg
				width='100%'
				height='100%'
				id='svg'
				viewBox='0 0 1440 500'
				xmlns='http://www.w3.org/2000/svg'
				className='transition duration-300 ease-in-out delay-150'
			>
				<defs>
					<linearGradient id='gradient' x1='50%' y1='100%' x2='50%' y2='0%'>
						<stop offset='5%' stopColor='#9900ef88'></stop>
						<stop offset='95%' stopColor='#32ded488'></stop>
					</linearGradient>
				</defs>
				<path
					d='M 0,500 C 0,500 0,166 0,166 C 132.40000000000003,153.46666666666667 264.80000000000007,140.93333333333334 450,127 C 635.1999999999999,113.06666666666668 873.2,97.73333333333333 1047,104 C 1220.8,110.26666666666667 1330.4,138.13333333333333 1440,166 C 1440,166 1440,500 1440,500 Z'
					stroke='none'
					strokeWidth='0'
					fill='url(#gradient)'
					className='transition-all duration-300 ease-in-out delay-150 path-0'
				></path>
				<style></style>
				<defs>
					<linearGradient id='gradient' x1='50%' y1='100%' x2='50%' y2='0%'>
						<stop offset='5%' stopColor='#9900efff'></stop>
						<stop offset='95%' stopColor='#32ded4ff'></stop>
					</linearGradient>
				</defs>
				<path
					d='M 0,500 C 0,500 0,333 0,333 C 153.7333333333333,354.20000000000005 307.4666666666666,375.40000000000003 450,366 C 592.5333333333334,356.59999999999997 723.8666666666666,316.6 887,306 C 1050.1333333333334,295.4 1245.0666666666666,314.2 1440,333 C 1440,333 1440,500 1440,500 Z'
					stroke='none'
					strokeWidth='0'
					fill='url(#gradient)'
					className='transition-all duration-300 ease-in-out delay-150 path-1'
				></path>
			</svg>
			<style jsx>
				{`
					.path-0 {
						animation: pathAnim-0 4s;
						animation-timing-function: linear;
						animation-iteration-count: infinite;
					}
					@keyframes pathAnim-0 {
						0% {
							d: path(
								'M 0,500 C 0,500 0,166 0,166 C 132.40000000000003,153.46666666666667 264.80000000000007,140.93333333333334 450,127 C 635.1999999999999,113.06666666666668 873.2,97.73333333333333 1047,104 C 1220.8,110.26666666666667 1330.4,138.13333333333333 1440,166 C 1440,166 1440,500 1440,500 Z'
							);
						}
						25% {
							d: path(
								'M 0,500 C 0,500 0,166 0,166 C 115.86666666666667,142.53333333333333 231.73333333333335,119.06666666666666 405,124 C 578.2666666666667,128.93333333333334 808.9333333333334,162.26666666666668 991,174 C 1173.0666666666666,185.73333333333332 1306.5333333333333,175.86666666666667 1440,166 C 1440,166 1440,500 1440,500 Z'
							);
						}
						50% {
							d: path(
								'M 0,500 C 0,500 0,166 0,166 C 185.19999999999993,152.39999999999998 370.39999999999986,138.79999999999998 546,143 C 721.6000000000001,147.20000000000002 887.6000000000001,169.20000000000002 1035,176 C 1182.3999999999999,182.79999999999998 1311.1999999999998,174.39999999999998 1440,166 C 1440,166 1440,500 1440,500 Z'
							);
						}
						75% {
							d: path(
								'M 0,500 C 0,500 0,166 0,166 C 125.33333333333337,198.93333333333334 250.66666666666674,231.86666666666665 400,215 C 549.3333333333333,198.13333333333335 722.6666666666665,131.46666666666667 900,115 C 1077.3333333333335,98.53333333333333 1258.6666666666667,132.26666666666665 1440,166 C 1440,166 1440,500 1440,500 Z'
							);
						}
						100% {
							d: path(
								'M 0,500 C 0,500 0,166 0,166 C 132.40000000000003,153.46666666666667 264.80000000000007,140.93333333333334 450,127 C 635.1999999999999,113.06666666666668 873.2,97.73333333333333 1047,104 C 1220.8,110.26666666666667 1330.4,138.13333333333333 1440,166 C 1440,166 1440,500 1440,500 Z'
							);
						}
					}
					.path-1 {
						animation: pathAnim-1 4s;
						animation-timing-function: linear;
						animation-iteration-count: infinite;
					}
					@keyframes pathAnim-1 {
						0% {
							d: path(
								'M 0,500 C 0,500 0,333 0,333 C 153.7333333333333,354.20000000000005 307.4666666666666,375.40000000000003 450,366 C 592.5333333333334,356.59999999999997 723.8666666666666,316.6 887,306 C 1050.1333333333334,295.4 1245.0666666666666,314.2 1440,333 C 1440,333 1440,500 1440,500 Z'
							);
						}
						25% {
							d: path(
								'M 0,500 C 0,500 0,333 0,333 C 143.2,367.26666666666665 286.4,401.53333333333336 432,390 C 577.6,378.46666666666664 725.5999999999999,321.1333333333333 894,304 C 1062.4,286.8666666666667 1251.2,309.93333333333334 1440,333 C 1440,333 1440,500 1440,500 Z'
							);
						}
						50% {
							d: path(
								'M 0,500 C 0,500 0,333 0,333 C 141.19999999999993,366.06666666666666 282.39999999999986,399.1333333333333 446,386 C 609.6000000000001,372.8666666666667 795.6000000000001,313.53333333333336 965,297 C 1134.3999999999999,280.46666666666664 1287.1999999999998,306.73333333333335 1440,333 C 1440,333 1440,500 1440,500 Z'
							);
						}
						75% {
							d: path(
								'M 0,500 C 0,500 0,333 0,333 C 156.66666666666663,359.1333333333333 313.33333333333326,385.2666666666667 467,370 C 620.6666666666667,354.7333333333333 771.3333333333335,298.06666666666666 933,285 C 1094.6666666666665,271.93333333333334 1267.3333333333333,302.4666666666667 1440,333 C 1440,333 1440,500 1440,500 Z'
							);
						}
						100% {
							d: path(
								'M 0,500 C 0,500 0,333 0,333 C 153.7333333333333,354.20000000000005 307.4666666666666,375.40000000000003 450,366 C 592.5333333333334,356.59999999999997 723.8666666666666,316.6 887,306 C 1050.1333333333334,295.4 1245.0666666666666,314.2 1440,333 C 1440,333 1440,500 1440,500 Z'
							);
						}
					}
				`}
			</style>
		</>
	)
}

export default Background