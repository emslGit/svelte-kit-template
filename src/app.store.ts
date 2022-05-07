import { writable } from 'svelte/store';

export enum Status {
	INITIAL,
	LOADING,
	SUCCESS,
	FAILED
}

function createStatus() {
	const { subscribe, set, update } = writable(Status.INITIAL);

	return {
		subscribe,
		setLoading: () => set(Status.LOADING),
		setSuccess: () => set(Status.SUCCESS),
		setFailed: () => set(Status.FAILED),
		reset: () => set(Status.INITIAL)
	};
}

export const status = createStatus();