import '../public/css/loader.css'

export default function Loader() {
    return(
        <div className="block_loader block_loader_none">
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}