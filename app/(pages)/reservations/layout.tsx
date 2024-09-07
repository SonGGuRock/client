const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className='bg-beige'>{children}</div>;
};

export default Layout;
