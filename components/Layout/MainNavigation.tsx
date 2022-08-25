import {useContext} from 'react'
import AuthContext from "../../store/auth";
import Link from "next/link";
import { Router } from 'react-router-dom';
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
                    <button className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Catch V
                    </button>
                </Link>
                <nav>
                    <ul className="flex flex-wrap">
                        {!isLoggedIn && (
                            <li>
                                <Link href="/login">
                                    <a className="p-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                                        Login
                                    </a>
                                </Link>
                            </li>
                        )}
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
                                <Link href="/new-profile">
                                    <a className="p-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                                        Profile
                                    </a>
                                </Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li>
                                <button
                                    className="p-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-2xl"
                                    onClick={logoutHandler}>Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>

        </>

    )
}
export default MainNavigation
