import BlockSlider from "./slider";
import style from "../../public/css/main.module.css";

export function BlockMain() {
    //const newPost = {
    //    login: "sf_student10",
    //    password: "KHKfTXb"
    //}
    //fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
    //    method: 'POST',
    //    body: JSON.stringify(newPost),
    //    headers: {
    //        'Content-type': 'application/json; charset=UTF-8'
    //    }
    //})
    //.then((response)=>response.json())
    //.then((data)=>{console.log(data)})
    return (
        <main className={style.main}>
            <section className={style.section1}>
                <div>
                    <h1>сервис по поиску публикаций о компании по его ИНН</h1>
                    <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                    <button>Запросить данные</button>
                </div>
                <img src={process.env.PUBLIC_URL + '/23981.png'} alt="Picture"/>
            </section>
            <section className={style.section2}>
                <h2>Почему именно мы</h2>
                <div>
                    <BlockSlider />
                </div>
            </section>
            <img src={process.env.PUBLIC_URL + '/Group14.png'} alt=""/>
            <section className={style.section3}>
                <h2>наши тарифы</h2>
                <div className={style.blockTarif}>
                    <div className={style.level1}>
                        <div className={style.beginner}>
                            <div>
                                <h4>Beginner</h4>
                                <p>Для небольшого исследования</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/bulb.png'} alt="icon"/>
                        </div>
                        <div>
                            <p>799 &#8381;  <del>1200 &#8381;</del></p>
                        </div>
                    </div>
                    <div className={style.level1}>
                        <div className={style.pro}>
                            <div>
                                <h4>Pro</h4>
                                <p>Для HR и фрилансеров</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/darts.png'} alt="icon"/>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className={style.level1}>
                        <div className={style.business}>
                            <div>
                                <h4>Business</h4>
                                <p>Для корпоративных клиентов</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/pc.png'} alt="icon"/>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}