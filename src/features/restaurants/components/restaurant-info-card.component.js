import React from "react";
import styled from "styled-components/native";
import { View, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
// SVG IMPORTS
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
// COMPONENTS
import { Spacer } from "../../../components/spacers/spacer.components";
import { Text } from "../../../components/typography/text.components";
// STYLES
import {
  RatingView,
  Rating,
  OpenIcon,
  RestaurantCard,
} from "./restaurant-info-card.style";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Mister Lee Fast Food",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1628591697740-4378f154b2ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    address = "100 Random Street",
    isOpenNow = true,
    rating = 3.8,
    isClosedTemp,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="title">{name}</Text>
        <Spacer position="right" size="small">
          <RatingView>
            <Rating>
              {ratingArray.map((item, index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Rating>
            {isOpenNow && <OpenIcon xml={open} width={38} height={38} />}
          </RatingView>
        </Spacer>

        <Text variant="subtitle">{address}</Text>
      </Card.Content>
    </RestaurantCard>
  );
};
