import {ParallaxProvider} from "react-scroll-parallax";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./pages/about-me";
import React, {useMemo, useState} from "react";
import Home from "./pages/Home";
import {useLocalStorage} from "usehooks-ts";
import {useHotkeys, useLocalStorage as putLocalStorage} from "@mantine/hooks";
import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {PageContext} from "./context/PageContext";

export function App() {
    const [colors, setColor] = useLocalStorage("primaryColor", "red");
    const [colorScheme, setColorScheme] = putLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });
    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const [page, setPage] = useState(0);
    const value = useMemo(
        () => ({ page, setPage }),
        [page]
    );
    return(
        <PageContext.Provider value={value}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{
                    colorScheme: colorScheme,
                    primaryColor: colors
                }}>
                    <ParallaxProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="/aboutme" element={<AboutMe/>}/>
                            </Routes>
                        </BrowserRouter>
                    </ParallaxProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </PageContext.Provider>
    );
}