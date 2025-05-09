import React, { useEffect, useRef, useState } from 'react'
import './examplesCatalog.scss'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Animations from '../../../../assets/animations';
import Link from '../../svg/Link';

const examplesData = [
    {
        id: 1,
        image: 'https://s3-alpha-sig.figma.com/img/d22a/eb82/fa07487e5ca2115908e2a4ad513bff7d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EjEGDh02A6eYTKkJv~yaPMeBoRTfar0yResDCIp5HDo6NYQv28Ci8uHElbgA~~gMuAeucbtHc-PTvzgD-VTFcXKGq3LmPDFuS3qCF-T6uxdn5uioWwZwPllRE3JxCPXmzDoMvIVKPoh7TCJ3qOKHWD9v~CcDRs8R5JDaBkzi5ufNc1Ozl4QuixsyFYLuXGNDPSStDmmHVWXoeshG~MQHA-kimFejijvSnC1-pMgTv0OfyyJCe5VTaqtZ1LNIfRZSyQHJ~KsWN7khipCcmMr8glouIQFCJpR7uezMWIirKorFXhlOEIgPg7X7--r64OJuCoIyCOU4eAGEqJPgHM3XWA__'
    },
    {
        id: 2,
        image: 'https://s3-alpha-sig.figma.com/img/ac06/449e/a7dbaa35dbfd3567254c7a19ad3dd4f8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZUTIK2e6ibeYB7P~cytu0T9~PfK0KaGQIXtkD7pN7OB3xYBIb7tgfPAD6gS~Dsgg92LwN~tq49otVwpstr91iG3BxbEJ2mhsgQC7v~xKoZ-nrgqpSdpSAvuJ1SfxlMgiuQHtwcJicy6o~FImiHHAaJOPKCTIH3p88aHY7Aq1IZS1f-5z3hl5jwMLEnrAUZGqqv~sBICmalCJqmb0fkpgsKNIx1GFblQmDUMJBqdg5hrqeKxfVLcfkA92vu97IHfqfewqKSl1s-XYLRQIMxxquPXN-PwQFugnab5wlKEAet2CEpHBRXHAsXHeEfwdivQNtLKk~UPjd9~k8SIA8SHvw__'
    },
    {
        id: 3,
        image: 'https://s3-alpha-sig.figma.com/img/3cd3/c416/9d5dd12a454e597821354a874f41a43c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7hmhO~YzsveMd1UFxK6pkzsrgID8O0cn3NSkgOUu6R8uDHURPWdc7iiruxyNikMbuRWCFL1C3LE05Qs8ry41Snc~h2iNjlDQWIwLxq-DgtPFgzofefUugqOlPGHyWEAkhXtlLKatg8uVH8CxdcD374LTcPJ6ijaat52mUzBz-0euZhY-oEeDTrQMw6PCHYVuSucoIlqW2zpbM10HKtSe573WP35xpW3wS3tnn65E9FvVraE7Gowua88ueLz9bGqG4hUMDrmPtB4ZqarYyin0DqqGCAcC1sM6MCNnKyM9IwgV5VT1sfQQ0rqsOelbf~RBn09Yj7O76Bx5etvM0QT3A__'
    },
    {
        id: 4,
        image: 'https://s3-alpha-sig.figma.com/img/d22a/eb82/fa07487e5ca2115908e2a4ad513bff7d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EjEGDh02A6eYTKkJv~yaPMeBoRTfar0yResDCIp5HDo6NYQv28Ci8uHElbgA~~gMuAeucbtHc-PTvzgD-VTFcXKGq3LmPDFuS3qCF-T6uxdn5uioWwZwPllRE3JxCPXmzDoMvIVKPoh7TCJ3qOKHWD9v~CcDRs8R5JDaBkzi5ufNc1Ozl4QuixsyFYLuXGNDPSStDmmHVWXoeshG~MQHA-kimFejijvSnC1-pMgTv0OfyyJCe5VTaqtZ1LNIfRZSyQHJ~KsWN7khipCcmMr8glouIQFCJpR7uezMWIirKorFXhlOEIgPg7X7--r64OJuCoIyCOU4eAGEqJPgHM3XWA__'
    },
    {
        id: 5,
        image: 'https://s3-alpha-sig.figma.com/img/147f/de3b/7afe4abaa88323967ee875249bf89a5c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lIhu8pHN85Gituej16~c-x4vRqCIiObH5T~y~Clqu~GlydJpKo3A~XQlpk0XcHacF8e60BBvr7qX9l6oEX3qBstwEEeny~h9MH9rJhTr~VY1lWQHuMCRfIsbM9CzlI9IugwlqOv3CI2bjRCWyYUEpSWwU4Ypk18-MOCfiKR0096dmt2LmZQjKs6~MrNg~AIB-DwtlhMS0ODR~OWVkPIdXlrMbbthS6DV2YQUe3UXGaiKIWvLSNOUZ1SyZwYx4ci0NZHUglVJPE1uxj93Nzb6-uPsDYozkIXYRHf~RIugA3WxxRIcP63pyNrpO56qvxTQdlWV1MqXTRwW6-CyVipEdQ__'
    },
]

const ExamplesCatalog:React.FC = () => {
    let [isAnimation, setIsAnimation] = useState(false)

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = (ref as React.RefObject<HTMLDivElement>).current;

        if (!section) return;

        const animations = new Animations()

        animations.transformFromBottom(section, '.examples__catalog__section .section__title')
        animations.transformToRight(section, '.examples__catalog__section .section__description')

    }, [ref]);

    return (
        <section id='examples__catalog__section' className='examples__catalog__section' ref={ref}>
            <div className='section__text__content'>
                <span className='section__title'>Каталог <span>недвижимости</span></span>
                <span className='section__description'>
                    <span className='gray__text'>У нас есть </span>
                    каталог <span className='gray__text'> к каждому объявлению на платформе. Вы можете скачать </span>
                    pdf файл, <span className='gray__text'> выбрав интересующий вас</span> объект
                </span>
            </div>


            <div className='swiper__container'>
                <Swiper
                    spaceBetween={24}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1.5, // 1 с половиной карточка на экранах до 1024px
                        },
                        1025: {
                            slidesPerView: 3.5, // 3 с половиной карточки на экранах от 1025px и выше
                        }
                    }}
                    className='swiper__wrapper'
                >
                    {examplesData.map((example) =>
                        <SwiperSlide className='example__card' key={example.id}>
                            <img className='example__image' src={example.image} alt='Example image' />
                            <a href='/catalog'
                                className={`blue__btn dekstop anim__btn ${isAnimation ? 'animate__bc' : 'animate__bc__to__default'}`}
                                onMouseOver={() => setIsAnimation(true)}
                                onMouseOut={() => setIsAnimation(false)}
                            >
                                <span className='btn__text'>
                                    Открыть каталог <Link/>
                                </span>
                                <div className='btn__link__svg'>
                                    <Link/>
                                </div>
                            </a>
                        </SwiperSlide>)}
                </Swiper>
                <a href='/catalog' className='blue__btn__container'>
                    <button type='button' className='blue__btn adaptive'>Открыть каталог</button>
                </a>
            </div>

        </section>
    )
}

export default ExamplesCatalog
