export const mouseCoOrdsVars = (node: HTMLElement) => {
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const { left, top } = node.getBoundingClientRect();
		const x = clientX - left;
		const y = clientY - top;
		node.setAttribute('style', `--mouse-x: ${x}px; --mouse-y: ${y}px;`);
	};

	document.addEventListener('mousemove', handleMouseMove);
};
