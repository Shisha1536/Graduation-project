import { useState } from "react";
import style from "../../public/css/SearchCounterpartyInformation.module.css";
import { SearchQuery } from "../../components/requests";
import Loader from "../../components/loader";
import { Form } from "react-router-dom";


type issueDateInterval = {
    startDate: string,
    endDate: string
}
type targetSearchEntities = {
    type: string,
    sparkId: null,
    entityId: null,
    inn: number,
    maxFullness: boolean,
    inBusinessNews: null
}
type riskFactors = {
    and: [],
    or: [],
    not: []
}
type targetSearchEntitiesContext = {
    targetSearchEntities: targetSearchEntities,
    onlyMainRole: boolean,
    tonality: string,
    onlyWithRiskFactors: boolean,
    riskFactors: riskFactors,
    themes: riskFactors
}
type searchContext = {
    targetSearchEntitiesContext: targetSearchEntitiesContext,
    themesFilter: riskFactors   
}
type searchArea = {
    includedSources: [],
    excludedSources: [],
    includedSourceGroups: [],
    excludedSourceGroups: []
}
type attributeFilters = {
    excludeTechNews: boolean,
    excludeAnnouncements: boolean,
    excludeDigests: boolean
}


function startDate(value: any) {
    
}

function HandlerSearchQuery() {
    let body = {}
    //debugger
    let INN = document.getElementById('INN') as HTMLInputElement | null;
    let Tonality = document.getElementById('Tonality') as HTMLElement | null;
    let NumberDocuments = document.getElementById('NumberDocuments') as HTMLInputElement | null;
    let StartDate = document.getElementById('StartDate') as HTMLInputElement | null;
    debugger
    let EndDate = document.getElementById('EndDate') as HTMLInputElement | null;
    let TheSignMaximumCompleteness = document.getElementById('TheSignMaximumCompleteness') as HTMLInputElement | null;
    let MentionsBusinessContext = document.getElementById('MentionsBusinessContext') as HTMLInputElement | null;
    let TheMainRolePublication = document.getElementById('TheMainRolePublication') as HTMLInputElement | null;
    let PublicationsWithRiskFactorsOnly = document.getElementById('PublicationsWithRiskFactorsOnly') as HTMLInputElement | null;
    let IncludeTechnicalMarketNews = document.getElementById('IncludeTechnicalMarketNews') as HTMLInputElement | null;
    let IncludeAnnouncementsCalendars = document.getElementById('IncludeAnnouncementsCalendars') as HTMLInputElement | null;
    let IncludeNewsBulletins = document.getElementById('IncludeNewsBulletins') as HTMLInputElement | null;
    
    let issueDateInterval = {
        startDate: StartDate?.value,
        endDate: EndDate?.value
    }
    let targetSearchEntities = {
        type: "company",
        sparkId: null,
        entityId: null,
        inn: INN?.value,
        maxFullness: true,
        inBusinessNews: null
    }
    let riskFactors = {
        and: [],
        or: [],
        not: []
    }
    let targetSearchEntitiesContext = {
        targetSearchEntities: targetSearchEntities,
        onlyMainRole: true,
        tonality: Tonality?.innerText,
        onlyWithRiskFactors: false,
        riskFactors: riskFactors,
        themes: riskFactors
    }
    let searchContext = {
        targetSearchEntitiesContext: targetSearchEntitiesContext,
        themesFilter: riskFactors   
    }
    let searchArea = {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: []
    }
    let attributeFilters = {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true
    }


    SearchQuery()
}

export function SearchCounterpartyInformation(this: any) {
    const [ inn, setInn] =useState('');
    const [ numberDocuments, setNumberDocuments ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate] =useState('');

    const sImg = {
        alignSelf: 'end',
        marginLeft: '70px',
    }

    function handleOnFocus(event: { currentTarget?: any; }) {
        event.currentTarget.type = 'date';
    }
    function handleOnBlur(event: { currentTarget?: any; }) {
        event.currentTarget.type = 'text';
    }

    function handleSearch(event: any) {
        let e = event.target;
    }
    const block_search = {
        display: 'flex',
        justifyContent: 'center'
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
                
                <form onSubmit={handleSearch} name="searchParameters" id="searchParameters" className={style.request_parameters_form}>
                    <div className={style.block_input}>
                        <label htmlFor="INN">ИНН компании *</label>
                        <input className={style.INN} type="number" name="INN" id="INN" placeholder="10 цифр"  
                            required value={inn} onChange={handleINNChange}/>
                        <label htmlFor="Tonality">Тональность</label>
                        <select className={style.tonality} name="Tonality" id="Tonality">
                            <option value="">Любая</option>
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
                                <input type="checkbox" name="TheSignMaximumCompleteness" id="TheSignMaximumCompleteness" />
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="MentionsBusinessContext">Упоминания в бизнес-контексте</label>
                                <input type="checkbox" name="MentionsBusinessContext" id="MentionsBusinessContext" />
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="TheMainRolePublication">Главная роль в публикации</label>
                                <input type="checkbox" name="TheMainRolePublication" id="TheMainRolePublication" />
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="PublicationsWithRiskFactorsOnly">Публикации только с риск-факторами</label>
                                <input type="checkbox" name="PublicationsWithRiskFactorsOnly" id="PublicationsWithRiskFactorsOnly" />
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="IncludeTechnicalMarketNews">Включать технические новости рынков</label>
                                <input type="checkbox" name="IncludeTechnicalMarketNews" id="IncludeTechnicalMarketNews" />
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="IncludeAnnouncementsCalendars">Включать анонсы и календари</label>
                                <input type="checkbox" name="IncludeAnnouncementsCalendars" id="IncludeAnnouncementsCalendars" />
                            </div>
                            <div className={style.block_item_checbox}>
                                <label htmlFor="IncludeNewsBulletins">Включать сводки новостей</label>
                                <input type="checkbox" name="IncludeNewsBulletins" id="IncludeNewsBulletins" />
                            </div>
                        </div>
                        <div>
                            <button type="button" className={style.btn_search} 
                            disabled={!inn || !numberDocuments || !startDate || !endDate} onClick={SearchQuery}>Поиск</button>
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