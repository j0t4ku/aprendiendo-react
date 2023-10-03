import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserId = string;

const defaultState = [
	{
		id: "1",
		name: "Juan",
		email: "juan@juan.com",
		github: "/juanito",
	},
	{
		id: "2",
		name: "Luis",
		email: "luis@luis.com",
		github: "/luis",
	},
	{
		id: "3",
		name: "Jose",
		email: "jose@jose.com",
		github: "/jose",
	},
];

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}
	return defaultState;
})();

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ id, ...action.payload });
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rolbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlredyDefined = state.find(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlredyDefined) {
				state.push(action.payload);
			}
		},
	},
});

export default userSlice.reducer;

export const { deleteUserById, addNewUser, rolbackUser } = userSlice.actions;
