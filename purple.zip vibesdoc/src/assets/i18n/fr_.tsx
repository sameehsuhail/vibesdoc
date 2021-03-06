import { I18N } from './i18n';

// ignore warning as we are defining it lazily
const lang: I18N = {} as I18N;

lang.GLOBAL_LABEL_YES = 'Oui';
lang.GLOBAL_LABEL_NO = 'ne pas';
lang.GLOBAL_LABEL_DO_NOT_KNOW = 'Je ne sais pas, je ne me souviens pas';
lang.GLOBAL_LABEL_NEXT = 'Suivant';
lang.GLOBAL_LABEL_BACK = 'Retour';
lang.GLOBAL_LABEL_NONE = 'Aucun';
lang.GLOBAL_LABEL_SUBMIT = 'Soumettre';
lang.GLOBAL_FORMVALIDATION_REQUIRED = 'Obligatoire';
lang.GLOBAL_FORMVALIDATION_EMAIL = 'S\'il vous plaît, veuillez entrer une adresse email valide';
lang.GLOBAL_ERROR_FORMSUBMISSION = 'There was an error submitting the form.';
lang.MAINPAGE_PAGE_TITLE = 'Bonjour, bienvenue sur Codi';
lang.MAINPAGE_PAGE_TEXT = 'Sélectionnez l\'une des options suivantes:';
lang.MAINPAGE_PAGE_QUESTIONNAIRE = 'Répondre au questionnaire';
lang.MAINPAGE_PAGE_VIDEO_INSTRUCTIONS = 'Voir les instructions vidéo';
lang.MAINPAGE_PAGE_TEST_IMAGE = 'Télécharger l\'image du test anticorps';
lang.GENERALINFORMATION_PAGE_TITLE = 'Informations générales';
lang.GENERALINFORMATION_GENDERQUESTION_TEXT = 'Quel sexe vous a-t-on attribué à la naissance?';
lang.GENERALINFORMATION_GENDERQUESTION_MALE = 'Homme';
lang.GENERALINFORMATION_GENDERQUESTION_FEMALE = 'Femme';
lang.GENERALINFORMATION_GENDERQUESTION_OTHER = 'Autre / je préfère ne pas le dire';
lang.GENERALINFORMATION_AGEQUESTION_TEXT = 'Quel est votre groupe d\'âge?';
lang.GENERALINFORMATION_AGEQUESTION_NOT_TO_SAY = 'Je préfère ne pas dire';
lang.GENERALINFORMATION_HEALTHQUESTION_TEXT = 'Comment vous portez-vous?';
lang.GENERALINFORMATION_HEALTHQUESTION_RARELY_ILL = 'Je suis très en forme et je tombe rarement malade';
lang.GENERALINFORMATION_HEALTHQUESTION_FITTER_AND_HEALTHIER = 'Je suis plus en forme et en meilleure santé que la moyenne';
lang.GENERALINFORMATION_HEALTHQUESTION_LESS_FIT_AND_HEALTHY = 'Je suis moins en forme et moins en bonne santé que la moyenne';
lang.GENERALINFORMATION_HEALTHQUESTION_NOT_HEALTHY = 'Je ne suis pas en très bonne santé';
lang.GENERALINFORMATION_COMMONQUESTION_TEXT = 'Lesquels des éléments suivants s\'appliquent à votre condition?';
lang.GENERALINFORMATION_COMMONQUESTION_NONE = 'Aucun des éléments suivants';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_HEART_CONDITION = 'Cardiopathie légère';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_HEART_CONDITION = 'Maladie cardiaque chronique';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_LUNG_PROBLEM = 'Problème pulmonaire léger comme un asthme léger';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_LUNG_PROBLEMS = 'Problèmes pulmonaires chroniques';
lang.GENERALINFORMATION_COMMONQUESTION_MILD_DIABETES = 'Diabète léger ou borderline';
lang.GENERALINFORMATION_COMMONQUESTION_CHRONIC_DIABETES = 'Diabète chronique';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_LAST_5_YEARS = 'Traitement récent (5 dernières années) du cancer par chimiothérapie';
lang.GENERALINFORMATION_COMMONQUESTION_CHEMO_OVER_5_YEARS_AGO = 'Traitement du cancer dans le passé (il y a plus de 5 ans) avec chimiothérapie';
lang.GENERALINFORMATION_COMMONQUESTION_KIDNEY = 'Fonction rénale réduite';
lang.GENERALINFORMATION_COMMONQUESTION_LIVER = 'Maladie chronique du foie';
lang.GENERALINFORMATION_COMMONQUESTION_IMMUNOSUPPRESSANT = 'Je prends des médicaments immunosuppresseurs';
lang.GENERALINFORMATION_COMMONQUESTION_PREGNANT = 'Je suis enceinte';
lang.GENERALINFORMATION_FLUQUESTION_TEXT = 'Avez-vous reçu un vaccin contre la grippe pour cette saison?';
lang.LOCATIONANDTRAVEL_PAGE_TITLE = 'Localisation et voyage';
lang.LOCATIONANDTRAVEL_COUNTRYQUESTION_TEXT = 'Où vous vivez actuellement?';
lang.LOCATIONANDTRAVEL_ZIPCODEQUESTION_TEXT = 'Saisissez uniquement les trois premières lettres ou chiffres de votre code postal.';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_TEXT = 'Avez-vous voyagé dans d\'autres pays depuis le 1er janvier 2020?';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_BEFORE_LOCKDOWN = 'Oui, avant qu\'ils ne déclarent un  "état/arrêt d\'urgence"';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_WHILE_LOCKDOWN = 'Oui, alors qu\'ils étaient en  "arrêt d\'urgence"';
lang.LOCATIONANDTRAVEL_TRAVELQUESTION_AFTER_LOCKDOWN = 'Oui, après leur sortie de "l\'arrêt d\'urgence"';
lang.LOCATIONANDTRAVEL_FORMVALIDATION_THREECHARACTERS = 'Veuillez saisir exactement 3 caractères';
lang.TAKEPHOTO_PAGE_HEADER = 'Page de prise de photo';
lang.TAKEPHOTO_PAGE_BTN = 'Prendre la photo';
lang.TRAVELCONTINUED_PAGE_TITLE = 'Voyage (suite)';
lang.TRAVELCONTINUED_VISITEDCOUNTRY_TEXT = 'Quels pays avez-vous visités depuis le 1er janvier 2020? (Si vous êtes allé dans plusieurs pays, choisissez celui où, selon vous,  vous auriez eu le plus grand risque de contracter le COIVD-19.)';
lang.TRAVELCONTINUED_VISITEDENTERDATE_TEXT = 'À quelle date êtes-vous entré dans ce pays?';
lang.TRAVELCONTINUED_VISITEDLEAVEDATE_TEXT = 'À quelle date avez-vous quitté ce pays?';
lang.EXPOSURERISK_PAGE_TITLE = 'Risque d\'exposition';
lang.EXPOSURERISK_GOTOWORKQUESTION_TEXT = 'Êtes-vous allé travailler pendant la durée de confinement de votre pays?';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_FEW_PEOPLE = 'Oui, mais j\'ai interagi avec peu de gens par jour.';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE = 'Oui, et j\'ai interagi avec de nombreuses personnes par jour.';
lang.EXPOSURERISK_GOTOWORKQUESTION_YES_MANY_PEOPLE_HEALTHCARE = 'Oui, et j\'ai interagi avec de nombreuses personnes / patients par jour dans le cadre de soins de santé.';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TEXT = 'Qu\'avez-vous fait pour éviter de propager le COVID-19?';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_DISTANCE = 'J\'ai toujours gardé une distance d\'au moins 2 mètres avec les autres.';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_MASK = 'J\'ai toujours porté un masque / une protection faciale.';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_TIME_LIMITE = 'Je n\'ai jamais passé plus de 30 minutes à l\'intérieur/ dans un véhicule avec d\'autres gens.';
lang.EXPOSURERISK_AVOIDCATCHINGQUESTION_HYGIENE = 'Je me lave fréquemment les mains et je me touche rarement le visage.';
lang.EXPOSURERISK_SPENDTIMEQUESTION_TEXT = 'En dehors de votre domicile, avez-vous passé du temps avec quelqu\'un qui présentait/a développé des symptômes peu de temps après?';
lang.EXPOSURERISK_SPENDTIMEQUESTION_CONFIRMED_COVID = 'COVID-19 confirmé (diagnostic positif)';
lang.EXPOSURERISK_SPENDTIMEQUESTION_POSSIBLE_COVID = 'Symptômes possibles de COVID-19';
lang.EXPOSURERISK_SPENDTIMEQUESTION_NONE = 'Aucune de ces réponses';
lang.EXPOSURERISK_PEOPLELIVEWITHQUESTION_TEXT = 'Avec combien de personnes vivez-vous? Veuillez entrer un chiffre (par exemple 2).';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_TEXT = 'Pensez-vous que quelqu\'un dans votre maison aurait pu avoir le COVID-19?';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_POSSIBLE = 'Oui peut-être';
lang.EXPOSURERISK_POSSIBLEVIRUSQUESTION_YES_DEFINITELY = 'Oui, certainement (résultat de test positif)';
lang.ILLHOUSEMATES_PAGE_TITLE = 'Colocataires malades';
lang.ILLHOUSEMATES_NUMBERILLQUESTION_TEXT = 'Parmi les personnes avec qui vous vivez, combien d\'entre elles  ont présenté des symptômes possibles de COVID-19? Veuillez entrer un nombre (par exemple 2).';
lang.ILLHOUSEMATES_FIRSTILLDATEQUESTION_TEXT = 'Parmi les membres de votre foyer,  à quelle date la première personne est-elle tombée malade?';
lang.WEREYOUILL_PAGE_TITLE = 'Avez-vous déjà été malade?';
lang.WEREYOUILL_WEREYOUILLQUESTION_TEXT = 'Vous êtes-vous senti mal depuis janvier 2020? (Si vous répondez par la négative, vous ne serez pas interrogé sur les symptômes.)';
lang.WEREYOUILL_WEREYOUILLQUESTION_NOIMFINE = 'Je ne vais pas bien. Je ne me sens pas mal depuis janvier 2020';
lang.WEREYOUILL_WEREYOUILLQUESTION_BEGINNINGFEELILL = 'Je commence à me sentir malade';
lang.WEREYOUILL_WEREYOUILLQUESTION_QUITEILL = 'Je me sens assez malade en ce moment';
lang.WEREYOUILL_WEREYOUILLQUESTION_VERYILL = 'Je me sens très malade';
lang.WEREYOUILL_WEREYOUILLQUESTION_ILLFEELINGBETTER = 'Je suis toujours malade mais je me sens mieux';
lang.WEREYOUILL_WEREYOUILLQUESTION_RECOVERINGFEELINGWORSE = 'J\'étais en train de me remettre, mais maintenant je me sens à nouveau malade';
lang.WEREYOUILL_WEREYOUILLQUESTION_FULLYRECOVERD = 'Oui, mais je me sens complètement rétabli.';
lang.YOURSYMPTOMS_PAGE_TITLE = 'Vos symptômes';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_TEXT = 'Lequel des symptômes suivants présentez-vous / avez-vous ressenti?';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_NOSYMPTOMS = 'Aucun symptôme';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_REALLYTIRED = 'Vraiment fatigué';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_AHEADACHE = 'Un mal de tête';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_ACHYJOINTS = 'Douleurs articulaires et / ou musculaires';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SORETHROAT = 'Mal de gorge';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CONGESTEDNOSE = 'Nez encombré';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_RUNNYNOSE = 'Nez qui coule';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_DRYCOUGH = 'Toux sèche';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_COUGHSPUTUM = 'Toux avec crachats';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SNEEZING = 'Éternuements';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_FEVER = 'Fièvre';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_CHILLS = 'Frissons';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_LOSSOFTASTE = 'Perte du goût / de l\'odorat.';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SHORTOFBREATH = 'Difficulté à respirer';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_STOMACHDISTURBANCE = 'Maux d\'estomac / diarrhée';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_VOMITING = 'Vomissements / nausées';
lang.YOURSYMPTOMS_WHICHSYMPTOMSQUESTION_SKINRASH = 'Urticaire ou allergies cutanées';
lang.YOURSYMPTOMS_HOWHARDTOBREATHQUESTION_TEXT = 'Sur une échelle de 1 à 10, combien vous a-t-il été (ou est-il encore) difficile de respirer? (2 = essoufflement léger, 8 = essoufflement grave)';
lang.YOURSYMPTOMS_HOWBADDIDYOUFEELQUESTION_TEXT = 'Sur une échelle de 1 à 10,  combien vous êtes-vous senti mal ou vous êtes-vous senti en général? (2 = seulement légèrement malade, 8 = gravement malade / allé à l\'hôpital)';
lang.YOURSYMPTOMS_HOWANXIOUSWEREYOUQUESTION_TEXT = 'Dans quelle mesure aviez-vous / voulez-vous COVID19? (2 = un peu anxieux, 8 = très anxieux)';
lang.YOURSYMPTOMS_FIRSTSYMPTOMSDATEQUESTION_TEXT = 'Quand avez-vous ressenti les premiers symptômes?';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TEXT = 'Depuis combien de temps vous sentez-vous malade / présentez-vous des symptômes?';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_FEWDAYS = 'Quelques jours ou moins';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_LESSTHANONEWEEK = 'Moins d\'une semaine';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_ONETOTWOWEEKS = 'Une ou deux semaines';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_TWOTOTHREEWEEKS = 'Deux ou trois semaines';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_MORETHANTHREEWEEKS = 'Plus de trois semaines';
lang.YOURSYMPTOMS_HOWLONGWEREYOUILLQUESTION_IMSTILLILL = 'Je suis toujours malade!';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_TEXT = 'Pensez-vous que vous avez été infecté par le Coronavirus / COVID-19?';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_NOWAY = 'Aucun moyen';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_SMALLCHANCE = 'Une légère chance (~ 25% sûr)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_REASONABLECHANCE = 'Une opportunité raisonnable (~ 50% sûr)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_PRETTYSURE = 'Assez sûr (~ 75% sûr)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_ABSOLUTELYCONVINCED = 'Absolument convaincu (~ 90% + sûr)';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESTESTEDPOSITIVE = 'Oui, 100%: je suis testé positif';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESHOSPITAL = 'Oui, 100%: j\'ai été soigné à l\'hôpital';
lang.YOURSYMPTOMS_DOYOUTHINKYOUWEREINFECTEDQUESTION_YESINTENSIVECARE = 'Oui, 100%: j\'ai été traité en soins intensifs';
lang.COVIDTESTING_PAGE_TITLE = 'Test COVID';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_TEXT = 'Avez-vous réalisé un test d\'anticorps pour vérifier si vous avez / avez eu COVID-19?';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NO = 'Non, je n\'ai pas fait de test d\'anticorps.';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_NODIFFERENTTEST = 'Non, mais j\'ai fait un autre type de test';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESPOSITIVE = 'Oui et j\'étais positif';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESNEGATIVE = 'Oui, mais j\'ai obtenu un résultat négatif.';
lang.COVIDTESTING_DONEANTIBODYTESTQUESTION_YESDONTKNOW = 'Oui, mais je ne connais pas le résultat.';
lang.COVIDTESTING_ANTIBODYTESTDATEQUESTION_TEXT = 'À quelle date avez-vous effectué le test?';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_TEXT = 'Quel type de test d\'anticorps avez-vous effectué pour voir si vous aviez / avez eu COVID-19?';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_RAPIDANTIBODY = 'Test sanguin rapide pour les anticorps (immunodosage à flux latéral)';
lang.COVIDTESTING_ANTIBODYTESTKINDQUESTION_SENTBLOODLABTEST = 'Envoi de sang pour analyse d\'anticorps en laboratoire.';
lang.ANTIBODYTEST_PAGE_TITLE = 'Test d\'anticorps';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_TEXT = 'À quoi ressemblait le résultat de votre test?';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C = 'Uniquement c';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGG = 'C et IgG';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM = 'C et IgM';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_C_IGM_IGG = 'C, IgM et IgG';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG = 'IgG uniquement (pas de C)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGM = 'IgM uniquement (pas de C)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_IGG_IGM = 'IgG et IgM uniquement (sans C)';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NOLINES = 'Aucune, aucune ligne';
lang.ANITBODYTEST_ANTIBODYTESTRESULTQUESTION_NONEOFABOVE = 'Aucune de ces réponses';
lang.ANITBODYTEST_UPLOADPHOTOQUESTION_TEXT = 'Téléchargez une photo de votre test d\'anticorps prise de haut, avec un éclairage uniforme afin que la cassette de test remplisse l\'écran (comme illustré ci-dessous).';
lang.OTHERTESTS_PAGE_TITLE = 'Autres tests';
lang.OTHERTESTS_LABANTIBODYTESTQUESTION_TEXT = 'Avez-vous envoyé du sang pour un test d\'anticorps de laboratoire?';
lang.OTHERTESTS_SWABTESTQUESTION_TEXT = 'Avez-vous effectué un échantillon d\'expectoration / nasal / gorge pour la PCR?';
lang.OTHERTESTS_VIRALANTIGENQUESTION_TEXT = 'Avez-vous fait un test d\'antigène viral?';
lang.OTHERTESTS_XRAYQUESTION_TEXT = 'Avez-vous passé un test de radiographie / tomodensitométrie?';
lang.OTHERTESTS_DOCTORSDIAGNOSISQUESTION_TEXT = 'Avez-vous eu un diagnostic médical?';
lang.OTHERTESTS_DIDNOTDOOPTION_TEXT = 'Je ne l\'ai pas fait';
lang.OTHERTESTS_NEGATIVEOPTION_TEXT = 'Résultat négatif';
lang.OTHERTESTS_POSITIVEOPTION_TEXT = 'Résultat positif';
lang.OTHERTESTS_UNKNOWNOPTION_TEXT = 'Résultat inconnu';
lang.EMAILCONSENT_PAGE_TITLE = 'Dernière question';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_TEXT = 'Seriez-vous intéressé d\'en apprendre plus sur des études, programmes de test ou essais cliniques, soit pour faire des dons de plasma, soit pour confirmer si vous vous êtes complètement rétabli, ou si vous êtes immunisé contre le coronavirus?';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDMOREINFO = 'Intéressé, envoyez-moi plus d\'informations lorsque vous découvrirez';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_INTERESTEDNOINFO = 'Intéressé, mais ne m\'envoyez pas d\'informations s\'il vous plaît';
lang.EMAILCONSENT_EMAILCONSENTQUESTION_NOTINTERESTED = 'Non je ne suis pas intéressé';
lang.EMAILCONSENT_EMAILADDRESSQUESTION_TEXT = 'Veuillez laisser votre adresse e-mail ci-dessous';
lang.RESULT_PAGE_TITLE = 'Thank You!';
lang.RESULT_PAGE_TEXT = 'You will receive your results by email shortly.';

export default lang;
