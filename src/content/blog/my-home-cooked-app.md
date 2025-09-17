---
title: My home cooked app
date: 2025-09-17
subtitle: Line it up
titleColor: '#ff0099ff'
titleBgColor: '#9fee00ff'
categories: [personal, web]
---

I like music, and spend a lot of my time, money, and energy seeing live music. Lots of weekends spent at festivals, club nights, and gigs, and even [DJing myself](https://soundcloud.com/syntax-terror-exe/).

When the lineup for an event is announced and posted to one of the many music related group chats I'm in, someone will make a playlist with tracks from the artists playing at the event. This act of preparation not only allows you to get excited for the event, it also acts as research in scoping out new acts, enabling you to get the most music for your money.

But it's a laborious process. Searching, dragging, and dropping. For an event with more than a handful of artists, that's a lot of work.

However, I'm a developer, and if there's one thing I know how to do, it's to automate laborious processes.

## Headliners

To make this easier and faster, a while ago I built [Lineup.fun](https://lineup.fun/). It's the simplest solution to my problem - you paste it a list of artist names and it generates a playlist of all their top 10 tracks.

One thing I didn't account for, was that the first result might not be the one you want. Here's 2 examples that I've ran into: 

Most people know Duran Duran, but there's also Duran Duran Duran, and they sound very different:

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/42WWc4Bybrup05i5plTsc3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

There's also [Lenny Dee, the organist](https://en.wikipedia.org/wiki/Lenny_Dee_(organist)), and [Lenny Dee, the industrial techno DJ](https://en.wikipedia.org/wiki/Lenny_Dee_(DJ)):

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3xrOF41CBuZ755toXQP2xN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

My friends and I, are more likely to be into Duran Duran Duran, than Duran Duran. And the DJ Lenny Dee, rather than the organist.

This was a real probem for the main users of the App - me.

## Up next

Over the Summer I took the time to rebuild Lineup.fun from scratch and fix this problem. After [rebuilding _Is It Shorts Weather Today?_](/blog/is-it-shorts-weather-today) I wanted to use something different.

The original version of Lineup.fun was in SvelteKit, but made extensive use of features that were sadly removed from Svelte - custom events and stores. I like Svelte and SvelteKit, but I haven't used React since [Castrooms](/blog/tales-from-a-solo-dev), so I thought it was time to refamiliarise myself with it. 

My recent time with both has shown me that I like Svelte's component syntax and SvelteKit's simplicity, but Runes make me feel like I'm writing React. I like the idea of [_Svelte for Sites, React for Apps_](https://www.swyx.io/svelte-sites-react-apps), but with Astro and my Elixir experience there's more nuance to this for me - 

> Astro for sites, Svelte for small Apps, React for medium client side Apps, Phoenix for big Apps. 

There may be more features eventually, but everyone keeps asking me for AI parsing of a lineup image, which is a fine idea, but really I just want to let you throw a link at it and it does the work. More backend-ish stuff like that means I'll probably lean on Phoenix a bit more for it. Or maybe even it'll be an excuse to try [Gleam](https://gleam.run/).

## Micro-rave

Just as the big C kept us all at home, I read [_An app can be a home-cooked meal_](https://www.robinsloan.com/notes/home-cooked-app/). An evergreen post if there ever was one. 

Lineup.fun is very much a home cooked meal of an app. I've got analytics on it, but basically nobody else uses it and I don't mind. It makes one minor thing in my life a lot easier, and that's what I built it for.

As a developer, being able to build things to solve your own problems is a very powerful thing. I honestly love it.

## Honourable mentions

- 👨‍💻 I'm also working on another home cooked app that solves another music related problem for me. Hopefully I'll be able to share more soon.
- 🎛️ I DJ'd at my friend Miranda's birthday [and remembered to hit record for the first time in ages](https://soundcloud.com/syntax-terror-exe/danse-macabre-live-at-folklore). It was a lot of fun.
- 🎮 I finished [Stray](https://annapurnainteractive.com/en/games/stray) over a couple of days and it was an absolute delight. 
- 📺 The finale of Foundation season 3 was incredible. Some bits missed the mark for me but I was ok to let those slide. Hopefully season 4 is even better.
- ✈️ A lot of travelling.
- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 We went to the Edinburgh Fringe with some of Lila's family. Saw lots of comedy, a few celeb spots, and even bumped into an old friend who's number I had lost. A great few days there.
- 🇮🇪 Followed by going back home for my brother's wedding, which was a lovely day. It's mad seeing him all grown up. 
- 🇮🇹 Then, to a friend's wedding in Sicily. We had 1 full day in beautiful Palermo so we went to look at a [load of skeletons](https://en.wikipedia.org/wiki/Catacombe_dei_Cappuccini). The wedding itself was at this amazing vineyard in the countryside. A lot of us got to DJ with this incredible valley backdrop.
- 🇨🇦 From Italy, back to London to unpack and repack, and then now I'm in Canada for a few weeks working from my in-law's. They also have a pool and the weather is still hot, so I'll definitely be using that. 
