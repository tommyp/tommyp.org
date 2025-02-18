---
title: 'React to Svelte, and back again'
date: 2023-05-01
subtitle: I love you Svelte but you're bringing me down
titleBgColor: '#FF3E00'
titleColor: 'white'
draft: true
categories: [software, svelte, react, elixir, work]
---

Just as 2023 started, our product roadmap started to thin out. Will and Mitali, the co-founders of CastRooms, were focussed on pitching for the next few weeks. We decided I could use that time to tackle tech debt.

There’s some interesting things about our product that aren’t typical of a web product. I keep joking to friends that it’s nice to work on something that’s not strings going into a database and coming back out again, but we are doing some of that too. We’re using lots of video, but with some misuse of the Twilio API to add some extra features to make user research easier.

It’s also a very reactive product. Usernames for each user are displayed in several places, and we allow instant username updates. I’m of a certain age that it reminds me of MSN Messenger usernames.

As it stood, I had a Phoenix app, with a page that was rendered with React. I’ve written a decent amount of Svelte, and prefer it over React. Beyond the unique nature of 2 main pages, it’s not very complex.

Easy peasy, I thought.

## Stores as far as the eye can see

In React, to set up my WebSocket connections, I had a provider component. This took some props, and had a useEffect to connect to the channels and set their state.

Here's some example code for the provider:

```javascript
const PhoenixSocketProvider = (props) => {
	const [socket, setSocket] = useState();
	const [someChannel, setSomeChannel] = useState();

	useEffect(() => {
		const sx = new Socket('/socket', { params: window.socketParams });
		sx.connect();
		setSocket(sx);
	}, []);

	// ... join the channel, etc

	return (
		<PhoenixSocketContext.Provider
			value={{
				someChannel
			}}
		>
			{children}
		</PhoenixSocketContext.Provider>
	);
};
```

And in the components:

```javascript
const { someChannel } = useContext(PhoenixSocketContext);
```

But with Svelte, instead of a provider component, I have a big `setupChannels` function that writes the result into a store.
