import {areTimeboxesLoading, timeboxesReducer} from '../reducers';
//testowanie selektora
test('reTimeboxesLoading return true when state.loading is set to true', () => {
    const state = {
        loading: true
    }
    expect(areTimeboxesLoading(state)).toBe(true);
});


describe('timeboxesReducer', ()=> {
    test('adds a timebox when given a TIMEBOX_ADD action', () => {
        const state = {
            timeboxes :[]
        }
        const newTimebox = {id: "I am a new timebox"};
        expect(timeboxesReducer(state, {type: "TIMEBOX_ADD", timebox: newTimebox})).toEqual(
            {
                timeboxes: [newTimebox]
            }
        )
    });

    

});



