const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <nav className="bg-green-600 text-white">Nav Bar of authinatcation</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
