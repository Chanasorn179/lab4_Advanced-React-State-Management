// src/contexts/AuthContext.jsx
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  // ✅ เพิ่ม login/logout เข้าไปใน context value
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
