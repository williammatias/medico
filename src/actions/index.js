import constants from '../constants'

const FDAAPI = 'https://api.fda.gov/device/classification.json?'

export const fetchCategories = () => (dispatch) => {

    fetch(`${FDAAPI}count=medical_specialty_description`)
        .then(response => response.json())
        .then(
            json => {
                let res = json.results;
                dispatch({
                    type: constants.FETCH_CATEGORIES,
                    payload: res
                })
            },
            error => console.log('An error occurred.', error)
        )
}

export const fetchDevices = (category, limit) => (dispatch) => {

    fetch(`${FDAAPI}search=medical_specialty_description:"${category}"&limit=${limit}`)
        .then(response => response.json())
        .then(
            json => {
                let res = json.results;
                dispatch({
                    type: constants.FETCH_DEVICES,
                    payload: res
                })
            },
            error => console.log('An error occurred.', error)
        )
}

export const fetchDevice = (product_code) => (dispatch) => {

    fetch(`${FDAAPI}search=product_code:"${product_code}"`)
        .then(response => response.json())
        .then(
            json => {
                let res = json.results[0];
                dispatch({
                    type: constants.FETCH_DEVICE,
                    payload: res
                })
            },
            error => console.log('An error occurred.', error)
        )
}


