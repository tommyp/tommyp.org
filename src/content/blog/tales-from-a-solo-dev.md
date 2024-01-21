---
title: Tales from a solo dev
date: '2024-01-22'
subtitle: You want it? You merge it.
titleBgColor: '#F8FF00'
titleColor: '#ff00f6'
categories: [dev, work]
---

Right at the end of 2023 I finished up working at [CastRooms](https://castrooms.com/). I was one of four people there, and the only developer, although I preferred to say that I was the best developer at the company.

Many in our industry think about joining a startup from day one. Having done it, I do think it's something everyone should try if you get the chance, but it's not easy. It can be hard fucking work.

To give you some background, the CastRooms product was a DJ video streaming service with a simultaneous video call. Far away from _strings going in and out of a database_ that I'd done before. By my own admission, I was trying to do some complex and weird things with audio and video in the browser.

Working by myself was tough, but here's some lessons that I learned along the way.

### Perfect is the enemy of good

Don’t question your own work too much. Your job isn’t to write perfect code, if such a thing even exists. Your job is to write code for features, and ship them as fast as possible. You don't need an imaginary fellow developer in your head whispering nit-picky comments in your ear. You'll be merging +2000 line PRs and shouldn't have thoughts like that.

It has to be done, and has to be done quickly, so trust your own instincts.

Maybe in 10 years time, new developers will be questioning all your decisions and slagging you off via emojis. You won't care though, because you'll be long gone, sipping cocktails on a beach on your island that you bought with the proceeds of the IPO. Hopefully.

### Cut your losses

Many times, an approach to a problem didn't quite work out, forcing me to start a new branch and try again. Maybe that wouldn't be the case on a team, where tickets can be discussed and planned in advance, but when you're on your own you've got to try what you think might be right.

The slightly mysterious nature of audio and video on the web meant that more than once, I spent days building features only for it to not work exactly as planned. Many times, the best course of action was to start again. Luckily with git, I could keep that previous work around and recycle bits and pieces. But starting over with a blank slate was hugely beneficial.

If it doesn't work out, don't beat yourself up. Take what you've learnt and try again.

### Read the docs

You won’t be able to talk to your team about your issues, and sometimes, that is brutally defeating. When I was in a team, I'd post a message in Slack - but without other developers to work with, who do I turn to?

I had to get good at not just reading, but finding docs. API references sit high up in the results, but finding the right blog posts and Stack Overflow pages can be more difficult. Learning the [Google](https://www.pcmag.com/how-to/google-search-tips-youll-want-to-learn) or [DDG](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/) tricks over many years came in dead handy.

When you do find what you think might be the right page, really take your time and try to understand what you're trying to find.

Understanding what you really need to search for to solve a problem, is something that some people in our industry struggle to learn.

### You're not alone

Even being the only dev, you're not really alone. There's plenty of developers out there willing to help you - you just might not know where to find them yet.

When I worked at Deliveroo, a round of layoffs caused those at risk to form an independent Slack to chat about the redundancies. After the dust settled, it became an ex-Deliveroo Slack. When I did need help, I was able to post there and talk through my React problems with my frontend friends.

If you don't have a crew of emoji obsessed ex-colleagues, I also recommend joining communities for the tools you're using. Slack and Discord's impact in obscuring documentation has been discussed a lot recently, but that's where people hang out now. I made use of the Elixir and LiveKit Slacks, and the Svelte Discord. When people could help, they did. Unfortunately some questions went unanswered, but that's more on the complexity of the work I was doing than availability of people with the right knowledge.

<hr/>

There's four bits of advice that I could put down in words. If you find yourself in a similar situation, I hope it's useful.

If you ever meet me for a coffee or beer, I'm sure there's plenty more I could say.
