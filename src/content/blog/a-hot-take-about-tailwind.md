---
title: A hot take about Tailwind
date: 2026-02-16
subtitle: Styling issues
titleBgColor: '#167bb6'
titleColor: '#a2b8ba'
categories: [web]
---

I've used Tailwind on more than a few projects, and I tend to go back and forward on my opinion of it. Unlike most people who use it though, I actually like writing plain old regular CSS. But calling CSS plain, old, or regular, is unfair. Compared to what I first learnt in 2006 CSS can do so much more. Despite advances in CSS, Tailwind has grown in popularity enough that it's now shipped with frameworks like Phoenix, Laravel, and Tanstack.

Many frontend developers use Tailwind as part of their standard stack. As a side effect, lots of public code is written in Tailwind, which allowed AI coding agents to be trained on it. In turn, this led to effects like [_Tailwind purple_, where every AI spits out obvious Tailwind influenced UI](https://nitter.net/adamwathan/status/1953510802159219096?s=20).

[Tailwind's recent layoffs were well publicised](https://www.businessinsider.com/tailwind-engineer-layoffs-ai-github-2026-1?op=1), with the founder attributing that to a drop off in sales of [Tailwind ecosystem products](https://github.com/tailwindlabs/tailwindcss.com/pull/2388#issuecomment-3717222957) which he blamed on AI usage.

Don't mistake this post as a celebration of job losses to AI. I am definitely wondering where my career goes after it's prompts the whole way down. Tailwind is a methodology, so it was always at risk of something else coming along and usurping it. Still though, [it's not a good look to launch a new product weeks after laying off most of the team](https://nitter.net/adamwathan/status/2017987681532207111#m).

But if an AI can spit out a decent looking template using Tailwind in seconds, why pay for anything but token usage?

## Inline freestyling

Tailwind solves 2 main problems:

- removing the need to understand what styles apply to what elements - aka _scoping_
- copying elements from one project and keeping the styles is possible - aka _portablity_

For some, CSS' approach to scoping doesn't make sense. But as frontend shifted from people who know HTML, CSS, and JS, to people who only know React, understanding how CSS works became a less common goal for many frontend developers. React didn't ship with an opinionated way to work with CSS, which led to a whole ecosystem attempting to solve it for those that thought it was a problem. Packages like CSS modules, CSS-in-JS, Styled Components, and finally Tailwind.

Tailwind also solved the problem of building something that looked good without much work. The creators of Tailwind provide plenty of off the shelf components for you to copy and paste into your project. Once you've got Tailwind set up in your project, it takes a few minutes to get whole design systems together that look OK. Tailwind allows you to assume that with certain class names, the building blocks of your project will look the same as they do on the docs. A further ecosystem capitalised on the portability, with component libraries like [daisyUI](https://daisyui.com/) and [shadecn/ui](https://ui.shadcn.com/).

Other frameworks, like Svelte and Astro, solve scoping and portability natively by allowing you to write regular CSS and [compiling it down to scoped CSS for the browser](https://svelte.dev/docs/svelte/scoped-styles). I can't find a link, but I remember watching the creator of Svelte, Rich Harris, deriding React for shipping without a way to write CSS.

I know that people use Svelte and Astro with Tailwind, but in the projects I've built with those I haven't felt a need for it.

Like anything else in making computers do what you want, CSS seems wild and unpredicatable when you don't know it. In my opnion, all you need to do is spend some time with it, and you'll learn to love it.

## The hot take

_Tailwind got popular because React didn't ship with a native way to scope styles within a component._

Web frameworks like Phoenix (my favourite), [copied React's approach to state management](https://fly.io/blog/love-letter-react/). The Phoenix team also recently shipped [colocated hooks](https://www.phoenixframework.org/blog/phoenix-liveview-1-1-released) to write your JavaScript next to your backend Elixir code.

I hope they follow Svelte and Astro's lead and do styles next, because at its' core, Tailwind is a way to solve those problems I mentioned earlier - scoping and portability. If frameworks provide native ways to scope styles and allow whole components to be copied between projects, then some people might learn CSS.

## Honourable mentions

- 📖 I missed the cultural zeitgeist of it, but I'm tearing through Carless People. Each page reveals a new horror that is somehow a shock but not surprising in the slightest.
- 🎮 I replayed Dishonored 1 and then all the DLC for the first time. What an amazing game. I took my time and absorbed all that Dunwall had to offer.
- 🎮 Going straight into another game set in a fake version of the UK, I've picked up Fable 3 before the new one comes out. Technically it hasn't aged the best, but I'm still enjoying it. Quests like helping a man get divorced, putting on a party for ghosts, and farting into a bandit's face, have really set the tone.
- 📺 Small Prophets was a cosy supernatural delight. I really should watch Detectorists.
- 🎙️ [The Devil You know](https://www.cbc.ca/listen/cbc-podcasts/2054-the-devil-you-know-with-sarah-marshall) was fantastic. A whirlwind tour of the Satanic Panic filled with unimaginable crimes, horrible bastards, and innocent victims.
