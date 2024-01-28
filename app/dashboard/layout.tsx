const DashBoradLayout = ({ children }: { childern: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-orange-500 text-white">Nav bar component</nav>
      {children}
    </div>
  );
};

export default DashBoradLayout;
