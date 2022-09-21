import React from "react";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacers/spacer.components";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const RestaurantsContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <View style={styles.container}>
      <SearchContainer>
        <Searchbar placeholder="Search" value={""} />
      </SearchContainer>

      <RestaurantsContainer>
        <FlatList
          data={[{ name: 1 }, { name: 2 }]}
          renderItem={() => (
            <Spacer position={"bottom"} size={"xl"}>
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </RestaurantsContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
