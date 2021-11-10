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
        PageBackground: '#FFFFFF',
        CardBackground: '#FFFFFF',
        NavBarBackground: '#FF8C00',
        FooterBackground: '#FF8C00',
        RatingBackground: '#FF8C00',

        // Font Colours
        SiteTitle: '#000000',
        SiteTitleHover: '#FFFFFF',
        Heading: '#000000',
        HeadingHover: '#222222',
        Paragraph: '#000000',

        // Buttons
        ButtonBackground: 'gray',
        ButtonFont: '#000000',
        ButtonActive: '#000000',

        // Genre Tags
        BubbleBackground: '#000000',
        BubbleFont: '#FFFFFF'

    },
    fonts: ["sans-serif", "Poppins"],
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
