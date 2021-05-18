// Action Creator
export function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        data: person
    }
}

// Action Creator
export function removePerson(person) {
    return {
        type: 'REMOVE_PERSON',
        data: person
    }
}