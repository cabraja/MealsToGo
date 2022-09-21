import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";

export const RatingView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
  margin-top: 8px;
`;

export const Rating = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const OpenIcon = styled(SvgXml)`
  margin-top: -8px;
`;

export const RestaurantCard = styled(Card)`
  width: 100%;
`;
