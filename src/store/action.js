export const SET_NOTELIST = "SET_NOTELIST"
export const DEL_NOTELIST = "DEL_NOTELIST"

export const setNoteList = (newList, index) => {
    return {
        type: SET_NOTELIST,
        payLoad: newList,
        index: index
    }
} 

export const delNoteList = (index) => {
    return {
        type: DEL_NOTELIST,
        index: index
    }
} 