import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

export const restaurantRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) reject("No data found");

    resolve(mock);
  });
};

export const transformData = ({ results = [] }) => {
  const mappedResults = results.map((item) => {
    item.photos = item.photos.map((x) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...item,
      isOpenNow: item.opening_hours && item.opening_hours.open_now,
      isClosedTemp: item.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
