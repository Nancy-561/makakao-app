export const AuthLayout = ({ children }) => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="relative">
        <img src="/logo512.png" alt="react logo" />
      </div>
      {children}
    </main>
  );
}
