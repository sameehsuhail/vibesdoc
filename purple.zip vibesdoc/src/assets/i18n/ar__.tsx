import { I18N } from './i18n';

// ignore warning as we are defining it lazily
const lang: I18N = {} as I18N;

lang.GLOBAL_LABEL_YES = 'نعم';
lang.GLOBAL_LABEL_NO = 'ليس';
lang.GLOBAL_LABEL_DO_NOT_KNOW = 'لا أعلم ، لا أذكر';
lang.GLOBAL_LABEL_NEXT = 'التالى';
lang.GLOBAL_LABEL_BACK = 'خلف';
lang.GLOBAL_LABEL_NONE = 'لا يوجد';
lang.GLOBAL_LABEL_SUBMIT = 'إرسال';
lang.GLOBAL_FORMVALIDATION_REQUIRED = 'مطلوب';
lang.GLOBAL_FORMVALIDATION_EMAIL = 'من فضلك أدخل بريد أليكترونى صحيح';
lang.GLOBAL_ERROR_FORMSUBMISSION = 'There was an error submitting the form.';
lang.MAINPAGE_PAGE_TITLE = 'مرحبًا بكم في Codi';
lang.MAINPAGE_PAGE_TEXT = 'اختر من الخيارات التالية:';
lang.MAINPAGE_PAGE_QUESTIONNAIRE = 'الإجابة على الاستبيان';
lang.MAINPAGE_PAGE_VIDEO_INSTRUCTIONS = 'انظر تعليمات الفيديو';
lang.MAINPAGE_PAGE_TEST_IMAGE = 'تحميل صورة اختبارية';
lang.GENERALINFORMATION_PAGE_TITLE = 'معلومات عامة';
lang.GENERALINFORMATION_GENDERQUESTION_TEXT = 'ما الجنس الذي تم تخصيصه لك عند الولادة؟';
lang.GENERALINFORMATION_GENDERQUESTION_MALE = 'الذكر';
lang.GENERALINFORMATION_GENDERQUESTION_FEMALE = 'أنثى';
lang.GENERALINFORMATION_GENDERQUESTION_OTHER = 'أخرى / أفضل عدم قول ذلك';
lang.GENERALINFORMATION_AGEQUESTION_TEXT = 'ما هي فئتك العمرية؟';
lang.GENERALINFORMATION_AGEQUESTION_NOT_TO_SAY = 'انا افضل ان لا اقول';
lang.GENERALINFORMATION_HEALTHQUESTION_TEXT = 'كيف صحتك؟';
lang.GENERALINFORMATION_HEALTHQUESTION_RARELY_ILL = 'أنا بصحة جيدة ونادرا ما أمرض';
lang.GENERALINFORMATION_HEALTHQUESTION_FITTER_AND_HEALTHIER = 'أنا أكثر لياقة وأكثر صحة من المتوسط';
lang.GENERALINFORMATION_HEALTHQUESTION_LESS_FIT_AND_HEALTHY = 'أنا أقل لياقة وصحة من المتوسط';
lang.GENERALINFORMATION_HEALTHQUESTION_NOT_HEALTHY = 'أنا لست بصحة جيدة';
lang.GENERALINFORMATION_COMMONQUESTION_TEXT = 'أي مما يلي لديك / تنطبق عليك؟';
lang.GENERALINFORMATION_COMMONQUESTION_NONE = 'لا شيء مما يلي';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_HEART_CONDITION = 'حالة القلب الخفيفة';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_HEART_CONDITION = 'أمراض القلب المزمنة';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_LUNG_PROBLEM = 'مشكلة الرئة الخفيفة مثل الربو الخفيف';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_LUNG_PROBLEMS = 'مشاكل الرئة المزمنة';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_DIABETES = 'مرض السكري الخفيف أو الحدودي';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_DIABETES = 'داء السكري المزمن';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_LAST_5_YEARS = 'العلاج الحديث (للسنوات الخمس الأخيرة) من السرطان بالعلاج الكيميائي';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_OVER_5_YEARS_AGO = 'علاج السرطان في الماضي (قبل أكثر من 5 سنوات) بالعلاج الكيميائي';
lang.GENERALINFORMATION_COMMONQUESTION_KIDNEY = 'انخفاض وظائف الكلى';
lang.GENERALINFORMATION_COMMONQUESTION_LIVER = 'مرض الكبد المزمن';
lang.GENERALINFORMATION_COMMONQUESTION_IMMUNOSUPPRESSANT = 'أتناول أدوية مثبطة للمناعة';
lang.GENERALINFORMATION_COMMONQUESTION_PREGNANT = 'أنا حامل';
lang.GENERALINFORMATION_FLUQUESTION_TEXT = 'هل حصلت على لقاح الانفلونزا العام الماضي؟';
lang.LOCATIONANDTRAVEL_PAGE_TITLE = 'الموقع والسفر';
lang.LOCATIONANDTRAVEL_COUNTRYQUESTION_TEXT = 'اين تعيش الان؟';
lang.LOCATIONANDTRAVEL_ZIPCODEQUESTION_TEXT = 'أدخل فقط أول ثلاثة أحرف أو أرقام من الرمز البريدي الخاص بك.';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_TEXT = 'هل سافرت إلى دول أخرى منذ 1 يناير 2020؟';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_BEFORE_LOCKDOWN = 'نعم ، قبل أن يكونوا في "إغلاق طارئ"';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_WHILE_LOCKDOWN = 'نعم ، بينما كانوا في "إغلاق طارئ"';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_AFTER_LOCKDOWN = 'نعم ، بعد خروجهم من "إغلاق الطوارئ"';
lang.LOCATIONANDTRAVEL_FORMVALIDATION_THREECHARACTERS = 'يرجى إدخال 3 أحرف بالضبط';
lang.TAKEPHOTO_PAGE_HEADER = 'صفحة التقاط الصور';
lang.TAKEPHOTO_PAGE_BTN = 'تصوير';
lang.TRAVELCONTINUED_PAGE_TITLE = 'السفر المستمر';
lang.TRAVELCONTINUED_VISITEDCOUNTRY_TEXT = 'ما هي الدول التي زرتها منذ 1 يناير 2020؟ (إذا ذهبت إلى العديد من البلدان ، فاختر البلد الذي تعتقد أنه كان بإمكانه التقاط COVID-19 أو أنه كان لديك أعلى مخاطر الإصابة به)';
lang.TRAVELCONTINUED_VISITEDENTERDATE_TEXT = 'في أي تاريخ دخلت هذا البلد؟';
lang.TRAVELCONTINUED_VISITEDLEAVEDATE_TEXT = 'في أي تاريخ تركت هذا البلد؟';
lang.EXPOSURERISK_PAGE_TITLE = 'خطر التعرض';
lang.EXPOSURERISK_GOTOWORKQUESTION_TEXT = 'هل ذهبت للعمل أثناء حبس بلدك؟';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_FEW_PEOPLE = 'نعم ، لكنني تفاعلت مع عدد قليل من الأشخاص يوميًا.';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE = 'نعم ، وتفاعلت مع العديد من الأشخاص يوميًا.';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE_HEALTHCARE = 'نعم ، وتفاعلت مع العديد من الأشخاص / المرضى يوميًا في بيئة رعاية صحية.';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TEXT = 'ماذا فعلت لتجنب خروج COVID-19 خارج منزلك؟';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_DISTANCE = 'لطالما احتفظت بمسافة 2 م عن الناس.';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_MASK = 'كنت دائما أرتدي قناع / غطاء للوجه.';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TIME_LIMITE = 'لم أقضي أبداً أكثر من 30 دقيقة في الداخل / في المركبات مع الآخرين.';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_HYGIENE = 'كثيرا ما أغسل يدي ونادرا ما ألمس وجهي.';
lang.EXPOSURERISK_SPENDTIMEQUESTION_TEXT = 'خارج منزلك ، هل قضيت بعض الوقت مع شخص تطور أو بعد ...؟';
lang.EXPOSURERISK_SPENDTIMEQUESTION_CONFIRMED_COVID = 'تم تأكيد COVID-19 (التشخيص الإيجابي)';
lang.EXPOSURERISK_SPENDTIMEQUESTION_POSSIBLE_COVID = 'الأعراض المحتملة لـ COVID-19';
lang.EXPOSURERISK_SPENDTIMEQUESTION_NONE = 'لا شيء مما بالأعلى';
lang.EXPOSURERISK_PEOPLELIVEWITHQUESTION_TEXT = 'كم عدد الأشخاص الذين تعيش معهم؟ (اكتب رقمًا ، على سبيل المثال 2)';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_TEXT = 'هل تعتقد أن شخصًا في منزلك كان يمكن أن يكون مصابًا بـ COVID-19؟';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_POSSIBLE = 'نعم ربما';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_DEFINITELY = 'نعم بالتأكيد (نتيجة اختبار إيجابية)';
lang.ILLHOUSEMATES_PAGE_TITLE = 'الزملاء المرضى';
lang.ILLHOUSEMATES_NUMBERILLQUESTION_TEXT = 'كم عدد الأشخاص الذين تعيش معهم لديهم أعراض محتملة لـ COVID-19؟ يرجى كتابة رقم ، مثل 2';
lang.ILLHOUSEMATES_FIRSTILLDATEQUESTION_TEXT = 'متى مرض أول شخص في المنزل؟';
lang.WEREYOUILL_PAGE_TITLE = 'هل سبق لك أن مرضت؟';
lang.WEREYOUILL_WEREYOUILLQUESTION_TEXT = 'هل شعرت بالسوء منذ يناير 2020؟ (إذا رفضت ، فلن تُسأل عن الأعراض)';
lang.WEREYOUILL_WEREYOUILLQUESTION_NOIMFINE = 'أنا لست بخير. لم أشعر بالسوء منذ يناير 2020';
lang.WEREYOUILL_WEREYOUILLQUESTION_BEGINNINGFEELILL = 'بدأت أشعر بالمرض';
lang.WEREYOUILL_WEREYOUILLQUESTION_QUITEILL = 'الآن أشعر بالغثيان';
lang.WEREYOUILL_WEREYOUILLQUESTION_VERYILL = 'أشعر بإعياء شديد';
lang.WEREYOUILL_WEREYOUILLQUESTION_ILLFEELINGBETTER = 'ما زلت مريضة لكني أشعر بتحسن';
lang.WEREYOUILL_WEREYOUILLQUESTION_RECOVERINGFEELINGWORSE = 'كنت أتعافى ، لكن الآن أشعر بالمرض مرة أخرى';
lang.WEREYOUILL_WEREYOUILLQUESTION_FULLYRECOVERD = 'نعم ، لكني أشعر بالشفاء التام.';
lang.YOURSYMPTOMS_PAGE_TITLE = 'أعراضك';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_TEXT = 'أي من الأعراض التالية لديك / هل لديك؟';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_NOSYMPTOMS = 'لا أعراض';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_REALLYTIRED = 'متعب جدا';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_AHEADACHE = 'صداع';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_ACHYJOINTS = 'آلام المفاصل و / أو العضلات';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SORETHROAT = 'ألم الحنجرة';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CONGESTEDNOSE = 'انسداد الأنف';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_RUNNYNOSE = 'مخاط في الأنف';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_DRYCOUGH = 'سعال جاف';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_COUGHSPUTUM = 'السعال مع البلغم';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SNEEZING = 'العطس';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_FEVER = 'حمى';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CHILLS = 'قشعريرة اهتزاز';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_LOSSOFTASTE = 'فقدان حاسة التذوق / الشم.';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SHORTOFBREATH = 'صعوبة في التنفس';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_STOMACHDISTURBANCE = 'اضطراب في المعدة / إسهال';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_VOMITING = 'القيء / الغثيان';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SKINRASH = 'الشرى أو حساسية الجلد';
lang.YOURSYMPTOMS_HOWHARDTOBREATHQUESTION_TEXT = 'ما هي تكلفة التنفس أم صعوبة التنفس؟ (2 = ضيق تنفس خفيف ، 8 = ضيق شديد في التنفس)';
lang.YOURSYMPTOMS_HOWBADDIDYOUFEELQUESTION_TEXT = 'ما مدى شعورك بالسوء أو شعورك بشكل عام؟ (2 = مريض قليلاً فقط ، 8 = مريض جدًا / ذهب إلى المستشفى)';
lang.YOURSYMPTOMS_HOWANXIOUSWEREYOUQUESTION_TEXT = 'ما مدى شغفك / هل أنت مشترك مع COVID19؟ (2 = قلق قليلًا ، 8 = قلق جدًا)';
lang.YOURSYMPTOMS_FIRSTSYMPTOMSDATEQUESTION_TEXT = 'متى عانيت من الأعراض الأولى؟';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TEXT = 'كم من الوقت شعرت بالمرض؟';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_FEWDAYS = 'بضعة أيام أو أقل';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_LESSTHANONEWEEK = 'ااال';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_ONETOTWOWEEKS = 'أسبوع أو أسبوعين';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TWOTOTHREEWEEKS = 'أسبوعين أو ثلاثة أسابيع';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_MORETHANTHREEWEEKS = 'أكثر من ثلاثة أسابيع';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_IMSTILLILL = 'ما زلت مريضا!';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_TEXT = 'هل تعتقد أنك مصاب بفيروس كورونا / COVID-19؟';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_NOWAY = 'لا يمكن';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_SMALLCHANCE = 'فرصة ضئيلة (بالتأكيد 25٪)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_REASONABLECHANCE = 'فرصة معقولة (بالتأكيد 50٪)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_PRETTYSURE = 'آمن إلى حد ما (~ 75٪ آمن)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_ABSOLUTELYCONVINCED = 'مقتنع تمامًا (90٪ + بالتأكيد)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESTESTEDPOSITIVE = 'نعم ، 100٪: لقد أثبتت الاختبارات إيجابية';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESHOSPITAL = 'نعم 100٪: لقد تلقيت العلاج في المستشفى';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESINTENSIVECARE = 'نعم 100٪: لقد تلقيت علاجًا مكثفًا';
lang.COVIDTESTING_PAGE_TITLE = 'اختبار COVID';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_TEXT = 'هل تم إجراء اختبار الأجسام المضادة للتحقق مما إذا كان لديك / كان لديك COVID-19؟';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NO = 'لا ، لم أجرب اختبار الأجسام المضادة.';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NODIFFERENTTEST = 'لا ، لكنني أجريت اختبارًا مختلفًا';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESPOSITIVE = 'نعم وكنت إيجابيا';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESNEGATIVE = 'نعم ، لكني حصلت على نتيجة سلبية.';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESDONTKNOW = 'نعم ، لكني لا أعرف النتيجة.';
lang.COVIDTESTING_ANTIBODYTESTDATEQUESTION_TEXT = 'في أي تاريخ خضعت للاختبار؟';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_TEXT = 'ما نوع اختبار الأجسام المضادة الذي قمت به لمعرفة ما إذا كان لديك / كان لديك COVID-19؟';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_RAPIDANTIBODY = 'اختبار الدم السريع للأجسام المضادة (المقايسة المناعية للتدفق الجانبي)';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_SENTBLOODLABTEST = 'إرسال الدم لتحليل الأجسام المضادة في المختبر.';
lang.ANTIBODYTEST_PAGE_TITLE = 'اختبار الأجسام المضادة';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_TEXT = 'كيف بدت نتيجة الاختبار الخاصة بك؟';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C = 'فقط ج';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGG = 'C و IgG';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM = 'C و IgM';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM_IGG = 'C و IgM و IgG';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG = 'IgG فقط (بلا C)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGM = 'IgM فقط (بدون C)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG_IGM = 'IgG و IgM فقط (بدون C)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NOLINES = 'لا يوجد ، لا خطوط';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NONEOFABOVE = 'لا شيء مما بالأعلى';
lang.ANITBODYTEST_UPLOADPHOTOQUESTION_TEXT = 'قم بتحميل صورة لاختبار الأجسام المضادة المأخوذة مباشرة من الأعلى ، مع إضاءة متساوية بحيث تملأ كاسيت الاختبار الشاشة (كما هو موضح أدناه).';
lang.OTHERTESTS_PAGE_TITLE = 'اختبارات أخرى';
lang.OTHERTESTS_LABANTIBODYTESTQUESTION_TEXT = 'هل أرسلت دمًا لاختبار الأجسام المضادة في المختبر؟';
lang.OTHERTESTS_SWABTESTQUESTION_TEXT = 'هل أجريت عينة من البلغم / الأنف / الحلق من أجل PCR؟';
lang.OTHERTESTS_VIRALANTIGENQUESTION_TEXT = 'هل أجريت اختبار مستضد فيروسي؟';
lang.OTHERTESTS_XRAYQUESTION_TEXT = 'هل خضعت لاختبار الأشعة السينية / الأشعة المقطعية؟';
lang.OTHERTESTS_DOCTORSDIAGNOSISQUESTION_TEXT = 'هل كان لديك تشخيص طبي؟';
lang.OTHERTESTS_DIDNOTDOOPTION_TEXT = 'لم يفعل';
lang.OTHERTESTS_NEGATIVEOPTION_TEXT = 'نتيجة سلبية';
lang.OTHERTESTS_POSITIVEOPTION_TEXT = 'نتيجة ايجابية';
lang.OTHERTESTS_UNKNOWNOPTION_TEXT = 'نتيجة غير معروفة';
lang.EMAILCONSENT_PAGE_TITLE = 'السؤال الأخير';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_TEXT = 'هل ترغب في التعرف على دراسة أو برنامج اختبار أو تجربة للمساعدة في تأكيد ما إذا كنت قد تعافت تمامًا أم تبرعت بالبلازما أو إذا كنت محصنًا من فيروس كورونا؟';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDMOREINFO = 'مهتمة ، أرسل لي المزيد من المعلومات عندما تكتشف';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDNOINFO = 'مهتمة ، ولكن لا ترسل لي المعلومات من فضلك';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_NOTINTERESTED = 'لا أنا لست مهتما';
lang.EMAILCONSENT_EMAILADDRESSQUESTION_TEXT = 'يرجى ترك عنوان بريدك الإلكتروني أدناه';
lang.RESULT_PAGE_TITLE = 'Thank You!';
lang.RESULT_PAGE_TEXT = 'You will receive your results by email shortly.';

export default lang;
