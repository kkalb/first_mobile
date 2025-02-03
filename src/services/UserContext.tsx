import moment from 'moment';
import type { Dispatch, ReactNode } from 'react';
import { createContext, useContext, useMemo, useReducer } from 'react';

export interface Token {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  expires_at: moment.Moment;
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
    token: {
      access_token: '',
      expires_in: 0,
      token_type: '',
      scope: '',
      expires_at: moment(),
    },
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
    case 'SET_TOKEN': {
      const expirationDateTimeUTC = moment()
        .add(action.payload.token.expires_in, 'seconds')
        .format('YYYY-MM-DD HH:mm:ss');

      const updatedToken = {
        ...action.payload.token,
        expires_at: expirationDateTimeUTC,
      };

      console.log(`setting token to: ${JSON.stringify(updatedToken)}`);
      return { ...state, user: { ...state.user, token: updatedToken } };
    }
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
