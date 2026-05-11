---
title: A different syntax for Phoenix.LiveComponent
date: 2026-05-11
subtitle: Functional live components
titleBgColor: '#ac00ea'
titleColor: '#fff'
categories: [code, elixir]
---

Even after writing Elixir and Phoenix for quite a few years, I've picked up some new tricks at [Verna](https://verna.earth/) and I wanted to share my favourite one.

In Phoenix, there are two different syntaxes for rendering components. Functional components without any state can be defined like so:

```elixir
defmodule MyAppWeb.GreetingComponent do
  use MyAppWeb, :html

  attr :name, :string, required: true

  def greeting(assigns) do
    ~H"""
      <h1>Hello {@name}</h1>
    """
  end
end
```

And then imported and rendered with:

```elixir
import MyAppWeb.GreetingComponent, only: [greeting: 1]
# ...
<.greeting name="Rocky" />
```

A live component is slightly different and more verbose. Given a `CountComponent` that takes a prop of `initial_count`, we do it like this:

```elixir
defmodule MyAppWeb.CountComponent do
  use MyAppWeb, :live_component

  attr :initial_count, :integer, required: true

  def render(assigns) do
    # HEEX
  end
end
```

And then rendered with this:

```elixir
<.live_component
  module={CountComponent}
  id="count"
  initial_count={0}
/>
```

Phoenix is great, but I always found this difference in syntax a bit weird. It turns out that live components can actually be called using the simpler syntax. If we refactor our `CountComponent`, we can expose it as a function:

```elixir
defmodule MyAppWeb.CountComponent do
  use MyAppWeb, :live_component

  attr :initial_count, :integer, required: true

  def count(assigns) do
    ~H"""
      <.live_component
        module={__MODULE__}
        id="count"
        initial_count={@initial_count}
      />
    """
  end

  def render(assigns) do
    # HEEX
  end
end
```

Wherever we want to use it, we can import it with:

```elixir
import MyAppWeb.CountComponent, only: [count: 1]
```

And use it exactly like our functional component:

```elixir
<.count initial_count={0} />
```

It's definitely more verbose when defining a live component, but it also means that we can encapsulate the call to `live_component` all within a single file.
