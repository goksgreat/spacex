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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
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

It follows the mobile first approach and is completely responsive.

### Desktop

[![Product Name Screen Shot][product-screenshot]](https://spacex.gauravsharma.dev)

### iPad

[![Product Name Screen Shot][ipad-screenshot]](https://spacex.gauravsharma.dev)

### Mobile Devices

[![Product Name Screen Shot][mobile-screenshot]{:height="300px" width="100px"}](https://spacex.gauravsharma.dev)
[![Product Name Screen Shot][mobile-nf-screenshot]](https://spacex.gauravsharma.dev){:height="300px" width="100px"}

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: assets/images/Landscape_Desktop.jpg
[mobile-screenshot]: assets/images/Mobile.jpg
[mobile-nf-screenshot]: assets/images/NotFoundMobile.jpg
[ipad-screenshot]: assets/images/iPad.jpg
