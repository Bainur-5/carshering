import { API } from "./api"
import { getCardsRoute, getHistoryRoute, getUserRoute, postPutUser } from "./routes"

export const getCards = () =>{
    return API.getCard(getCardsRoute)
}
export const getCardId = (urlId) =>{
    return API.getCardId(getCardsRoute,urlId)
}
export const postUserUp = (body) =>{
    return API.userUp(body)
}
export const postUserIn = (body) =>{
    return API.userIn(body)
}
export const getUserId = (userId) =>{
    return API.getUser(getUserRoute, userId)
}
export const putUserId = (userId, body ) =>{
    return API.putUsers(postPutUser, userId, body)
}
export const patchUserId = (userId, body ) =>{
    return API.putUsers(postPutUser, userId, body)
}
export const putUserHisoryCard = (urlId, cardId, body) =>{
    return API.putUserHisory(getUserRoute, urlId,getHistoryRoute, cardId, body )
}
export const getUserHisoryCards = (urlId) =>{
    return API.getUserHisory(getUserRoute, urlId)
}