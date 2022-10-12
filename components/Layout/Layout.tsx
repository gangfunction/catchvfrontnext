const Layout = (props: any) => {
  return (
    <>
      <body className="flex flex-col pb-60  bg-orange-50 border-orange-50 px-2 sm:px-4 py-2.5 rounded dark:bg-orange-50 text-neutral-800">
        {props.children}
      </body>
    </>
  );
};
export default Layout;
