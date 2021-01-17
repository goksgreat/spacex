# [SpaceX Launch Assignment](https://spacex.gauravsharma.dev)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://spacex.gauravsharma.dev">
    <img src="https://www.spacex.com/static/images/share.jpg" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">SpaceX Launch</h3>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#server-side-rendering">Server-Side Rendering</a></li>
        <li><a href="#build-and-packaging">Build and Packaging</a></li>
        <li><a href="#client-side">Client Side</a></li>
      </ul>
    </li>
    <li>
      <a href="#responsive-layout">Responsive Layout</a>
      <ul>
        <li><a href="#desktop">Desktop</a></li>
        <li><a href="#ipad">iPad</a></li>
        <li><a href="#mobile-devices">Mobile Devices</a></li>
      </ul>
    </li>
    <li>
      <a href="#performance-optimized">Performance Optimized</a>
      <ul>
        <li><a href="#lighthouse-audit">Lighthouse Audit</a></li>
        <li><a href="#api-middleware">API Middleware</a></li>
      </ul>
    </li>
    <li>
      <a href="#unit-tests">Unit Tests</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://spacex.gauravsharma.dev)

A front-end application which would help users list and browse all launches by SpaceX program.

### Built With

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create a env file (.env.local)
2. Enter your API URL in `.env.local`
   ```JS
   const NEXT_PUBLIC_API_URL = 'ENTER YOUR API';
   ```

## Features

### Server-Side Rendering

The application uses Static Generation with Client-side Rendering and skipping pre-rendering some parts of the page and then use client-side JavaScript to populate them.

### Build and Packaging

The deloyment has been automated with Github commits and using custom domain with Vercel. Vercel is an all-in-one platform with Global CDN supporting static & Jamstack deployment and Serverless Functions.

### Client Side

The application uses React for Client-side Rendering and based on the query parameters recieved from server as props can filter out the launches data.

1. User can Filter the results with help of provided Filters.
2. Filter options are available in `/helpers/filters.js`. The same can be modified at anytime and no additional code changes are required to add the new filters or modify the existing ones.
3. Applying any Filter reflects the below changes:
   <ul>
           <li>Selected filter changes to selected state and mimics the toggle behavior.</li>
           <li>Applied filters changes the URL and update the Page with latest records without refreshing the page.</li>
           <li>If the page is refreshed with the applied filters in the URL – the resulting page is server side rendered & subsequent filters are again rendered on client side.</li>
         </ul>

## Responsive Layout
It follows the mobile first approach and is completely responsive. The application relies on bootstrap’s grid system with custom media query css and follows a flexbox structure.

The application is fully response. It follows 4 column structure for devices above 1024px and 2 column for iPad and 1 column for mobile devices.

### Desktop

[![Product Name Screen Shot][product-screenshot]](https://spacex.gauravsharma.dev)


### iPad

[![Product Name Screen Shot][ipad-screenshot]](https://spacex.gauravsharma.dev)

### Mobile Devices

[![Product Name Screen Shot][mobile-screenshot]](https://spacex.gauravsharma.dev)
[![Product Name Screen Shot][mobile-nf-screenshot]](https://spacex.gauravsharma.dev)

## Performance Optimized
The application has been fully optimized and uses static generation for better caching. All static assets (JS, CSS, images, fonts, etc) are automatically served from an Edge Network, which is blazingly fast.

Application uses all the best practices and relies on an API middleware which gives client the power to ask for exactly what they need and nothing more, making it easier to evolve APIs over time.
Pagination is also included for results for better performance.

### Lighthouse Audit

Application holds good results for performance, accessibility, SEO and more in the lighthouse Audit. 

[![Product Name Screen Shot][lighthouse-audit]](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fspacex.gauravsharma.dev)

### API Middleware

Application relies on a middleware API to get only the concised that that is required from the UI perspective.
It only provides the data that is required for rendering the UI and nothing more thus converting a huge json response to concised json response

`https://spacex.gauravsharma.dev/api/v1/launches`

## Unit Tests

Unit testing for the application relies on the jest framework.

Test cases are written inside `tests` directory.
RUN `yarn test` to run the tet cases.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: assets/images/Landscape_Desktop.jpg
[mobile-screenshot]: assets/images/Mobile.jpg
[mobile-nf-screenshot]: assets/images/NotFoundMobile.jpg
[ipad-screenshot]: assets/images/iPad.jpg
[lighthouse-audit]: assets/images/Lighthouse_Audit_Score.jpg
