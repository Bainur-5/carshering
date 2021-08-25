export const baseURL = 'https://carshering-b163e-default-rtdb.asia-southeast1.firebasedatabase.app'
export const apiKy = 'AIzaSyAQ3C9GzlzXmdUWR4FguOxRqcGPXTMjo2M'
export const user = JSON.parse(localStorage.getItem('user'))
export const userUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
export const userInURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
export const API = {
    getCard: (url) =>{
        return fetch(`${baseURL}/${url}.json`)
    },
    getCardId: (url, urlId) =>{
        return fetch(`${baseURL}/${url}/${urlId}.json`)
    },
    userUp: (body) =>{
        return fetch(`${userUpURL}${apiKy}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    },
    userIn: (body) =>{
        return fetch(`${userInURL}${apiKy}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
    ,
    putUsers: (url,urlId, body) =>{
        return fetch(`${baseURL}/${url}/${urlId}.json`,{
            method: 'PUT',
            body: JSON.stringify(body)
        })

    },
    patchUsers: (url,urlId, body) =>{
        return fetch(`${baseURL}/${url}/${urlId}.json`,{
            method: 'PATCH',
            body: JSON.stringify(body)
        })

    },
    getUser: (url, urlId) =>{
        return fetch(`${baseURL}/${url}/${urlId}.json`)
    },
    putUserHisory: (url, urlId, urlHistry, urlCard, body)  =>{
        return fetch(`${baseURL}/${url}/${urlId}/${urlHistry}/${urlCard}.json`,{
            method: 'PUT',
            body: JSON.stringify(body)
        })
    },
    getUserHisory: (url, urlId,)  =>{
        return fetch(`${baseURL}/${url}/${urlId}.json`)
    }
}