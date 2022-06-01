import { I18N } from './i18n';

// ignore warning as we are defining it lazily
const lang: I18N = {} as I18N;

lang.GLOBAL_LABEL_YES = 'হ্যাঁ';
lang.GLOBAL_LABEL_NO = 'না';
lang.GLOBAL_LABEL_DO_NOT_KNOW = 'আমি জানি না / মনে করতে পারছি না';
lang.GLOBAL_LABEL_NEXT = 'পরবর্তী';
lang.GLOBAL_LABEL_BACK = 'পেছনে';
lang.GLOBAL_LABEL_NONE = 'না';
lang.GLOBAL_LABEL_SUBMIT = 'জমা দিন';
lang.GLOBAL_FORMVALIDATION_REQUIRED = 'প্রয়োজনীয়';
lang.GLOBAL_FORMVALIDATION_EMAIL = 'একটি বৈধ ইমেইল ঠিকানা লিখুন';
lang.GLOBAL_ERROR_FORMSUBMISSION = 'There was an error submitting the form.';
lang.MAINPAGE_PAGE_TITLE = 'হাই, স্বাগতম কোডি';
lang.MAINPAGE_PAGE_TEXT = 'নীচের বিকল্পগুলি থেকে নির্বাচন করুন:';
lang.MAINPAGE_PAGE_QUESTIONNAIRE = 'উত্তর প্রশ্নোত্তর';
lang.MAINPAGE_PAGE_VIDEO_INSTRUCTIONS = 'ভিডিও নির্দেশাবলী দেখুন';
lang.MAINPAGE_PAGE_TEST_IMAGE = 'পরীক্ষার চিত্র আপলোড করুন';
lang.GENERALINFORMATION_PAGE_TITLE = 'সাধারণ জ্ঞাতব্য';
lang.GENERALINFORMATION_GENDERQUESTION_TEXT = 'জন্মের সময় আপনাকে কোন লিখিত নিয়োগ দেওয়া হয়েছিল?';
lang.GENERALINFORMATION_GENDERQUESTION_MALE = 'পুরুষ';
lang.GENERALINFORMATION_GENDERQUESTION_FEMALE = 'মহিলা';
lang.GENERALINFORMATION_GENDERQUESTION_OTHER = 'অন্যান্য / না বলা পছন্দ';
lang.GENERALINFORMATION_AGEQUESTION_TEXT = 'আপনার বয়স গ্রুপ কি?';
lang.GENERALINFORMATION_AGEQUESTION_NOT_TO_SAY = 'আমি না বলতে পছন্দ করি';
lang.GENERALINFORMATION_HEALTHQUESTION_TEXT = 'তোমার শারীরিক অবস্থা কি?';
lang.GENERALINFORMATION_HEALTHQUESTION_RARELY_ILL = 'আমি খুব ফিট এবং খুব কমই অসুস্থ';
lang.GENERALINFORMATION_HEALTHQUESTION_FITTER_AND_HEALTHIER = 'আমি গড়ের চেয়ে ফিটার এবং স্বাস্থ্যকর am';
lang.GENERALINFORMATION_HEALTHQUESTION_LESS_FIT_AND_HEALTHY = 'আমি গড়ের তুলনায় কম ফিট এবং স্বাস্থ্যবান';
lang.GENERALINFORMATION_HEALTHQUESTION_NOT_HEALTHY = 'আমি মোটেও স্বাস্থ্যবান নই';
lang.GENERALINFORMATION_COMMONQUESTION_TEXT = 'নিচের কোনটি আপনার কাছে প্রয়োগ / প্রয়োগ আছে?';
lang.GENERALINFORMATION_COMMONQUESTION_NONE = 'নিচের কোনটিই নয়';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_HEART_CONDITION = 'হালকা হার্টের অবস্থা';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_HEART_CONDITION = 'দীর্ঘস্থায়ী হার্টের অবস্থা';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_LUNG_PROBLEM = 'হালকা হাঁপানির মতো হালকা ফুসফুসের সমস্যা';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_LUNG_PROBLEMS = 'দীর্ঘস্থায়ী ফুসফুসের সমস্যা';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_DIABETES = 'হালকা বা বর্ডারলাইন ডায়াবেটিস';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_DIABETES = 'দীর্ঘস্থায়ী ডায়াবেটিস';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_LAST_5_YEARS = 'সাম্প্রতিক (সর্বশেষ 5 বছর) চেমো দিয়ে ক্যান্সারের চিকিত্সা';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_OVER_5_YEARS_AGO = 'কেমো দিয়ে গত ক্যান্সারের চিকিত্সা (5 বছরেরও বেশি আগে)';
lang.GENERALINFORMATION_COMMONQUESTION_KIDNEY = 'হ্রাস কিডনি ফাংশন';
lang.GENERALINFORMATION_COMMONQUESTION_LIVER = 'দীর্ঘস্থায়ী লিভার রোগ';
lang.GENERALINFORMATION_COMMONQUESTION_IMMUNOSUPPRESSANT = 'আমি ইমিউনোসপ্রেসেন্ট ড্রাগ ব্যবহার করি';
lang.GENERALINFORMATION_COMMONQUESTION_PREGNANT = 'আমি গর্ভবতী';
lang.GENERALINFORMATION_FLUQUESTION_TEXT = 'আপনি কি গত বছর ফ্লু শট পেয়েছিলেন?';
lang.LOCATIONANDTRAVEL_PAGE_TITLE = 'অবস্থান এবং ভ্রমণ';
lang.LOCATIONANDTRAVEL_COUNTRYQUESTION_TEXT = 'আপনি এখন কোথায় থাকেন?';
lang.LOCATIONANDTRAVEL_ZIPCODEQUESTION_TEXT = 'দয়া করে আপনার পোস্টকোড / জিপকোডের কেবল প্রথম তিনটি অক্ষর বা সংখ্যা লিখুন।';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_TEXT = '2020 সালের জানুয়ারী থেকে আপনি কি অন্য কোনও দেশে ভ্রমণ করেছেন?';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_BEFORE_LOCKDOWN = 'হ্যাঁ, তারা "লকডাউন" করার আগে';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_WHILE_LOCKDOWN = 'হ্যাঁ, তারা "লকডাউন" অবস্থায় ছিল';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_AFTER_LOCKDOWN = 'হ্যাঁ, তারা "লকডাউন" থেকে বেরিয়ে আসার পরে';
lang.LOCATIONANDTRAVEL_FORMVALIDATION_THREECHARACTERS = 'ঠিক 3 অক্ষর লিখুন দয়া করে';
lang.TAKEPHOTO_PAGE_HEADER = 'ফটো পৃষ্ঠা নিন';
lang.TAKEPHOTO_PAGE_BTN = 'ছবি তোল';
lang.TRAVELCONTINUED_PAGE_TITLE = 'ভ্রমণ অব্যাহত';
lang.TRAVELCONTINUED_VISITEDCOUNTRY_TEXT = '2020 সালের 1 জানুয়ারীর পরে আপনি কোন দেশগুলিতে ভ্রমণ করেছেন? (আপনি যদি একাধিক দেশে যান তবে দয়া করে এমন একটি বেছে নিন যেখানে আপনি মনে করেন যে আপনি COVID-19 ধরতে পারেন বা এটির ঝুঁকির ঝুঁকি সবচেয়ে বেশি ছিল)';
lang.TRAVELCONTINUED_VISITEDENTERDATE_TEXT = 'আপনি কোন দেশে প্রবেশ করেছিলেন?';
lang.TRAVELCONTINUED_VISITEDLEAVEDATE_TEXT = 'আপনি কোন দেশটি ছেড়ে চলে গেলেন?';
lang.EXPOSURERISK_PAGE_TITLE = 'এক্সপোজার ঝুঁকি';
lang.EXPOSURERISK_GOTOWORKQUESTION_TEXT = 'আপনি কি আপনার দেশের লকডাউনের সময় কাজ করতে গিয়েছিলেন?';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_FEW_PEOPLE = 'হ্যাঁ, তবে আমি প্রতিদিন কিছু লোকের সাথে আলাপ করেছি';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE = 'হ্যাঁ, এবং আমি প্রতিদিন অনেক লোকের সাথে আলাপ করেছি';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE_HEALTHCARE = 'হ্যাঁ, এবং আমি স্বাস্থ্যসেবা সেটিংয়ে প্রতিদিন অনেক লোক / রোগীর সাথে আলাপচারিতা করেছি।';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TEXT = 'আপনি আপনার বাড়ির বাইরে COVID-19 ধরা এড়াতে কী করেছিলেন?';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_DISTANCE = 'আমি সবসময় লোকদের থেকে 6 ফুট / 2 মিটার দূরত্বে রাখি।';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_MASK = 'আমি সবসময় মুখোশ / মুখ coveringাকতাম।';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TIME_LIMITE = 'আমি কখনই অন্যের সাথে 30 মিনিটের বেশি বাড়ির ভিতরে / যানবাহনে কাটিনি spent';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_HYGIENE = 'আমি প্রায়শই আমার হাত ধোয়া এবং খুব কমই আমার মুখ স্পর্শ।';
lang.EXPOSURERISK_SPENDTIMEQUESTION_TEXT = 'আপনার বাড়ির বাইরে আপনি কি কারও সাথে সময় কাটিয়েছেন যার বা বিকাশের খুব শীঘ্রই ...?';
lang.EXPOSURERISK_SPENDTIMEQUESTION_CONFIRMED_COVID = 'নিশ্চিত COVID-19 (ইতিবাচক রোগ নির্ণয়)';
lang.EXPOSURERISK_SPENDTIMEQUESTION_POSSIBLE_COVID = 'সম্ভাব্য COVID-19 উপসর্গ';
lang.EXPOSURERISK_SPENDTIMEQUESTION_NONE = 'উপরের কেউই না';
lang.EXPOSURERISK_PEOPLELIVEWITHQUESTION_TEXT = 'আপনি কত লোকের সাথে বাস করেন? (দয়া করে একটি সংখ্যা টাইপ করুন, উদাহরণস্বরূপ 2)';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_TEXT = 'আপনি কি মনে করেন আপনার বাড়ির কারও কাছে কভিড -19 থাকতে পারে?';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_POSSIBLE = 'হ্যাঁ, সম্ভবত';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_DEFINITELY = 'হ্যাঁ, অবশ্যই (ইতিবাচক পরীক্ষার ফলাফল)';
lang.ILLHOUSEMATES_PAGE_TITLE = 'অসুস্থ হাউসমেট';
lang.ILLHOUSEMATES_NUMBERILLQUESTION_TEXT = 'আপনি কয়টি লোকের সাথে বাস করছেন তাদের কওআইডি -19 উপসর্গগুলি সম্ভব হয়েছিল? দয়া করে একটি সংখ্যা টাইপ করুন, উদাঃ 2';
lang.ILLHOUSEMATES_FIRSTILLDATEQUESTION_TEXT = 'আপনার বাড়ির প্রথম ব্যক্তি কখন অসুস্থ হয়ে পড়েছিলেন?';
lang.WEREYOUILL_PAGE_TITLE = 'আপনি কি কখনও অসুস্থ ছিলেন?';
lang.WEREYOUILL_WEREYOUILLQUESTION_TEXT = '2020 সালের জানুয়ারী থেকে আপনি কি আদৌ অসুস্থ বোধ করছেন? (আপনি যদি না বলেন, আপনাকে লক্ষণ সম্পর্কে জিজ্ঞাসা করা হবে না)';
lang.WEREYOUILL_WEREYOUILLQUESTION_NOIMFINE = 'না আমি ঠিক আছি. 2020 সালের জানুয়ারী থেকে আমি মোটেই অসুস্থ বোধ করিনি';
lang.WEREYOUILL_WEREYOUILLQUESTION_BEGINNINGFEELILL = 'আমি অসুস্থ বোধ শুরু করছি';
lang.WEREYOUILL_WEREYOUILLQUESTION_QUITEILL = 'আমি এখন বেশ অসুস্থ বোধ করছি';
lang.WEREYOUILL_WEREYOUILLQUESTION_VERYILL = 'আমি খুব অসুস্থ বোধ করছি';
lang.WEREYOUILL_WEREYOUILLQUESTION_ILLFEELINGBETTER = 'আমি এখনও অসুস্থ কিন্তু ভাল বোধ করছি';
lang.WEREYOUILL_WEREYOUILLQUESTION_RECOVERINGFEELINGWORSE = 'আমি সুস্থ হয়ে উঠছিলাম, কিন্তু এখন আবার খারাপ লাগছে';
lang.WEREYOUILL_WEREYOUILLQUESTION_FULLYRECOVERD = 'হ্যাঁ, তবে আমি পুরোপুরি সুস্থ হয়ে উঠছি feel';
lang.YOURSYMPTOMS_PAGE_TITLE = 'আপনার লক্ষণগুলি';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_TEXT = 'নিম্নলিখিত উপসর্গগুলির মধ্যে কোনটি আপনার / আপনার কি আছে?';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_NOSYMPTOMS = 'কোনও লক্ষণ নেই';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_REALLYTIRED = 'সত্যিই ক্লান্ত';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_AHEADACHE = 'মাথা ব্যাথা';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_ACHYJOINTS = 'আচি জোড় এবং / বা পেশী';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SORETHROAT = 'গলা খারাপ';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CONGESTEDNOSE = 'জঞ্জাল নাক';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_RUNNYNOSE = 'সর্দি';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_DRYCOUGH = 'শুকনো কাশি';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_COUGHSPUTUM = 'থুতনিযুক্ত কাশি';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SNEEZING = 'হাঁচি';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_FEVER = 'জ্বর';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CHILLS = 'শরীর ঠান্ডা হয়ে যাওয়া';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_LOSSOFTASTE = 'স্বাদ / গন্ধ অনুভূতি হ্রাস';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SHORTOFBREATH = 'একটু নিঃশ্বাস';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_STOMACHDISTURBANCE = 'পেটের ব্যাঘাত / ডায়রিয়া';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_VOMITING = 'বমি / বমি বমি ভাব';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SKINRASH = 'চামড়া ফুসকুড়ি';
lang.YOURSYMPTOMS_HOWHARDTOBREATHQUESTION_TEXT = 'আপনি কতটা শক্ত হয়েছিলেন, বা শ্বাস নিতেও খুঁজে পেয়েছেন? (2 = শ্বাসকষ্টের হালকা শ্বাসকষ্ট, 8 = শ্বাসকষ্ট হওয়া)';
lang.YOURSYMPTOMS_HOWBADDIDYOUFEELQUESTION_TEXT = 'আপনি কতটা খারাপ লেগেছে, বা আপনি সামগ্রিকভাবে অনুভব করছেন? (2 = কেবল সামান্য অসুস্থ, 8 = গুরুতর অসুস্থ / হাসপাতালে গেছেন)';
lang.YOURSYMPTOMS_HOWANXIOUSWEREYOUQUESTION_TEXT = 'আপনি COVID19 সম্পর্কে কতটা উদ্বিগ্ন ছিলেন? (2 = একটু উদ্বিগ্ন, 8 = খুব উদ্বিগ্ন)';
lang.YOURSYMPTOMS_FIRSTSYMPTOMSDATEQUESTION_TEXT = 'আপনি কখন প্রথম লক্ষণগুলির অভিজ্ঞতা পেয়েছিলেন?';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TEXT = 'আপনি কতক্ষণ অসুস্থ বোধ করেছেন / এর লক্ষণগুলি পেয়েছেন?';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_FEWDAYS = 'কয়েক দিন বা তারও কম সময়';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_LESSTHANONEWEEK = 'এক সপ্তাহেরও কম';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_ONETOTWOWEEKS = 'এক থেকে দুই সপ্তাহ';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TWOTOTHREEWEEKS = 'দুই থেকে তিন সপ্তাহ';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_MORETHANTHREEWEEKS = 'তিন সপ্তাহের বেশি';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_IMSTILLILL = 'আমি এখনও অসুস্থ!';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_TEXT = 'আপনি কি মনে করেন যে আপনি করোনভাইরাস / কওআইডি -19 সংক্রামিত হয়েছেন?';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_NOWAY = 'কোনভাবেই না';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_SMALLCHANCE = 'একটি ছোট সুযোগ (25% নিশ্চিত)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_REASONABLECHANCE = 'একটি যুক্তিসঙ্গত সুযোগ (~ 50% নিশ্চিত)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_PRETTYSURE = 'বেশ নিশ্চিত (~ 75% নিশ্চিত)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_ABSOLUTELYCONVINCED = 'সম্পূর্ণরূপে নিশ্চিত (~ 90% + নিশ্চিত)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESTESTEDPOSITIVE = 'হ্যাঁ, 100%: আমি ইতিবাচক পরীক্ষা করেছি';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESHOSPITAL = 'হ্যাঁ, 100%: আমি হাসপাতালে চিকিৎসা করছিলাম';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESINTENSIVECARE = 'হ্যাঁ, 100%: নিবিড় যত্নে আমার চিকিত্সা করা হয়েছিল';
lang.COVIDTESTING_PAGE_TITLE = 'কভিড পরীক্ষা';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_TEXT = 'আপনার কাছে কভিআইডি -19 আছে কিনা তা পরীক্ষা করার জন্য আপনি অ্যান্টিবডি পরীক্ষা করেছেন?';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NO = 'না, আমি অ্যান্টিবডি পরীক্ষা করিনি';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NODIFFERENTTEST = 'না, তবে আমি ভিন্ন ধরণের পরীক্ষা করেছিলাম';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESPOSITIVE = 'হ্যাঁ, এবং আমি ইতিবাচক পরীক্ষা করেছি';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESNEGATIVE = 'হ্যাঁ, তবে আমি নেগেটিভ পরীক্ষা করেছি';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESDONTKNOW = 'হ্যাঁ, তবে আমি ফলাফল জানি না';
lang.COVIDTESTING_ANTIBODYTESTDATEQUESTION_TEXT = 'আপনি কোন তারিখটি পরীক্ষা দিয়েছিলেন?';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_TEXT = 'আপনার কাছে COVID-19 আছে কিনা তা দেখতে আপনি কোন ধরণের অ্যান্টিবডি পরীক্ষা করেছিলেন?';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_RAPIDANTIBODY = 'দ্রুত অ্যান্টিবডি রক্ত ​​পরীক্ষা (পার্শ্বীয় প্রবাহ ইমিউনোসায়)';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_SENTBLOODLABTEST = 'পরীক্ষাগার অ্যান্টিবডি পরীক্ষার জন্য রক্ত ​​প্রেরণ করা হয়েছে';
lang.ANTIBODYTEST_PAGE_TITLE = 'অ্যান্টিবডি পরীক্ষা';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_TEXT = 'আপনার পরীক্ষার ফলাফলটি কেমন দেখাচ্ছে?';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C = 'কেবল সি';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGG = 'সি এবং আইজিজি';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM = 'সি এবং আইজিএম';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM_IGG = 'সি, আইজিএম এবং আইজিজি';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG = 'কেবল আইজিজি (কোনও সি নেই)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGM = 'কেবল আইজিএম (কোনও সি নেই)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG_IGM = 'কেবল আইজিজি এবং আইজিএম (কোনও সি নেই)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NOLINES = 'কোনটিই নয়, কোনও লাইন নেই';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NONEOFABOVE = 'উপরের কেউই না';
lang.ANITBODYTEST_UPLOADPHOTOQUESTION_TEXT = 'সরাসরি আলো দিয়ে এমনকি উপরে থেকে নেওয়া অ্যান্টিবডি পরীক্ষার ফটো আপলোড করুন যাতে পরীক্ষার ক্যাসেটটি স্ক্রিনটি পূরণ করে (নীচের মত)।';
lang.OTHERTESTS_PAGE_TITLE = 'অন্যান্য পরীক্ষা';
lang.OTHERTESTS_LABANTIBODYTESTQUESTION_TEXT = 'আপনি কি পরীক্ষাগার অ্যান্টিবডি পরীক্ষার জন্য রক্ত ​​প্রেরণ করেছিলেন?';
lang.OTHERTESTS_SWABTESTQUESTION_TEXT = 'আপনি কি পিসিআর এর জন্য একটি স্পুটাম / নাসিকাল / গলা swab করেছেন?';
lang.OTHERTESTS_VIRALANTIGENQUESTION_TEXT = 'আপনি কি ভাইরাল অ্যান্টিজেন পরীক্ষা করেছেন?';
lang.OTHERTESTS_XRAYQUESTION_TEXT = 'আপনার কি এক্স-রে / সিটি স্ক্যান পরীক্ষা আছে?';
lang.OTHERTESTS_DOCTORSDIAGNOSISQUESTION_TEXT = 'আপনার কি কোনও ডাক্তারের সনাক্তকরণ আছে?';
lang.OTHERTESTS_DIDNOTDOOPTION_TEXT = 'করেছিল না';
lang.OTHERTESTS_NEGATIVEOPTION_TEXT = 'নেতিবাচক ফলাফল';
lang.OTHERTESTS_POSITIVEOPTION_TEXT = 'ইতিবাচক ফলাফল';
lang.OTHERTESTS_UNKNOWNOPTION_TEXT = 'অজানা ফলাফল';
lang.EMAILCONSENT_PAGE_TITLE = 'চূড়ান্ত প্রশ্ন';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_TEXT = 'আপনি পুরোপুরি সেরে উঠেছে কিনা তা নিশ্চিত করতে সহায়তা করার জন্য, প্লাজমা দান করার জন্য, বা আপনি যদি করোনা ভাইরাস প্রতিরোধক হতে পারেন তবে কোনও গবেষণা, পরীক্ষার প্রোগ্রাম বা পরীক্ষাগুলি সম্পর্কে জানতে আগ্রহী হবেন?';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDMOREINFO = 'আগ্রহী, আপনি এটি সম্পর্কে শুনে আমাকে আরও তথ্য প্রেরণ করুন';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDNOINFO = 'আগ্রহী, কিন্তু কোনও তথ্য দয়া করে';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_NOTINTERESTED = 'না, আগ্রহী নয়';
lang.EMAILCONSENT_EMAILADDRESSQUESTION_TEXT = 'নীচে আপনার ইমেল ঠিকানা ছেড়ে দিন';
lang.RESULT_PAGE_TITLE = 'Thank You!';
lang.RESULT_PAGE_TEXT = 'You will receive your results by email shortly.';

export default lang;