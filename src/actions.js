export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        text: text
    }
}

export const toggleTodo = (id) => {
    return {
        type : "TOGGLE_TODO",
        id : id
    }
}

export const removeTodo = (id) => {
    return {
        type : "REMOVE_TODO",
        id : id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type : "SET_VISIBILITY_FILTER",
        filter : filter
    }
}