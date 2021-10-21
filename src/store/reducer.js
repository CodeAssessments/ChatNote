import { GET_NOTELIST } from "./action";

const initialState = {
    noteList: [["click to edit", "drag to delete"]]
};

const noteReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_NOTELIST:
            return state;
        default:
            return state;
    }
}

export default noteReducer;
