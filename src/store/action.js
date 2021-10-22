export const SET_NOTELIST = "SET_NOTELIST"

export const setNoteList = (newList, index) => {
    return {
        type: SET_NOTELIST,
        payLoad: newList,
        index: index
    }
} 