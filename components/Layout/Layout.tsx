const Layout = (props: any) => {
  return (
    <>
      <div className="h-screen bg-orange-50 border-orange-50 px-2 sm:px-4 py-2.5 rounded dark:bg-orange-50 text-neutral-800">
        <main>{props.children}</main>
      </div>
    </>
  );
};
export default Layout;
