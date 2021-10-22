import noteReducer from '../src/store/reducer.js'

const defaultNote =
{
  noteList: [
      [
          {id: "123e4567-e89b-12d3-a456-426614174000", text: "click to edit"},
          {id: "123e4567-e89b-12d3-a456-426614174001", text: "drag to delete"},
      ]
  ]
}

const experimentNote = {noteList: []}

test('should return the initial state', () => {
  expect(noteReducer(undefined, {})).toEqual(defaultNote)
})

test('should add note to list', () => {
  let action = {
    type: "SET_NOTELIST",
    payLoad: {id: "1337", text: "leet"},
    index: 0
  }
  expect(noteReducer(experimentNote, action)).toEqual(
    {noteList: [{
      id: "1337", 
      text: "leet"
    }]}
  )
})


test('should delete note', () => {
  let action = {
    type: "DEL_NOTELIST",
    index: 0
  }
  expect(noteReducer({noteList: [[{id: 1337, text: 1337}]]}, action)).toEqual(
    {noteList: []}
  )
})


//corner cases

test('values are not type bound', () => {
  let action = {
    type: "SET_NOTELIST",
    payLoad: {id: 1337, text: 1337},
    index: 51
  }
  expect(noteReducer(experimentNote, action)).toEqual(
    {noteList: [{
      id: "1337",
      text: "leet"
    },
    {
      id: 1337,
      text: 1337
    }]}
  )
})
