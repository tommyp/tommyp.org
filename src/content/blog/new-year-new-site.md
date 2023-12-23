---
title: New Year, New Site
date: '2023-12-23'
subtitle: '2024, 3, 2, 1, GO'
titleBgColor: 'var(--pink-5)'
titleColor: 'var(--yellow-5)'
categories: [personal, web]
---

A few weeks back I decided to hold off posting and instead give my site a makeover.

Having your own website, and enjoying the act of designing and building websites, can be extremely cathartic - you're the client, so all decisions and priorities can be yours to decide and prioritise.

I’ve been off work during December (more on that another time) and between putting my lacklustre DIY and woodworking skills to use on our house renovation, I’ve been able to chip away at it on the sofa. Lila even turned to me one afternoon and went _“It’s mad how much you love coding.”_

The reasons are the same as every other time I’ve redesigned and rebuilt it - to learn something new and to flex my design muscles.

## Mission planning

If the goal is a redesign, then I need some self imposed constraints. I wanted to keep the individual colors for each post, but to strip it back otherwise. Simplifying the color palette then also allows me to add something that I really wanted - a light and dark theme.

I love learning new languages and frameworks, so why not experiment with something new. The previous version was built with SvelteKit, which is a fantastic framework, but does a lot of stuff that I don't need for a mostly static blog. If I want to something interactive, then I would definitely miss it. After writing _a lot_ of React over the last 2 years, I definitely prefer Svelte. But then I heard about [Astro](https://astro.build/).

<iframe src="https://www.youtube.com/embed/gxBkghlglTg?si=RQxyD7AZXK30tnTr" title="Astro first look from Fireship.io" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Astro is a static site generator built for content focussed sites. It has an amazing superpower that lets you opt in to client side JavaScript with [_Islands of interactivity_](https://docs.astro.build/en/concepts/islands/) using whatever frontend framework you like.

## Launch day

If you aren't reading this on your favourite RSS reader, you're looking at the redesign. Four week after deciding to start the project and just in time for me to relax over Christmas, I've shipped it.

After so much color and shadows with the previous version, I went with a much flatter design with the gorgeous [Inter typeface](https://rsms.me/inter) from [Rasmus](https://rsms.me/).

[OpenProps](https://open-props.style/) gives me some nice defaults to work with, but mostly it's pretty vanilla CSS. Shout to [Josh Collinsworth](https://joshcollinsworth.com/)'s article on [Tailwind](https://joshcollinsworth.com/blog/tailwind-is-smart-steering) for putting me onto OpenProps. As I moved away from Tailwind, having a load of predictable defaults was the thing I missed the most, so OpenProps was a nice addition to my stack.

There's still some bits to do to get back to feature parity. The big missing thing is dynamic OpenGraph images which I had working in SvelteKit. A straight port of the code to Astro endpoints wasn't working, so that will be done _soon_-ish. Maybe followed by a blog post.

Since it's my first project with Astro there also plenty of things that I haven't used yet, but having my own site I can tinker with it all I like.

## Post mission report

Astro has been really nice to work with.

After front end web development workflows swung towards abstractions on top of abstractions, the pendulum has been swinging back the other way for a few years. Browsers can do a lot more than they could ten years ago and Astro feels like another chapter in the story of the [Embrace The Platform movement](https://css-tricks.com/embrace-the-platform/).

Places where I'd previously used props for presentation between components, I was able to refactor it to use CSS variables. Having no client side JS by default, forced me to go with HTML and CSS _first_. The way it should be.

I'm glad I have my own website.
