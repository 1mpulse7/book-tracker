# MyReads Project

This is the sixth project for the Udacity front-end nanodegree. It is a book-tracker program
that divides books into three shelves; Currently Reading, Want to Read, and Read.
There is also a search button that takes you to a page to search for more books held on
a back-end server. The search is limited by search terms.

## To Run Project
 In order to run the project, all that should need to be done is to run the commands
 'npm install' and 'npm start'. This will start a development server and launch a
 test version of the project.
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Resources Used

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I used the initial started code provided by Udacity to create the basic components.

To learn react router and achieve the switches, I followed the @Forrest(FEND) walkthrough.
 found here: https://www.youtube.com/watch?v=bpKI3R0nf7E

For implementing the shelf change, and search page details, I used the @DougBrown(MWS) walkthrough.
  found here: https://www.youtube.com/watch?v=OcL7-7cRpkQ&feature=youtu.be


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
