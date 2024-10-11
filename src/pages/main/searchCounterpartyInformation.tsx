import { useState } from "react";
import style from "../../public/css/SearchCounterpartyInformation.module.css";
import Loader from "../../components/loader";
import { NavigateFunction, useNavigate } from "react-router-dom";

function HandlerSearchQuery(inn: string, numberDocuments: string, startDate: string, endDate: string, theSignMaximumCompleteness: boolean, mentionsBusinessContext: boolean, theMainRolePublication: boolean, publicationsWithRiskFactorsOnly: boolean, includeTechnicalMarketNews: boolean, includeAnnouncementsCalendars: boolean, includeNewsBulletins: boolean, navigate: NavigateFunction) {

    let body = {
        issueDateInterval: {
          "startDate": `${startDate}T00:00:00+03:00`,
          "endDate": `${endDate}T23:59:59+03:00`
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: Number(inn),
                maxFullness: theSignMaximumCompleteness,
                inBusinessNews: mentionsBusinessContext
              }
            ],
            onlyMainRole: theMainRolePublication,
            tonality: 'any',
            onlyWithRiskFactors: publicationsWithRiskFactorsOnly,
            riskFactors: {
              and: [],
              or: [],
              not: []
            },
            themes: {
              and: [],
              or: [],
              not: []
            }
          },
          themesFilter: {
            and: [],
            or: [],
            not: []
          }
        },
        searchArea: {
          includedSources: [],
          excludedSources: [],
          includedSourceGroups: [],
          excludedSourceGroups: []
        },
        attributeFilters: {
          excludeTechNews: includeTechnicalMarketNews,
          excludeAnnouncements: includeAnnouncementsCalendars,
          excludeDigests: includeNewsBulletins
        },
        similarMode: "duplicates",
        limit: Number(numberDocuments),
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: [
          "totalDocuments",
          "riskFactors"
        ]
    }
    navigate('/searchReport', {state: {body: body}})
}

export function SearchCounterpartyInformation(this: any) {
    const [ inn, setInn] =useState('');
    const [ numberDocuments, setNumberDocuments ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate] = useState('');
    const [ theSignMaximumCompleteness, setTheSignMaximumCompleteness] = useState(false);
    const [ mentionsBusinessContext, setMentionsBusinessContext ] =useState(false);
    const [ theMainRolePublication, setTheMainRolePublication ] = useState(false);
    const [ publicationsWithRiskFactorsOnly, setPublicationsWithRiskFactorsOnly ] = useState(false);
    const [ includeTechnicalMarketNews, setIncludeTechnicalMarketNews ] = useState(false);
    const [ includeAnnouncementsCalendars, setIncludeAnnouncementsCalendars ] = useState(false);
    const [ includeNewsBulletins, setIncludeNewsBulletins ] = useState(false);

    const sImg = {
        alignSelf: 'end',
        marginLeft: '70px',
    }
    const block_search = {
        display: 'flex',
        justifyContent: 'center'
    }

    function handleOnFocus(event: { currentTarget?: any; }) {
        event.currentTarget.type = 'date';
    }
    function handleOnBlur(event: { currentTarget?: any; }) {
        event.currentTarget.type = 'text';
    }
    const handleINNChange = (event: { target: { value: string; }; }) => {
        const limit = 10;
        setInn(event.target.value.slice(0, limit));
    };
    const handleNumberDocumentsChange = (event: { target: { value: string; }; }) => {
        const limit = 4;
        if (Number(event.target.value) < 1000) {
            setNumberDocuments(event.target.value.slice(0, limit));
        } else {
            setNumberDocuments('1000');
        }
    };
    const navigate: NavigateFunction = useNavigate();
    function handleBtn() {
        HandlerSearchQuery(inn, numberDocuments, startDate, endDate, theSignMaximumCompleteness, mentionsBusinessContext,
            theMainRolePublication, publicationsWithRiskFactorsOnly, includeTechnicalMarketNews, includeAnnouncementsCalendars,
            includeNewsBulletins, navigate
        );
    }



    return (
        <main style={block_search}>
            <div className={style.main}> 
                <div>
                    <h1>Найдите необходимые данные в пару кликов.</h1>
                    <p>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
                </div>
                <div className={style.block_img}>
                    <img src={process.env.PUBLIC_URL + '/Document.png'} alt="icon"/>
                    <img src={process.env.PUBLIC_URL + '/Folders.png'} alt="icon" width={140} height={68}/>
                </div>
                <form name="searchParameters" id="searchParameters" className={style.request_parameters_form}>
                    <div className={style.block_input}>
                        <label htmlFor="INN">ИНН компании *</label>
                        <input className={style.INN} type="number" name="INN" id="INN" placeholder="10 цифр"  
                            required value={inn} onChange={handleINNChange}/>
                        <label htmlFor="Tonality">Тональность</label>
                        <select className={style.tonality} name="Tonality" id="Tonality">
                            <option value="Любая">Любая</option>
                        </select>
                        <label htmlFor="">Количество документов в выдаче *</label>
                        <input className={style.NumberDocuments} type="number" name="NumberDocuments" id="NumberDocuments"  placeholder="От 1 до 1000" 
                            min={1} value={numberDocuments} required onChange={handleNumberDocumentsChange}/>
                        <label htmlFor="">Диапазон поиска *</label>
                        <div className={style.block_date}>
                            <input className={style.StartDate} type="text" name="StartDate" id="StartDate" placeholder="Дата начала" 
                                required onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={event => setStartDate(event.target.value)}/>
                            <input className={style.EndDate} type="text" name="EndDate" id="EndDate" placeholder="Дата конца" 
                                required onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={event => setEndDate(event.target.value)}/>
                        </div>
                    </div>
                    <div className={style.block_checkbox_btn}>
                        <div className={style.block_checkbox}>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="TheSignMaximumCompleteness">Признак максимальной полноты</label>
                                <input type="checkbox" name="TheSignMaximumCompleteness" id="TheSignMaximumCompleteness"  
                                onChange={event => setTheSignMaximumCompleteness(event.target.checked)}/>
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="MentionsBusinessContext">Упоминания в бизнес-контексте</label>
                                <input type="checkbox" name="MentionsBusinessContext" id="MentionsBusinessContext" 
                                onChange={event => setMentionsBusinessContext(event.target.checked)}/>
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="TheMainRolePublication">Главная роль в публикации</label>
                                <input type="checkbox" name="TheMainRolePublication" id="TheMainRolePublication" 
                                onChange={event => setTheMainRolePublication(event.target.checked)}/>
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="PublicationsWithRiskFactorsOnly">Публикации только с риск-факторами</label>
                                <input type="checkbox" name="PublicationsWithRiskFactorsOnly" id="PublicationsWithRiskFactorsOnly" 
                                onChange={event => setPublicationsWithRiskFactorsOnly(event.target.checked)}/>
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="IncludeTechnicalMarketNews">Включать технические новости рынков</label>
                                <input type="checkbox" name="IncludeTechnicalMarketNews" id="IncludeTechnicalMarketNews" 
                                onChange={event => setIncludeTechnicalMarketNews(event.target.checked)}/>
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="IncludeAnnouncementsCalendars">Включать анонсы и календари</label>
                                <input type="checkbox" name="IncludeAnnouncementsCalendars" id="IncludeAnnouncementsCalendars" 
                                onChange={event => setIncludeAnnouncementsCalendars(event.target.checked)}/>
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="IncludeNewsBulletins">Включать сводки новостей</label>
                                <input type="checkbox" name="IncludeNewsBulletins" id="IncludeNewsBulletins" 
                                onChange={event => setIncludeNewsBulletins(event.target.checked)}/>
                            </div>
                        </div>
                        <div>
                            <button type="button" className={style.btn_search} 
                            disabled={!inn || !numberDocuments || !startDate || !endDate} onClick={handleBtn}>Поиск</button>
                            <p className={style.pStyle}>* Обязательные к заполнению поля</p>
                        </div>
                    </div>
                </form>
                <img src={process.env.PUBLIC_URL + '/1171274244.png'} alt="icon" style={sImg}/>
            </div>
            <Loader />
        </main>
    )
}