# Bootcamp Booster

This document explains the functionality of, and how to use, Bootcamp Booster.

## Introduction

Bootcamp Booster is a resources tool for School of Code bootcampers, designed to lessen the load of finding quality documents and tutorials related to a chosen area of study.

The bootcamp is a fast-paced, tough place to be! With so much to learn and only so many hours in a day, this app aims to help improve a bootcamper's ability to study, with curated resources that cut-down the time spent searching for help.

## Run Locally

### Create a folder for the application

### Clone the project

```bash
  git clone https://github.com/lalicia/bootcamp_booster.git
```

### Go to the project directories - to run both frontend and backend, use separate terminals to navigate into each individually

Backend:

```bash
  cd w9_backend-project-room-22-team-hydrate
```

Frontend:

```bash
  cd w9_frontend-project-room-22-team-hydrate
```

### Install dependencies in both terminals

```bash
  npm install
```

### Start the backend server and React frontend in their respective terminals

```bash
  npm start
```

## Setting up the Database

You'll need to setup your own database in PostgreSQL to host your data.

We used Heroku, so would recommend this to avoid any potential complications caused by using a different provider - but if you prefer to use a different one, that's your call! Just be prepared to troubleshoot using your chosen provider's documentation.

If using Heroku, please visit https://id.heroku.com/login and either login or sign-up.

## Environment Variables

To run this project and connect to your database, you'll need a .env file in the backend root folder, with the following environment variables:

`PGUSER`

`PGHOST`

`PGDATABASE`

`PGPASSWORD`

`PGPORT`

You can find the credentials for these in Settings on Heroku.

Please note - your .env folder should be added to a .gitignore folder to ensure it isn't pushed up to GitHub! Otherwise the credentials will be exposed and your database could be compromised.

## Creating and Populating the Table Within Your Database

Your database is currently sad and empty, so you'll need to fix that by creating the table and populating it with data. A data file is included within the project and referenced in the populateResourcesTable.js file - if you want to change the data you include in your tables, please see the resources.js file within the libs folder.

To use the data provided, there are scripts already set up to enable to you very quickly and simply create and populate the table. Please run the following in the backend terminal:

```bash
npm run createResourcesTable
npm run populateResourcesTable
```

### You're now ready to go!

## Component Tree:

    -App.js

        -HomePage.js

            -CssTopic
                -List
                    -ListItem
                -VidList
                    -VidListItem

            -HtmlTopic
                -List
                    -ListItem
                -VidList
                    -VidListItem

            -ReactTopic
                -List
                    -ListItem
                -VidList
                    -VidListItem

            -UiuxTopic
                -List
                    -ListItem
                -VidList
                    -VidListItem

        -ErrorPage

## How the App Works

### A bootcamper will land on the homepage and select a topic, the pages for which are managed with React Router:

```js
import { useNavigate } from "react-router-dom";
```

```js
<button
  className="topic-button"
  role="button"
  onClick={() => {
    navigate("/html");
  }}
>
  <img className="topic-pic" src={HtmlButton} alt="html button" />
</button>
```

### This then sends a fetch request to the Express server:

```js
const fetchItems = async () => {
  const response = await fetch("http://localhost:3000/resources/CSS");
  const data = await response.json();
  //console.log(data);
  setTopicState(data.payload);
};
```

### The Express Server in turn sends a GET request to the database:

```js
resourcesRoute.get("/:id", async function (req, res) {
  const resourcesID = req.params.id;
  console.log(resourcesID);
  let resources = await getTopicResources(resourcesID);

  const resourcesIdObject = {
    success: true,
    payload: resources,
  };

  res.json(resourcesIdObject);
});
```

### The function used above - getTopicResources - is kept within the models folder in the backend, to separate the logic for communicating with the database:

```js
export async function getTopicResources(topic) {
  const result = await query(`SELECT * FROM resources WHERE topic=$1;`, [
    topic,
  ]);
  return result.rows;
}
```

### The response from this request is what we set as the state in the React frontend, using setState - here named setTopicState - from the useState hook:

```js
import React, { useState, useEffect } from "react";
```

### Because the resource links need to show on the screen as the topic page loads, we use the useEffect hook to have the function called on the initial page render:

```js
useEffect(() => {
  fetchItems();
}, []);
```

## Future Implementation

There are currently only a sample number of live topics, so our first update would be to expand the number of available Booster topics, as well as the number of resources for each.

We also plan to give an option for users to add new resources, as we see this app taking on the functionality of the current bootcamp tech-related-links Slack channel (which ages out and is tricky to find things on!).

In the future, we'd like to implement quizzes as further functionality and as another tool for bootcampers - which could lead them to looking at particular topics or links based on their results.

And - though we designed the app with a clean, minimal style intentionally - we might want to revisit this and see if a redesign would be appropriate. User feedback would be great for this, so perhaps that's another feature we would like to provide!

### But for now...

Thank you for your interest in Bootcamp Booster!
