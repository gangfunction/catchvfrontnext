import MainNavigation from "./MainNavigation";

const Layout = (props:any)=>{
    return(
        <>
            <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-400">
                    <main>{props.children}</main>
            </div>
        </>
    )
}
export default Layout;