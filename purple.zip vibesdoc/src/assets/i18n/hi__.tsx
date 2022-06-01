import { I18N } from './i18n';

// ignore warning as we are defining it lazily
const lang: I18N = {} as I18N;

lang.GLOBAL_LABEL_YES = 'हाँ';
lang.GLOBAL_LABEL_NO = 'नहीं';
lang.GLOBAL_LABEL_DO_NOT_KNOW = 'मुझे नहीं पता, मुझे याद नहीं है';
lang.GLOBAL_LABEL_NEXT = 'आगे';
lang.GLOBAL_LABEL_BACK = 'पीछे';
lang.GLOBAL_LABEL_NONE = 'कोई नहीं';
lang.GLOBAL_LABEL_SUBMIT = 'प्रस्तुत';
lang.GLOBAL_FORMVALIDATION_REQUIRED = 'अपेक्षित';
lang.GLOBAL_FORMVALIDATION_EMAIL = 'कृपया एक वैध ई - मेल एड्रेस डालें';
lang.GLOBAL_ERROR_FORMSUBMISSION = 'There was an error submitting the form.';
lang.MAINPAGE_PAGE_TITLE = 'नमस्कार, कोडी में आपका स्वागत है';
lang.MAINPAGE_PAGE_TEXT = 'निम्नलिखित विकल्पों में से चुनें:';
lang.MAINPAGE_PAGE_QUESTIONNAIRE = 'उत्तर प्रश्नावली';
lang.MAINPAGE_PAGE_VIDEO_INSTRUCTIONS = 'देखें वीडियो निर्देश';
lang.MAINPAGE_PAGE_TEST_IMAGE = 'परीक्षण छवि अपलोड करें';
lang.GENERALINFORMATION_PAGE_TITLE = 'सामान्य जानकारी';
lang.GENERALINFORMATION_GENDERQUESTION_TEXT = 'जन्म के समय आपको क्या सेक्स सौंपा गया था?';
lang.GENERALINFORMATION_GENDERQUESTION_MALE = 'नर';
lang.GENERALINFORMATION_GENDERQUESTION_FEMALE = 'महिला';
lang.GENERALINFORMATION_GENDERQUESTION_OTHER = 'अन्य / मैं यह नहीं कहूंगा';
lang.GENERALINFORMATION_AGEQUESTION_TEXT = 'आपका आयु वर्ग क्या है?';
lang.GENERALINFORMATION_AGEQUESTION_NOT_TO_SAY = 'मैं नहीं कहना पसंद करता हूं';
lang.GENERALINFORMATION_HEALTHQUESTION_TEXT = 'आपका स्वास्थ्य कैसा है?';
lang.GENERALINFORMATION_HEALTHQUESTION_RARELY_ILL = 'मैं बहुत फिट हूं और मैं शायद ही कभी बीमार पड़ूं';
lang.GENERALINFORMATION_HEALTHQUESTION_FITTER_AND_HEALTHIER = 'मैं औसत से ज्यादा फिटर और सेहतमंद हूं';
lang.GENERALINFORMATION_HEALTHQUESTION_LESS_FIT_AND_HEALTHY = 'मैं औसत से कम फिट और स्वस्थ हूं';
lang.GENERALINFORMATION_HEALTHQUESTION_NOT_HEALTHY = 'मैं बहुत स्वस्थ नहीं हूं';
lang.GENERALINFORMATION_COMMONQUESTION_TEXT = 'आपके पास निम्नलिखित में से कौन सा आपके पास है / लागू है?';
lang.GENERALINFORMATION_COMMONQUESTION_NONE = 'निम्न में से कोई नहीं';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_HEART_CONDITION = 'दिल की बीमारी';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_HEART_CONDITION = 'पुरानी दिल की बीमारी';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_LUNG_PROBLEM = 'माइल्ड लंग प्रॉब्लम जैसे माइल्ड अस्थमा';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_LUNG_PROBLEMS = 'पुरानी फेफड़ों की समस्या';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_DIABETES = 'हल्के या सीमावर्ती मधुमेह';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_DIABETES = 'जीर्ण मधुमेह';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_LAST_5_YEARS = 'कीमोथेरेपी के साथ कैंसर का हालिया उपचार (अंतिम 5 वर्ष)';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_OVER_5_YEARS_AGO = 'कीमोथेरेपी के साथ अतीत में कैंसर का इलाज (5 साल से अधिक)';
lang.GENERALINFORMATION_COMMONQUESTION_KIDNEY = 'गुर्दे की कार्यक्षमता में कमी';
lang.GENERALINFORMATION_COMMONQUESTION_LIVER = 'जीर्ण जिगर की बीमारी';
lang.GENERALINFORMATION_COMMONQUESTION_IMMUNOSUPPRESSANT = 'मैं इम्युनोसप्रेसिव दवाएं लेता हूं';
lang.GENERALINFORMATION_COMMONQUESTION_PREGNANT = 'मैं गर्भवती हूँ';
lang.GENERALINFORMATION_FLUQUESTION_TEXT = 'क्या आपको पिछले साल फ्लू का शॉट मिला था?';
lang.LOCATIONANDTRAVEL_PAGE_TITLE = 'स्थान और यात्रा';
lang.LOCATIONANDTRAVEL_COUNTRYQUESTION_TEXT = 'आप अब कहाँ रहते हैं?';
lang.LOCATIONANDTRAVEL_ZIPCODEQUESTION_TEXT = 'अपने ज़िप कोड के केवल पहले तीन अक्षर या संख्या दर्ज करें।';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_TEXT = 'क्या आपने 1 जनवरी 2020 से अन्य देशों की यात्रा की है?';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_BEFORE_LOCKDOWN = 'हां, इससे पहले कि वे "आपातकालीन शटडाउन" में थे';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_WHILE_LOCKDOWN = 'हां, जब वे "आपातकालीन शटडाउन" में थे';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_AFTER_LOCKDOWN = 'हां, "आपातकालीन बंद" से बाहर आने के बाद';
lang.LOCATIONANDTRAVEL_FORMVALIDATION_THREECHARACTERS = 'कृपया 3 अक्षर दर्ज करें';
lang.TAKEPHOTO_PAGE_HEADER = 'फोटो लेना पेज';
lang.TAKEPHOTO_PAGE_BTN = 'फोटो लो';
lang.TRAVELCONTINUED_PAGE_TITLE = 'निरंतर यात्रा';
lang.TRAVELCONTINUED_VISITEDCOUNTRY_TEXT = '1 जनवरी, 2020 से आप किन देशों में गए हैं? (यदि आप कई देशों में गए, तो वह चुनें जो आपको लगता है कि COVID-19 पर कब्जा कर सकता है या आपके पास इसके अनुबंध का सबसे अधिक जोखिम है)';
lang.TRAVELCONTINUED_VISITEDENTERDATE_TEXT = 'आपने किस तारीख को उस देश में प्रवेश किया?';
lang.TRAVELCONTINUED_VISITEDLEAVEDATE_TEXT = 'आपने उस देश को किस तारीख को छोड़ा था?';
lang.EXPOSURERISK_PAGE_TITLE = 'जोखिम जोखिम';
lang.EXPOSURERISK_GOTOWORKQUESTION_TEXT = 'क्या आप अपने देश के कारावास के दौरान काम करने गए थे?';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_FEW_PEOPLE = 'हां, लेकिन मैंने प्रति दिन कुछ लोगों के साथ बातचीत की।';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE = 'हां, और मैंने प्रति दिन कई लोगों के साथ बातचीत की।';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE_HEALTHCARE = 'हां, और मैंने स्वास्थ्य सेवा में प्रति दिन कई लोगों / रोगियों के साथ बातचीत की।';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TEXT = 'आपने अपने घर के बाहर COVID -19 प्राप्त करने से बचने के लिए क्या किया?';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_DISTANCE = 'मैंने हमेशा लोगों से 2 मी की दूरी बनाए रखी।';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_MASK = 'मैंने हमेशा फेस मास्क / कवर पहना था।';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TIME_LIMITE = 'मैंने दूसरों के साथ वाहनों में / घर में 30 मिनट से अधिक समय नहीं बिताया है।';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_HYGIENE = 'मैं अक्सर अपने हाथ धोता हूं और शायद ही कभी अपना चेहरा छूता हूं।';
lang.EXPOSURERISK_SPENDTIMEQUESTION_TEXT = 'अपने घर के बाहर, क्या आपने किसी ऐसे व्यक्ति के साथ समय बिताया है जो विकसित हुआ था या उसके तुरंत बाद ...?';
lang.EXPOSURERISK_SPENDTIMEQUESTION_CONFIRMED_COVID = 'COVID-19 की पुष्टि (सकारात्मक निदान)';
lang.EXPOSURERISK_SPENDTIMEQUESTION_POSSIBLE_COVID = 'COVID-19 के संभावित लक्षण';
lang.EXPOSURERISK_SPENDTIMEQUESTION_NONE = 'इनमे से कोई भी नहीं';
lang.EXPOSURERISK_PEOPLELIVEWITHQUESTION_TEXT = 'आप कितने लोगों के साथ रहते हैं? (एक संख्या लिखें, उदाहरण के लिए 2)';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_TEXT = 'क्या आपको लगता है कि आपके घर में किसी को COVID-19 हो सकता था?';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_POSSIBLE = 'हाँ संभवतः';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_DEFINITELY = 'हां, निश्चित रूप से (सकारात्मक परीक्षा परिणाम)';
lang.ILLHOUSEMATES_PAGE_TITLE = 'बीमार गृहिणी';
lang.ILLHOUSEMATES_NUMBERILLQUESTION_TEXT = 'COVID-19 के संभावित लक्षण आपके पास कितने लोगों के साथ रहते हैं? कृपया एक संख्या लिखें, जैसे 2';
lang.ILLHOUSEMATES_FIRSTILLDATEQUESTION_TEXT = 'पहला व्यक्ति घर पर कब बीमार हुआ?';
lang.WEREYOUILL_PAGE_TITLE = 'क्या आप कभी बीमार हुए हैं?';
lang.WEREYOUILL_WEREYOUILLQUESTION_TEXT = 'क्या आपको जनवरी 2020 से बुरा लगा है? (यदि आप कहते हैं कि नहीं, तो आपसे लक्षणों के बारे में नहीं पूछा जाएगा)';
lang.WEREYOUILL_WEREYOUILLQUESTION_NOIMFINE = 'मै स्वस्थ नहीं हूं। मुझे जनवरी 2020 से बुरा नहीं लगा है';
lang.WEREYOUILL_WEREYOUILLQUESTION_BEGINNINGFEELILL = 'मैं बीमार महसूस करने लगा हूं';
lang.WEREYOUILL_WEREYOUILLQUESTION_QUITEILL = 'अब मैं काफी बीमार महसूस कर रहा हूं';
lang.WEREYOUILL_WEREYOUILLQUESTION_VERYILL = 'मैं बहुत बीमार महसूस करता हूं';
lang.WEREYOUILL_WEREYOUILLQUESTION_ILLFEELINGBETTER = 'मैं अभी भी बीमार हूं लेकिन मुझे बेहतर महसूस हो रहा है';
lang.WEREYOUILL_WEREYOUILLQUESTION_RECOVERINGFEELINGWORSE = 'मैं ठीक हो रहा था, लेकिन अब मैं फिर से बीमार महसूस कर रहा हूं';
lang.WEREYOUILL_WEREYOUILLQUESTION_FULLYRECOVERD = 'हां, लेकिन मैं पूरी तरह से ठीक महसूस करता हूं।';
lang.YOURSYMPTOMS_PAGE_TITLE = 'आपके लक्षण';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_TEXT = 'निम्नलिखित में से कौन से लक्षण आपके पास थे / हैं?';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_NOSYMPTOMS = 'कोई लक्षण नहीं';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_REALLYTIRED = 'बहुत थक गया';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_AHEADACHE = 'सरदर्द';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_ACHYJOINTS = 'जोड़ों और / या मांसपेशियों में दर्द';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SORETHROAT = 'गले में खरास';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CONGESTEDNOSE = 'बंद नाक';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_RUNNYNOSE = 'नाक में सूंघना';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_DRYCOUGH = 'सूखी खाँसी';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_COUGHSPUTUM = 'थूक के साथ खांसी';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SNEEZING = 'छींक आना';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_FEVER = 'बुखार';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CHILLS = 'ठंड से कंपकपी';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_LOSSOFTASTE = 'स्वाद / गंध की भावना का नुकसान।';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SHORTOFBREATH = 'सांस लेने मे तकलीफ';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_STOMACHDISTURBANCE = 'पेट खराब होना / दस्त होना';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_VOMITING = 'उल्टी / मतली';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SKINRASH = 'पित्ती या त्वचा की एलर्जी';
lang.YOURSYMPTOMS_HOWHARDTOBREATHQUESTION_TEXT = 'आपको कितना खर्च करना पड़ा या सांस लेना मुश्किल है? (2 = सांस की तकलीफ, सांस की गंभीर कमी)';
lang.YOURSYMPTOMS_HOWBADDIDYOUFEELQUESTION_TEXT = 'आपको कितना बुरा लगा या आपने सामान्य रूप से महसूस किया? (2 = केवल थोड़ा बीमार, 8 = गंभीर रूप से बीमार / अस्पताल गया)';
lang.YOURSYMPTOMS_HOWANXIOUSWEREYOUQUESTION_TEXT = 'COVID19 के लिए आप कितने उत्सुक थे / हैं? (2 = थोड़ा चिंतित, 8 = बहुत चिंतित)';
lang.YOURSYMPTOMS_FIRSTSYMPTOMSDATEQUESTION_TEXT = 'आपको पहले लक्षणों का अनुभव कब हुआ?';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TEXT = 'आप कब तक बीमार महसूस करते थे / लक्षण थे?';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_FEWDAYS = 'कुछ दिन या उससे कम';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_LESSTHANONEWEEK = 'एक सप्ताह से कम';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_ONETOTWOWEEKS = 'एक या दो सप्ताह';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TWOTOTHREEWEEKS = 'दो या तीन सप्ताह';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_MORETHANTHREEWEEKS = 'तीन सप्ताह से अधिक';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_IMSTILLILL = 'मैं अभी भी बीमार हूँ!';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_TEXT = 'क्या आपको लगता है कि आप कोरोनावायरस / COVID-19 से संक्रमित थे?';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_NOWAY = 'बिल्कुल नहीं';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_SMALLCHANCE = 'थोड़ा मौका (~ 25% यकीन)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_REASONABLECHANCE = 'एक उचित अवसर (~ 50% सुनिश्चित)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_PRETTYSURE = 'काफी हद तक सुरक्षित (~ 75% सुरक्षित)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_ABSOLUTELYCONVINCED = 'पूरी तरह से आश्वस्त (~ 90% + सुनिश्चित)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESTESTEDPOSITIVE = 'हां, 100%: मैंने सकारात्मक परीक्षण किया है';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESHOSPITAL = 'हां, 100%: मेरा इलाज अस्पताल में किया गया';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESINTENSIVECARE = 'हां, 100%: मुझे गहन देखभाल में इलाज किया गया था';
lang.COVIDTESTING_PAGE_TITLE = 'COVID परीक्षण';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_TEXT = 'क्या आपके पास COVID-19 है या नहीं, इसकी जांच के लिए एंटीबॉडी परीक्षण किया गया है?';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NO = 'नहीं, मैंने एंटीबॉडी परीक्षण नहीं किया है।';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NODIFFERENTTEST = 'नहीं, लेकिन मैंने एक अलग प्रकार का परीक्षण किया';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESPOSITIVE = 'हाँ और मैं सकारात्मक था';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESNEGATIVE = 'हां, लेकिन मुझे नकारात्मक परिणाम मिला।';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESDONTKNOW = 'हां, लेकिन मुझे इसका परिणाम नहीं पता है।';
lang.COVIDTESTING_ANTIBODYTESTDATEQUESTION_TEXT = 'आपने किस तारीख को परीक्षा दी?';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_TEXT = 'यदि आपके पास COVID-19 था, तो आपने किस प्रकार का एंटीबॉडी परीक्षण किया था?';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_RAPIDANTIBODY = 'एंटीबॉडीज के लिए तीव्र रक्त परीक्षण (पार्श्व प्रवाह इम्युनोसे)';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_SENTBLOODLABTEST = 'प्रयोगशाला एंटीबॉडी विश्लेषण के लिए रक्त भेजना।';
lang.ANTIBODYTEST_PAGE_TITLE = 'एंटीबॉडी परीक्षण';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_TEXT = 'आपका परीक्षा परिणाम कैसा दिखा?';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C = 'केवल सी';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGG = 'सी और आईजीजी';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM = 'सी और आईजीएम';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM_IGG = 'सी, आईजीएम और आईजीजी';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG = 'केवल IgG (C नहीं)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGM = 'केवल IgM (कोई C)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG_IGM = 'केवल आईजीजी और आईजीएम (सी के बिना)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NOLINES = 'कोई नहीं, कोई रेखा नहीं';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NONEOFABOVE = 'इनमे से कोई भी नहीं';
lang.ANITBODYTEST_UPLOADPHOTOQUESTION_TEXT = 'सीधे ऊपर से लिए गए एंटीबॉडी परीक्षण की एक तस्वीर अपलोड करें, यहां तक ​​कि प्रकाश व्यवस्था के साथ भी ताकि परीक्षण कैसेट स्क्रीन भरता है (जैसा कि नीचे दिखाया गया है)।';
lang.OTHERTESTS_PAGE_TITLE = 'अन्य परीक्षण';
lang.OTHERTESTS_LABANTIBODYTESTQUESTION_TEXT = 'क्या आपने प्रयोगशाला एंटीबॉडी परीक्षण के लिए रक्त भेजा था?';
lang.OTHERTESTS_SWABTESTQUESTION_TEXT = 'क्या आपने पीसीआर के लिए थूक / नाक / गला का नमूना लिया है?';
lang.OTHERTESTS_VIRALANTIGENQUESTION_TEXT = 'क्या आपने वायरल प्रतिजन परीक्षण किया है?';
lang.OTHERTESTS_XRAYQUESTION_TEXT = 'क्या आपने एक्स-रे / सीटी टेस्ट करवाया है?';
lang.OTHERTESTS_DOCTORSDIAGNOSISQUESTION_TEXT = 'क्या आपका कोई चिकित्सकीय निदान हुआ है?';
lang.OTHERTESTS_DIDNOTDOOPTION_TEXT = 'नहीं किया';
lang.OTHERTESTS_NEGATIVEOPTION_TEXT = 'नकारात्मक परिणाम';
lang.OTHERTESTS_POSITIVEOPTION_TEXT = 'सकारात्मक परिणाम';
lang.OTHERTESTS_UNKNOWNOPTION_TEXT = 'अज्ञात परिणाम';
lang.EMAILCONSENT_PAGE_TITLE = 'आखिरी सवाल';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_TEXT = 'यदि आप पूरी तरह से ठीक हो गए हैं, तो प्लाज्मा दान करने के लिए, या यदि आप कोरोनावायरस से प्रतिरक्षा कर रहे हैं, तो क्या आप इस बात की पुष्टि करने में मदद करने के लिए अध्ययन, परीक्षण कार्यक्रम या परीक्षण के बारे में जानने में रुचि रखते हैं?';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDMOREINFO = 'रुचि है, जब आपको पता चले तो मुझे और जानकारी भेजें';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDNOINFO = 'रुचि है, लेकिन कृपया मुझे जानकारी न भेजें';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_NOTINTERESTED = 'नहीं, मुझे कोई दिलचस्पी नहीं है';
lang.EMAILCONSENT_EMAILADDRESSQUESTION_TEXT = 'कृपया अपना ईमेल पता नीचे छोड़ दें';
lang.RESULT_PAGE_TITLE = 'Thank You!';
lang.RESULT_PAGE_TEXT = 'You will receive your results by email shortly.';

export default lang;
