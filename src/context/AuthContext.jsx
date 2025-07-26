import { createContext, useState, useEffect } from "react";

// 1. Context create 
export const AuthContext = createContext();

// 2. AuthProvider component that wrap every children 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // initially user null

  // 3. Simulate login 
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // persistence
  };

  // 4. Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // 5. App start render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 6. Context value provide
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
