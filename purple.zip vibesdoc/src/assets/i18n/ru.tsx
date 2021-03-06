import { I18N } from './i18n';

// ignore warning as we are defining it lazily
const lang: I18N = {} as I18N;

lang.GLOBAL_LABEL_YES = 'Да';
lang.GLOBAL_LABEL_NO = 'Нет';
lang.GLOBAL_LABEL_DO_NOT_KNOW = 'Не знаю / Не могу вспомнить';
lang.GLOBAL_LABEL_NEXT = 'Далее';
lang.GLOBAL_LABEL_BACK = 'Назад';
lang.GLOBAL_LABEL_NONE = 'Никто';
lang.GLOBAL_LABEL_SUBMIT = 'Отправить';
lang.GLOBAL_FORMVALIDATION_REQUIRED = 'Обязательное поле';
lang.GLOBAL_FORMVALIDATION_EMAIL = 'Пожалуйста, введите валидный email';
lang.GLOBAL_ERROR_FORMSUBMISSION = 'Во время отправки произошла ошибка';
lang.MAINPAGE_PAGE_TITLE = 'Codi';
lang.MAINPAGE_PAGE_TEXT = 'Выберите секцию ниже:';
lang.MAINPAGE_PAGE_QUESTIONNAIRE = 'Заполнить Опросник';
lang.MAINPAGE_PAGE_VIDEO_INSTRUCTIONS = 'Смотреть Видеоинструкции';
lang.MAINPAGE_PAGE_TEST_IMAGE = 'Загрузить Фотографию Теста';
lang.GENERALINFORMATION_PAGE_TITLE = 'Codi';
lang.GENERALINFORMATION_GENDERQUESTION_TEXT = 'Выберите секцию ниже:';
lang.GENERALINFORMATION_GENDERQUESTION_MALE = 'Мужчина';
lang.GENERALINFORMATION_GENDERQUESTION_FEMALE = 'Женщина';
lang.GENERALINFORMATION_GENDERQUESTION_OTHER = 'Другое / Предпочитаю не сообщать';
lang.GENERALINFORMATION_AGEQUESTION_TEXT = 'К какой возрастной группе Вы относитесь?';
lang.GENERALINFORMATION_AGEQUESTION_NOT_TO_SAY = 'Предпочитаю не сообщать';
lang.GENERALINFORMATION_HEALTHQUESTION_TEXT = 'Как вы себя чувствуете?';
lang.GENERALINFORMATION_HEALTHQUESTION_RARELY_ILL = 'Я в отличной форме и редко болею';
lang.GENERALINFORMATION_HEALTHQUESTION_FITTER_AND_HEALTHIER = 'Я спортивней и здоровее среднего';
lang.GENERALINFORMATION_HEALTHQUESTION_LESS_FIT_AND_HEALTHY = 'Я болею чаще среднего';
lang.GENERALINFORMATION_HEALTHQUESTION_NOT_HEALTHY = 'Я часто болею';
lang.GENERALINFORMATION_COMMONQUESTION_TEXT = 'Что из следующего можно сказать о Вас?';
lang.GENERALINFORMATION_COMMONQUESTION_NONE = 'Ничего из нижеперечисленного';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_HEART_CONDITION = 'Имею сердечные заболевания';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_HEART_CONDITION = 'Имею хронические сердечные заболевания';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_LUNG_PROBLEM = 'Имею небольшие проблемы с легкими, такие как астма в легкой форме';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_LUNG_PROBLEMS = 'Имею хронические легочные заболевания';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_DIABETES = 'Имею сахарный диабет первой и второй степени';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_DIABETES = 'Имею хронический сахарный диабет';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_LAST_5_YEARS = 'Лечился от рака с помощью химиотерапии последние 5 лет';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_OVER_5_YEARS_AGO = 'Лечился от рака с помощью химиотерапии более 5 лет назад';
lang.GENERALINFORMATION_COMMONQUESTION_KIDNEY = 'Страдаю от снижение функции почек';
lang.GENERALINFORMATION_COMMONQUESTION_LIVER = 'Имею хронические заболевания печени';
lang.GENERALINFORMATION_COMMONQUESTION_IMMUNOSUPPRESSANT = 'Принимаю иммунодепрессанты';
lang.GENERALINFORMATION_COMMONQUESTION_PREGNANT = 'Я беременна';
lang.GENERALINFORMATION_FLUQUESTION_TEXT = 'Делали ли Вы прививку от гриппа в прошлом году?';
lang.LOCATIONANDTRAVEL_PAGE_TITLE = 'Местоположение и Путешествия';
lang.LOCATIONANDTRAVEL_COUNTRYQUESTION_TEXT = 'Где Вы сейчас живете?';
lang.LOCATIONANDTRAVEL_REGIONQUESTION_TEXT = 'Введите штат в котором Вы живете.';
lang.LOCATIONANDTRAVEL_ZIPCODEQUESTION_TEXT = 'Введите первые 3 символа Вашего "postcode/zipcode"';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_TEXT = 'Посещали ли Вы другие страны с января 2020 года?';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_BEFORE_LOCKDOWN = 'Да, прежде чем они были "закрыты"';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_WHILE_LOCKDOWN = 'Да, когда они были "закрыты"';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_AFTER_LOCKDOWN = 'Да, после открытия границ';
lang.LOCATIONANDTRAVEL_FORMVALIDATION_THREECHARACTERS = 'Пожалуйста, введите 3 символа';
lang.TAKEPHOTO_PAGE_HEADER = 'Страница Сделать Фото';
lang.TAKEPHOTO_PAGE_BTN = 'Сделать Фото';
lang.TRAVELCONTINUED_PAGE_TITLE = 'Путешествие продолжается';
lang.TRAVELCONTINUED_VISITEDCOUNTRY_TEXT = 'Какие страны Вы посетили с 1 января 2020? (Если Вы посетили несколько стран, выберите ту где риск заразиться COVID-19 наивысший)';
lang.TRAVELCONTINUED_VISITEDENTERDATE_TEXT = 'Выберите дату въезда';
lang.TRAVELCONTINUED_VISITEDLEAVEDATE_TEXT = 'Выберите дату выезда';
lang.EXPOSURERISK_PAGE_TITLE = 'Риск воздействия';
lang.EXPOSURERISK_GOTOWORKQUESTION_TEXT = 'Ходили ли Вы на работу во время карантина?';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_FEW_PEOPLE = 'Да, но я контактировал с небольшим количеством людей';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE = 'Да, и я контактировал с большим количеством людей';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE_HEALTHCARE = 'Да, и я контактировал с большим количеством людей в медицинских учреждениях';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TEXT = 'Какие меры пердосторожности Вы предпринимали, чтобы избежать заражения';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_DISTANCE = 'Я всегда придерживался дистанции 6 фт/2м от людей';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_MASK = 'Я всегда носил маску/прикрывал лицо';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TIME_LIMITE = 'Я никогда не проводил более 30 минут в помещении/транспорте с другими людьми';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_HYGIENE = 'Я часто мыл руки и редко касался лица';
lang.EXPOSURERISK_SPENDTIMEQUESTION_TEXT = 'За пределами Вашего дома общались ли вы с кем-то кто в последствии ...?';
lang.EXPOSURERISK_SPENDTIMEQUESTION_CONFIRMED_COVID = 'Заразился COVID-19(сдал положительный анализ)';
lang.EXPOSURERISK_SPENDTIMEQUESTION_POSSIBLE_COVID = 'Имеет симптомы COVID-19';
lang.EXPOSURERISK_SPENDTIMEQUESTION_NONE = 'Ничего из вышеперечисленного';
lang.EXPOSURERISK_PEOPLELIVEWITHQUESTION_TEXT = 'Со сколькими людьми Вы проживаете(укажите число, например, 2)';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_TEXT = 'Как Вы думаете, кто-то, из людей проживающих с Вами, мог быть заражен?';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_POSSIBLE = 'Да, возможно';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_DEFINITELY = 'Определенно да(позитивный результат теста)';
lang.ILLHOUSEMATES_PAGE_TITLE = 'Семья/Сожители';
lang.ILLHOUSEMATES_NUMBERILLQUESTION_TEXT = 'У скольки человек живущих с вами были симптомы похожие на COVID19. Напишите число, на пример: 2) ';
lang.ILLHOUSEMATES_FIRSTILLDATEQUESTION_TEXT = 'Когда появился первый заболевший в вашем доме?';
lang.WEREYOUILL_PAGE_TITLE = 'Были ли Вы больны?';
lang.WEREYOUILL_WEREYOUILLQUESTION_TEXT = 'Болели ли Вы начиная с января 2020г? (Если веберите нет, вас не споросят о симптомах)';
lang.WEREYOUILL_WEREYOUILLQUESTION_NOIMFINE = 'Нет. Я зоров и не болел с января 2020г';
lang.WEREYOUILL_WEREYOUILLQUESTION_BEGINNINGFEELILL = 'Я начинаю заболевать';
lang.WEREYOUILL_WEREYOUILLQUESTION_QUITEILL = 'Я болен';
lang.WEREYOUILL_WEREYOUILLQUESTION_VERYILL = 'Я очень болен';
lang.WEREYOUILL_WEREYOUILLQUESTION_ILLFEELINGBETTER = 'Я еще болен но чувствую себя лучше';
lang.WEREYOUILL_WEREYOUILLQUESTION_RECOVERINGFEELINGWORSE = 'Я выздоравливал но сейчас мне снова стало хуже';
lang.WEREYOUILL_WEREYOUILLQUESTION_FULLYRECOVERD = 'Да, но я полностью выздоровел';
lang.YOURSYMPTOMS_PAGE_TITLE = 'Ваши симптомы';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_TEXT = 'Какие симптомы у вас были или присутсвуют сейчас';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_NOSYMPTOMS = 'Нет симптомов';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_REALLYTIRED = 'Сильная усталость';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_AHEADACHE = 'Головная боль';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_ACHYJOINTS = 'Боль в мышцал/суставах';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SORETHROAT = 'Болит горло';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CONGESTEDNOSE = 'Забитый нос';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_RUNNYNOSE = 'Насмок';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_DRYCOUGH = 'Сухой кашель';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_COUGHSPUTUM = 'Кашель с мокротой';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SNEEZING = 'Чихание';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_FEVER = 'Высокая температура (горячка)';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CHILLS = 'Озноб';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_LOSSOFTASTE = 'Потеря чувства вкуса/обоняния ';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SHORTOFBREATH = 'Отдышка';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_STOMACHDISTURBANCE = 'Проблемы с желудком/диарея';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_VOMITING = 'Тошнота/рвота';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SKINRASH = 'Сыпь на коже';
lang.YOURSYMPTOMS_HOWHARDTOBREATHQUESTION_TEXT = 'Как тяжело Вам сейчас/было дышать (2 = легкая отдышка, 8 = очень затрудненное дыхание)?';
lang.YOURSYMPTOMS_HOWBADDIDYOUFEELQUESTION_TEXT = 'Опишите как плохо Вы себя чувствовали/чувствуете в целом (2 = немного болен, 8 = очень болен/госпитализирован)';
lang.YOURSYMPTOMS_HOWANXIOUSWEREYOUQUESTION_TEXT = 'Как сильно Вы переживали из-за заболевания? (2 = не переживал, 8 = очень переживал)';
lang.YOURSYMPTOMS_FIRSTSYMPTOMSDATEQUESTION_TEXT = 'Когда у Вас появились первые симптомы?';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TEXT = 'Как долго Вы болели/испытывали симптомы?';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_FEWDAYS = 'Несколько дней или меньше';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_LESSTHANONEWEEK = 'Меньше недели';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_ONETOTWOWEEKS = 'Одну - две недели';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TWOTOTHREEWEEKS = 'Две  - три недели';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_MORETHANTHREEWEEKS = 'Более трех недель';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_IMSTILLILL = 'Я еще болею!';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_TEXT = 'Как вы считаете вы сейчас больны/болели раньше коронавирусом COVI19';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_NOWAY = 'Нет';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_SMALLCHANCE = 'Не уверен (25%)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_REASONABLECHANCE = 'Уверен (50%)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_PRETTYSURE = 'Достаточно уверен (75%)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_ABSOLUTELYCONVINCED = 'Абсолютно уверен (100%)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESTESTEDPOSITIVE = 'Да, 100%: мой тест был положительным';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESHOSPITAL = 'Да, 100%: я был госпитализирован';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESINTENSIVECARE = 'Да, 100%: я проходил лечение в отделении интенсивной терапии';
lang.COVIDTESTING_PAGE_TITLE = 'COVID testing';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_TEXT = 'Проходили ли Вы тест на наличие антител к COVI19?';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NO = 'Нет, я не делал тест на антитела';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NODIFFERENTTEST = 'Нет, но я делал другой тип теста';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESPOSITIVE = 'Да, я был позитивен';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESNEGATIVE = 'Да, но я был негативен';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESDONTKNOW = 'Да, но я не знаю результат';
lang.COVIDTESTING_ANTIBODYTESTDATEQUESTION_TEXT = 'Когда Вы проходили тест?';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_TEXT = 'Какой тип теста был использован для определения наличия антител?';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_RAPIDANTIBODY = 'Быстрый тест на антитела';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_SENTBLOODLABTEST = 'Образец крови был отправлен на лабораторный анализ';
lang.ANTIBODYTEST_PAGE_TITLE = 'Antibody test';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_TEXT = 'Как выглядил Ваш тест?';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C = 'Только С';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGG = 'С и IgG';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM = 'С и IgM';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM_IGG = 'C, IgM, IgG';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG = 'Только IgG';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGM = 'Только IgM';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG_IGM = 'Только IgG, IgM';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NOLINES = 'Полоски не проявились';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NONEOFABOVE = 'Ничего из перечисленного';
lang.ANITBODYTEST_UPLOADPHOTOQUESTION_TEXT = 'Пожалуйста загрузите фотографию теста с верху при равномерном освещении, позиционируя тест таким образом что бы он занял весь экран как показано на примере';
lang.OTHERTESTS_PAGE_TITLE = 'Other tests';
lang.OTHERTESTS_LABANTIBODYTESTQUESTION_TEXT = 'Did you send blood for a laboratory antibody test?';
lang.OTHERTESTS_SWABTESTQUESTION_TEXT = 'Have you done a Sputum/Nasal/Throat swab for PCR?';
lang.OTHERTESTS_VIRALANTIGENQUESTION_TEXT = 'Have you done a viral Antigen test?';
lang.OTHERTESTS_XRAYQUESTION_TEXT = 'Have you had an X-ray/CT scans of test?';
lang.OTHERTESTS_DOCTORSDIAGNOSISQUESTION_TEXT = 'Have you had a Doctor\'s diagnosis?';
lang.OTHERTESTS_DIDNOTDOOPTION_TEXT = 'Did not do';
lang.OTHERTESTS_NEGATIVEOPTION_TEXT = 'Negative result';
lang.OTHERTESTS_POSITIVEOPTION_TEXT = 'Positive result';
lang.OTHERTESTS_UNKNOWNOPTION_TEXT = 'Unknown result';
lang.EMAILCONSENT_PAGE_TITLE = 'Final question';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_TEXT = 'Would you be interested in knowing about any studies, testing programmes, or trials, to help confirm if you have fully recovered, to donate plasma, or if you may be immune to Corona Virus?';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDMOREINFO = 'Interested, send me more information when you hear about it';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDNOINFO = 'Interested, but no information please';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_NOTINTERESTED = 'No, not interested';
lang.EMAILCONSENT_EMAILADDRESSQUESTION_TEXT = 'Please leave your email address below';
lang.RESULT_PAGE_TITLE = 'Thank You!';
lang.RESULT_PAGE_TEXT = 'You will receive your results by email shortly.';

export default lang;
