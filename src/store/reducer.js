import { SET_NOTELIST } from "./action";
import { DEL_NOTELIST } from "./action";

const initialState = {
    noteList: [
        [
            {id: "123e4567-e89b-12d3-a456-426614174000", text: "click to edit"},
            {id: "123e4567-e89b-12d3-a456-426614174001", text: "drag to delete"},
        ]
    ]
};

const noteReducer = (state=initialState, action) => {
    const index = action.index;
    switch(action.type){
        case SET_NOTELIST:
            if(index > state.noteList.length){
                state.noteList.push(action.payLoad)
            }else{
                state.noteList[index] = action.payLoad;
            }
            return state;
        case DEL_NOTELIST:
            state.noteList.splice(index, 1);
            return state
        default:
            return state;
    }
}

export default noteReducer;
