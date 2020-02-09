import {Layout} from "@ui-kitten/components";
import React from "react";
import TopBarNavigation from "../components/TopBarNavigation";
import {SafeAreaView} from "react-native-safe-area-context";
import {useTranslation} from 'react-i18next';


const Home = () => {
    const {t, i18n} = useTranslation();
    return (
        <>
            <SafeAreaView>
                <Layout>
                    <TopBarNavigation title={t('home')}/>
                </Layout>
            </SafeAreaView>
        </>
    )
};

export default Home;
