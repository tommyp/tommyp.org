import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../../../components/header";
import styles from "./be-more-stupid.module.css";

const post = `
  _I recently changed jobs. Leaving behind [GOV.UK](https://www.gov.uk/) and joining the team at [Deliveroo](https://deliveroo.co.uk/). This post is about the last project I worked on at GOV.UK._

  When you work as a Developer, you have many goals to keep in mind whilst you write code. Different types of projects have different goals. The features you need to complete are one type of goal.

  In my previous job I was a Developer on GOV.UK. It was there that I was introduced to the goal of writing clean & understandable code.

  ## Simplicity & Longevity

  When someone comes back to read your code later, it should be obvious to them what the code does and how it works. As your code ages, more and more people will need to interact with it. Your code should be understandable without you having to explain it. It should be able to explain itself.

  During the lifespan of a project, there's always the possibility of refactoring the code. Or maybe the user need has changed and the feature is no longer needed. Until either of those things happen, the code must be as simple as possible. The more complicated the code is, the greater the chance that it'll get refactored and have a short lifespan. The simpler the code is, the greater the lifespan that it may have. Let’s call these ideas code simplicity, and code longevity.

  Every project I worked on before GOV.UK has never had simplicity or longevity as a primary concern. Here a few reasons on why this happened:

  - We knew the project or client would run out of money soon after the work was completed.

  - The project budget overran. We'd accept the hit on the budget, but hand off responsibility after the work was complete.

  - We knew the project wouldn’t be sustainable and wasn’t going to need any more work.

  - The relationship between us and client became so sour that we would not work with them again.

  - Due to miscommunication, the client's expectation of the finished product and what we were building was different. We'd accept the hit on budget, adjust what we were doing and complete the work.

  You might’ve worked in a small team where getting the job done quickly and cheaply was the high priority. I've found that on larger teams clean & simple code is a greater concern. Before I worked on GOV.UK I’d never wrote any tests on any projects in work. The ethos was QA it locally, QA it on staging and push it live. That was _good enough_.

  ## Some background on GOV.UK

  At the time of writing, GOV.UK was a collection of about 70 applications. We had [Publishing Applications](https://github.com/alphagov/specialist-publisher) accessible only by editors in Government, which write data to [API Applications](https://github.com/alphagov/publishing-api), which in turn serve JSON to [Frontend Applications](https://github.com/alphagov/specialist-frontend) for rendering to the public. There were also other types of Applications which do various things such as [redirecting](https://github.com/alphagov/bouncer), but most of them fit into the former 3 groups.

  This is a lot of Applications to support, especially when [security vulnerabilities](https://insidegovuk.blog.gov.uk/2015/06/24/54-deployments-in-1-day/) pop up and we had to update Rails and deploy every Application ASAP. In a normal day on GOV.UK, we worked on iterating the features the Applications provide whilst responding to both Public User Needs and Government User Needs.

  ## In the beginning

  2 years ago, I was lucky enough to join the team that maintains and improves GOV.UK. I was placed on a team that was building Applications to power 2 formats: [Manuals](https://www.gov.uk/guidance/the-highway-code) and [Specialist Documents](https://www.gov.uk/drug-safety-update/sglt2-inhibitors-updated-advice-on-the-risk-of-diabetic-ketoacidosis). These were published from an Application called [Specialist Publisher](https://github.com/alphagov/specialist-publisher). Other than myself and one other, every developer on this team was a Contractor. The remit of the team was to build Applications to enable Government Departments, Agencies & Arms Length Bodies to move to using GOV.UK. This project of moving these Organisations to GOV.UK was called Transition. Once Transition was complete, the ownership of these Applications was to be handed off to other GOV.UK teams. Our team was to then be disbanded and all the permanent developers would move into other teams.

  One of the Applications we had was [Whitehall](https://github.com/alphagov/whitehall). It's used by Editors in Government departments to publish content. The development of Whitehall was pretty rapid and it grew to become quite a large and complex Rails App. With it being so complex, it also became the source of hours of frustration and the butt of many jokes.

  ## Specialist Publisher

  Specialist Publisher isn't a complicated Application. It's a basic CRUD interface with drafting and edition support. It publishes many similar formats, differing only on some metadata unique to each format. For example: Aircraft Category for [AAIB Reports](https://www.gov.uk/aaib-reports), Market Sector for [CMA Cases](https://www.gov.uk/cma-cases), Railway Type for [RAIB Reports](https://www.gov.uk/raib-reports), etc.

  Because of what had happened with Whitehall, a major concern when building Specialist Publisher was to try and avoid some the issues that that caused it to become difficult to work with.

  ## What happened

  When Specialist Publisher was being built, it followed a [Hexagonal Rails approach](http://victorsavkin.com/post/42542190528/hexagonal-architecture-for-rails-developers) and used [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection). At GDS we’re big fans of MVPs when building Applications, but Specialist Publisher Users didn’t get their hands on it until well into development. This was more for Political reasons than a product delivery decision. Because there were no users, we weren’t encountering feature requests and bug reports which would come with the normal Alpha & Beta phases of use.

  As it followed Hexagonal Rails and Dependency Injection the Application concerns were separated ruthlessly. There’s a lot of code to piece them together to do basic things. This meant that it was hard to follow logic throughout the Application. Let’s take a look at an example:

  The \`DocumentsController#index\` has this line:

  \`\`\`
  documents = services.list(search_adapter).call.map { |d| view_adapter(d) }
  \`\`\`

  \`services\` is a variable containing an instance of a Class, with each method being a service. The \`list\` method looks like this:

  \`\`\`
  def list
    ListDocumentsService.new(
      RepositoryPaginator.new(document_repository),
      search_details,
    )
  end
  \`\`\`

  This \`ListDocumentsService\` is returned from \`services.list\`. The \`call\` method on \`ListDocumentsService\` looks like this:

  \`\`\`
  def call
    if search_details.query.present?
      documents_repository.search(search_details.query)
    else
      documents_repository
    end
  end
  \`\`\`

  That then returns the \`document_repository\`, which is actually a \`RepositoryPaginator\`. That takes a \`SpecialistDocumentRepository\` as an argument. This is where we actually interact with the Database through a \`SpecialistDocumentEdition\` using \`Mongoid::Document\`. The logic around actual Specialist Documents is in a \`SpecialistDocument\` class, but that isn’t backed by the Database.

  As you can see, this is a lot of code to get a collection of Objects from the Database and can be confusing. Manuals was even worse. To make it even more confusing, with Dependency Injection and [SimpleDelegator](http://ruby-doc.org/stdlib-2.2.1/libdoc/delegate/rdoc/SimpleDelegator.html), we also had Objects acting like other Objects.

  With everything separated into its own class, adding new formats required lots of boiler plate code. [The last Pull Request](https://github.com/alphagov/specialist-publisher/pull/594/files) to add a new format was 29 files changed and 2,917 additions. This is too much code for what is format with some differing metadata. Admittedly a lot of the additions are tests, but as the Application was so brittle it needed to be extensively tested for each format.

  Having everything so separate also meant that when it came to do anything using the rails console or try and figure out a bug, it was highly confusing, complicated and a huge time-sink. Any work in Specialist Publisher would take a significantly longer amount of time compared to a more traditional Rails App.

  With ownership of Specialist Publisher shared among teams, it was worked on by a large number of Developers. Almost every one of us hated working on it. As the last Developer from the original team, I was the Developer working on GOV.UK that had the most experience with it. By default, I became the point of contact for any bugs, questions or feature requests.

  So let's recap: we have an Application that follows separation of concerns to an extreme degree, is heavily Unit tested with high level Feature Tests but little Integration Tests and is hard to understand and to debug. We also have one Developer out of ~20 being relied upon for their knowledge. For the number of our Government Users that interacted with Specialist Publisher, it was taking up a disproportionately large part of our time.

  ## Changes to Publishing

  With many different Publishing Applications supporting various types of workflow, we had many requests for feature parity in Applications. In other Applications we had Fact Checking, deletion of documents while they are still in draft, reslugging and redirecting documents among many other features.

  To build these features it was decided that instead of building them in each of the Apps, we would build a central Publishing API which would act as a data store for Documents. This Publishing API would send and receive JSON over the network. This way we can iterate in one place and all Applications get the benefit with a lot less work.

  Porting Applications to use the new Publishing API as a Data Store would need a large amount of code changes within Applications. Since Specialist Publisher was unsustainable in its' current form, it was decided that it would be the first to be rewritten. Myself and one other Developer were assigned to the project but they ended up leaving GOV.UK and GDS a few weeks later.

  ## What we did

  First of all, we deleted the entire codebase. It was easier to start from a blank Rails 4 run of \`rails new\` than it was to try and salvage it piece by piece.

  When starting this work, we had 4 major goals:

  - **Don’t be too clever** - Specialist Publisher is less _indirection_ and more _misdirection_. The new version should be easy to understand. With separation of concerns taken to such an extreme degree, a lot of Classes had one public method, \`.call\`. Lots of the classes looked like this:

  \`\`\`
  def SomeClass
    def .call
      # Do some stuff
    end
  end
  \`\`\`

  An instance of \`SomeClass\` would be assigned to a variable which is passed to another Class. Then finally, 3 files away from the method, you see \`some_var.call\`. As many classes have a \`.call\` method, you have no idea which Class \`some_var\` would be at that point. As you can guess, this was incredibly confusing to follow.

  - **Objects should have a decent interface** - When debugging or working within the console, every class was so small that it was difficult to work with. Having an easy to use interface for each Object, along with Objects owning their own logic was important. The use of SimpleDelegator and passing Objects as arguments gave us a 'Russian doll'-like architecture that added to the confusion. Often we would get an error of \`undefined method for SlugUniquenessValidator\` when interacting with a model, because 3 classes up a \`SlugUniquenessValidator\` wrapped the builder, which wraps the actual model.

  - **Don’t use Mongo** - With the use of the Publishing API. We no longer needed a data store.

  - **Spread knowledge** - Even though I was the only Developer working on it, it was important that I didn’t build the App in isolation. The new version needed to be easily understandable by other GOV.UK Developers.

  ## How I did it

  Let’s look at each of those 4 things:

  - **Don’t be too clever** - No more Dependency Injection and removing the use of SimpleDelegator. This kept classes simple and easy to understand. They might have a lot of methods, but this is a far better than what came before. There's always the possibility that it could be refactored later. As most of the logic within each format was exactly the same, I made a \`Document\` class. Each format would be a then be a subclass of \`Document\`. This parent and child Class relationship would make overriding methods for a format trivial.

  - **Objects should have a decent interface** - We’re now using an over the network JSON API for data. To keep this as simple as possible to work with, I wrapped the API interaction and the serialising/deserialising in an interface like ActiveRecord counterparts. So now instead of jumping through a \`RepositoryRegistry\` and \`SpecialistDocumentEdition\` to get a Document, we can instead call \`CmaCase.find\` with a UUID as an argument and it’ll return an instance of a \`CmaCase\`. Similarly, I also gave it methods such as \`.all\`, \`.save!\` and \`.publish!\`. This made it work a lot more like a regular Rails App, allowed me to obscure away the fact that the data becomes JSON when you read/write. This also gave us Objects which work like normal Rails models.

  - **Don’t use Mongo** - The Publishing API now provided a data store, which means we only needed a local Database for Users. Since we never had to work with this for Documents, we left it as Mongo. This saved us having to set up a new environment for the Application. It also meant that when it was complete, it could be deployed without any changes in Puppet.

  - **Spread knowledge** - Even though I was writing it mostly by myself, getting others to merge Pull Requests helped spread knowledge. About 6 weeks in a new Developer started on my team, so I paired with them on porting the rest of the formats. Additionally, in my last 2 weeks I paired with Developers on other teams. This allowed me to explain the use of the Publishing API and what I had done.

  ## What GOV.UK ended up with

  Although I didn’t finish it by the time I left GDS and GOV.UK, I set it on a path that I was extremely happy with. The Application was easy to understand, even by new developers. There’s a lot less code doing the same CRUD actions. Though it’s still not finished and there’s hot fixes in there for things that the Publishing API currently lacks. In order for the Application to use it as a data store in Production those hot fixes will need to be rectified. But it’s already a lot better than what we had before. I’m pretty proud of what I accomplished within 3 months. Though I did get help from [Kush](https://twitter.com/kushalp) and [Rosa](https://twitter.com/rosaemerald), among others.

  There’s still work to be done on it that my excellent former colleagues will be picking up. Since GOV.UK codes in the open, I can see what they’re doing on the new [Repo](https://github.com/alphagov/specialist-publisher-rebuild).

  ## What I ended up with

  Rewriting Specialist Publisher was an oddly fitting swan-song for my time at GDS. I started there on the team that built it and ended up becoming ‘the Finders expert’ or ‘the Specialist Publisher expert’. I had no problem deleting what we had and starting again due to my experience with the codebase. Deleting an entire Application isn’t something you should do lightly. It definitely was a response to our experience of supporting the Application in the year since it had left Beta. Starting from scratch was a carefully considered decision for us.

  Working with the original and writing the new version taught me a lot about how to work within a large team, how to write code that others can understand and how to support and share knowledge among colleagues. The most important thing that it taught me though is not to be _too_ clever. Writing simple, easy to understand code can be hard. It's sometimes all too easy to run with an idea that makes sense to you, but won't make sense to others. How can we focus on writing easy to understand and maintainable code? As in the words of my good friend and former colleague [James](https://twitter.com/abscond), maybe we should all _[be more stupid](https://twitter.com/abscond/status/727477221905055744)_.
`;

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#fff";
  }

  render() {
    return (
      <div className={styles.container}>
        <Header styles={styles.header} previous="/be-more-stupid" />

        <article className={styles.content}>
          <header className={styles.title}>
            <h1>Be More Stupid</h1>
          </header>
          <section className={styles.main}>
            <ReactMarkdown source={post} />
          </section>
        </article>
      </div>
    );
  }
}
