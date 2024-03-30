// color palettes inferno redish and purpleish, nocturnal purples and greens, aqua slush bluey, earth green and brown, shocking

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = tokens (mode) => ({
    ...(mode === 'dark'
    ? {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
          100: "#d1d6d7",
          200: "#a3aeaf",
          300: "#758588",
          400: "#475d60",
          500: "#193438",
          600: "#142a2d",
          700: "#0f1f22",
          800: "#0a1516",
          900: "#050a0b"
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        black: {
          100: "#d4d5d5",
          200: "#a8abaa",
          300: "#7d8080",
          400: "#515655",
          500: "#262c2b",
          600: "#1e2322",
          700: "#171a1a",
          800: "#0f1211",
          900: "#080909"
},
    }),
})