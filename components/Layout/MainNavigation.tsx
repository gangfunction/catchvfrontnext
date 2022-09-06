import {useCallback, useContext, useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import AuthContext from "../../store/auth";

const MainNavigation = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
      authCtx.logout();
      //토큰 또는 로그인 정보를 저장했다가 백엔드에 로그아웃 정보 전송
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
        <header className="m-4 container flex flex-wrap justify-between items-center mx-auto text-blue-500">
          <Link href="/">
              <div >
                <button>
                <img className="max-w-full h-48" src="https://velog.velcdn.com/images/sungrok7/post/38de0e6c-f294-4924-987b-ead26844e7d8/image.png"/>
                </button>
              </div>
          </Link>
          <nav className="sm:text-4xl">
            <ul className="flex flex-wrap">
              {authCtx.token  && (
                <li>
                  <Link href="/service">
                    <a className="p-3 font-extrabold tracking-tight  ">
                      Service
                    </a>
                  </Link>
                </li>
              )}
              { authCtx.token && (
                <li>
                  <Link href="/profile">
                    <a className="p-3  font-extrabold tracking-tight ">
                      Profile
                    </a>
                  </Link>
                </li>
              )}
              { authCtx.token&& (
                <button>
                  <li>
                    <a
                      className="p-3  font-extrabold tracking-tight "
                      onClick={logoutHandler}
                    >
                      Logout
                    </a>
                  </li>
                </button>
              )}
            </ul>
          </nav>
        </header>

      </>
    );
  }
;
export default MainNavigation;
