# MagicTabs for React Native

MagicTabs is a customizable, scrollable tab component for React Native applications. It allows for dynamic tab creation with extensive styling and alignment options.

## Features

- Dynamic tab creation from an array of items
- Customizable text, button styles for both active and inactive states
- Optional custom rendering for each tab
- Configurable alignment of tabs within the container
- Animated scrolling to active tab
- Fully typed with TypeScript for easy integration into your project

## Installation

Install `react-native-magic-tabs` using the package manager of your choice:

### npm

```bash
npm install react-native-magic-tabs
```

### yarn

```bash
yarn add react-native-magic-tabs
```

### Expo CLI

```bash
npx expo add react-native-magic-tabs
```

## Usage
```jsx
import React from 'react';
import { Dimensions, View } from 'react-native';
import MagicTabs, { MagicTabsItemsProps } from 'react-native-magic-tabs';

const App = () => {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = React.useState(6);

  const tabs: MagicTabsItemsProps[] = [
    { id: 1, name: 'Tab 1' },
    { id: 2, name: 'Tab 2' },
    // Add more tabs as needed
  ];

  const handlePress = (index: number) => {
    console.log('Selected tab:', index);
  };

  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
};

export default App;
```

## Props

Below is a table detailing the props accepted by the `MagicTabs` component, including their types and descriptions:

| Prop                 | Type                                                    | Description                                                        |
|----------------------|---------------------------------------------------------|--------------------------------------------------------------------|
| `items`              | `Array<MagicTabsItemsProps>`                            | Array of tab items. Each item should have an `id` and `name`.     |
| `onPress`            | `(index: number) => void`                               | Function called when a tab is pressed. Receives the index.        |
| `textStyle`          | `StyleProp<TextStyle>`                                  | Style object for text within tabs.                                 |
| `activeTextStyle`    | `StyleProp<TextStyle>`                                  | Style object for text within active tabs.                          |
| `buttonStyle`        | `StyleProp<ViewStyle>`                                  | Style object for the tab buttons.                                  |
| `activeButtonStyle`  | `StyleProp<ViewStyle>`                                  | Style object for active tab buttons.                               |
| `textColor`          | `string`                                                | Color of the text for inactive tabs.                               |
| `activeTextColor`    | `string`                                                | Color of the text for active tabs.                                 |
| `backgroundColor`    | `string`                                                | Background color of the tabs.                                      |
| `activeBackgroundColor` | `string`                                             | Background color of the active tab.                                |
| `activeIndex`        | `number`                                                | Index of the initially active tab.                                 |
| `style`              | `StyleProp<ViewStyle>`                                  | Style object for the tab container.                                |
| `spaceBetween`       | `number`                                                | Space between individual tabs.                                     |
| `animated`           | `boolean`                                               | Whether the scrolling to the active tab is animated.               |
| `width`              | `number`                                                | Width of the tab container. Defaults to the device's width.        |
| `height`             | `number`                                                | Height of the tab container.                                       |
| `Item`               | `React.ReactNode \| ((item: MagicTabsItemsProps) => React.ReactNode)` | Custom render function or component for tabs.                    |
| `ItemActive`         | `React.ReactNode \| ((item: MagicTabsItemsProps) => React.ReactNode)` | Custom render function or component for active tabs.              |
| `customItem`         | `boolean`                                               | Enables custom rendering for tabs.                                 |
| `align`              | `"center" \| "start" \| "end"`                          | Alignment of the tabs within the container.                        |

Use these props to customize the `MagicTabs` component according to your application's needs.


## Customizing Tabs

MagicTabs allows for extensive customization including custom render functions or components for individual tabs, adjustable spacing, alignment, and much more. Experiment with the props to create the perfect tab component for your app.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements or suggestions.

## License

This project is licensed under the MIT License.
