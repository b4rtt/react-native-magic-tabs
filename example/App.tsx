import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import MagicTabs, { MagicTabsItemsProps } from "react-native-magic-tabs";

export default function App() {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(6);

  const NavigationTabs: MagicTabsItemsProps[] = [
    {
      id: 1,
      name: "Bulbasaur",
    },
    {
      id: 2,
      name: "Ivysaur",
    },
    {
      id: 3,
      name: "Venusaur",
    },
    {
      id: 4,
      name: "Charmander",
    },
    {
      id: 5,
      name: "Charmeleon",
    },
    {
      id: 6,
      name: "Charizard",
    },
    {
      id: 7,
      name: "Squirtle",
    },
    {
      id: 8,
      name: "Wartortle",
    },
    {
      id: 9,
      name: "Blastoise",
    },
    {
      id: 10,
      name: "Caterpie",
    },
    {
      id: 11,
      name: "Metapod",
    },
    {
      id: 12,
      name: "Butterfree",
    },
    {
      id: 13,
      name: "Weedle",
    },
    {
      id: 14,
      name: "Kakuna",
    },
    {
      id: 15,
      name: "Beedrill",
    },
    {
      id: 16,
      name: "Pidgey",
    },
    {
      id: 17,
      name: "Pidgeotto",
    },
    {
      id: 18,
      name: "Pidgeot",
    },
  ];

  const onPress = (index: number) => {
    setActiveIndex(index);
    console.log("Tab pressed", index);
  };

  return (
    <View style={styles.container}>
      <MagicTabs
        items={NavigationTabs}
        onPress={onPress}
        activeIndex={activeIndex}
        style={{ marginBottom: 12 }}
        spaceBetween={8}
        animated={true}
        width={screenWidth}
        buttonStyle={{
          flex: 1,
          borderRadius: 6,
          paddingHorizontal: 12,
          paddingVertical: 7,
        }}
        activeButtonStyle={{
          flex: 1,
          borderRadius: 6,
          paddingHorizontal: 12,
          paddingVertical: 7,
        }}
        textStyle={{ fontSize: 12, fontWeight: "bold" }}
        activeTextStyle={{ fontSize: 12, fontWeight: "bold" }}
        backgroundColor={"#B02132"}
        activeBackgroundColor={"#fff"}
        textColor={"#fff"}
        activeTextColor={"#C62538"}
        height={30}
        customItem={false}
        align="center"
      />

      {/* <MagicTabs
        items={NavigationTabs}
        onPress={onPress}
        activeIndex={activeIndex}
        style={{}}
        spaceBetween={8}
        animated={true}
        width={screenWidth}
        height={62}
        customItem={true}
        Item={(item: MagicTabsItemsProps) => (
          <View
            style={{
              backgroundColor: "#B02132",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                color: "#fff",
              }}
            >
              {item.id}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}>
              MAY
            </Text>
          </View>
        )}
        ItemActive={(item: MagicTabsItemsProps) => (
          <View
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                color: "#B02132",
              }}
            >
              {item.id}
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#B02132" }}
            >
              MAY
            </Text>
          </View>
        )}
        align="center"
      /> */}

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={styles.text}>
          TabName: {NavigationTabs[activeIndex].name}
        </Text>
        <Text style={styles.text}>TabIndex: {activeIndex}</Text>
        <Text style={styles.text}>TabId: {NavigationTabs[activeIndex].id}</Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 12,
          borderRadius: 6,
          padding: 6,
        }}
      >
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${NavigationTabs[activeIndex].id}.png`,
          }}
          style={{ width: 100, height: 100, marginTop: 6 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C62538",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
