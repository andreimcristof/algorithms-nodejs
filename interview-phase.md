# Software design interview questions

## How to design Twitter

- no right answer. every interviewer expects a different answer
- they look at how you communicate instead, and what areas you are focusing on as you answer
- focus is usually about data model, how you would build a DB to reflect the product, or how to scale to millions of users, etc.
- you can choose a focus topic by asking: "do you prefer the focus on any particular feature?"
- don't mention specific technologies - "i would probably use react redux etc" is a very poor way of answering. they look for the why, not the what.
- draw stuff
- talk, communicate. "is there a particular area you want me to focus on?" etc. instantly answer, etc.

### How to answer this type of questions

- start by **identifying 2-3 core features**
  - draw a diagram of the core user interface, e.g. some boxes "here is the feed, here are trending tweets, here is the user icon" etc
- think of possible **ways of implementation**
  - e.g. web interface, sending request to backend, database implementation, what fields a tweet has, etc
- **identify and address difficulties**
  - during implementation detailing - the interviewer wants to see an ability of figuring out challenges BEFORE implementing the product.
- **solutions for scaling**
  - nothing concrete, talk about general strategies instead on scaling out products in general:
    - e.g. **caching requests** from the database. memory store (redis etc). when user first comes on the app, run some algorithm to calculate best feed for user, then cache it
    - server architecture to scale out for additional users: one server is not enough, we need more servers and one load balancer who assigns that request to a random server (horizontal scaling).
