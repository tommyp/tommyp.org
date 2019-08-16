import React from "react";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";
import Header from "./../../../components/header";
import styles from "./firebreak.module.css";

const post = `
  During the month of January, the [GOV.UK](https://www.gov.uk) team had what we called a Firebreak month. Instead of working off our usual backlogs, which are individual to each team, we got to decide what we wanted to work on as individuals, so long as it made GOV.UK better.

  Towards the tail end of December, before the Christmas Holidays, all of the GOV.UK team were asked to think about ways to improve GOV.UK for both our Users and ourselves and write the idea on a [Firebreak card](https://insidegovuk.blog.gov.uk/wp-content/uploads/sites/24/2015/02/idea-card.jpg) along with if you needed other people to work on the idea with you.

  I decided to work on improving the Finder format, which is what my team had built over the previous year. An example of one of these pages can be found [here](https://www.gov.uk/aaib-reports). At its core, it’s faceted searching over a list of documents. As the Finder format had been in development for nearly a year it had some Tech Debt within its stack, which is what I decided to focus on. I split the work into two parts; dropping Finder API and reducing specification code. This post is meant to explain what those two parts entailed. But first, a little explanation of how GOV.UK works:

  GOV.UK isn’t one monolithic Application, but in fact lots of different Applications. The actual number is probably close to 70 now. When a user visits a page on GOV.UK, an Application we call [the router](https://gdstechnology.blog.gov.uk/2013/12/05/building-a-new-router-for-gov-uk/) parses the URL and decides what Application to pass the User to.

  When you visit \`gov.uk/aaib-reports\`, the router knows that \`/aaib-reports\` is rendered by [Finder Frontend](https://github.com/alphagov/finder-frontend) and passes the User to it. The rest of the process functions mostly like a normal Rails Application. Have a look at the code if you’re curious.

  ## Dropping Finder API

  The Finder format contained a couple of different Apps which serve different purposes:

  - [**Finder Frontend**](https://github.com/alphagov/finder-frontend) - faceted searching over Documents. This is the App that renders the index pages with the search filters down the side.

  - [**Specialist Publisher**](https://github.com/alphagov/specialist-publisher/) - publishing App for Editors from various organisations to publish Documents belonging to their Org. Editors from [AAIB](https://www.gov.uk/government/organisations/air-accidents-investigation-branch) can publish [AAIB Reports](https://www.gov.uk/aaib-reports), editors from the [MHRA](https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency) publish [Drug & Device Alerts](https://www.gov.uk/drug-device-alerts) and [Drug Safety Updates](https://www.gov.uk/drug-safety-update), etc. There are also editors from several other agencies using Specialist Publisher to publish several other formats.

  - [**Finder API**](https://github.com/gds-attic/finder-api) - Serves JSON schemas describing the filters down the side of the Finder pages and some other functions.

  - [**Specialist Frontend**](https://github.com/alphagov/specialist-frontend) - renders the \`#show\` pages of the documents linked to from the Finders. Up until very recently all the documents listed on Finders link to Specialist Frontend, but there’s no reason that a Finder couldn’t link to a page rendered by any other App.

  - [**Rummager**](https://github.com/alphagov/rummager) - our search backend which talks to our ElasticSearch indexes. This powers the site wide search and returns the list of documents for the Finder. Finders are basically a pre-scoped search of documents that are in our ElasticSearch indexes and Rummager allows this to happen by returning JSON containing the documents we need as the results.

  Finder API was initially created to fulfil 3 functions:

  1. Serve a JSON schema describing the filters down the left hand side of the page
  2. When on a single document’s page, do value to label conversion eg. \`slugified-value\` to \`Slugified Value\`
  3. Act as a data store for the documents on the Index page

  When we initially developed the Finders format, documents were put into both Finder API (for being rendered by Finder Frontend) and Rummager (to appear in site search). These documents were called Specialist Documents internally as they contain extra bits of metadata which most document pages on GOV.UK don’t have. An AAIB Report for example, will need to allow its extra metadata to be indexed. Metadata such as Airport, Aircraft category, Aircraft registration and the date the accident occurred for example. While Finders were still in Alpha, we modified Finder Frontend to pull its list of documents from Rummager. Our search backend already knew about the documents, so there was little reason to duplicate it somewhere else.

  ### Schemas

  One of the things we’ve been working on at GOV.UK is introducing a canonical source of published content. We’ve called this the [Content Store](https://github.com/alphagov/content-store) and we’re slowly moving Applications over to both publish to the Content Store and read from it. When writing JSON describing a page to the Content Store, we include all the details needed to render the page along the name of both the publishing and rendering app and an array of routes (paths) that this App will use. Those last few bits are how the Router knows which Application to pass the User to.

  The first hurdle to removing Finder API was figuring out where to store the schemas describing the filters. The answer was pretty obvious to me - port them over to live in the Content Store and use that to generate the page in Finder Frontend.

  One of the good things about doing this is it allowed us to remove lots of code in [Finder Frontend](https://github.com/alphagov/finder-frontend/pull/125) that was doing JSON parsing and OpenStruct conversion (Finder API returned JSON whereas the API for the ContentStore returns Objects). The problem was that I still needed something to publish these schemas to the ContentStore, so I refactored this to be done by [Finder API](https://github.com/gds-attic/finder-api/pull/89) with a post deploy task for now, even though we eventually wanted to remove the Application completely. The code was very simple, so porting it to happen somewhere else wasn’t going to be too difficult. Publishing the Finder schema (and all the metadata describing the page, such as if we should display a beta banner, link to related content, etc) now happened on a post deploy task in Finder API.

  After some thinking, I came up with the idea of moving this functionality into Specialist Publisher. It already had versions of the schemas in there in order to populate select boxes for Editors, so with [some modification](https://github.com/alphagov/specialist-publisher/pull/369) we made this happen on a post deploy hook in Specialist Publisher.

  ### Label Conversion

  The need for the label conversion comes from Specialist Frontend and since this code was nicely compartmentalised in Finder API it was mostly a copy and paste job. The main addition [in this piece of work](https://github.com/alphagov/specialist-frontend/pull/77) to the codebase was that it now has a Finder object. This takes the Content Item for the related Finder of the Document. This Class then deals with the value to label conversion.

  Dropped Finder API - ✔

  ## Reducing specificity

  Finder API is now refactored [into the attic](https://github.com/gds-attic) and we pass about a Content Item from the Content Store describing the Finder to Finder Frontend and Specialist Frontend.

  Specialist Frontend is one of our most simple Applications. It renders documents, does some parameterised value to label conversion and links back to pre filtered versions of the Finder. As the App renders a few different document formats, it had a [Presenter for each format](https://github.com/alphagov/specialist-frontend/tree/ced4e62e97d68bd797ae35b1b2279e6fd36156e9/app/presenters) which contained a hash of that formats metadata keys and short names to use for date metadata.

  Since we now have the Content Item for the Finder too in Specialist Frontend, I was able to remove all the Presenters for each format, except for the [MHRAs Drug Safety Update](https://github.com/alphagov/specialist-frontend/blob/master/app/presenters/drug_safety_update_presenter.rb) format which has some special cases with dates.

  This work required some extra refactoring with how methods are instantiated but with a [PR that ended up being +363/-1,768](https://github.com/alphagov/specialist-frontend/pull/81) I was still really happy with the work. Even if finishing it off went a few days over the (soft) deadline.

  Specificity reduced - ✔

  ## Firebroken

  The GOV.UK Firebreak was a great few weeks. Even during normal weeks in the office, I find myself chatting with those in other teams about what they’re working on but during Firebreak it was somehow more exciting because most people came up with their own ideas of what they wanted to do. We gained a [random page URL](https://www.gov.uk/random), upgraded our largest App to [Rails 4](https://github.com/alphagov/whitehall/pull/1958) and we ran a [game day](https://gdstechnology.blog.gov.uk/2015/02/06/running-a-game-day-for-gov-uk/) were we had a deploy freeze and some of the developers tried attacking our staging servers which have a copy of GOV.UK. We also had some non-code based projects such as looking at how we model services starting with childcare. There were a lot of other ideas. Far too many to mention here.

  I’d highly recommend a Firebreak to any team. It may be a hard sell to trying to convince the people in charge to effectively take a month off working from a backlog but it’s definitely worth it to improve how you work or the quality of the experience that your users get.

  After Firebreak I was placed onto the team preparing GOV.UK for the UK General Election. One of the things we were working on was porting [policies](https://www.gov.uk/government/policies) to be powered by the Finder platform. Incredibly conveniently, the work I had completed during the Firebreak saved us about a month of work as I would’ve had do something like that anyways.

  So not only did I improve a small part of the GOV.UK stack, I managed to save myself and my colleagues a few weeks of work.

  ## Notes

  1. GOV.UK will be hiring over the next few months. If this all sounds like something you enjoy available positions will be listed [here](https://gds.blog.gov.uk/jobs).

  2. Firebreak isn’t a term I’d heard before and I’m not sure if many other places do it. Obviously there are Hackathons, but anything made during our Firebreak specifically had to make GOV.UK better whereas Hackathons are a bit more freeform and allow you to create anything.

  3. This post is about something I did in January. Obviously there’s been a bit of a delay in putting this together but [Purdah](https://en.wikipedia.org/wiki/Purdah_(pre-election_period)) was mostly to blame, along with my own procrastination.
`;

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#fff";
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Tommy Palmer | Firebreak</title>
        </Helmet>
        <div className={styles.container}>
          <Header
            styles={styles.header}
            previous="/junior-developer"
            next="/be-more-stupid"
          />

          <article className={styles.content}>
            <header className={styles.title}>
              <h1>Firebreak</h1>
            </header>
            <section className={styles.main}>
              <ReactMarkdown source={post} />
            </section>
          </article>
        </div>
      </React.Fragment>
    );
  }
}
