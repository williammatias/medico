import variable from "./../variables/platform";

export default (variables = variable) => {
    const tabTheme = {
        flex: 1,
        alignItems: 'center',
        backgroundColor: variable.defaultBg
    };

    return tabTheme;
};
