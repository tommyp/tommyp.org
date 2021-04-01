import Header from '../components/header'
import Head from "../components/head";
import "@fontsource/archivo-black"
import "typeface-open-sans";

const P = ({children}) => {
  return <p className="text-xl md:text-4xl font-open-sans text-blue-600 leading-relaxed">
    {children}
  </p>
}

const Section = ({children}) => {
  return <section className="px-4 md:px-0 md:ml-40 lg:ml-48 flex-col space-y-8">
    {children}
  </section>
}

const H2 = ({children}) => {
  return <h2 className="font-archivo-black transform -skew-x-12 border-l-200 md:border-l-400 border-blue-600 text-blue-600 mb-8 pl-5 lg:pl-10 text-4xl sm:text-7xl -ml-40 md:-ml-64 uppercase">{children}</h2>
}

const A = ({href, children}) => {
  return <a href={href} className="text-white bg-blue-600 inline-block transform -skew-x-12 hover:skew-x-0 transition-all  duration-200">{children}</a>
}

const Pre = ({children}) => {
  return <span className="font-roboto-mono bg-gray-400 rounded-md inline px-2">{children}</span>
}

const Code = ({children}) => {
  return <code className="font-roboto-mono bg-gray-400 text-blue-600 text-xl md:text-4xl p-8 rounded-md block overflow-scroll">
    {children}
  </code>
}

const AnIntroToTailwind = () => {
  return (
    <>
      <Head title="Flying with Tailwind" />
      <div className="w-full bg-blue-600 pb-10 mb:pb-20">
        <Header textColor="text-white" borderColor="border-white" />
        <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-10xl text-white uppercase font-bold font-archivo-black md:-ml-12  w-full overflow-hidden leading-none">
            <div className="block -ml-32 md:-ml-64 lg:-ml-40">
              <span className="block transform -skew-x-12 border-l-200 md:border-l-400 lg:border-l-600 border-white mb-4 md:mb-8 pl-10">Flying</span>
              <span className="block transform -skew-x-12 border-l-200 md:border-l-400 lg:border-l-600 border-white mb-4 md:mb-8 pl-10 -ml-8">With</span>
              <span className="block transform -skew-x-12 border-l-200 md:border-l-400 lg:border-l-600 border-white -ml-16 pl-10">Tailwind</span>
            </div>
        </h1>
      </div>
      <main className="w-full md:w-11/12 flex flex-col space-y-10 md:space-y-20 py-10 md:py-20 overflow-x-hidden">
        <Section>
        <P>When I decided that my personal site needed a revamp, I did what every developer does and searched for the hottest new technologies to play with. After a bit of research, one of the things I picked was <A href="https://tailwindcss.com/">Tailwind CSS</A>.</P>
        <P>
        I&apos;ve now built several projects with Tailwind, and the frontend at my new job is in Tailwind, so I feel like I&apos;ve gotten pretty good with it. This post is based off of a talk I gave to the Frontend guild at Deliveroo just before leaving. Hopefully it gives you a good idea of what Tailwind is and how to use it.
        </P>
        </Section>
      <H2>
        What is
        Tailwind?
      </H2>
        <Section>
        <P>
          First, let&apos;s talk about what it <span className="italic">isn&apos;t</span>. Tailwind isn&apos;t Bootstrap and it&apos;s not a design system like <A href="https://material-ui.com/">Material UI</A> or <A href="https://chakra-ui.com/">Chaka</A>. Frameworks and Design Systems like these can be great to get started, but further down the line it can take more effort to customise them and your markup and CSS selectors must be a certain structure.
        </P>
        <P>
          I&apos;ve spoken to people who are used to dropping in some components and getting a tooltip, or an accordion, or a carousel. Tailwind doesn&apos;t work like that.
        </P>
        <P>
          Tailwind is an atomic CSS framework. This means it provides small utility classes that usually only do one thing. You then use combine these classes on an element to build up your styling.
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
            <Pre>sm</Pre>, <Pre>md</Pre>, <Pre>lg</Pre>, <Pre>xl</Pre> all relate to screen sizes, so a class of <Pre>md:w-1/2</Pre> would set <Pre>width: 50%;</Pre> at medium screen sizes and up.
          </P>
          <P>
            <Pre>hover</Pre>, <Pre>focus</Pre>, etc when prefixed, apply that style just for the pseudo class. A class of <Pre>hover:text-black</Pre> would display the text as <span className="hover:bg-black hover:text-white rounded-md">#000</span> when it is hovered over. Tailwind ships with plenty of <A href="https://tailwindcss.com/docs/configuring-variants#overview">pseudoclass</A> variants that make it super easy to style your elements with interacton.
          </P>
        </Section>
        <H2>Isn&apos;t this just inline styles?</H2>
        <Section>
          <P>The truth is that yeah, it sort of is?</P>
          <P>But also, not really?</P>
          <P>Modern web development has came a long way from this being <span className="italic">just</span> inline styles. You can leverage component based templating to reduce duplication.</P>
        </Section>
        <H2>Element components</H2>
        <Section>
          <P>The first hurdle that you&apos;ll probably encounter with Tailwind is that you think that the syntax looks terrible. I&apos;ll admit, that if you&apos;re used to class names or the BEM syntax you&apos;ll probably be very put off by how it looks, but eventually it will begin to make sense.</P>
          <P>Tailwind ends up leading you down a path that leaves your HTML looking like this:</P>
          <Code>
            &lt;a href=&quot;/testimonials&quot; class=&quot;text-gray-900 underline hover:text-black-900&quot;&gt;<br/>
            &nbsp;&nbsp;Testimonials<br/>
            &lt;/a&gt;
          </Code>
          <P>Repeating this everywhere in your HTML can become pretty tedious. A good solution I found for this was to turn this into a component:</P>
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
          Tailwind also has the <A href="https://tailwindcss.com/docs/functions-and-directives#apply">@apply</A> feature which let&apos;s you extract the classes you combine to one common class. I prefer to pull these into a component and keep the Tailwind class syntax across the project, but do whatever is easiest.
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
          Although Tailwind ships with lots of classes to do various things, it&apos;s all generated from a configuration file. You can see that configuration by running <Pre>npx tailwindcss init --full</Pre> and opening <Pre>tailwind.config.js</Pre>.  Anything in that file can be changed and Tailwind will generate the appropriate classes. Each section of the docs also explains how to correctly customise each utility.
          </P>

          <P>
          For most projects, I&apos;ve went with the standard
          classes, but there&apos;s nothing stopping you from completely rewriting the config with your own spacing, colours, fonts, etc and using Tailwind to generate classes for your design system.
          </P>
        </Section>
        <H2>So what can you build with Tailwind?</H2>
        <Section>
          <P>Unlike other CSS frameworks, there&apos;s no such thing as a Tailwind look. <A href="https://govbins.uk/">Govbins</A>, <A href="https://conversationswithashipwreck.com/">Conversations with a Shipwreck</A>, <A href="https://www.goodclub.co.uk/">Good Club</A> and this site were all built using Tailwind. A big benefit of Tailwind is to allow you to be more creative and not trap you into a certain style.</P>
        </Section>
        <H2>Wrapping up</H2>
        <Section>
          <P>Tailwind is a CSS framework to build your own design system, which ships with sensible defaults to generate a good starting point. Give it a shot with your next project and see how it goes. You might not believe it&apos;s as good as people say without trying it.
          </P>
          <P>As the fantastic docs say:</P>
          <blockquote className="text-xl md:text-4xl text-blue-600 border-l-8 border-blue-600 pl-5 md:pl-10 italic">
            If you can suppress the urge to retch long enough to give it a chance, I really think you&apos;ll wonder how you ever worked with CSS any other way.
          </blockquote>
        </Section>
        <Section>
          <small className="text-blue-400 text-sm font-open-sans">Published 27th March 2021</small>
        </Section>
      </main>
    </>
  )
}

export default AnIntroToTailwind;


