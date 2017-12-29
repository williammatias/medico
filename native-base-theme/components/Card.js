import variable from "./../variables/platform";
import {Dimensions} from 'react-native';

export default (variables = variable) => {
    const cardTheme = {
        ".transparent": {
            shadowColor: null,
            shadowOffset: null,
            shadowOpacity: null,
            shadowRadius: null,
            elevation: null
        },
        marginVertical: 5,
        marginHorizontal: 2,
        borderWidth: variables.borderWidth,
        borderColor: variables.cardBorderColor,
        backgroundColor: variables.cardDefaultBg,
        borderRadius: 5,
        shadowColor: variables.cardDefaultShadowBg,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 3,
        elevation: 1,
        shadowOpacity: 0.5,
    };

    return cardTheme;
};
