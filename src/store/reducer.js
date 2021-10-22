import { SET_NOTELIST } from "./action";
import { DEL_NOTELIST } from "./action";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    noteList: [
        [
            {id: uuidv4(), text: "click to edit"},
            {id: uuidv4(), text: "drag to delete"},
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
            state.noteList = state.noteList.splice(index, 1);
            return state
        default:
            return state;
    }
}

export default noteReducer;
