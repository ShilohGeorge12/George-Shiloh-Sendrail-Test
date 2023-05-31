import { createContext, useReducer, useContext, ReactNode } from 'react';

const initState: Icontext = {
	modal: false,
};
const context = createContext({
	state: initState,
	dispatch: (val: Taction) => {},
});

function reducer(state: Icontext, action: Taction) {
	switch (action.type) {
		case 'modalOpen':
			return { ...state, modal: true };
		case 'modalClose':
			return { ...state, modal: false };
		default:
			return state;
	}
}

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initState);
	return (<context.Provider value={{ state, dispatch }}>{children}</context.Provider>);
};

const useContextApi = () => useContext(context);

export default useContextApi;
