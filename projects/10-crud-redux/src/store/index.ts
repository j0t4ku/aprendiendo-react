import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rolbackUser } from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
	const { type, payload } = action;
	const previusState = store.getState() as RootState;
	next(action);
	//fase
	if (type === "users/deleteUserById") {
		const userIdToRemove = payload;
		const userToRemove = previusState.users.find(
			(user) => user.id === userIdToRemove,
		);
		fetch("", {
			method: "DELETE",
		})
			.then((res) => {
				if (res.ok) {
					toast.success(`Usuario ${userIdToRemove} eliminado correctamente`);
				}
				throw new Error("Error al eliminar un usuario");
			})
			.catch((err) => {
				toast.error(`Error deleting user ${userIdToRemove}`);
				if (userToRemove) store.dispatch(rolbackUser(userToRemove));
				console.log(err);
			});
	}
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
