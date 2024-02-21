import React, { useRef, useEffect } from "react";
import {
  ScrollView,
  Pressable,
  View,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  Dimensions,
} from "react-native";

export type NavigationTabsProps = {
  id: number;
  name: string;
};

type HorizontalScrollMenuProps = {
  items: NavigationTabsProps[];
  onPress: (index: number) => void;
  textStyle?: StyleProp<TextStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  activeButtonStyle?: StyleProp<ViewStyle>;
  activeTextColor?: string;
  textColor?: string;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  activeIndex?: number;
  style?: StyleProp<ViewStyle>;
  spaceBetween?: number;
  animated?: boolean;
  width?: number;
  height?: number;
  Item?: React.ReactNode | ((item: NavigationTabsProps) => React.ReactNode);
  ItemActive?:
    | React.ReactNode
    | ((item: NavigationTabsProps) => React.ReactNode);
  customItem?: boolean;
  align?: "center" | "start" | "end";
};

const HorizontalScrollMenu: React.FC<HorizontalScrollMenuProps> = ({
  items,
  onPress,
  textStyle = {},
  activeTextStyle = {},
  buttonStyle = {},
  activeButtonStyle = {},
  textColor = "#ffffff",
  activeTextColor = "#B02132",
  backgroundColor = "#B02132",
  activeBackgroundColor = "#fff",
  activeIndex = 0,
  style = {},
  spaceBetween = 0,
  animated = true,
  width = Dimensions.get("window").width,
  height = 20,
  Item = <></>,
  ItemActive = <></>,
  customItem = false,
  align = "start",
}) => {
  const itemWidths = useRef<number[]>(new Array(items.length).fill(0));
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (items.length > 0) {
      setTimeout(() => scrollToPosition(activeIndex, false), 100);
    }
  }, [items.length]);

  useEffect(() => {
    if (items.length > 0) {
      setTimeout(() => scrollToPosition(activeIndex, animated), 100);
    }
  }, [activeIndex]);

  const scrollToPosition = (activeIndex: number, animated: boolean) => {
    if (align === "center") {
      const x = itemWidths.current
        .slice(0, activeIndex)
        .reduce((acc, width) => acc + width, 0);
      const halfWidth = itemWidths.current[activeIndex] / 2;
      scrollViewRef.current?.scrollTo({
        x: x - width / 2 + halfWidth,
        y: 0,
        animated,
      });
    } else if (align === "end") {
      // scroll to end
      const x = itemWidths.current
        .slice(0, activeIndex)
        .reduce((acc, width) => acc + width, 0);
      scrollViewRef.current?.scrollTo({
        x: x - width + itemWidths.current[activeIndex] - spaceBetween,
        y: 0,
        animated,
      });
    } else {
      // scroll to start
      const x = itemWidths.current
        .slice(0, activeIndex)
        .reduce((acc, width) => acc + width, 0);
      scrollViewRef.current?.scrollTo({ x, y: 0, animated });
    }
  };

  const onItemLayout = (event: any, i: number) => {
    const { width } = event.nativeEvent.layout;
    itemWidths.current[i] = width + spaceBetween;
  };

  return (
    <View style={[style ? style : undefined, { width, height }]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"always"}
      >
        {items.map((item, i) => (
          <View
            style={
              align === "center"
                ? { marginHorizontal: spaceBetween / 2 }
                : { marginRight: spaceBetween }
            }
            key={item.id.toString()}
            onLayout={(event) => onItemLayout(event, i)}
          >
            {customItem === true ? (
              <Pressable
                onPress={() => {
                  onPress(i);
                }}
                style={[buttonStyle]}
              >
                {activeIndex === i
                  ? typeof ItemActive === "function"
                    ? ItemActive(item)
                    : ItemActive
                  : typeof Item === "function"
                  ? Item(item)
                  : Item}
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  onPress(i);
                }}
                style={[
                  buttonStyle,
                  activeIndex === i
                    ? { backgroundColor: activeBackgroundColor }
                    : { backgroundColor: backgroundColor },
                  activeButtonStyle && activeIndex === i
                    ? activeButtonStyle
                    : undefined,
                ]}
              >
                <Text
                  style={[
                    textStyle,
                    {
                      color:
                        activeIndex === i && activeTextColor
                          ? activeTextColor
                          : textColor,
                    },
                    activeTextStyle && activeIndex === i
                      ? activeTextStyle
                      : undefined,
                  ]}
                >
                  {item.name}
                </Text>
              </Pressable>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalScrollMenu;
