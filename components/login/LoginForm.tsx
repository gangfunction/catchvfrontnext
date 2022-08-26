import React, {useState, useRef, useContext} from 'react'
import AuthContext from "../../store/auth";

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const switchAuthModelHandler = () => {
        setIsLogin((prevState) => !prevState)
    }
    const authCtx = useContext(AuthContext)


    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const userEmailHandler = (e: any) => {
        setUserEmail(e.target.value)
    }
    const userPasswordHandler = (e: any) => {
        setUserPassword(e.target.value)
    }

    const emailInputRef = useRef<HTMLInputElement>(null) as any
    const passwordInputRef = useRef<HTMLInputElement>(null) as any

    const submitHandler = (event: any) => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        setIsLoading(true)
        let url
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+process.env.API_KEY
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+process.env.API_KEY
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res: any) => {
                setIsLoading(false)
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then((data: any) => {
                        const errorMessage = 'Authentication failed'
                        throw new Error(errorMessage)
                    })
                }
            })
            .then((data: any) => {
                const expirationTime = new Date((new Date().getTime() + (+data.expiresIn * 1000)))
                authCtx.login(data.idToken, expirationTime.toISOString())
                console.log(enteredEmail, enteredPassword);


            })
            .catch((err: any) => {
                alert(err.message)
            })
    }

    return (
        <>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                             <form onSubmit={submitHandler}>
                                <div className="mb-6">
                                    <input
                                        type='email'
                                        id='email'
                                        placeholder='email'
                                        ref={emailInputRef}
                                        onChange={userEmailHandler}
                                        value={userEmail}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type='password'
                                        id='password'
                                        placeholder='password'
                                        ref={passwordInputRef}
                                        onChange={userPasswordHandler}
                                        value={userPassword}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    />
                                </div>

                                <div className="text-center lg:text-left">
                                    {!isLoading && (<button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-indigo-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Submit
                                    </button>)}
                                    {isLoading && <button
                                        className="inline-block px-7 py-3 bg-indigo-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sending
                                        Signup Requests</button>}
                                    <button
                                        type='button'
                                        className="inline-block m-3 px-5 py-1 bg-white-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        onClick={switchAuthModelHandler}>
                                        {isLogin ? 'Creating new Account' : 'Login with Existing Account'}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default LoginForm
