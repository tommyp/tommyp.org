---
title: Input Me To Death
date: 2023-09-12
subtitle: Please try again
titleBgColor: '#fff'
titleColor: '#f00'
categories: [personal, web, design, ux]
---

I've filled in a lot of forms lately.

We've been in our house for two years and now [we're doing renovations](/blog/the-safe). We're buying kitchens, radiators, and doors. All of those require setting up a new account to checkout.

Our home insurance is also up, so time to shop around for a new deal.

I had to report a missed bin collection to my local council.

I've filled in a lot of forms lately.

90% of them barely fucking worked.

## The worst offenders

### Render.com

Even developers, when faced with this super helpful error, might struggle to create a new database.

![A form input on Render.com with an error explaining that the text must match a specific regex](/images/blog/input-me-to-death/render.png)

_How am I meant to understand this?_

After some work it became apparent it didn't like dashes in the database name.

### Admiral insurance

I couldn't add Lila as a second driver to my car insurance because it thought her phone number was invalid.

### Waltham Forest Council

The date picker was a dropdown of recent dates. Upon submission, the form errored and told me I hadn't entered the date in the right format.

### American Express

For some reason it masks some characters in the username field when logging in with a saved username, like a password field would. Occasionally, the browser remembers your username with the dots as the characters like `example••••`. This isn't your username though, so now you're logging in with the wrong username.

### One Time Passcodes

Masking the input for a one time passcodes might seem secure, but it makes it more likely that you lose your position as you glance back and forward between your phone.

### Barclay's

I'm a Monzo customer, but I use Barclay's for a few things. When did high street banks get so complicated for logging in? You've got a membership number, memorable word, 5 digit passcode, and an app based pin sentry. How are you meant to keep track of those things without writing them down somewhere, thus making them insecure?

I also use [Secrets](https://secrets.app/) for password management, but you can see how someone who doesn't use a password manager would just write these on a post-it note and stick it to their screen.

### One shout out

Over the years, giving companies, and/or friends that worked at said companies, some grief about their UX, sometimes managed to get features built. My contribution to the Monzo codebase, was getting [Apple's OTP autocomplete attribute](https://developer.apple.com/documentation/security/password_autofill/enabling_password_autofill_on_an_html_input_element) added to Monzo's 3D secure prompt.

It's one of my favourite features in iOS. It's even extended to emails with OTP in iOS 17.

## Loading pains

There's been [plenty of critique](https://infrequently.org/2023/02/the-market-for-lemons/) recently of single page apps, but my biggest issue with them is focussing on rendering _anything_ first.

Then, I watch a loading animation, while I wait on the thing that I wanted to actually load. It sometimes feels like I need knowledge of how the proverbial sausage is made in order to eat the sausage.

It's not just bad, it's infuriating.
