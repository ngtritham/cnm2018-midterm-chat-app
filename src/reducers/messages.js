const defaultState = {
    user: {
        uid: null,
        displayName: "Chat With Ghost",
        avatarUrl: "http://icons.iconarchive.com/icons/google/noto-emoji-smileys/512/10100-ghost-icon.png",
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