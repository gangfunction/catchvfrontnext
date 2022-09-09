import MainNavigation from "../MainNavigation";
import NextNProgress from "nextjs-progressbar";

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