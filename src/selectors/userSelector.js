export const userListSelector = (state) => state.userList.users

export const currentUserSelector = (state) => state.userList.currentUser

export const authorUserSelector = (state) => state.userList.authorUser

export const isLoggedInSelector = (state) => state.userList.isLoggedIn

export const accessTokenSelector = (state) => state.userList.accessToken

export const loginErrorSelector = (state) => state.userList.loginError

export const registerErrorSelector = (state) => state.userList.registerError

export const registerSuccessSelector = (state) => state.userList.registerSuccess

export const pendingSelector = (state) => state.userList.isPending
