import React from "react";
import Card from "react-bootstrap/Card";
const Blogs = () => {
  return (
    <div className="container my-5 d-flex flex-column gap-5">
      {/* Question 01 */}
      <Card border="secondary">
        <Card.Header>What is cors?</Card.Header>
        <Card.Body>
          <Card.Text className="text-start">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. An example of a cross-origin request: the front-end
            JavaScript code served from https://domain-a.com uses XMLHttpRequest
            to make a request for https://domain-b.com/data.json. For security
            reasons, browsers restrict cross-origin HTTP requests initiated from
            scripts. For example, XMLHttpRequest and the Fetch API follow the
            same-origin policy. This means that a web application using those
            APIs can only request resources from the same origin the application
            was loaded from unless the response from other origins includes the
            right CORS headers.
          </Card.Text>
        </Card.Body>
      </Card>
      {/* Question 02 */}
      <Card border="secondary">
        <Card.Header>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-start">
            <strong> 5 reasons why you should use Firebase.</strong>
            <br />
            Free tier Starting with the most obvious reason - Firebase has a
            really good free tier. The so-called "Spark plan" provides you with
            quite generous usage limits (one of the top offerings in the
            business as far as I know) for all of Firebase products. You can
            find more details on the pricing page.
            <br />
            Free tier tips Now, the free tier is really good as is, but I'd like
            to point out a few things to keep in mind to better utilize its
            potential. First off, it's important to remember that we have a few
            completely free services, like Authentication, and Cloud or In-App
            Messaging. These services, although often missed, boost Firebase's
            already tremendous value by a fair bit. You get them completely free
            no matter the plan, so if you'd use only those few services, you
            might get away with paying nothing. Secondly, the cost for services
            like Firestore, Realtime Database (RTDB), and Cloud Functions
            depends heavily on your usage. The first two serve the same purpose
            (realtime database), with Firestore being newer and coming with some
            additional perks. However, differences in storage models aside, it's
            the pricing that matters the most. Firestore can handle more
            concurrent connections and writes per second, but additionally,
            apart from "usual" storage and data transfer costs, it charges for
            the number of reads and writes. RTDB on the other hand can handle a
            bit less (with low free plan limitation of only 100 concurrent
            connections presumably for the initial push to using Firestore), and
            charges only for the stored data and GB transferred (only a bit
            higher than Firestore). Thus, depending on your use-cases and
            scalability requirements, you might be better off going with the
            older RTDB than the shiny new Firestore.
            <br />
            Full package Getting back to the main topic, we've got another
            Firebase advantage - the fact that it's kind-of a full package. When
            researching the previous "Firebase alternatives" blog post, I must
            admit that my appreciation for Firebase slightly grew. The fact that
            this single platform provides pretty much everything that an average
            serverless app would require is really hard to compete with.
            <br />
            Easy API Speaking of polish, Firebase API is simply a pleasure to
            work with. Now, I'm a web developer, so everything I say here is
            mostly related to the Firebase JavaScript SDK. I know that Firebase
            provides SDKs for other platforms such as Android, iOS, C++, or
            Unity and I assume these are equally good, but just keep in mind
            that I can only speak of my personal experience.
            <br />
            Great docs & community An important detail that boosts the API
            usability is of course good documentation. And here, Firebase also
            doesn't let down (at least from my JS SDK experience). Detailed API
            reference, number of guides, sample projects and code snippets, as
            well as a vast library of community-curated content created by
            Firebase users from around the world, makes solving any potential
            problems a breeze.
            <br />
            <strong>the other option for implement authentication</strong>
            <br />
            The server verifies that the code is valid and finally authenticates
            the user. An alternative implementation is the use of RSA Keys. RSA
            authentication is basically based on two factors: A password/pin and
            an authenticator. The authenticator might be a hardware or software
            token.
          </Card.Text>
        </Card.Body>
      </Card>
      {/* Question 03 */}
      <Card border="secondary">
        <Card.Header>How does the private route work?</Card.Header>
        <Card.Body>
          <Card.Text className="text-start">
            The react private route component renders a route component if the
            user is logged in and in an authorised role for the route, if the
            user isn’t logged in they’re redirected to the /login page, if the
            user is logged in but aren’t in an authorised role they’re
            redirected to the home page.Depending on how you use the HTTP
            module, a problem that you might come across is the occurrence of
            multiple HTTP requests. This is actually the normal behavior of the
            HTTP observables, but it might be surprising the first time that we
            see it.
          </Card.Text>
        </Card.Body>
      </Card>
      {/* Question 04 */}
      <Card border="secondary">
        <Card.Header>What is Node? How does Node work?</Card.Header>
        <Card.Body>
          <Card.Text className="text-start">
            <strong>Node:</strong>
            <br />
            Node.js is an open source server environment Node.js is free Node.js
            runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
            Node.js uses JavaScript on the server
            <br />
            <strong> Node work:</strong>
            <br />
            Node.JS works and runs on the VB JavaScript engine. An essential
            thing to comprehend is that Node isn’t a web server. In this article
            will give a simple method to comprehend the outline of how Node.JS
            works? along with its functions, what makes Node.JS extraordinary
            and clarify that it’s something other than server-side JavaScript.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
