/**
 * Theme.js
 * Provides the theme for the app
 */
import React from "react";
import { ThemeProvider } from "styled-components";

// Styles
const theme = {
    colors: {
        // Backgrounds
        NavBarBackground: '#a7d2e8',
        PageBackground: '#ffffff',
        CardBackground: '#FFFFFF',
        FooterBackground: '#a7d2e8',
        RatingBackground: '#a7d2e8',

        // Font Colours
        SiteTitle: '#000000',
        SiteTitleHover: '#FFFFFF',
        Heading: '#000000',
        HeadingHover: '#222222',
        Paragraph: '#000000',
        Footer: '#FFFFFF',
        Rating: '#FFFFFF',

        // Buttons
        ButtonBackground: '#ffffff',
        ButtonBackgroundActive: '#000000',
        ButtonBackgroundHover: '#a7d2e8',
        ButtonFontColor: '#000000',
        ButtonFontColorActive: '#ffffff',
        ButtonFontColorHover: '#ffffff',

        // Genre Tags
        BubbleBackground: '#000000',
        BubbleFont: '#FFFFFF'

    },
    fonts: ["sans-serif", "Open Sans"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
