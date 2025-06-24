---
title: Is It Shorts Weather Today?
date: 2025-06-23
subtitle: A 14 year joke
titleBgColor: '#ff0000'
titleColor: '#F5CF77'
categories: [personal, web]
---

For 14 years now, I’ve operated a website that does 1 thing - it tells people if they should wear shorts that day. Nothing more.

People love it. Here's some feedback I've received from The Internet:

> Wow. “Somebody has to have made something like this…” Lo and behold…
> Thank you eternally, Tommy.

> I enjoy your websites a lot. Especially the shorts one.

> THANK YOU.

Today, I’m releasing another new version. I thought this would be a good opportunity to tell the story about my silly weather website.

## The idea

Back in May of 2011, I was 22 and had just recently finished University. Not working weekends for the first time since I was 17 was glorious. Summer was a few weeks away, but I was already enjoying all the Sun I could.

Belfast weather during the summer can be _sunny_, and might reach a level you could describe as _warm_ or even _hot_. No matter what euphoric weather you experience in one part of the day, the rest of the day can be a damp snap back to reality.

During an evening in May, a friend and I were talking about how we couldn't decide if we should've worn shorts that day. We joked that there should be a single serving site for this purpose.

If you're not sure what a single serving site is, here is the explanation on [wikipedia](https://en.wikipedia.org/wiki/Single-serving_site):

> A single-serving site is a website composed of a single page with a dedicated domain name and which serves only one purpose.

The next day I thought to myself "_I'm a web developer! I can make this!_".

## 2011 - Version 1.0

That conversation alone was enough to give me a vague plan - using a location, hit an API to get a weather forecast, do some sort of logic with the weather, and finally render a decision.

I seem to remember we used Geonames at work for something and I had discovered that when returning a location from the API it also contained the current weather. As was the choice for Ruby developers at the time, I built it in Coffeescript with a Sinatra backend. I'm not sure Coffeescript is used any more, but it was popular in 2011.

It gave the user an answer, but in a particularly _Belfast-ish_ way like:

> Get your legs out! It's a schwelterin' 21 degrees.

or

> Are you not wise? It's a baltic 9 degrees.

After posting it on Twitter, my friends loved it.

Thanks to the Wayback Machine, we can see what it looked like, without the TypeKit font unfortunately.

![](/images/blog/is-it-shorts-weather-today/2013.png)

_The original design_

## 2014 - Version 2.0

Thanks to the archeological history contained on Github, I can see that during March 2014 I swapped Geonames out for OpenWeather. From what I remember, Geonames was shutting down the API I was using, and so that change wasn't by choice. Other updates continued at regular pace for a month or 2.

This version was not long after I started working at [GOV.UK](https://gov.uk/), where, during my first week I got into the lift with a teammate and some strangers. The teammate introduced me to [Henry](https://manofscience.co.uk/), who showed me a website on his phone that told you if you should wear shorts or not that day, to which I responded:

> See the way it says _"Made by Tommy"_ at the bottom. That's me I'm that Tommy.

## 2015 - Version 3.0

This project was the first of many joke websites that I've made over the years. Back in the day, Heroku was a good place to host Ruby applications for free. When they reduced this free tier to static projects, that forced me to rebuild for a third time. Joke websites are an expensive hobby and I wasn't going to shut down such a popular service.

Now was the time to rip out all the Ruby and Coffeescript and go all in on purely artisanally handcrafted HTML, CSS, and JavaScript.

## 2016 - Version 4.0

For some reason I decided to rebuild it in Ember. As a former Rails dev I remember that Ember was used by many Rails companies and I liked the idea of it.

This was also around the time that Dark Sky was big. If you didn't use it or don't remember it, Dark Sky had a revolutionary feature that would send you a push notification when it was about to rain where you were. I discovered that their free API tier returned a daily forecast, so this release included a Shorts Weather forecast.

People loved it, but the logic was getting complex. I would get sent tweets kicking off that 18 degrees and sunny isn't Shorts Weather, while other people would say they could go as low as 15.

I would sometimes quickly deploy a change to the trigger on a particularly nice day if I thought I might get replies like this.

## A free lunch

In February 2016, I started working at Deliveroo. I moved to London in 2013 but with such huge cultural impact of the project and regular updates, my friends in Belfast still used the service.

When I joined Deliveroo, I was placed on the marketing team who were just about to launch our referral scheme. In a perfect coincidence of timing, Deliveroo was also about to launch in Belfast. I had the idea to put a link with my referral code in the footer. For every £5 off their first order my friends would use, I would get £5 in credit. The problem was that I only got the credit when they place their first order, but each account had a maximum number of 50 redemptions.

Everyone was using the code, but only some people purchased, so I quickly hit the redemption limit. With so few of those redemptions following through and placing orders, I didn't get my £250 in credit.

I asked the product manager could I increase my own limit and he said yes, so I bumped it to 100.

Then Deliveroo increased the amount from £5 to £10 and again I hit my limit, so I asked again, but this time that PM was off and I had moved teams, so I asked a more senior PM and her response was: _"Absolutely. You don't have to ask again. Get as many customers as you can."_

Eventually, some dickhead had put my referral code on a voucher website and it was found by someone at the company. This meant that I wasn't allowed to increase it again under the non-assumption that it was me who put it there.

As I worked at Deliveroo, I knew that each redemption had a 3 month expiry date. I had hundreds of pounds to spend over the summer before it expired. I was going to eat like a king, otherwise it would go to waste.

I sampled my way through any and all central London restaurants opened at lunchtime. Money was no object, so why not spend 25 quid sushi for lunch? Double meat burritos, _with_ guac. And always order a side. Once I even ordered lobster and wagyu beef at home, but in a cruel twist of irony it never got delivered.

After this, sometimes literal, gravy train had screeched to a stop, I had totalled £1500 in credit. Not bad for a joke.

## 2017 - Version 5.0

I could see what way the wind was blowing in the Frontend Wars, so now was the time to ditch Ember and move to React. This also called for a redesign, and you can't beat a gradient.

![](/images/blog/is-it-shorts-weather-today/2015.png)

_Now with more gradients_

## 2021 - Version 6.0

2020 was quite a year. We were all stuck inside and watched a lot of news. One particular headline worried me a lot - Apple had bought Dark Sky. After the purchase, Apple announced that the Dark Sky API would eventually be shut down.

In 2021 I also had bit of a professional crisis. Deliveroo had left me burnt out and I wanted something more from coding, so I started learning more creative coding pursuits in my spare time. I picked up a few courses from [SuperHi](https://www.superhi.com/) in a sale and got to work.

With Dark Sky being sunsetted, I went back to using OpenWeather. This meant no more daily forecast. OpenWeather's free tier has the current weather and a forecast every 3 hours for 5 days. Every 3 hours isn't much use to me so current would have to do for now.

After completing the [Shaders for the Web](https://www.superhi.com/catalog/shaders-for-the-web) course I knew I had to use it. I altered one of the projects to end up with a trippy heatmap looking background. Someone pointed out that it looked like one of those heatwave warning images that we're familiar with now, so maybe I was trying to subtly remind everyone that climate change is real.

To simplify, I got rid of the _"It's a schwelterin X degrees"_ statements, which left it simple enough to go back to just HTML, CSS, and JS.

Because I had a lot of spare time in 2021 I also added some new features. Previously it only searched using your current location, so I added a location lookup, which allowed me to place the location in the URL, which in turn allowed me to use those values on the initial request. Now I had shareable URLs.

![](/images/blog/is-it-shorts-weather-today/2021.png)

_Now with more WebGL_

With shareable URLs now possible, the analytics showed me that even the [Maritime & Transport technology Young Professionals society at Delft University of Technology](https://mtt-colloquium.github.io/) was linking to it.

## 2025 - Version 7.0

So why now?

Truthfully, I have a million ideas for projects, and although rebuilding an old one is easier, even a single page that does one thing involves a lot of work.

As more people are now using it, they might disagree with my Hibernian definition of what constitutes shorts weather, so I wanted to allow the trigger temperature to be set.

This newest version is built in SvelteKit, for a few reasons:

- The previous few versions were just HTML, CSS, and JS, but always with an API proxy. The last one used a Netlify function. SvelteKit allowed me to keep the API proxy within the same codebase and make it generic between hosting providers, so a perfect excuse to use Cloudflare Workers.
- Working with components is nice, and although I could've built it in Astro like this website, I would've ended up using Svelte where I needed interactivity anyways. It's close enough to HTML, CSS, and JS.
- Svelte is lightweight enough that I don't feel bad like sending the whole React runtime to the user's browser.
- Since I'm adding personal settings, this would mean that there's more logic. It made sense to use TypeScript and actually write some tests.
- Svelte is fun.

I probably could've solved all of those things except the last one with vanilla HTML, CSS, and JS if I had tried, but Svelte took care of a lot of the extra work for me.

## The future - Version ?.0

Will I ever rebuild it again? Probably.

There's some immediate changes that I'd like to investigate, and one idea that is in the _"Might Do"_ column on the roadmap, but that's another few years away.

## The present

I've been running _Is It Shorts Weather Today_ for my whole career and it's been a constant opportunity to try new things as I wanted to learn them. Side projects are fun, and joke websites are funny, but I hope that spending this much time and effort on a joke is even funnier.

I'm a big fan of _be the change you want to see_ and I love [making mad shit](/blog/lets-make-mad-shit). I'd love to see more websites that are mad as shit.

## Honourable mentions

- ☀️ I went camping in the New Forest for the solstice and it was definitely shorts weather.
- 🔗 As a speaker of [Hiberno-English](https://en.wikipedia.org/wiki/Hiberno-English), this article on the loss of [linguistic diversity due to AI usage](https://www.theverge.com/openai/686748/chatgpt-linguistic-impact-common-word-usage) concerns me.
- 🔗 [The future of the internet is in the past](https://www.reddit.com/r/webdev/comments/1kp5ria/the_future_of_the_internet_is_in_the_past/). I've been in _the game_ for 15 years so I remember being excited about all the things mentioned here, and a bit dissalusioned by the state of modern web development.
- 🎙️ [Hot Money](https://www.pushkin.fm/podcasts/hot-money) is back. The amazing podcast from the Financial Times is back for season 3 and this time about how a fraudulent German fintech company is linked to the Russian government.
- 📺 We finished White Lotus season 3 and I enjoyed it, but I do feel that the joy of watching rich people ruin their lives is having less impact each season.
- 🎮 After [picking up my Playdate again](/blog/artifacts-from-another-universe), I've spent some time playing the games I'd bought previously and I've gotten really into [Reasonant Tale](https://play.date/games/resonant-tale/) - a tiny _Zelda_-like with lots of charm.
- 🎮 I also restarted and came back around to [Atomfall](https://www.youtube.com/watch?v=mdtFjfXetg0). Imagine Fallout in the Lake District. Unlike Fallout, It's more survival than RPG but I'm really enjoying unravelling the mystery.
