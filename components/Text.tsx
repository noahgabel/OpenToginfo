import React from "react";
import { Text as RNText, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  weight?: number;
  fontSize?: number;
  children: React.ReactNode;
}

const Text: React.FC<CustomTextProps> = ({ weight = 400, style, ...props }) => {
  const fontFamilies: { [key: number]: string } = {
    300: "SpaceGrotesk-Light",
    400: "SpaceGrotesk-Regular",
    500: "SpaceGrotesk-Medium",
    600: "SpaceGrotesk-SemiBold",
    700: "SpaceGrotesk-Bold",
  };

  const fontFamily = fontFamilies[weight] || "SpaceGrotesk-Regular";

  return (
    <RNText
      {...props}
      style={[style, { fontFamily, fontSize: props.fontSize, color: "white" }]}
    >
      {props.children}
    </RNText>
  );
};

export default Text;
