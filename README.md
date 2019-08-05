API Endpoints

1. Add to the Queue & get results of job:
   http://localhost:3000/api/worker?href=<URL>

Example:
http://localhost:3000/api/worker?href=http://google.com/

2. Check Status of Queue
   http://localhost:3000/api/queue/status

3. Get specific job from database
   http://localhost:3000/api/worker/:id

4. Get database
   http://localhost:3000/api/worker/all

Example:
http://localhost:3000/api/worker/5d474463b680f3eb0ba29fc5

Coding Challenge

Job Queue

Create a job queue in NodeJs that supports a RESTful API. The job queue should implement some type of worker(s) which “scrape" a URL's html data. This data should then be stored somewhere persistently like a database. The exposed API should support adding to the queue, checking on the status of jobs in the queue, and getting the results of each job.

Bonus: add a feature that emits a push notification when a job is completed containing the job’s results.

Completing the Challenge and Submitting Work

We need to see decisions you make over time. If you submit one or two huge commits with 90-100% of the work completed we will not be able to accept your submission. Try breaking sections of the challenge into smaller pieces, committing code as you construct the backend. Submit your work via GitHub, or zip your work including the .git/.gitignore files.

## --

Thought Process

Watch tutorial on RESTful API
worker(s) -> multithreaded?

GET Request -> Add a new url to scrape -> Sends request to new file (worker on a separate thread?) to start to scrape a file -> http://localhost:3000/api/jobs?href=https://reddit.com/

Worker -> grabs html data -> stores it in MongoDB

Send back results
Send a push notification

GET Request -> Check status of job queue -> http:localhost/api/jobs/status

GET Unique ID of a Job from database -> http://localhost/api/jobs/<ID GOES HERE>

API:

1.  Add new url to scrape
2.  Check status of job - http status codes?
3.  Retreiving the URL html data

Database -> AWS, MongoDB, Firebase?

Push-Notification -> mobile notifications?
