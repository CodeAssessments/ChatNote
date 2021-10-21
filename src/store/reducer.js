import { GET_NOTELIST } from "./action";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    noteList: [
        [
            {id: uuidv4(), text: "click to edit"},
            {id: uuidv4(), text: "drag to delete"}
        ]
    ]
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
