import { useState } from "react"
import { SearchQueryHistograms } from "../../components/requests"
import { useLocation } from "react-router-dom";


export function SearchReport() {
    const [ dataHistograms, setDataHistograms] = useState({});
    const [dataObject, setDataObject] = useState({})
    let location = useLocation();

    SearchQueryHistograms(location.state.body, setDataHistograms, setDataObject)
    return(
        <></>
    )
}