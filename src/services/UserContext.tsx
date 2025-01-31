import type { Dispatch, ReactNode } from 'react';
import { createContext, useContext, useMemo, useReducer } from 'react';

export interface Token {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

interface UserState {
  user: {
    token: Token;
  };
}

interface UserAction {
  type: 'GET_USER' | 'SET_TOKEN';
  payload?: {
    token: Token;
  };
}

interface UserContextType {
  state: UserState;
  dispatch: Dispatch<UserAction>;
}

const initialState: UserState = {
  user: {
    token: { access_token: '', expires_in: 0, token_type: '', scope: '' },
  },
};

const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => {},
});

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_USER':
      console.log(`getting user: ${state.user}`);
      return state;
    case 'SET_TOKEN':
      console.log(`setting token to: ${JSON.stringify(action.payload.token)}`);
      return { ...state, user: { ...state.user, token: action.payload.token } };
    default:
      return state;
  }
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
