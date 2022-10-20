import NextNProgress from "nextjs-progressbar";
import MainNavigation from "../MainNavigation/MainNavigation";

const Header = ()=>{
  return(
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={7}
        showOnShallow={true}
      />
    <MainNavigation/>
    </>
  )

}
export default Header;