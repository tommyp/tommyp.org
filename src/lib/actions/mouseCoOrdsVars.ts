import type Tweened from 'svelte/motion';

export const mouseCoOrdsVars = (node: HTMLElement, coords: Tweened<{ x: number; y: number }>) => {
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const { left, top } = node.getBoundingClientRect();
		const x = clientX - left;
		const y = clientY - top;
		coords.set({ x, y });
	};

	document.addEventListener('mousemove', handleMouseMove);
};
