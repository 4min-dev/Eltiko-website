import React, { useEffect, useRef, useState } from 'react'
import './homePage.scss';
import StartedSection from '../../sections/startedSection/StartedSection'
import Header from '../../header/Header'
import SendRequestPopup from '../../popup/requestPopup/SendRequestPopup'
import AboutSection from '../../sections/about/AboutSection'
import ServicesSection from '../../sections/services/ServicesSection'
import CatalogSection from '../../sections/catalog/CatalogSection'
import FeedbackSection from '../../sections/feedback/FeedbackSection';
import TeamSection from '../../sections/team/TeamSection';
import ExamplesCatalog from '../../sections/examplesCatalog/ExamplesCatalog';
import ContactsSection from '../../sections/contacts/ContactsSection';
import Footer from '../../footer/Footer';
import { servicesData } from '../../../../assets/data/ServicesData';
import { catalogData } from '../../../../assets/data/CatalogData';

const HomePage: React.FC = () => {

  let [isSendRequestPopup, setRequestPopup] = useState(false)

  function handleSendRequestPopup() {
    setRequestPopup(!isSendRequestPopup)
  }

  const [activeSection, setActiveSection] = useState('');

  const startedRef = useRef<HTMLDivElement>(null)
  const catalogRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  let [activeCatalogIndex, setActiveCatalogIndex] = useState(1)
  let [activeServiceIndex, setActiveServiceIndex] = useState(1)
  let [isServiceScrolling, setIsServiceScrolling] = useState(false);
  let [isCatalogScrolling, setIsCatalogScrolling] = useState(false);

  function isMobileDevice() {
    console.log(navigator.userAgent)

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    const options = {
      root: null, // используем viewport как контейнер
      rootMargin: '0px',
      threshold: isMobileDevice() ? 0.2 : 0.5
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Обновляем активную секцию только если она изменилась
          if (entry.target.id !== activeSection) {
            setActiveSection(entry.target.id);
          }
        } else {
          // Проверяем, если мы выходим из секции, и сбрасываем активную секцию
          if (entry.target.id === activeSection) {
            setActiveSection('');
          }
        }
      });
    }, options);

    if (startedRef.current) {
      observer.observe(startedRef.current);
    }
    if (catalogRef.current) {
      observer.observe(catalogRef.current);
    }
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (startedRef.current) {
        observer.unobserve(startedRef.current);
      }
      if (catalogRef.current) {
        observer.unobserve(catalogRef.current);
      }
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, [activeSection]);

  let lastTouchY: any
  let lastTouchTime = 0; // Переменная для отслеживания времени последнего касания

  const handleScroll = (event: WheelEvent | TouchEvent) => {

    let deltaY = 0

    if (event instanceof WheelEvent) {
      deltaY = event.deltaY

    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0]
      deltaY = lastTouchY ? lastTouchY - touch.clientY : 0; // инвертируем направление
      lastTouchY = touch.clientY;
    }

    const now = Date.now();
    const isTouchEvent = event instanceof TouchEvent;

    if (isTouchEvent && (now - lastTouchTime) < 300) {
      return; // Игнорируем событие, если прошло менее 300 мс
    }
    lastTouchTime = now; // Обновляем время последнего касания

    if (activeSection === 'catalog__section') {

      if (isCatalogScrolling) return

      const section = document.getElementById('catalog__section');
      if (section) {
        const { bottom, top } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        function checkIsMobile() {
          if (isMobileDevice()) {
            return top <= 0 && bottom >= 800
          } else {
            const isSectionVisibleToBottom = top < windowHeight && bottom > 0;
            const isSectionVisibleToUp = top < windowHeight && bottom > 800;

            if (deltaY > 0) {
              return isSectionVisibleToBottom
            } else if (deltaY < 0) {
              return isSectionVisibleToUp
            }
          }
        }

        if ((activeCatalogIndex === catalogData.length && deltaY > 0) ||
          (activeCatalogIndex === 1 && activeCatalogIndex < catalogData.length && deltaY < 0) || !checkIsMobile()) {
          document.body.style.overflowY = 'auto';
        } else {
          document.body.style.overflowY = 'hidden'
        }

        if (checkIsMobile()) {

          if (deltaY > 0 && activeCatalogIndex < catalogData.length) {
            document.body.style.overflowY = 'hidden';
            setIsCatalogScrolling(true);
            setActiveCatalogIndex(prev => prev + 1);
            setTimeout(() => setIsCatalogScrolling(false), 500);
          } else if (deltaY < 0 && activeCatalogIndex > 1) {
            document.body.style.overflowY = 'hidden';
            setIsCatalogScrolling(true);
            setActiveCatalogIndex(prev => prev - 1);
            setTimeout(() => setIsCatalogScrolling(false), 500);
          }

          if (activeCatalogIndex > catalogData.length) {
            setActiveCatalogIndex(catalogData.length)
          } else if (activeCatalogIndex < 1) {
            setActiveCatalogIndex(1)
          }
        }
      }
    } else if (activeSection === 'services__section') {

      if (isServiceScrolling) return

      const section = document.getElementById('services__section');

      if (section) {
        const { bottom, top } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        function checkIsMobile() {
          if (isMobileDevice()) {
            return top <= 0 && bottom >= 0
          } else {
            const isSectionVisibleToBottom = top < windowHeight && bottom > 0;
            const isSectionVisibleToUp = top < windowHeight && bottom > 800;

            if (deltaY > 0) {
              console.log('zer')
              return isSectionVisibleToBottom
            } else if (deltaY < 0) {
              console.log('bel')
              return isSectionVisibleToUp
            }
          }
        }

        if ((activeServiceIndex === servicesData.length && deltaY > 0) ||
          (activeServiceIndex === 1 && deltaY < 0) || !checkIsMobile()) {
          document.body.style.overflowY = 'auto';
        } else {
          document.body.style.overflowY = 'hidden';
        }

        if (checkIsMobile()) {

          if ((deltaY > 0 && activeServiceIndex < servicesData.length) && (activeServiceIndex + 1 <= servicesData.length)) {
            setIsServiceScrolling(true)
            setActiveServiceIndex(prev => prev + 1);
            setTimeout(() => setIsServiceScrolling(false), 500)
          } else if (deltaY < 0 && activeServiceIndex > 1) {
            setIsServiceScrolling(true)
            setActiveServiceIndex(prev => prev - 1);
            setTimeout(() => setIsServiceScrolling(false), 500)
          }
        }
      }
    }
      if (activeSection !== 'services__section' && activeSection !== 'catalog__section') {
        document.body.style.overflowY = 'auto'
      }
    };

    useEffect(() => {
      window.addEventListener('wheel', handleScroll);
      window.addEventListener('touchstart', (event) => {
        if (event.touches.length > 0) {
          lastTouchY = event.touches[0].clientY; // Запоминаем начальную позицию касания
        }
      });
      window.addEventListener('touchmove', handleScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchstart', (event) => {
          if (event.touches.length > 0) {
            lastTouchY = event.touches[0].clientY;
          }
        });
        window.removeEventListener('touchmove', handleScroll);
      }
    }, [activeSection, activeServiceIndex, activeCatalogIndex, isServiceScrolling, isCatalogScrolling]);

    const isStartedSection = activeSection === 'started__section__main__page'

    return (
      <div className='home__page'>
        {isSendRequestPopup && <SendRequestPopup popupHandler={handleSendRequestPopup} />}
        <Header sendRequestPopupHandler={handleSendRequestPopup} isStartedSection={isStartedSection} />
        <StartedSection popupHandler={handleSendRequestPopup} ref={startedRef} />
        <AboutSection />
        <ServicesSection ref={servicesRef} servicesData={servicesData} activeIndex={activeServiceIndex} />
        <CatalogSection ref={catalogRef} catalogData={catalogData} activeIndex={activeCatalogIndex} />
        <FeedbackSection />
        <TeamSection />
        <ExamplesCatalog />
        <ContactsSection sendRequestPopupHandler={handleSendRequestPopup} />
        <Footer isAnimated={true} />
      </div>
    )
  }

  export default HomePage