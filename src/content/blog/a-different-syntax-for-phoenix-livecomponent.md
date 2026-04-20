---
title: A different syntax for Phoenix.LiveComponent
date: 2026-04-16
subtitle: Functional functional components
titleBgColor: '#ac00ea'
titleColor: '#fff'
categories: [elixir, code]
draft: true
---

Even after writing Elixir and Phoenix for quite a few years, I've picked up a lot of new tricks at my new job, and I wanted to share my favourite one.

In Phoenix, the syntax for rendering a live component is quite a pain. It's verbose, so I always have to check the docs:

```elixir
<.live_component
  module={HeroComponent}
  id="hero"
  content={@content}
/>
```
