import {useContext} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import AuthContext from "../../../store/auth";



const MainNavigation = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);
    /** 로그아웃을 할때 백엔드로 db에 로그아웃을 전송하고,
     *  사이트에서 로그인 상태를 초기화 하는 함수
     *  */
    const logoutHandler = () => {
      /**
       * 사이트에서 상태를 로그아웃 상태로 전환*/
      authCtx.logout();
      fetch('http://localhost:8080/user/api/logout', {
        method: "POST",
        body: JSON.stringify({
          userEmail: localStorage.getItem('userEmail'),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res: any) => {
          if (res.ok) {
            router.push('/');
          }
          return (
            console.log(res)
          )
        })
        .catch((err: any) => {
          console.log(err);
          localStorage.clear();
        });
    }


    return (
      <>
        <header className=" container
         flex
         flex-wrap
         justify-between
         items-center
         mx-auto
         text-blue-500">
          <Link href="/">
            <div>
              <button>
                <img className="max-w-full
                h-48"
                     src="https://velog.velcdn.com/images/sungrok7/post/38de0e6c-f294-4924-987b-ead26844e7d8/image.png"
                     alt=""/>
              </button>
            </div>
          </Link>
          <nav className="sm:text-4xl">
            <ul className="flex flex-wrap">
              {authCtx.token && (
                <li>
                  <Link href="/service">
                    <a className="p-3
                    font-extrabold
                    tracking-tight
                    antialiased
                    hover:subpixel-antialiased
                      ">
                      Service
                    </a>
                  </Link>
                </li>
              )}
              {authCtx.token && (
                <li>
                  <Link href="/profile">
                    <a className="p-3
                     font-extrabold
                      tracking-tight
                       antialiased
                       hover:subpixel-antialiased"
                    >
                      Profile
                    </a>
                  </Link>
                </li>
              )}
              {authCtx.token && (
                <button>
                  <li>
                    <a
                      className="p-3
                        font-extrabold
                         tracking-tight
                          antialiased
                          hover:subpixel-antialiased"
                      onClick={logoutHandler}
                    >
                      Logout
                    </a>
                  </li>
                </button>
              )}
              {!authCtx.token && (
                <li>
                  <Link href="/login">
                    <a className="p-3
                     font-extrabold
                      tracking-tight
                       antialiased
                       hover:subpixel-antialiased"
                    >
                      Login
                    </a>
                  </Link>
                </li>
              )}

            </ul>
          </nav>
        </header>
      </>
    );
  }
;
export default MainNavigation;
