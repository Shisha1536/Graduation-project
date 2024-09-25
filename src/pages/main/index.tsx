import BlockSlider from "./slider";
import style from "../../public/css/main.module.css";
import { Link } from "react-router-dom";
import { getCookie } from "typescript-cookie";

function RequestData() {
    let accessToken: string | undefined = getCookie('graduation-project');
    if (typeof(accessToken) == "string") {
        return <Link className={style.request_data} to="/searchCounterpartyInformation" >Запросить данные</Link>
    } else {
        return <></>
    }
}


export function BlockHome() {
    return (
        <main className={style.main}>
                        <section className={style.section1}>
                <div>
                    <h1>сервис по поиску публикаций о компании по его ИНН</h1>
                    <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                    <RequestData />
                </div>
                <img src={process.env.PUBLIC_URL + '/23981.png'} alt=""/>
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