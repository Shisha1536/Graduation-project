import { useEffect, useState } from "react"
import { SearchQueryHistograms } from "../../components/requests"
import { useLocation } from "react-router-dom";
import style from "../../public/css/searchReport.module.css";
import dateformat from "dateformat";

export function SearchReport() {
    const [ totalDocuments, setTotalDocuments] = useState([]);
    const [ riskFactors, setRiskFactors] = useState([]);
    const [ dataObject, setDataObject ] = useState({})
    const [ dataDocuments, setDataDocuments ] = useState([])
    let location = useLocation();

    useEffect(() => {
        SearchQueryHistograms(location.state.body, setTotalDocuments, setRiskFactors, setDataObject, 
            setDataDocuments)
    },[])

    //const listHistograms = totalDocuments.map((item:any) => {
    //    debugger
    //    //let rF:any = riskFactors[index];
    //    return (
    //        <div>
    //            <p>{dateformat(
    //                new Date(item.issueDate),
    //                "dd/mm/yyyy"
    //                ).replace(/[/]+/g, ".")}
    //            </p>
    //            <p>{item.value}</p>
    //            
    //        </div>
    //    )
    //})

    const listItems = dataDocuments.map((item:any) => {
        const parser = new DOMParser();
        let scr
        const doc = parser.parseFromString(item.content.markup, "text/xml")
        if (doc.documentElement.childNodes[7]?.nodeValue) {
            let element = doc.documentElement.childNodes[7]?.nodeValue;
            scr = element.split('="').pop()?.slice(0,-2)  
        } else {
            scr = process.env.PUBLIC_URL + '/Zaglushka.png'
        }
        const paragraphTags = doc!.documentElement!.textContent!;
        const clearText = paragraphTags.replace(/<\/?[^>]+(>|$)/g, "");
        return (
            <div className={style.block_item}>
                <div className={style.block_item_date}>
                    <p>{dateformat(
                    new Date(item.issueDate),
                    "dd/mm/yyyy"
                    ).replace(/[/]+/g, ".")}
                    </p>
                    <p>{item.source.name}</p>
                </div>
                <img src={scr} alt=""/>
                <h4>{item.title.text}</h4>
                <p className={style.block_text}>{clearText}</p>
                <div className={style.block_item_btn}>
                    <a href={item.url} className={style.read_source} target="_blank" rel="noreferrer">Читать в источнике</a>
                    <p>{clearText.split(' ').length} слова</p>
                </div>
            </div>
        )
    })
    
    return(
        <main className={style.main}>
            <section className={style.firstSection}>
                <div>
                    <h1>ищем. скоро <br/> будут результаты</h1>
                    <p>Поиск может занять некоторое время,<br/> просим сохранять терпение.</p>
                </div>
                <img src={process.env.PUBLIC_URL + '/search.png'} alt="icon"/>
            </section>
            <section className={style.generalSummarySection}>
                <h3>общая сводка</h3>
                <p>Найдено {} вариантов</p>
                <div className={style.conteiner_slider_date}>
                    <button type="button">&#9001;</button>
                    <div className={style.block_slider_date}>
                        <div className={style.block_param}>
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <button type="button">&#9002;</button>
                </div>
            </section>
            <section className={style.documentListSection}>
                <h3>список документов</h3>
                <div className={style.block_item_articles}>
                    {listItems}
                </div>
            </section>
            <button type="button" className={style.btn_Show_More}>Показать больше</button>
        </main>
    )
}