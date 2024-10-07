import BlockSlider from "./slider";
import style from "../../public/css/main.module.css";
import { Link } from "react-router-dom";

function RequestData() {
    if (localStorage.graduation_project) {
        return <Link className={style.request_data} to="/searchCounterpartyInformation" >Запросить данные</Link>
    } else {
        return <></>
    }
}

function GoToLc() {
    if (localStorage.graduation_project) {
        return <Link className={style.btn_personal_account} to='/inDevelopment'>Перейти в личный кабинет</Link>
    } else {
        return <Link className={style.btn_detailed} to='/inDevelopment'>Подробнее</Link>
    }
}


export function BlockHome() {
    const pPriceThree = {
        marginBottom: '56px'
    }
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
                        <div className={style.block_tarif_one}>
                            <p className={style.pPrice}>799 &#8381;  <del>1 200 &#8381;</del></p>
                            <p className={style.pPriceMonth}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            <div>
                                <ul className={style.ulList}>В тариф входит:
                                    <li>Безлимитная история запросов</li>
                                    <li>Безопасная сделка</li>
                                    <li>Поддержка 24/7</li>
                                </ul>
                            </div>
                            <GoToLc />
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
                        <div className={style.block_tarif_two}>
                            <p className={style.pPrice}>1 299 &#8381;  <del>2 600 &#8381;</del></p>
                            <p className={style.pPriceMonth}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                            <div>
                                <ul className={style.ulList}>В тариф входит:
                                    <li>Все пункты тарифа Beginner</li>
                                    <li>Экспорт истории</li>
                                    <li>Рекомендации по приоритетам</li>
                                </ul>
                            </div>
                            <GoToLc />
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
                        <div className={style.block_tarif_three}>
                            <p className={style.pPrice} style={pPriceThree}>2 379 &#8381;  <del>3 700 &#8381;</del></p>
                            <div>
                                <ul className={style.ulList}>В тариф входит:
                                    <li>Все пункты тарифа Pro</li>
                                    <li>Безлимитное количество запросов</li>
                                    <li>Приоритетная поддержка</li>
                                </ul>
                            </div>
                            <GoToLc />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}