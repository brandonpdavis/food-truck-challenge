# Food Truck - San Francisco Edition

Do you love food trucks? Do you live in San Francisco? PERFECT! This app (and SDK) allow you to search by longitude and latitude and returns all food trucks with an approved permmit within a mile walking distance (technically 1600 meters, which is few meters shy of a mile but your FitBit won't know the difference). You can find a demo of the app at <http://brockneedscoffee.com.s3-website-us-east-1.amazonaws.com/>

## Getting Started

You can get started two ways, the React App that does all the things for you, or the SDK which you can bring in to your own web app to add the search functionality.

## React App

To get started with the react app change to the the `react-app` directory and run the following commands:

`npm i`

`npm run dev`

This will start a dev server on port `1234` using [parcel](https://parceljs.org/)

![](foodtruck.gif)

## SDK

If you are going to add the SDK to your app you will need to update your local `.npmrc` that is scoped to GitHub package registry and `@brockmdavis` or an account/org that has access to the repo and private package. See more about `npmrc` files [here](https://docs.npmjs.com/configuring-npm/npmrc.html).

Once that is setup simple run `npm install @brockmdavis/sfft-sdk --save`

Next add it to your project. For example:

```javascript
import { getFoodTrucks } from '@brockmdavis/sfft-sdk';
```

Then call the `getFoodTrucks` method passing long, lat, and an optional app token.

For example:

```javascript
async function requestFoodTrucks() {
  const { data } = await getFoodTrucks(long, lat);
  setFoodTrucks(data || []);
}
```
