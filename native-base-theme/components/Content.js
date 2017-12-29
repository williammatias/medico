import variable from "./../variables/platform";

export default (variables = variable) => {
    const contentTheme = {
        ".padder": {
            paddingTop: variables.contentVerticalPadding,
            paddingBottom: variables.contentVerticalPadding,
            paddingLeft: variables.contentHorizontalPadding,
            paddingRight: variables.contentHorizontalPadding,
        },
        flex: 1,
        backgroundColor: "transparent",
        "NativeBase.Segment": {
            borderWidth: 0,
            backgroundColor: "transparent"
        }
    };

    return contentTheme;
};
