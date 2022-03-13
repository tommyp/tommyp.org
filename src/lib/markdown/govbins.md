# [Govbins](govbins.uk)

![Govbins.uk](/images/work/govbins.png)

My good friend [Harry](https://twitter.com/HarryTrimble) has spent a few years travelling the country, taking photos of local council bins and documenting them on [govbins.uk](govbins.uk).

In March 2020, we were hanging out and he asked me would I help him
add new features to the site and I happily agreed.

As we went
into Lockdown, Harry started accepting submissions via Instagram
as travelling for bins didn't seem so essential.

It was originally a static site hosted on Github Pages made
using Bootstrap with lots of overriding inline styles. It had a
lot of repetition of markup and with so many high res images,
the time to load the page was upwards of 15 seconds.

I ported the site to Next.js and Tailwind CSS, and used lazy
loading to decrease the latency of the page. I also added
sorting and submissions using Netlify forms.
