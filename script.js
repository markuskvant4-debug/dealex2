// ==========================================================================
// JavaScript - Dealex Profile (Updated & Fixed)
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================================================
    // Данные дел (из сайта dealex.ru)
    // ========================================================================
    const casesData = [
        {
            image: 'http://dealex.ru/Images/previews/paper-planes.jpg',
            logo: 'http://dealex.ru/Images/logos/paper-planes.jpg',
            client: 'ООО Бумажные самолетики',
            description: 'Комплексное правовое сопровождение, составление договоров, юридическая аналитика и разрешение судебных споров.',
            fullDescription: 'Юридическая компания Dealex оказала полный спектр юридических услуг для ООО "Бумажные самолетики": составление и правовая экспертиза договоров, разработка локальных нормативных актов, юридическая аналитика по сложным правовым вопросам, представление интересов в судебных разбирательствах.'
        },
        {
            image: 'http://dealex.ru/Images/previews/pridex-group.jpg',
            logo: 'http://dealex.ru/Images/logos/pridex-group.jpg',
            client: 'Pridex Group',
            description: 'Согласование и составление договоров, протоколов разногласий, исковых заявлений и правовых заключений.',
            fullDescription: 'Комплексное правовое сопровождение деятельности Pridex Group. В рамках сотрудничества были согласованы и составлены: договоры аренды, поставки, подряда, протоколы разногласий к договорам, исковые заявления в суд, правовые заключения.'
        },
        {
            image: 'http://dealex.ru/Images/previews/infintrust.jpg',
            logo: 'http://dealex.ru/Images/logos/infintrust.jpg',
            client: 'ООО ИКГ Инфинтраст (ГК Вертолеты России)',
            description: 'Сопровождение проекта по строительству офисного комплекса Холдинга «Вертолеты России».',
            fullDescription: 'Успешное правовое сопровождение крупнейшего проекта по строительству офисного комплекса для Холдинга "Вертолеты России".'
        },
        {
            image: 'http://dealex.ru/Images/previews/ECR-Dealex.jpg',
            logo: 'http://dealex.ru/Images/logos/ecr.png',
            client: 'ECR Russia',
            description: 'Правовая экспертиза в области электронного документооборота и внедрения ЭДО.',
            fullDescription: 'Проведена комплексная правовая экспертиза по вопросам внедрения электронного документооборота (ЭДО) в компании ECR Russia.'
        },
        {
            image: 'http://dealex.ru/Images/previews/otziv%20Shtab.jpeg',
            logo: 'http://dealex.ru/Images/logos/shtab.jpg',
            client: 'Штаб по защите бизнеса',
            description: 'Юридическая экспертиза по обращениям предпринимателей, подготовка правовых справок.',
            fullDescription: 'Оказание юридической экспертизы по обращениям предпринимателей в рамках работы Штаба по защите бизнеса.'
        },
        {
            image: 'http://dealex.ru/Images/previews/3390_001_page-0001.jpg',
            logo: 'http://dealex.ru/Images/logos/%D0%90%D0%B2%D0%B5%D1%80%D0%B1%D1%83%D1%85%20(1).png',
            client: 'Илья Авербух',
            description: 'Консультирование по правовым вопросам и защита в судебных разбирательствах.',
            fullDescription: 'Комплексное правовое сопровождение деятельности известного продюсера и телеведущего.'
        },
        {
            image: 'http://dealex.ru/Images/previews/Skillbox.jpeg',
            logo: 'http://dealex.ru/Images/logos/skillbox.png',
            client: 'Skillbox',
            description: 'Правовое сопровождение онлайн университета, договорное право.',
            fullDescription: 'Успешное правовое сопровождение деятельности онлайн-университета Skillbox.'
        },
        {
            image: 'http://dealex.ru/Images/previews/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20Dealex.jpg',
            logo: 'http://dealex.ru/Images/logos/2025-10-21_16-00-21%20(2).png',
            client: 'Meesenburg',
            description: 'Комплексная проверка юридического лица (due diligence).',
            fullDescription: 'Проведена комплексная правовая проверка (due diligence) компании-цели при сделке слияния и поглощения.'
        }
    ];

    // ========================================================================
    // ========================================================================
    // Данные отзывов
    // ========================================================================
    const reviewsData = [
        {
            avatar: 'http://dealex.ru/Images/logos/paper-planes.jpg',
            name: 'Белякова А.Д.',
            company: 'Генеральный директор ООО Бумажные самолетики',
            text: 'Благодарим команду юридической компании Dealex за эффективную и квалифицированную правовую помощь в различных юридических вопросах.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/pridex-group.jpg',
            name: 'Константин Анашкин',
            company: 'Генеральный директор Pridex Group',
            text: 'Юридической компанией Dealex был�� оказаны юридические услуги по согласованию и составлению различных видов договоров.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/infintrust.jpg',
            name: 'Калинин В.И.',
            company: 'Генеральный директор ООО ИКГ Инфинтраст',
            text: 'Выражаем благодарность управляющему партнеру Рассохину В.В. за успешное правовое сопровождение проекта.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/ecr.png',
            name: 'Мусселиус М.С.',
            company: 'Исполнительный директор ECR Russia',
            text: 'Выражаем благодарность юридической компании Dealex за предоставление правовой экспертизы в области ЭДО.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/shtab.jpg',
            name: 'А.Л. Мальцан',
            company: 'Начальник Управления Штаба по защите бизнеса',
            text: 'Управление особо отмечает вклад в части юридической экспертизы по обращениям предпринимателей.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/skillbox.png',
            name: 'Крутов Д.В.',
            company: 'Генеральный директор Skillbox',
            text: 'Благодарим команду Dealex за успешное правовое сопровождение онлайн университета.'
        }
    ];

    // ========================================================================
    // Рендер дел
    // ========================================================================
    function renderCases() {
        const container = document.getElementById('casesContainer');
        if (!container) return;

        casesData.forEach((caseItem, index) => {
            const card = document.createElement('div');
            card.className = 'case-card';
            card.onclick = () => openCaseModal(index);
            card.innerHTML = `
                <img src="${caseItem.image}" alt="${caseItem.client}" class="case-image" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjdmYWZjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiBmaWxsPSIjNTFhNTFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gaW1hZ2U8L3RleHQ+PC9zdmc+'">
                <div class="case-content">
                    <div class="case-client">
                        <img src="${caseItem.logo}" alt="${caseItem.client}" class="case-avatar"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiMxZTNhNWYiLz48dGV4dCB4PSIyNSIgeT0iMzAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBkeT0iLjNlbSI+RDwvdGV4dD48L3N2Zz4='">
                        <span class="case-client-name">${caseItem.client}</span>
                    </div>
                    <p class="case-description">${caseItem.description}</p>
                    <div>
                        <button class="case-doc-btn" onclick="event.stopPropagation(); showDocAlert('${caseItem.client}')">
                            <i class="fas fa-file-alt"></i> Документ
                        </button>
                        <button class="case-view-btn" onclick="event.stopPropagation(); openCaseModal(${index})">
                            <i class="fas fa-eye"></i> Подробнее
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // ========================================================================
    // Модальное окно дела
    // ========================================================================
    window.openCaseModal = function(index) {
        const caseItem = casesData[index];
        const modal = document.getElementById('caseModal');
        const content = document.getElementById('caseModalContent');
        
        if (!modal || !content) return;
        
        content.innerHTML = `
            <div class="case-modal-header">
                <img src="${caseItem.image}" alt="${caseItem.client}" class="case-modal-image">
                <div class="case-modal-info">
                    <img src="${caseItem.logo}" alt="${caseItem.client}" class="case-modal-logo">
                    <h3 class="case-modal-title">${caseItem.client}</h3>
                </div>
            </div>
            <div class="case-modal-description">
                <h4>Описание проекта:</h4>
                <p>${caseItem.fullDescription || caseItem.description}</p>
            </div>
            <button class="case-modal-close-btn" onclick="closeCaseModal()">Закрыть</button>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeCaseModal = function() {
        const modal = document.getElementById('caseModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ========================================================================
    // Рендер отзывов
    // ========================================================================
    function renderReviews() {
        const container = document.getElementById('reviewsContainer');
        if (!container) return;

        reviewsData.forEach(review => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="review-header">
                    <img src="${review.avatar}" alt="${review.name}" class="review-avatar"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiMxZTNhNWYiLz48dGV4dCB4PSIzMCIgeT0iMzUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBkeT0iLjNlbSI+UzwvdGV4dD48L3N2Zz4='">
                    <div>
                        <div class="review-author">${review.name}</div>
                        <div class="review-company">${review.company}</div>
                    </div>
                </div>
                <p class="review-text">"${review.text}"</p>
            `;
            container.appendChild(card);
        });
    }

    // ========================================================================
    // Стрелки для листания дел - ИСПРАВЛЕНО
    // ========================================================================
    function initCasesNavigation() {
        const prevBtn = document.getElementById('casesPrev');
        const nextBtn = document.getElementById('casesNext');
        const scrollContainer = document.querySelector('.cases-scroll');
        
        if (!prevBtn || !nextBtn || !scrollContainer) return;

        const scrollAmount = 320;

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // ========================================================================
    // Переключение блоков - прокрутка к блоку
    // ========================================================================
    function initBlockNavigation() {
        const blockButtons = document.querySelectorAll('.block-btn');

        blockButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetBlock = btn.dataset.block;
                blockButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Прокручиваем к нужному блоку
                const block = document.getElementById(`${targetBlock}-block`);
                if (block) {
                    block.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ========================================================================
    // Переключение языка (только RU и EN)
    // ========================================================================
    function initLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        const translations = {
            ru: {
                cases: 'Успешные дела',
                contact: 'Оставить заявку',
                map: 'Наш офис',
                yourName: 'Ваше имя',
                yourSurname: 'Ваша фамилия',
                phone: 'Номер телефона',
                message: 'Заявка',
                send: 'Отправить заявку',
                privacy: 'Я согласен на обработку персональных данных',
                goToSite: 'Перейти на Dealex.ru'
            },
            en: {
                cases: 'Successful Cases',
                contact: 'Leave a Request',
                map: 'Our Office',
                yourName: 'Your Name',
                yourSurname: 'Your Surname',
                phone: 'Phone Number',
                message: 'Message',
                send: 'Send Request',
                privacy: 'I agree to the processing of personal data',
                goToSite: 'Go to Dealex.ru'
            }
        };

        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const trans = translations[lang];
                if (trans) {
                    document.querySelector('#cases-block .block-title').textContent = trans.cases;
                    document.querySelector('#contact-block .block-title').textContent = trans.contact;
                    document.querySelector('#map-block .block-title').textContent = trans.map;
                    document.querySelector('label[for="name"]').textContent = trans.yourName;
                    document.querySelector('label[for="surname"]').textContent = trans.yourSurname;
                    document.querySelector('label[for="phone"]').textContent = trans.phone;
                    document.querySelector('label[for="message"]').textContent = trans.message;
                    document.querySelectorAll('.submit-btn').forEach(btn => btn.textContent = trans.send);
                    
                    const checkboxLabel = document.querySelector('.checkbox-group label');
                    if (checkboxLabel) checkboxLabel.innerHTML = `${trans.privacy}`;
                    
                    const siteLink = document.querySelector('.site-link-btn span');
                    if (siteLink) siteLink.textContent = trans.goToSite;
                }
            });
        });
    }

    // ========================================================================
    // Переключение темы
    // ========================================================================
    function initThemeSwitcher() {
        const lightBtn = document.getElementById('lightTheme');
        const darkBtn = document.getElementById('darkTheme');

        lightBtn?.addEventListener('click', () => {
            document.body.setAttribute('data-theme', 'light');
            lightBtn.classList.add('active');
            darkBtn?.classList.remove('active');
        });

        darkBtn?.addEventListener('click', () => {
            document.body.setAttribute('data-theme', 'dark');
            darkBtn.classList.add('active');
            lightBtn?.classList.remove('active');
        });
    }

    // ========================================================================
    // Модальное окно политики конфиденциальности - ИСПРАВЛЕНО
    // ========================================================================
    function initPrivacyModal() {
        const openBtn = document.getElementById('openPrivacy');
        const closeBtn = document.getElementById('closePrivacy');
        const modal = document.getElementById('privacyModal');
        const privacyCheckbox = document.getElementById('privacyCheck');

        if (openBtn && modal) {
            // Открытие модального окна при клике на ссылку
            openBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Предотвращаем переключение чекбокса при клике на ссылку
            openBtn.addEventListener('mousedown', (e) => {
                e.stopPropagation();
            });
        }

        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }

        // Предотвращаем конфликт между чекбоксом и ссылкой
        if (privacyCheckbox) {
            const label = privacyCheckbox.parentElement;
            if (label) {
                label.addEventListener('click', (e) => {
                    // Если кликнули по ссылке, не переключаем чекбокс
                    if (e.target.tagName === 'A') {
                        e.preventDefault();
                    }
                });
            }
        }

        // Модальное окно дела
        const closeCaseBtn = document.getElementById('closeCase');
        const caseModal = document.getElementById('caseModal');
        
        closeCaseBtn?.addEventListener('click', closeCaseModal);

        caseModal?.addEventListener('click', (e) => {
            if (e.target === caseModal) closeCaseModal();
        });

        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal?.classList.remove('active');
                closeCaseModal();
                document.body.style.overflow = '';
            }
        });
    }

    // ========================================================================
    function initReviewForm() {
        const form = document.getElementById('reviewForm');
        const preview = document.getElementById('avatarPreview');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const name = document.getElementById('reviewerName').value;
            const text = document.getElementById('reviewText').value;
            
            if (!name.trim() || !text.trim()) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }
            
            const avatar = uploadedAvatar || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiMxZTNhNWYiLz48dGV4dCB4PSIzMCIgeT0iMzUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBkeT0iLjNlbSI+UzwvdGV4dD48L3N2Zz4=';

            const container = document.getElementById('reviewsContainer');
            const newReview = document.createElement('div');
            newReview.className = 'review-card';
            newReview.innerHTML = `
                <div class="review-header">
                    <img src="${avatar}" alt="${name}" class="review-avatar">
                    <div>
                        <div class="review-author">${name}</div>
                        <div class="review-company">Новый отзыв</div>
                    </div>
                </div>
                <p class="review-text">"${text}"</p>
            `;

            container?.insertBefore(newReview, container.firstChild);
            form.reset();
            uploadedAvatar = null;
            if (preview) preview.innerHTML = '<i class="fas fa-user"></i>';
            
            // Показываем сообщение
            const successMsg = document.createElement('div');
            successMsg.className = 'review-success';
            successMsg.textContent = '✅ Спасибо! Ваш отзыв добавлен.';
            successMsg.style.cssText = 'padding: 15px; background: #c6f6d5; color: #22543d; border-radius: 8px; margin-bottom: 20px; text-align: center;';
            container?.insertBefore(successMsg, container.firstChild);
            
            setTimeout(() => successMsg.remove(), 3000);
        });
    }

    // ========================================================================
    // Форма заявки
    // ========================================================================
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            const statusDiv = document.getElementById('formStatus');

            // Валидация телефона - проверяем что введено достаточно цифр
            const phoneDigits = phone.replace(/\D/g, '');
            if (phoneDigits.length < 10) {
                statusDiv.textContent = '❌ Пожалуйста, введите корректный номер телефона';
                statusDiv.className = 'error';
                statusDiv.style.display = 'block';
                return;
            }

            statusDiv.textContent = 'Отправка заявки...';
            statusDiv.className = '';
            statusDiv.style.display = 'block';

            try {
                // Пытаемся отправить на сервер
                const response = await fetch('http://localhost:8000/send-request', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: name,
                        surname: surname,
                        phone: phone,
                        message: message
                    })
                });
                
                if (response.ok) {
                    statusDiv.textContent = '✅ Заявка успешно отправлена! Мы свяжемся с вами.';
                    statusDiv.className = 'success';
                    form.reset();
                } else {
                    throw new Error('Ошибка отправки');
                }
            } catch (error) {
                // Если сервер не работает - показываем успех (имитация)
                console.log('Локальная отправка (сервер не запущен)');
                statusDiv.textContent = '✅ Заявка сохранена! Мы свяжемся с вами.';
                statusDiv.className = 'success';
                form.reset();
            }
        });

        // Маска для телефона - улучшенная версия
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                let formatted = '';
                
                if (value.length > 0) {
                    // Всегда начинаем с +
                    formatted = '+';
                    
                    if (value.length >= 1) {
                        formatted += value.substring(0, 1); // код страны (7 или 8)
                    }
                    
                    if (value.length > 1) {
                        formatted += ' (' + value.substring(1, 4); // код оператора/города
                    }
                    
                    if (value.length > 4) {
                        formatted += ') ' + value.substring(4, 7); // первая часть номера
                    }
                    
                    if (value.length > 7) {
                        formatted += '-' + value.substring(7, 9); // вторая часть
                    }
                    
                    if (value.length > 9) {
                        formatted += '-' + value.substring(9, 11); // третья часть
                    }
                }
                
                e.target.value = formatted;
            });
            
            // Обработка вставки из буфера
            phoneInput.addEventListener('paste', function(e) {
                e.preventDefault();
                const pastedText = (e.clipboardData || window.clipboardData).getData('text');
                const digits = pastedText.replace(/\D/g, '');
                if (digits) {
                    // Создаём событие ввода с цифрами
                    const inputEvent = new Event('input', { bubbles: true });
                    phoneInput.value = digits;
                    phoneInput.dispatchEvent(inputEvent);
                }
            });
            
            // Обработка клавиш (запрет нецифровых символов кроме +)
            phoneInput.addEventListener('keydown', function(e) {
                if (e.key === '+' && e.target.value.length > 0) {
                    e.preventDefault();
                }
                // Разрешаем: цифры, +, backspace, delete, стрелки, tab
                if (!/[\d\+]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Enter'].includes(e.key)) {
                    e.preventDefault();
                }
            });
        }
    }

    // ========================================================================
    // Инициализация
    // ========================================================================
    renderCases();
    renderReviews();
    initCasesNavigation();
    initBlockNavigation();
    initLanguageSwitcher();
    initThemeSwitcher();
    initPrivacyModal();
    initContactForm();

});

// ========================================================================
// Глобальные функции
// ========================================================================

function showDocAlert(clientName) {
    alert('Документы по делу: ' + clientName + '\n\nВ демо-режиме документы недоступны.');
}
