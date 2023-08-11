import {
  ButtonStylesNames,
  CSSObject,
  ColorScheme,
  ColorSchemeProvider,
  ContextStylesParams,
  MantineProvider,
  MantineTheme,
} from "@mantine/core";
import React from "react";

const getColor = (theme: any, variant: string) => {
  return typeof theme.other[variant] === "string"
    ? theme.other[variant]
    : theme.other[variant]?.[theme.colorScheme];
};
function MantineConfig({
  children,
  colorScheme,
  toggleColorScheme,
}: {
  children: React.ReactNode;
  colorScheme: ColorScheme;
  toggleColorScheme: (value?: ColorScheme) => void;
}) {
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          other: {
            "metallic-silver": {
              light: "#A6ACB8",
              dark: "#FFFFFF",
            },

            black: "#000000",

            "cetacean-blue": {
              light: "#18014A",
              dark: "#ffffff",
            },
            crayola: "#303540",
            primary: "#ffffff",
            "pastel-blue": "#B3C0D3",
            "yellow-green": "#91C039",
            "rich-black": "#040815",
            "electric-blue": "#596780",

            "sonic-silver": { light: "#757575", dark: "#FFFFFF" },

            arsenic: {
              light: "#191635",
              dark: "#FFFFFF",
            },
            gray: "#7C7C82",
            "dark-gunmetal": "#191635",
            argent: {
              light: "#C1C0C0",
              dark: "#ffffff",
            },
          },
          components: {
            Text: {
              sizes: {
                xxs: (theme, params, { variant }) => ({
                  root: {
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    color: getColor(theme, variant as string),
                  },
                }),
                base: (theme, params, { variant }) => ({
                  root: {
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "-2%",
                    color: getColor(theme, variant as string),
                  },
                }),
                smd: (theme, params, { variant }) => ({
                  root: {
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "1.6875rem",
                    color: getColor(theme, variant as string),
                  },
                }),
                md: (theme, params, { variant }) => ({
                  root: {
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    letterSpacing: "-2%",
                    color: getColor(theme, variant as string),
                  },
                }),
                lg: (theme, params, { variant }) => ({
                  root: {
                    fontSize: "24px",
                    fontWeight: 800,
                    lineHeight: "normal",
                    color: getColor(theme, variant as string),
                  },
                }),
                bg: (theme, params, { variant }) => ({
                  root: {
                    fontSize: "clamp(28px,2.2vw,35px)",
                    fontWeight: 700,
                    letterSpacing: "-2px",
                    lineHeight: "52px",
                    color: getColor(theme, variant as string),
                  },
                }),
                secondary: (theme) => ({
                  root: {
                    fontSize: "1.75rem",
                    height: "5rem",
                    padding: theme.spacing.xl,
                  },
                }),
              },
            },
            Flex: {
              styles: {
                sm: {
                  gap: "8px",
                },
              },
            },
            Button: {
              variants: {
                default: (
                  theme: MantineTheme,
                  params: any,
                  context: ContextStylesParams
                ): Partial<Record<ButtonStylesNames, CSSObject>> => ({
                  root: {
                    backgroundColor: "black",
                    outline: "none",
                    color: "white",
                    width: "clamp(90,8vw,125px)",
                    height: 52,
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#61677F",
                    },
                  },
                }),
                secondary: (
                  theme: MantineTheme,
                  params: any,
                  context: ContextStylesParams
                ): Partial<Record<ButtonStylesNames, CSSObject>> => ({
                  root: {
                    backgroundColor: "#18014A",
                    color: "white",
                    width: "clamp(90,8vw,125px)",
                    height: 52,
                    borderRadius: "10px",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  },
                }),
              },
            },

            Box: {
              styles: (theme, params, { variant }) => ({
                header: {
                  background: theme.other[variant as string] || "white",
                },
              }),
            },
          },
        }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MantineConfig;