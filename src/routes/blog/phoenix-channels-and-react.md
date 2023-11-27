---
title: Phoenix Channels, Presence, and React
date: '2023-11-1'
subtitle: Let's get spooky
titleBgColor: '#ff6e60'
titleColor: '#fff'
categories: [personal, media, tv, movies]
draft: true
---

At [CastRooms](https://castrooms.com/), I'm the ~~best~~ only engineer at the company.

One of the perks being the only engineer, was picking our tech stack. I've written Phoenix for about 3 years so went with that, and it's served us well. I hadn't used LiveView that much when I started building our product, so our page with complex interactions ended up becoming a large React component. LiveView is great, but as we use a lot of audio and video browser APIs, a client-side library made sense.

The Elixir and Phoenix community has understandably went all in it and the documentation has followed. It took time to figure out a way for Phoenix and React to work well together, so I thought I'd document the approach that I took.

## Channels

From the [Phoenix Channels documentation](https://hexdocs.pm/phoenix/channels.html):

> Channels are an exciting part of Phoenix that enable soft real-time communication with and between millions of connected clients.

They are Phoenix's way of handling WebSocket connections. Connected clients join a channel using a topic, and can then push messages onto the WebSocket and listen for messages. Phoenix can listen for messages coming in, reply to those messages, or broadcast messages out to clients.

Let's imagine that we're building a basic chat room and look at an example:

```elixir
defmodule HelloWeb.RoomChannel do
  use Phoenix.Channel

  alias Hello.Rooms

  def join("room:" <> room_id, _params, socket) do
    room = Rooms.get_room!(room_id)
    socket = assign(socket, :room, room)
    {:ok, socket}
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    broadcast!(socket, "new_msg", %{body: body})
    {:noreply, socket}
  end
end
```

The two functions we've defined here, `join/3` and `handle_in/3` deal with things the client is going to do. `join/3` is called when the client joins the channel. `handle_in/3` here is called when a client pushes a `new_msg` event to the channel with the JSON payload of containing a key of `body`.

If you aren't familiar with Elixir, [Elixir's functions](https://hexdocs.pm/elixir/1.16/modules-and-functions.html#function-definition) can be defined with the same name, but different numbers of arguments, so `my_function/3` refers to the definition of `my_function` that takes 3 arguments, as opposed to the definition of `my_function` that takes any other number of arguments.

Let's move onto the React side. With our chat room, we need to have access to the channel so we can push new messages

<!-- TODO add single component example -->

Now, we've got a component that can send and receive messages.

## Presence

From the [Phoenix Presence documentation](https://hexdocs.pm/phoenix/presence.html):

> Phoenix Presence is a feature which allows you to register process information on a topic and replicate it transparently across a cluster. It's a combination of both a server-side and client-side library, which makes it simple to implement.

If that sounds confusing, don't worry - the main use for it in our context is tracking which clients are connected.

After the Client connects to the Channel, we'll track some metadata on the User in our Presence Map.

Let's update our `join/3` function to send an internal message after the client has joined the channel. We do this by using `send/2`, with a process ID and the message to pass.

```elixir

def join("room:" <> room_id, _params, socket) do
  room = Rooms.get_room!(room_id)
  socket = assign(socket, :room, room)

  send(self(), :after_join)

  {:ok, socket}
end
```

The process for our Channel receieves this message with the socket, so we can now add a `handle_info/2` function to our Channel.

```elixir
def handle_info(:after_join, socket) do
  Presence.track(socket, socket.assigns.user.id, %{
    online_at: inspect(System.system_time(:seconds))
  })

  {:noreply, socket}
end
```

We're calling `Presence.track` and passing the socket, a key, which in our case is a user id, and whatever metadata we want to track. In this case, the time that they came online
