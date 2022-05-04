import axios from "axios"

const get = ({url}) => {
    return new Promise((resolve, reject) => {
        axios({
            url
        }).then(result => {
            resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
}

export {
    get
}