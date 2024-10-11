import { SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

export function Entrance(nav: NavigateFunction) {    
    let loader = document.querySelector('.block_loader');
    loader?.classList.remove('block_loader_none');

    const applicantForm = document.getElementById('login');
    let logopass = applicantForm?.querySelectorAll('input');
    let  datalogin: Record<string, string> = {};
    logopass?.forEach((e)=> {
        let key = e.name;
        let value = e.value;
        datalogin[key] = value;
    })

    async function queriLogin(datalogin: Record<string, string>) {
        await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
            method: 'POST',
            body: JSON.stringify(datalogin),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            if (data?.accessToken) {
                localStorage.setItem('graduation_project', data?.accessToken);
                nav('/')
                window.location.reload()
            } else {
                
                alert(data?.message)
                window.location.reload()
            }
        })
    }
    queriLogin(datalogin)
}
export async function HandlerGetAccountInfo (authorized: string | undefined, setDataInfo: { (value: SetStateAction<{}>): void; (arg0: any): void; }) {
    if (!authorized) {
        return
    }
    
    let token = `Bearer ${localStorage.graduation_project}`
    await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        if (typeof(data) == 'object') {
            setDataInfo(data);
        }
    })
}
export async function SearchQueryHistograms(body: {
    issueDateInterval: { startDate: string; endDate: string; }; searchContext: {
        targetSearchEntitiesContext: {
            targetSearchEntities: {
                type: string; sparkId: null; entityId: null; inn: number; maxFullness: boolean; inBusinessNews: boolean;
            }[]; onlyMainRole: boolean; tonality: string; onlyWithRiskFactors: boolean; riskFactors: { and: never[]; or: never[]; not: never[]; }; themes: { and: never[]; or: never[]; not: never[]; };
        }; themesFilter: { and: never[]; or: never[]; not: never[]; };
    }; searchArea: {
        includedSources: never[]; excludedSources: never[];
        includedSourceGroups: never[]; excludedSourceGroups: never[];
    }; attributeFilters: {
        excludeTechNews: boolean;
        excludeAnnouncements: boolean; excludeDigests: boolean;
    }; similarMode: string; limit: number; sortType: string;
    sortDirectionType: string; intervalType: string; histogramTypes: string[];
}, setDataHistograms: unknown, setDataObject: unknown) {
    let token = `Bearer ${localStorage.graduation_project}`
    await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(async (response) => await response.json())
    .then((data) => {
      debugger
        console.log(data);
		SearchQueryObject(body)
    })
}
async function SearchQueryObject(body: {
		issueDateInterval: { startDate: string; endDate: string; }; searchContext: {
			targetSearchEntitiesContext: {
				targetSearchEntities: {
					type: string; sparkId: null; entityId: null; inn: number; maxFullness: boolean; inBusinessNews: boolean;
				}[]; onlyMainRole: boolean; tonality: string; onlyWithRiskFactors: boolean; riskFactors: { and: never[]; or: never[]; not: never[]; }; themes: { and: never[]; or: never[]; not: never[]; };
			}; themesFilter: { and: never[]; or: never[]; not: never[]; };
		}; searchArea: {
			includedSources: never[]; excludedSources: never[];
			includedSourceGroups: never[]; excludedSourceGroups: never[];
		}; attributeFilters: {
			excludeTechNews: boolean;
			excludeAnnouncements: boolean; excludeDigests: boolean;
		}; similarMode: string; limit: number; sortType: string; sortDirectionType: string; intervalType: string; histogramTypes: string[];
	}) {

	    let token = `Bearer ${localStorage.graduation_project}`
    await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch', {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(async (response) => await response.json())
    .then((data) => {
      debugger
        console.log(data);
    })
}