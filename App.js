import React from 'react';
import {ApplicationProvider, IconRegistry,} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {dark, light, mapping,} from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {HomeNavigation} from "./src/navigation/HomeNavigation";
import {ThemeContext} from './ThemeContext';
import {default as appTheme} from './custom-theme.json';

const themes = {light, dark};


const App = () => {
    const [theme, setTheme] = React.useState('light');

    const currentTheme = {...themes[theme], ...appTheme};

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };



    return (
        <>
            <IconRegistry icons={EvaIconsPack}/>
                <ThemeContext.Provider value={{theme, toggleTheme}}>
                    <ApplicationProvider mapping={mapping} theme={currentTheme}>
                        <SafeAreaProvider>
                            <NavigationContainer>
                                <HomeNavigation initialRouteName="Home"/>
                            </NavigationContainer>
                        </SafeAreaProvider>
                    </ApplicationProvider>
                </ThemeContext.Provider>
        </>
    );
};

export default App;
