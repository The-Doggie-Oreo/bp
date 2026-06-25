import { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [isPremium, setIsPremium] = useState(false);
  const [user, setUser] = useState(null);

  const value = useMemo(
    () => ({
      isPremium,
      setIsPremium,
      user,
      setUser,
      isAuthenticated: Boolean(user),
    }),
    [isPremium, user],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
