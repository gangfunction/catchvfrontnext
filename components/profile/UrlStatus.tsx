import Piechart from "./chart/Piechart";

const UrlStatus =()=>{
  return(
    <>
    <section>
      UrlSection
      <div >

        <div className="flex justify-between h-20 border-2 border-emerald-500">
          <div>url list1</div>
          <div><Piechart/></div>
        </div>
        <p>url list2</p>
        <p>url list3</p>
        <p>url list4</p>
        <p>url list5</p>
        <p>url list6</p>
        <p>url list7</p>
        <p>url list8</p>
        <p>url list9</p>
        <p>url list10</p>
      </div>

    </section>
    </>
  )
}
export default UrlStatus;