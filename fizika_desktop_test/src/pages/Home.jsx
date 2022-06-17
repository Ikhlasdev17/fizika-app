import React from 'react'

import logo from '../asstes/tuit.jpg';

const Home = () => {
  return (
      <div>
        <div className="home-container">
          <br />
            <h1>Ózbekistan Respublikası informaciyalıq texnologiyaları hám kommunikaciyaların rawajlandırıw ministrligi</h1>
            <h1>Muhammed al-Xorezmiy atındaǵı  Tashkent informaciyalıq texnologiyaları universiteti Nókis filialı</h1>
            <br />
            <div className='logo-wrap'>
            <img width={200} height={200} src={logo} alt="" />
            </div>
            <br />
            <h4>"Fizika I kursı boyınsha prezentaciyalıq multimedialı shınıǵiwlar toplamı" elektron oqıw qollanbası</h4>
            <span>Tábiyiy hám anıq pánler kafedrası</span>
            <span><b>Dúziwshi</b>: <span className='underline'>ass. S.G. Kaypnazarov</span></span>
            <br /><br />
            <br /><br /> 
            <span>Nókis - 2022</span>
        </div>
    </div>
  )
}

export default Home