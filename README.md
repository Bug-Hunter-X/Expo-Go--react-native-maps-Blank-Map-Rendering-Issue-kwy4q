# Expo Go: react-native-maps Blank Map Rendering Issue

This repository demonstrates a bug where react-native-maps fails to render a map within the Expo Go app. The map area remains blank despite correct API key setup and other configurations.

## Bug Reproduction Steps

1. Clone this repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the app using `expo start`.
4. Open the app in Expo Go.
5. Observe the blank space where the map should be rendered.

## Solution

The solution involves using a different map provider, in this instance replacing react-native-maps with react-native-maps-directions, which generally exhibits better compatibility with Expo Go.

## Additional Notes

This bug might be related to specific versions of Expo Go, react-native-maps, and/or their underlying dependencies.  Ensuring that all packages are updated to their latest versions is recommended, but in this case a library change was necessary to remedy the problem.