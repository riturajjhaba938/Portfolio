import { motion, useTransform } from 'framer-motion';
import React from 'react';

const Word = ({ children, progress, range }) => {
	// Reveal word opacity sequentially
	const opacity = useTransform(progress, range, [0.1, 1]);
	return (
		<motion.span style={{ opacity }} className="relative mr-[1.2vw] mt-[1.2vw] inline-block">
			{children}
		</motion.span>
	);
};

export const ScrollReveal = ({ text, progress, className }) => {
	const words = text.split(' ');

	return (
		<p className={`m-0 flex flex-wrap text-2xl font-medium text-white/90 leading-snug md:text-3xl lg:text-4xl xl:text-5xl ${className}`}>
			{words.map((word, i) => {
				const start = i / words.length;
				// Smooth blend range for each word
				const end = start + 1 / words.length;
				return (
					<Word key={i} progress={progress} range={[start, end]}>
						{word}&nbsp;
					</Word>
				);
			})}
		</p>
	);
};
