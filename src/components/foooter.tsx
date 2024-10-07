import style from '../public/css/footer.module.css'

export function BlockFooter() {
    const colorText = {
        color: 'white'
    }
    return (
        <footer className={style.footer}>
            <div className={style.block_footer}>
                <img src={process.env.PUBLIC_URL + '/logofooter.png'} alt="logo" width={141} height={141}/>
                <div className={style.contactBlock}>
                    <div className={style.contacts}>
                        <a href='https://yandex.ru/maps/213/moscow/geo/tsvetnoy_bulvar/10050328/?ll=37.621799%2C55.770393&z=16.67' style={colorText}>г. Москва, Цветной б-р, 40</a>
                        <a style={colorText} href="tel:+7 495 771 21 11">+7 495 771 21 11</a>
                        <a style={colorText} href="mailto:info@skan.ru">info@skan.ru</a>
                    </div>
                    <p style={colorText}>Copyright. 2022</p>
                </div>
            </div>

        </footer>
    )
}