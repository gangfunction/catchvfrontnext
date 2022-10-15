import digital_center from './assets/digital_center.png';
import facenet from './assets/facenet.png';
import layer4 from './assets/layer4.png';
import return_url from './assets/return_url.png';
import word1 from './assets/word1.png';
import word2 from './assets/word2.png';
import word3 from './assets/word3.png';
import www from './assets/www.png';


import Image from "next/image";
const Introduction = () => {

  return (
    <>
      <div>
        <div className="h-screen ">
          <div className="flex flex-row">
            <Image src={word1} alt="word1" placeholder="blur"/>
            <Image src={layer4} alt="layer4" placeholder="blur"/>
          </div>
          <div>
            <Image src={word2} alt="word2" placeholder="blur"/>
          </div>
          <div>
            <Image src={facenet} alt="facenet" placeholder="blur"/>
          </div>
          <div>
            <Image src={word3} alt="word3" placeholder="blur"/>
          </div>
          <div className="flex">
            <Image src={www} alt="www" placeholder="blur"/>
            <Image src={return_url} alt="return_url" placeholder="blur"/>
            <Image src={digital_center} alt="digital_center" placeholder="blur"/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Introduction;