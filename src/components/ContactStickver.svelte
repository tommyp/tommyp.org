<div class="btn-container">
	<a class="btn" href="mailto:hi@tommyp.org"> hire me</a>
</div>

<style>
	.btn {
		animation: pulse 2s infinite ease-in-out;
		background: var(--pink);
		border: 5px solid var(--pink);
		border-radius: 1rem;
		color: var(--white);
		font-size: 3rem;
		font-style: italic;
		margin-left: 200px;
		margin-top: -90px;
		padding: 0.75rem 1.5rem 0.75rem 0.75rem;
		position: absolute;
		text-decoration: none;
		text-transform: uppercase;
		transform: rotateZ(-10deg);
		transition: animation 2s;
	}

	.btn:hover {
		border: 5px solid var(--green);
	}

	@keyframes pulse {
		0% {
			transform: rotateZ(-10deg) scale(100%);
		}
		50% {
			transform: rotateZ(-10deg) scale(110%);
		}
		100% {
			transform: rotateZ(-10deg) scale(100%);
		}
	}
</style>
