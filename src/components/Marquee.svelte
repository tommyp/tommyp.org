<a href="mailto:hi@tommyp.org" class="marquee" style="--tw: 30vw; --ad: 5s;">
	<span>Hire Me</span>
</a>

<style>
	.marquee {
		margin: 2rem 0;
		font-size: calc(var(--tw) / 5);
		overflow: hidden;
		border: 3px solid var(--highlight);
		display: block;
	}

	.marquee:hover {
		background-color: var(--highlight);
	}

	.marquee span {
		text-transform: lowercase;
		display: inline-block;
		white-space: nowrap;
		color: var(--highlight);
		width: var(--tw);
		text-shadow: var(--tw) 0 currentColor, calc(var(--tw) * 2) 0 currentColor,
			calc(var(--tw) * 3) 0 currentColor, calc(var(--tw) * 4) 0 currentColor;

		will-change: transform, color;
		animation: marquee var(--ad) linear infinite;
		transition: color 0.3s;
	}

	.marquee:hover span {
		color: var(--foreground);
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	/*  
 * on MacOs: System Preferences > 
 *           Accessibility > 
 *           Display > Reduce motion
 */

	@media (prefers-reduced-motion: reduce) {
		.marquee span {
			animation: none;
			text-shadow: none;
			width: auto;
			display: block;
			line-height: 1.5;
			text-align: center;
			white-space: normal;
		}
	}
</style>
