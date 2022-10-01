import React, { useContext } from "react";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacers/spacer.components";
import { colors } from "../../../infrastructure/theme/colors";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";

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

const LoadingContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const RestaurantScreen = () => {
  const data = useContext(RestaurantContext);

  return (
    <View style={styles.container}>
      <SearchContainer>
        <Searchbar placeholder="Search" value={""} />
      </SearchContainer>

      <RestaurantsContainer>
        {!data.isLoading ? (
          <FlatList
            data={data.restaurants}
            renderItem={({ item }) => (
              <Spacer position={"bottom"} size={"xl"}>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
        ) : (
          <LoadingContainer>
            <ActivityIndicator
              animating={true}
              color={colors.ui.primary}
              size={50}
            />
          </LoadingContainer>
        )}
      </RestaurantsContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
