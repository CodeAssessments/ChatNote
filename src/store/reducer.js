import { SET_NOTELIST } from "./action";
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
    switch(action.type){
        case SET_NOTELIST:
            const index = action.index;
            if(index > state.noteList.length){
                state.noteList.push(action.payLoad)
            }else{
                state.noteList[index] = action.payLoad;
            }
            return state;
        default:
            return state;
    }
}

export default noteReducer;
