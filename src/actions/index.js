import constants from '../constants'

const FDAAPI = 'https://api.fda.gov/device/classification.json?'

export const fetchCategories = () => (dispatch) => {

    fetch(`${FDAAPI}count=medical_specialty_description`)
        .then(response => response.json())
        .then(
            json => {
                let res = json.results
                dispatch({
                    type: constants.FETCH_CATEGORIES,
                    payload: res
                })
            },
            error => console.log('An error occurred.', error)
        )



}

