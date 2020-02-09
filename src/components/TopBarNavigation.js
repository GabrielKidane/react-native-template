import React from "react";
import {Icon, OverflowMenu, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {ThemeContext} from "../../ThemeContext";
import {useTranslation} from "react-i18next";

const MenuIcon = (style) => (
    <Icon {...style} name='more-vertical'/>
);

const SettingsIcon = (style) => (
    <Icon {...style} name='settings-2-outline'/>
);

const LogoutIcon = (style) => (
    <Icon {...style} name='log-out'/>
);

const ToggleOffIcon = (style) => (
    <Icon {...style} name='toggle-left-outline'/>
);

const ToggleOnIcon = (style) => (
    <Icon {...style} name='toggle-right-outline'/>
);

const TopBarNavigation = (props) => {
    const {t, i18n} = useTranslation();
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const themeContext = React.useContext(ThemeContext);

    const menuData = [
        {
            title: t('settings'),
            icon: SettingsIcon,
        },
        {
            title: t('toggleColors'),
            icon: checked ? ToggleOnIcon : ToggleOffIcon,
        },
        {
            title: t('logOut'),
            icon: LogoutIcon,
        },
    ];



    const toggleColorMode = () => {
        setChecked(!checked);
        themeContext.toggleTheme();
    };


    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const onMenuItemSelect = (index) => {
        if (index === 1) {
            toggleColorMode()
        }
        setMenuVisible(false);
    };

    const renderMenuAction = () => (
        <OverflowMenu
            visible={menuVisible}
            data={menuData}
            onSelect={onMenuItemSelect}
            onBackdropPress={toggleMenu}>
            <TopNavigationAction
                icon={MenuIcon}
                onPress={toggleMenu}
            />
        </OverflowMenu>
    );
    return (
        <TopNavigation
            title={props.title}
            alignment='center'
            rightControls={renderMenuAction()}
        />
    );
};

export default TopBarNavigation;
