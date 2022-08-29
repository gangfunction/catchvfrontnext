import {useContext} from 'react'
import AuthContext from "../../store/auth";
import Link from "next/link";
import {useRouter} from "next/router";

const MainNavigation = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn
    const logoutHandler = () => {
        authCtx.logout()
        router.reload();
    }

    return (
        <>
            <header className="m-4 container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    {isLoggedIn ? <div>
                            <button
                                className=" m-4  text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Catch V
                            </button>
                        </div> :
                        <div>
                            <button
                                className=
                                    " m-4 text-4xl font-extrabold-4xl font-extrabold tracking-tight gray-red-600 sm:text-5xl">Catch
                                V
                            </button>
                        </div>}
                </Link>
                <nav >
                    <ul className="flex flex-wrap">
                        {isLoggedIn && (
                            <li>
                                <Link href="/service">
                                    <a className="p-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                                        Service
                                    </a>
                                </Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li>
                                <Link href="/profile">
                                    <a className="p-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                                        Profile
                                    </a>
                                </Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li>
                                <a
                                    className="p-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-2xl"
                                    onClick={logoutHandler}>Logout
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>

        </>

    )
}
export default MainNavigation
