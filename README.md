# Question 3: Shorten That URL

_Given any URL, shorten it and return a globally unique URL back to the user. Make sure to call out any assumptions and / or limitations in your solution._

### Assumptions and Limitations

- To insure that it is a unique link, all links would be submitted and stored in a database.
- Each link in the database would receive an id: either an incremental id or a date/time stamp. I went with an incremental base 10 id.
- Cursory research suggested that base 62 would be a good candidate for generating a short url. You could change it to a higher base (64 also looked like a good candidate, adding a pair of characters such as / and -) or a lower base, depending on how many urls you were anticipating.
- I added 't-rex' at the beginning so that the short url would be more than just a number (which would be the case for the first several urls). This creates an opportunity to brand the short urls.
- This does **NOT** check for unique urls in state (aka the database). This could search the database to see if the url had been already been entered and a shortened url already generated. If such was the case, it could simply return the already-generated shortened url rather than generating a new one.
