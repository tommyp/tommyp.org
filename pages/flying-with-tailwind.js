import Header from '../components/header'
import Head from "../components/head";
import "@fontsource/archivo-black"
import "typeface-open-sans";

const P = ({children}) => {
  return <p className="text-xl md:text-2xl font-open-sans text-blue-500 ">
    {children}
  </p>
}

const Section = ({children}) => {
  return <section className="w-full md:w-4/6 lg:w-1/2 mx-auto px-4 md:px-0 flex-col space-y-8">
    {children}
  </section>
}

const H2 = ({children}) => {
  return <h2 className="border-l-20 border-blue-500 pl-5 lg:pl-10 text-5xl md:text-6xl uppercase text-blue-500 font-archivo-black mb-8 transform -skew-x-12 w-full md:w-4/6 lg:w-1/2 -ml-3 sm:mx-auto">
    {children}
  </h2>
}

const A = ({href, children}) => {
  return <a href={href} className="text-white bg-blue-500 inline-block transform -skew-x-12 hover:skew-x-0 transition-all  duration-200">{children}</a>
}

const Pre = ({children}) => {
  return <span className="font-roboto-mono bg-gray-300 rounded-md inline px-2">{children}</span>
}

const Code = ({children}) => {
  return <code className="font-roboto-mono bg-gray-300 text-blue-500 text-xl md:text-2xl p-8 rounded-md block overflow-scroll">
    {children}
  </code>
}

const AnIntroToTailwind = () => {
  return (
    <>
      <Head title="Flying with Tailwind" />
      <div className="w-full bg-blue-500 pb-10 mb:pb-20">
        <Header textColor="text-white" borderColor="border-white" />
        <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-10xl text-white uppercase font-bold font-archivo-black md:-ml-12  w-full overflow-hidden leading-none">
            <div className="block -ml-32 md:-ml-64">
              <span className="block transform -skew-x-12 border-l-200 md:border-l-400 lg:border-l-600 border-white mb-4 md:mb-8 pl-3 md:pl-10 ml-4">Flying</span>
              <span className="block transform -skew-x-12 border-l-200 md:border-l-400 lg:border-l-600 border-white mb-4 md:mb-8 pl-3 md:pl-10 ml-1 sm:-ml-1 md:-ml-4 xl:-ml-6">With</span>
              <span className="block transform -skew-x-12 border-l-200 md:border-l-400 lg:border-l-600 border-white -ml-2 sm:-ml-6 md:-ml-12 xl:-ml-16 pl-3 md:pl-10">Tailwind</span>
            </div>
        </h1>
      </div>
      <main className="flex flex-col space-y-10 py-10 md:py-20 overflow-x-hidden">
        <Section>
        <P>When I decided that my personal site needed a revamp, I did what every developer does and searched for the hottest new technologies to play with. After a bit of research, one of the things I chose was <A href="https://tailwindcss.com/">Tailwind CSS</A>.</P>
        <P>
        I&apos;ve now built several projects with Tailwind, and the frontend at my new job is in Tailwind, so I feel like I&apos;ve gotten pretty good with it. This post is based on a talk I gave to the Frontend guild at Deliveroo just before leaving. Hopefully it gives you a good idea of what Tailwind is and how to use it.
        </P>
        </Section>
      <H2>
        What is
        Tailwind?
      </H2>
        <Section>
        <P>
          First, let&apos;s talk about what it <span className="italic">isn&apos;t</span>. Tailwind isn&apos;t Bootstrap and it&apos;s not a design system like <A href="https://material-ui.com/">Material UI</A> or <A href="https://chakra-ui.com/">Chaka</A>. Frameworks and Design Systems like these can be great to get started with, but further down the line it can take more effort to customise them and your markup and CSS selectors must be a certain structure.
        </P>
        <P>
          I&apos;ve spoken to people who are used to dropping in some components and getting, for example, a tooltip, an accordion, or a carousel. Tailwind doesn&apos;t work like that.
        </P>
        <P>
          Tailwind is an atomic CSS framework. This means it provides small utility classes that usually only do one thing. You then combine these classes on an element to build up your styling.
        </P>
        </Section>
        <H2>
          The Basics
        </H2>
        <Section>
          <P>
            Most Tailwind classes do one thing. <Pre>w-1/2</Pre> is <Pre>width: 50%;</Pre>
          </P>
          <P>
          Some classes do multiple things. <Pre>text-xl</Pre> is:
          </P>
          <Code>
            font-size: 1.25rem;<br/>
            line-height: 1.75rem;
          </Code>
          <P>
          Some declarations that take 1 line in CSS take multiple classes in Tailwind. <Pre>border: 1px solid #000;</Pre> becomes <Pre>class=&quot;border border-black&quot;</Pre>.
          </P>
        </Section>
        <H2>Responsive design</H2>
        <Section>
          <P>
            <Pre>sm</Pre>, <Pre>md</Pre>, <Pre>lg</Pre>, <Pre>xl</Pre>, etc all relate to screen sizes, so a class of <Pre>md:w-1/2</Pre> would set <Pre>width: 50%;</Pre> at medium screen sizes and up.
          </P>
          <P>
            <Pre>hover</Pre>, <Pre>focus</Pre>, etc when prefixed, apply that style just for the pseudo class. A class of <Pre>hover:text-black</Pre> would display the text as <span className="hover:bg-black hover:text-white rounded-md">#000</span> when it is hovered over. Tailwind ships with plenty of <A href="https://tailwindcss.com/docs/configuring-variants#overview">pseudoclass</A> variants that make it super easy to style your elements with interaction.
          </P>
        </Section>
        <H2>Isn&apos;t this just inline styles?</H2>
        <Section>
          <P>The truth is that yeah, it sort of is?</P>
          <P>But also, not really?</P>
          <P>Modern web development has came a long way from being <span className="italic">just</span> inline styles. On way You can leverage component based templating to reduce duplication.</P>
        </Section>
        <H2>Element components</H2>
        <Section>
          <P>The first hurdle that you&apos;ll probably encounter with Tailwind is that you think that the syntax looks terrible. I&apos;ll admit that if you&apos;re accustomed to class names or the BEM syntax you&apos;ll probably be very put off by how it looks, but eventually it will begin to make sense.</P>
          <P>Tailwind will lead you down a path that leaves your HTML looking like this:</P>
          <Code>
            &lt;a href=&quot;/testimonials&quot; class=&quot;text-gray-900 underline hover:text-black-900&quot;&gt;<br/>
            &nbsp;&nbsp;Testimonials<br/>
            &lt;/a&gt;
          </Code>
          <P>Repeating this everywhere in your HTML can become pretty tedious. If I&apos;m working in something like React or Vue I prefer to turn it into a reusable component:</P>
          <Code>
          const A = (&#123;href, children&#125;) =&gt;  (<br/>
          &nbsp;&nbsp;&lt;a href=&#123;href&#125; className=&quot;text-gray-900 hover:underline hover:text-black-900&quot;&gt;<br/>
            &nbsp;&nbsp;&nbsp;&#123;children&#125;<br/>
            &nbsp;&nbsp;&lt;/a&gt;<br/>
          )
          </Code>
          <P>Then rendering it becomes similar to regular HTML:</P>
          <Code>
            &lt;A href=&quot;/testimonials&quot;&gt;Testimonials&lt;/A&gt;
          </Code>
          <P>
          Tailwind also has the <A href="https://tailwindcss.com/docs/functions-and-directives#apply">@apply</A> feature which allows you to extract multiple classes to one common class. If I&apos;m working in something like React or Vue I prefer to pull these into a component and keep the Tailwind class syntax across the project, but you can do whatever is easiest.
          </P>
        </Section>
        <H2>IntelliSense</H2>
        <Section>
          <P>
            I&apos;m a VS Code user so it was nice to find an amazing plugin for working with Tailwind. It provides a really great integration for autocompletion, and a whole load of other features.
          </P>
          <P>
            Install it from the <A href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">VS Code Marketplace</A>.
          </P>
        </Section>
        <H2>An API for your Design System</H2>
        <Section>
          <P>
          Although Tailwind ships with lots of classes that do various things, it&apos;s all generated from a configuration file. You can see that configuration by running <Pre>npx tailwindcss init --full</Pre> and opening <Pre>tailwind.config.js</Pre>.  Anything in that file can be changed and Tailwind will generate the appropriate classes. Each section of the docs also explains how to correctly customise each utility.
          </P>

          <P>
          For most projects, I&apos;ve gone with the standard
          classes, but there&apos;s nothing stopping you from completely rewriting the config with your own spacing, colours, fonts, etc and using Tailwind to generate classes for your design system.
          </P>
        </Section>
        <H2>What can you build with Tailwind?</H2>
        <Section>
          <P>Unlike other CSS frameworks, there&apos;s no such thing as a Tailwind look. <A href="https://govbins.uk/">Govbins</A>, <A href="https://conversationswithashipwreck.com/">Conversations with a Shipwreck</A>, <A href="https://www.goodclub.co.uk/">Good Club</A> and this site were all built using Tailwind. A big benefit of Tailwind is that it allows you to be more creative and doesn&apos;t trap you into a certain style.</P>
        </Section>
        <H2>Wrapping up</H2>
        <Section>
          <P>Tailwind is a CSS framework to build your own design system, which ships with sensible defaults to generate a good starting point. Give it a shot with your next project and see how it goes. You might not believe it&apos;s as good as people say without trying it.
          </P>
          <P>As the fantastic docs say:</P>
          <blockquote className="text-xl md:text-2xl text-blue-500 border-20 transform -skew-x-12 border-blue-500 p-5 md:pl-10">
            If you can suppress the urge to retch long enough to give it a chance, I really think you&apos;ll wonder how you ever worked with CSS any other way.
          </blockquote>
        </Section>
        <Section>
          <small className="text-blue-400 text-sm font-open-sans">Published 12th April 2021</small>
        </Section>
      </main>
    </>
  )
}

export default AnIntroToTailwind;


