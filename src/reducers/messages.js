const defaultState = {
    star: false,
    user: {
        uid: null,
        displayName: "",
        avatarUrl: "",
    },
    list: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'MESSAGES_CHANGE':
            return {
                user: state.user,
                list: [...state.list, action.mess]
            }

        case 'USER_CHANGE':
            if (action.list)
                return ({
                    user: action.user,
                    list: action.list,
                })
            else
                return {
                    user: action.user,
                    list: []
                }

        default:
            return state;
    }
}