document.addEventListener("DOMContentLoaded", function () {
	var languageImageRows = document.querySelectorAll(
		".language-change__image-row"
	);

	languageImageRows.forEach(function (element) {
		element.addEventListener("click", function () {
			// Toggle the class 'active' for both custom-select elements
			var customSelects = document.querySelectorAll(".custom-select");
			customSelects.forEach(function (select) {
				select.classList.toggle("active");
			});
		});
	});

	var selectTriggers = document.querySelectorAll(".select-trigger");
	var selectOptions = document.querySelectorAll(".select-options li");

	selectOptions.forEach(function (option) {
		option.addEventListener("click", function () {
			var value = this.getAttribute("data-value");

			selectTriggers.forEach(function (trigger) {
				trigger.textContent = option.textContent;
			});

			// Select both custom-select elements
			var customSelects = document.querySelectorAll(".custom-select");
			customSelects.forEach(function (customSelect) {
				customSelect.classList.remove("active");
			});

			// Save the selected language in localStorage
			saveLanguage(value);

			// Change the language using i18next
			changeLanguage(value);
		});
	});

	// Initialize i18next
	i18next.init({
		lng: getSavedLanguage() || "Ua",
		resources: {
			Ua: {
				translation: {
					routes: "Маршрути",
					services: "Послуги",
					contacts: "Контакти",
					howToGet: "Як доїхати",
					attractions: "Пам'ятки",
					aboutUs: "Про нас",
					blogAndEvents: "Блог та події",
					menuText: "Меню",
					titleTranslante: "Піші й вело прогулянки горами Бойківщини",
					subTitleTranslate:
						"Бойківщина — це етнокультура, з якою варто познайомитися, щоб закохатися в неї назавжди",
					titleButTranslate: "Підібрати маршрут",
					titleButInfTranslate: "До речі, вони безкоштовні ;)",
					boykuTitleAccent: "Можливо, вас цікавить",
					boykuTitle: "Що таке Бойківщина?",
					boykuSub1: "Це регіон на схилах Карпат, що охоплює райони сучасної",
					boykuSub2: "Львівської та Івано-Франківської областей.",
					subtitlePadding:
						"Це краєвиди, історія та самобутня фольклорна культура бойків.",
					emotionsTitleAccent: "А ще, Бойківщина це",
					emotionsTitle: "Емоції, якими хочеться ділитися",
					item1Translate: "Пізнайте культуру бойків через наші маршрути",
					item2Translate: "Насолодіться місцевою кухнею",
					item3Translate: "Познайомтесь з безліччю місць",
					routesTitleTranslate: "Бойко Мандри — це",
					routesSubtitleTranslate: "Три безкоштовні маршрути горами",
					levelTranslate1: "майже легкий",
					distanceTranslate1: "19 км",
					heightTranslate1: "пік — 954 м",
					route1NumTranslate: "Маршрут 1",
					route1Translate: "До криївки в церкві",
					route1SubtitleTranslate:
						"Погойдатись на карпатській гойдалці, смачно поїсти, знайти криївку в церкві і переночувати у справжніх колибах!",
					routesButton: "Дізнатись більше",
					levelTranslate2: "для найактивніших",
					distanceTranslate2: "25 км",
					heightTranslate2: "пік — 779 м",
					route2NumTranslate: "Маршрут 2",
					route2Translate: "Святині і герої",
					route2SubtitleTranslate:
						"Доторкнутися до історії, відчути подих сакральних перлин бойківської архітектури, зануритися у вир повстанської боротьби і вдарити у висотний дзвін пам'яті.",
					levelTranslate3: "для найактивніших",
					distanceTranslate3: "25 км",
					heightTranslate3: "пік — 664 м",
					route3NumTranslate: "Маршрут 3",
					route3Translate: "Бойківський майдан",
					route3SubtitleTranslate:
						"Історія дороги... Історія боротьби за дорогу... Історія громадянського суспільства...",
					routesAboutTitleTranslate: "Наші маршрути",
					routesAboutSubtitleTranslate:
						"Це гори, річки з кришталевою водою, свіже повітря та спів пташок. А ще неймовірно щирі і привітні люди — бойки!",
					hireTitleTranslate: "Наша спільнота пропонує",
					hireSubtitleTranslate:
						"У нас можна замовити прокат та проведення екскурсій",
					aboutUsAccentTranslate: "Про нас",
					aboutUsTitleTranslate: "Ми — Стрілківська спільнота",
					aboutUsSubtitleTranslate:
						"Наша мета — познайомити з культурою Бойківщини та розвинути туризм у нашій місцевості. Це самобутній регіон України з унікальною історією, якою потрібно ділитись з усім світом.",
					InstTitleTranslate: "Інстаграм",
					footerMainTransalte:
						"БойкоМандри: туристичні маршрути Стрілківської громади",
					footerPartnerTransalte:
						"Проєкт реалізується за підтримки Українського культурного фонду та Стрілківської сільської ради",
					footerLawsTranslate: "Усі права захищені",
					footerPoliticTranslate: "Політика конфіденційності",
					footerDesignerTranslate: "Дизайнер: Барабаш Анастасія",
					NavMain: "Головна",
					NavRoutes: "Маршрути",
					NavRoute1: "Маршрут 1",
					NavRoute2: "Маршрут 2",
					blackLetter: "БойкоМандри:",
					greenLetter: "зелений туризм",
					SubHireRoutes:
						"Зелений туризм — це відпочинок, який дозволить насолодитися краєвидами Бойківщини, скуштувати натуральну їжу, потрапити в атмосферу, що зарядить енергією, а також більше познайомитися з місцевою культурою.",
					Strilky: "Стрілки",
					Tysovytsia: "Тисовиця",
					Ploske: "Плоске",
					Mshanets: "Мшанець",
					Lopushanka: "Лопушанка-Хомина",
					Zamkova: "Ясениця-Замкова",
					Volosanka: "Велика Волосянка",
					Ture: "Тур’є",
					Nedilna: "Недільна",
					Topilnitsa: "Топільниця",
					text: "Зупинка",
					subtitle1translate: "Церква Святої прп. Параскевії (Сербської)",
					parag1Translate:
						"Ця тризрубна триверха церква належить до найкращих зразків сакральних споруд бойківського типу Старосамбірщини.У ній ще позначився вплив бароко у формах верхів і бань.На захід від церкви розташована дерев'яна триярусна дзвіниця ХІХ ст., всередині храму — оригінальний п’ятиярусний іконостас рядової побудови ХІХ ст.",
					moreAboutAttractions: "Більше інформації про цю пам’ятку",
					subtitle2translate: "Село Тисовиця",
					parag2Translate:
						"Село Тисовиця засноване на сирому корені волоським правом 1558 р. Староста Петро Боратинський доручив крайнику Осташу Дашковичу осадити село, надаючи йому водночас право на парохію 17 квітня того ж року. У цьому селі народився і виріс Антон Княжинський (1893-1960). Він був сином місцевого священика, доктор філософії, професор, директор Коломийської гімназії, доброволець Українських січових стрільців та Української галицької армії, літературознавець, освітній і громадський діяч, ініціатор створення Товариства “Бойківщина”, співзасновник музею “Бойківщина” у Самборі, співвидавець та співредактор журналу “Літопис Бойківщини”, голова Українського уряду Коломийської округи, політв’язень більшовицьких концтаборів.",
					subtitle3translate: "Вид на гору Магура-Лімнянська",
					parag3Translate:
						"“Маґурою” в Карпатах називають гори з вершинами, що повністю вкриті лісом. Ця назва для гірських вершин дуже популярна. Лише в Українських Карпатах налічується щонайменше 5 вершин з такою назвою у різних фізико-географічних районах, а в Трансильванії (історичний регіон Румунії) – цілих 97! Найпопулярніша версія щодо походження слова “Маґура” – від румунського слова “măgură”, що означає “гора, горб, височина”. “Наша” Маґура є найвищою вершиною Старосамбірщини (1022 м).",
					subtitle4translate:
						"Бункер командира українських повстанців Степана Стебельського “Хріна”",
					parag4Translate:
						"У часи Других визвольних змагань за Незалежність України, зокрема у 1944-49 рр., в цих краях воював легендарний командир 24-го Тактичного Відтинку 'Маківка' групи УПА-Захід,  Степан Стебельський ('Хрін'), один із засновників інженерних підрозділів УПА, керівник операції з ліквідації заступника міністра оборони Польщі, комуністичного генерала Кароля Сверчевського.  У 1947 р. неподалік села Плоске був збудований бункер для зимування к-ра Хріна та ще 8 чоловік. Він був встановлений у дуже несподіваному місці, у лісі на поляні біля відкритого поля. Більшовики не здогадалися б ніколи про це місце, якби один полонений повстанець не зрадив. ",
					subtitle5translate: "Село Плоске та хутір Ворьовий",
					parag5Translate:
						"Хутір Ворьовий (або “Під Оровим”) розташований на верхівці хребта Орового (“Ворьового”) у масиві Верхньодністровські Бескиди. Цмовірно, це найвисотніший хутір на Старосамбірщині (900 метрів над рівнем моря). Є присілком села Плоске, яке було засноване на сирому корені на волоському праві 1526 р. В установчій грамоті королеви Бони вказано про право встановити млин і таверну. ",
					subtitle6translate:
						"Криївка в церкві Св. Архистратига Михаїла у селі Плоскім",
					parag6Translate:
						"Найдавніша збережена письмова згадка про церкву датується 1546 р., коли королева Бона надала парохію священику Матвію. Сучасна будівля збудована у 1903 р. в неоукраїнському стилі, належить до найкращих зразків сакральних споруд бойківського типу Старосамбірщини. У часи Других визвольних змагань (1938-1950-ті рр.) у церкві була облаштована криївка-схрон. Розміщена у потрійно нестандартному місці: не в землі, у церкві, на горищі навколо центрального куполу.",
					subtitle7translate: "Островерх” – Олекса Конопадський",
					parag7Translate:
						"Далі ми знову поринаємо у ліси, де в часи Других визвольних змагань вирували пристрасті, а молоді хлопці й дівчата віддавали свої життя у боротьбі за Українську Соборну Самостійну Державу (УССД).  Ви стоїте на місці, де воював підстаршина УПА, командир охорони командування ТВ-24 “Маківка” групи УПА-Захід, старший вістовий Олекса Конопадський (“Островерх”, “Тополя”). Саме із села Плоске, де квартирувала боївка Служби Безпеки ОУН(б), розпочалася його боротьба за Українську Самостійну Соборну Державу.",
					subtitle8translate: "Ліс «Вінець»",
					parag8Translate:
						"“Облава” – так називаться оповідання Левка Паращака, яке він записав від Івана Маскимовича (Дніпренка) із Ґалівки. На час подій хлопцю було лише 16 років. Книга “З покоління незламних”",
					subtitle9translate: "Еко-табір «Мшанецькі Колиби»",
					parag9Translate:
						"Це соціальне підприємництво релігійної громади Різдва Пресвятої Богородиці УГКЦ с. Мшанець, засноване у 2019 р. Його метою є соціальний, духовний та економічний розвиток краю шляхом створення успішних та інноваційних проєктів у сфері туризму на основі бойківських традицій та християнських цінностей.Тут ви можете заночувати в оригінальних лісових будиночках або ж у власній палатці, розклавши її на кемпінгу неподалік",
					subtitle1TranslateHeroes: "Нанашкова хата в Лопушанці-Хоминій",
					parag1TranslateHeroes:
						"«Нанашкова хата» — класичний тип бойківської хати. Збудований в 1930 році. Особливістю автентичних будинків цього регіону є поєднання під одним дахом житлових і господарських приміщень. Одразу поруч з житловою кімнатою, коридором, який бойки називають сіньми, стодолою (боїще), розташований хлів (стайня). Є ще комора, загата, курник.",
					subtitle2TranslateHeroes:"Дзвіниця церкви святого Архистратига Михаїла у Ясениці-Замковій",
					parag2TranslateHeroes:"Триярусна дзвіниця-каплиця 1730 р. — пам’ятка архітектури національного значення, включена в Державний реєстр культурного надбання (№ 1438/0). Представниця галицької архітектурної школи. Славиться гармонійністю своїх пропорцій. Завершується восьмигранним шатровим верхом.  На першому ярусі дзвіниці була комора, де зберігалося церковне начиння, старі ікони і мед з церковної пасіки. Сьогодні тут облаштований міні-музей народного побуту. На другому поверсі розташовувалася каплиця Покрову Пресвятої Богородиці. Сьогодні тут виставка вишитих ікон та хоругв та інших старовинних речей та церковного приладдя.",

					subtitle3TranslateHeroes:"Церква Св. Василія Великого (Святого Миколи) у Великій Волосянці",
					parag3TranslateHeroes:"Сучасна будівля церкви Св. Василія зведена у 1903 році за ініціативи пароха о. Альбіна Добрянського на місці старої церкви, перші відомості про яку датуються ще 1577-м роком. Що цікаво, у 1668 році місцевий житель Стас Василькович з дружиною Огафією подарували до церкви книгу Йоаникія Ґалятовського “Ключ Разумінія”, видану у Львові всього за три роки до цього! Звели цю церкву брати-майстри Іван та Василь Васьківи з Долини за проектом легендарного львівського архітектора Василя Нагірного в неоукраїнському стилі.",

					subtitle4TranslateHeroes:"Село Тур’є",
					parag4TranslateHeroes:"Тур’є — давнє бойківське село, найдовше у Стрілківській громаді (площа 555 га, довжина всіх вулиць — 36 км). Ще в часи Київської Руси тут було військове городище та сторожове поселення, яке захищало прадавній торговий шлях «Руський Путь». У селі збереглися сліди ранньоісторичних валів. Археологи знайшли тут давньоруський меч та інші речі. Перша збережена письмова згадка про село датується, за одними даними, 1345 роком, за іншими — 1473.",

					subtitle5TranslateHeroes:"Церква Святого Миколи села Тур’є (Долішня) 1690 року",
					parag5TranslateHeroes:"Це найстаріша церква Стрілківської громади, зведена ще у 1690 році. У селі існує легенда про будову цієї церкви: «Пан не дозволяв на цьому пляці збудувати церкву, тому люди таємно в лісі підготували все, і коли настала слушна мить (пан поїхав з села у справах), селяни за ніч все перенесли і склали церкву». Цю мальовничу церкву неодноразово зображувала на акварелях і лінориті на Різдвяні та Великодні свята українська художниця Олена Кульчицька у 1920-х роках. Під час Другої світової війни церква була пошкоджена, однак вже у 1945 році її відремонтували.",

					subtitle6TranslateHeroes:"Вежа Пам’яті у Недільній",
					parag6TranslateHeroes:"Це найвища дерев’яна вежа-дзвіниця України та Європи, висота якої складає 43 метри. Така висота невипадкова — вона символізує пам’ять про 43-х повстанців УПА, що загинули у 1943 році у бою з гітлерівцями. Тут можна вилізти на оглядовий майданчик і вдарити у Дзвін Пам’яті, споглядаючи на безмежні гірські пасма Львівської і Закарпатської областей, за які боролися і віддавали життя молоді хлопці у часі наших Других визвольних змагань. Через рік у 1944-му неподалік у цих лісах відбулася епохальна, без перебільшення, подія для нашої держави — великий з’їзд провідників ОУН, командирів УПА, делеґатів різних партій, що увінчався вибором Української Головної Визвольної Ради — підпільний уряд України, що безпосередньо керував визвольним рухом українців до середини 1950-х років. І це — дивовижна історія усвідомленої єдності українського народу. Чому? Тому що третина обраних делегатів була не з Галичини, а керівником УГВР обрали полтавчанина Кирила Осьмака. Так, бандерівським рухом керував наддніпрянець, який проживав у цих селах!",

					subtitle7TranslateHeroes:"Історико-меморіальний музей Кирила Осьмака, голови УГВР, в Недільній",
					parag7TranslateHeroes:"Кирило Осьмак (псевдо «Марко Горянський») — український учений, аграрний економіст, учасник Перших та Других визвольних змагань, член Центральної ради, діяч ОУН, голова Української головної визвольної ради (УГВР) — підпільного уряду та парламенту, який керував повстанською армією. УГВР, утворена на установчих зборах 11-15 липня 1944 року на горі Діл у лісі між селами Недільна та Сприня, була надпартійною організацією. Тільки 9 із 25 делегатів, що отримали мандати, були партійцями ОУН(б). Третина делегатів — із Наддніпрянщини, 17 — із Волині й Галичини. Кирило Осьмак з дружиною проживав у селі Недільна та Тур’є Горішнє. Музей Кирила Осьмака заснований у вересні 2014 року у приміщенні Народного дому села Недільна (колишня будівля «Просвіти»). Над розробкою і побудовою експозиції працювала група науковців та музейних фахівців. Музей має два тематичні розділи. Основу експозиції складають архівні документи, фото та інші матеріали, література, подарована Наталею Осьмак, донькою Кирила Осьмака, спогади його сучасників та рідних, зібраних Любою Коваль. Другий розділ складає колекція експонатів, пов’язаних з побутом та життям українців Прикарпаття ХІХ-ХХ ст. (ткацький верстат, стародавні ваги, кав’ярка, ходулі для дітей, вишиванки ХІХ ст., форма вояків УПА та інші цікавинки) та картини художників Івана Остафійчука, Михайла Безпальківа і Тараса Дідули.",

					subtitle8TranslateHeroes:"Червонокнижний Тис ягідний отруйний у Недільній",
					parag8TranslateHeroes:"Всі частини цього дерева — кора, листя і навіть деревина — є отруйними для людини. Вони у великій кількості містять таксин, речовину яка для людини і деяких тварин є отруйною. Раніше в будинках навмисне робили деревʼяні балки на стелі з ягіднго тису. Так будинок був захищений від інфекцій. Через масову вирубку для дорогих меблів це дерево тепер є рідкісним і збереглось лише у гірських регіонах нашої країни — Карпатах та Криму. У сиву давнину тис використовувася як надійний спосіб вбити суперника. З деревини виготовляли кубок для напоїв. Випивши з такої чаші вина, людина швидко помирала. Також у народі вірили, що крона цього дерева дуже небезпечні. Вважалось, що під тисом не можна спати, бо більше вже ніколи не прокинешся. Проте з часом було доведено, що це не так. Смертельною дозою для людини є вживання у їжу 100 г свіжої хвої. Також у жодному випадку не можна пробувати гарні червоні ягідки, які ростуть на дереві. Проте олені та зайці вільно їдять кору та хвою листя без шкоди для свого здоров’я. Цікаво, що чим старіше дерево, тим воно отруйніше. А живе тис довго — навіть до 3000 років! Що ж, завітайте на обору (подвір’я), де він росте, і розпитайте у місцевих ґаздів, як їм живеться під цим рідкісним отруйним деревом з цілющими властивостями 🙂 А щоб не пропустити — збережіть його координати: 49.316 899, 23.103 886",

				},
			},
			Eng: {
				translation: {
					routes: "Routes",
					services: "Services",
					contacts: "Contacts",
					howToGet: "How to get there",
					attractions: "Attractions",
					aboutUs: "About us",
					blogAndEvents: "Blog and events",
					menuText: "Menu",
					titleTranslante: "Hiking and cycling in the mountains of Boykivshchyna",
					subTitleTranslate:
						"Boykivshchyna is an ethnoculture that is worth getting to know in order to fall in love with it forever",
					titleButTranslate: "Choose a route",
					titleButInfTranslate: "By the way, they are free ;)",
					boykuTitleAccent: "You might be interested",
					boykuTitle: "What is Boykivshchyna?",
					boykuSub1:
						"This is a region on the slopes of the Carpathians, covering areas of modern",
					boykuSub2: "Lviv and Ivano-Frankivsk regions.",
					subtitlePadding:
						"These are landscapes, history and the unique folklore culture of the Boiks.",
					emotionsTitleAccent: "And also, this is Boykivshchyna",
					emotionsTitle: "Emotions that you want to share",
					item1Translate: "Get to know the culture of boyks through our routes",
					item2Translate: "Enjoy the local cuisine",
					item3Translate: "Get to know countless places",
					routesTitleTranslate: "Boyko Mandry is",
					routesSubtitleTranslate: "Three free mountain routes",
					levelTranslate1: "almost easy",
					distanceTranslate1: "19 km",
					heightTranslate1: "the peak is 954 m",
					route1NumTranslate: "Route 1",
					route1Translate: "To the hiding place in the church",
					route1SubtitleTranslate:
						"Swing on a Carpathian swing, eat delicious food, find a hiding place in a church and spend the night in real kolyby!",
					routesButton: "Learn more",
					levelTranslate2: "for active",
					distanceTranslate2: "25 km",
					heightTranslate2: "the peak is 779 m",
					route2NumTranslate: "Route 2",
					route2Translate: "Shrines and heroes",
					route2SubtitleTranslate:
						"Touch the history, feel the breath of the sacred pearls of Boyko architecture, plunge into the whirlpool of the rebel struggle and hit the high-pitched bell of memory.",
					levelTranslate3: "for the most active",
					distanceTranslate3: "25 km",
					heightTranslate3: "the peak is 664 m",
					route3NumTranslate: "Route 3",
					route3Translate: "Boykiv Maidan",
					route3SubtitleTranslate:
						"The history of the road... The history of the struggle for the road... The history of civil society...",
					routesAboutTitleTranslate: "Our routes",
					routesAboutSubtitleTranslate:
						"These are mountains, rivers with crystal water, fresh air and singing of birds. And incredibly sincere and friendly people - boyky!",
					hireTitleTranslate: "Our community offers",
					hireSubtitleTranslate: "You can order rental and excursions from us",
					aboutUsAccentTranslate: "About us",
					aboutUsTitleTranslate: "We are the Strilkivska Community",
					aboutUsSubtitleTranslate:
						"Our goal is to introduce the culture of Boykivshchyna and to develop tourism in our locality. This is a unique region of Ukraine with a unique history that needs to be shared with the whole world.",
					InstTitleTranslate: "Instagram",
					footerMainTransalte:
						"BoykoMandry: tourist routes of Strilkivska community",
					footerPartnerTransalte:
						"The project is implemented with the support of the Ukrainian Cultural Foundation and the Strilkivska village council",
					footerLawsTranslate: "All rights reserved",
					footerPoliticTranslate: "Privacy Policy",
					footerDesignerTranslate: "Designer: Anastasia Barabash",
					NavMain: "Main",
					NavRoutes: "Routes",
					NavRoute1: "Route 1",
					NavRoute2: "Route 2",
					blackLetter: "BoykoMandry:",
					greenLetter: "green tourism",
					SubHireRoutes:
						"Green tourism is a vacation that will allow you to enjoy the scenery of Boykivshchyna, taste natural food, get into an energizing atmosphere, and also get to know the local culture better.",
					Strilky: "Strilky",
					Tysovytsia: "Tysovytsia",
					Ploske: "Ploske",
					Mshanets: "Mshanets",
					Lopushanka: "Lopushanka-Chominas",
					Zamkova: "Yasenitsa-Zamkova",
					Volosanka: "Velika Volosyanka",
					Ture: "Tourier",
					Nedilna: "Nedilna",
					Topilnitsa: "Topilnitsa",
					text: "Station",
					subtitle1translate: "Church of St. Paraskevi (Serbian)",
					parag1Translate:
						"This three-log three-storied church belongs to the best examples of sacred structures of the Boykov type in the Staro-Sambir Region. It also has the influence of the Baroque in the forms of the upper part and baths. To the west of the church is a wooden three-tiered belfry of the XIX century, inside the church there is an original five-tiered iconostasis of ordinary construction XIX century",
					moreAboutAttractions: "More information about this attraction",
					subtitle2translate: "Tysovytsia village",
					parag2Translate:
						"The village of Tysovytsya was based on the Raw Root of Volosky Law in 1558. The headman Petro Boratinsky instructed Krynik Ostash Dashkovich to prestice the village, giving him the right to the parish on April 17 of that year.Anton Knyazhinsky (1893-1960) was born and raised in this village.He was the son of a local priest, Doctor of Philosophy, Professor, Director of the Kolomyia Gymnasium, Volunteer of Ukrainian Sich Riflemen and the Ukrainian Galician Army, literary critic, educational and public figure, initiator 'Chronicle of Boykivshchyna', head of the Ukrainian government of the Kolomyia district, political prisoner of Bolshevik concentration camps.",
					subtitle3translate: "View of Magura-Limnyansk Mountain",
					parag3Translate:
						"'Magura' in the Carpathians is called mountains with peaks that are completely covered with forest.This name is very popular for mountain peaks.Only in the Ukrainian Carpathians there are at least 5 peaks with this name in different physical and geographical areas, and in Transylvania (historical region of Romania)-as many as 97!The most popular version of the origin of the word 'Magur' is from the Romanian word 'măgurvey', which means 'mountain, hump, height'.Our Magura is the highest peak of the Old Sambir region (1022 m).",
					subtitle4translate:
						"The bunker of the commander of Ukrainian rebels Stepan Stebelsky 'Khryna'",
					parag4Translate:
						"At the time of the second liberation competitions for independence of Ukraine, in particular in 1944-49, in these parts the legendary commander of the 24th Tactical Tactical Tactical 'Makivka' UPA-West, Stepan Stebelsky ('Khryn'), one of the founders of the UPA engineering units., Head of the Operation for Liquidation of the Deputy Minister of Defense of Poland, Communist General Karol Sverschevsky.In 1947, a bunker was built near the village of Plosko to winter K-Rhin and 8 more people.It was installed in a very unexpected place, in the forest on the Polyana near the open field.The Bolsheviks would never have guessed this place if one prisoner had not betrayed.",
					subtitle5translate: "The village of Ploske and the village of Voryovy",
					parag5Translate:
						"The hamlet (or 'under the orov') is located on the apex of the spine of Orov ('Vorray') in the Upper Dniester Beskyda.This is the highest farm in the Old Sambir region (900 meters above sea level).It is the settlement of the village of Plosko, which was based on the raw root on the Voloska law in 1526. In the constituent diploma of Queen Bona, it is indicated about the right to establish a mill and a tavern.",
					subtitle6translate:
						"A hiding place in the church of St. Archangel Michael in the village of Ploskomo",
					parag6Translate:
						"The oldest preserved written mention of the church dates from 1546, when Queen Bona gave the parish priest Matthew.The modern building was built in 1903 in the neo -Ukrainian style, belongs to the best examples of sacred structures of the Boyko type of Starosambirshchyna.During the second liberation competitions (1938-1950's), Kryivka-Schron was equipped in the church.It is located in a triple non -standard place: not in the ground, in the church, in the attic around the central dome.",
					subtitle7translate: "Ostrover ” - Oleksa Konopadsky",
					parag7Translate:
						"Then we again plunge into the forests, where in the time of the second liberation competitions passions raged, and young boys and girls gave their lives in the struggle for the Ukrainian cathedral independent state (USSD).You stand in the place where the UPA sub-head, the commander of the TV-24 command of the UPA-West Group, Senior Alekse Oleksa Konopadsky (Ostroverch, Poplar).It was from the village of Plosko, where the fighting of the OUN Security Service (b) was stored, that his struggle for the Ukrainian independent cathedral state began.",
					subtitle8translate: "Vinets Forest",
					parag8Translate:
						"'Raff' - so called the story of Levko Paraschak, which he recorded from Ivan Maskovich (Dnipronko) from Galivka.At the time of the guy the guy was only 16 years old.The book “From the generation of unbreakable”",
					subtitle9translate: "Eco-camp 'Mshanetski Kolyby'",
					parag9Translate:
						"It is the social entrepreneurship of the religious community of the Nativity of the Blessed Virgin Mary of the UGCC p.Mshanets, founded in 2019. Its purpose is the social, spiritual and economic development of the region through the creation of successful and innovative tourism -based projects on the basis of Boyko traditions and Christian values. You can spend the night in the original forest houses or in your own chamat camping nearby",
					
					subtitle1TranslateHeroes: "Nanashkov's house in Lopushanka-Khominin",
					parag1TranslateHeroes:
						"'Nanashkov's house' is a classic type of Boyko's house. Built in 1930. The peculiarity of the authentic buildings of this region is the combination under one roof of residential and outbuildings.Immediately next to the living room, a corridor, which is called shadows, a table (a fight), a barn (stable) is located.There is still a pantry, a squad, a chicken coop.",
					
					subtitle2TranslateHeroes:"The bell tower of St. Archangel Michael in Yasenitsa-Zamkova",
					parag2TranslateHeroes:"A three-tier bell tower-Kaplytsya 1730-a monument of national importance, included in the State Register of Cultural Help (No. 1438/0).Representative of the Galician Architectural School.It is famous for the harmony of its proportions.It ends with an octagonal tent top.On the first tier of the bell tower was a pantry, which stored church utensils, old icons and honey from church apiary.Today there is a mini-museum of folk life.On the second floor was the Chapel of the Intercession of the Blessed Virgin.Today there is an exhibition of embroidered icons and horses and other ancient things and church accessories.",

					subtitle3TranslateHeroes:"The Church of St. Basil the Great (St. Nicholas) in the Velika Volosyanka",
					parag3TranslateHeroes:"The modern building of the Church of St. Basil was built in 1903 on the initiative of the parish priest Fr.Albina Dobryansky on the site of the old church, the first information of which dates back to 1577.Interestingly, in 1668, a local resident Stas Vasylkovich and his wife Ogafia presented a book by Johniki Galyatovsky to the church 'The Key of Razminia', published in Lviv just three years before!This church was erected by the Master-Master Ivan and Vasyl Vasykiv from the Valley of the legendary Lviv architect Vasyl Nagirny in the neo-Ukrainian style.",

					subtitle4TranslateHeroes:"Turier village",
					parag4TranslateHeroes:"Turier is the ancient Boyko village, the longest in the Strail community (555 hectares, the length of all streets is 36 km).Even in the times of Kievan Rus there was a military settlement and a guard settlement, which defended the ancient trade route 'Russian path'. Traces of early historical shafts are preserved in the village.Archaeologists have found an ancient Russian sword and other things here.The first preserved written mention of the village is dated, according to some data, 1345, according to others - 1473.",

					subtitle5TranslateHeroes:"St. Nicholas Church of the village of Turier (Dolishnya) in 1690",
					parag5TranslateHeroes:"It is the oldest church of the Strail Community, built in 1690.In the village there is a legend about the structure of this church: 'The gentleman did not allow the church to build on this point, so people were secretly prepared in the forest, and when the right moment came (the gentleman left the village in business), the peasants were moved and the church was moved at night.'.This picturesque church has been repeatedly depicted on watercolors and linorites for Christmas and Easter holidays Ukrainian artist Elena Kulchytska in the 1920s.During the Second World War, the church was damaged, but in 1945 it was repaired.",

					subtitle6TranslateHeroes:"The memory tower in Nedilna",
					parag6TranslateHeroes:"It is the highest wooden bell tower of Ukraine and Europe, which is 43 meters.This height is not accidental-it symbolizes the memory of the 43th rebels of the UPA who died in 1943 in battle with the Nazis.Here you can climb the viewing platform and hit the bell in memory, looking at the boundless mountain strands of Lviv and Transcarpathian regions, for which young boys fought and gave their lives during our second liberation competitions.A year later, in 1944, there was an epochal, without exaggeration, event for our country-a great congress of OUN leaders, UPA commanders, delegates of different parties, which was crowned with the choice of the Ukrainian Main Liberation Council-the Underground GovernmentThe liberation movement of Ukrainians until the mid-1950s.And this is a wonderful story of the conscious unity of the Ukrainian people.Why?Because a third of the delegates elected was not from Galicia, but the head of the UHWR elected Poltava Cyril Osmak.Yes, the Bandera movement was managed by the Dnieper, who lived in these villages!",

					subtitle7TranslateHeroes:"Cyril Osmak's Historical and Memorial Museum, UHVR heads, Nedilna",
					parag7TranslateHeroes:"Cyril Osmak (pseudo 'Marko Goryansky') is a Ukrainian scientist, agricultural economist, participant of the first and second liberation competitions, member of the Central Rada, OUN, head of the Ukrainian General Liberation Council (UHWR) - underground government and parliament, who was in the UPD.The UHWR, formed at the Constituent Assembly on July 11-15, 1944, on the mountain of Dil in the forest between the villages of Sunday and Sprina, was a super-party organization.Only 9 of the 25 delegates who received the Mandates were the OUN parties (b).One third of delegates - from the Dnieper region, 17 - from Volyn and Galicia.Cyril Osmak and his wife lived in the village of Sunday and Turier Gorishne.The Cyril Osmak Museum was founded in September 2014 in the premises of the People's House of the village of Sunday (the former Enlightenment building).A group of scientists and museum specialists worked on the development and construction of the exposition.The museum has two thematic sections.The basis of the exposition is archival documents, photos and other materials, literature donated by Natalia Osmak, daughter of Cyril Osmak, the memories of his contemporaries and relatives, collected by love Koval.The second section is a collection of exhibits related to the life and life of Ukrainians of the Carpathian region of the nineteenth and twentieth centuries.(loom, ancient scales, cafes, stilts for children, nineteenth -century embroidery, form of UPA soldiers and other interests) and paintings.",

					subtitle8TranslateHeroes:"Red-books berry poisonous in Nedilna",
					parag8TranslateHeroes:"All parts of this tree - bark, leaves and even wood - are poisonous to humans.They contain a large number of taxi, a substance that is poisonous for humans and some animals.Previously, wooden beams were deliberately made in the houses on the ceiling of the Yajidgo Tisza.So the house was protected from infections.Due to mass felling for expensive furniture, this tree is now rare and has been preserved only in the mountainous regions of our country - the Carpathians and Crimea.In ancient times, thousands of use as a reliable way to kill the opponent.Beverages were made of wood.After drinking such a bowl of wine, the person quickly died.People also believed that the crown of this tree is very dangerous.It was believed that you could not sleep under Tis, because you will never wake up again.However, over time, it was proven that it was not.A deadly dose for humans is to eat 100 g of fresh needles.Also, in no case can you try beautiful red berries that grow on a tree.However, deer and hares eat bark and needles freely without sacrificing their health.Interestingly, the older the tree, the more it is poisonous.And he lives for a long time - even up to 3000 years!Well, visit the rippiece (yard) where it grows, and ask the local gadgets, how they live under this rare poisonous tree with healing properties 🙂 And to miss - save its coordinates: 49.316899, 23.103886",
				},
			},
			Pol: {
				translation: {
					routes: "Trasy",
					services: "Usługi",
					contacts: "Łączność",
					howToGet: "Jak się tam dostać",
					attractions: "Wdzięki kobiece",
					aboutUs: "O nas",
					blogAndEvents: "Blog i wydarzenia",
					menuText: "Menu",
					titleTranslante: "Piesze i rowerowe wycieczki po górach Bojkowszczyzny",
					subTitleTranslate:
						"Bojkowszczyzna to etnokultura, którą warto poznać, aby zakochać się w niej na zawsze",
					titleButTranslate: "Wybierz trasę",
					titleButInfTranslate: "Swoją drogą, są darmowe ;)",
					boykuTitleAccent: "Możesz być zainteresowany",
					boykuTitle: "Co to jest Bojkowszczyna?",
					boykuSub1:
						"Jest to region na zboczach Karpat, obejmujący tereny współczesne",
					boykuSub2: "Obwód lwowski i iwanofrankowski.",
					subtitlePadding:
						"Są to krajobrazy, historia i wyjątkowa kultura ludowa Boików.",
					emotionsTitleAccent: "A to także Bojkowszczyzna",
					emotionsTitle: "Emocje, którymi chcesz się podzielić",
					item1Translate: "Poznaj kulturę bojkow naszymi trasami",
					item2Translate: "Ciesz się lokalną kuchnią",
					item3Translate: "Poznaj niezliczone miejsca",
					routesTitleTranslate: "Bojko Mandra jest",
					routesSubtitleTranslate: "Trzy bezpłatne trasy górskie",
					levelTranslate1: "prawie łatwe",
					distanceTranslate1: "19 km",
					heightTranslate1: "szczyt wynosi 954 m",
					route1NumTranslate: "Trasa 1",
					route1Translate: "Do skrytki w kościele",
					route1SubtitleTranslate:
						"Huśtaj się na karpackiej huśtawce, jedz pyszne jedzenie, znajdź kryjówkę w kościele i przenocuj w prawdziwych kolyby!",
					routesButton: "Ucz się więcej",
					levelTranslate2: "dla aktywnych",
					distanceTranslate2: "25 km",
					heightTranslate2: "szczyt wynosi 779 m",
					route2NumTranslate: "Trasa 2",
					route2Translate: "Sanktuaria i bohaterowie",
					route2SubtitleTranslate:
						"Dotknij historii, poczuj oddech świętych pereł bojkowskiej architektury, zanurz się w wir walki rebeliantów i uderz w wysoki dzwon pamięci.",
					levelTranslate3: "dla najbardziej aktywnych",
					distanceTranslate3: "25 km",
					heightTranslate3: "szczyt wynosi 664 m",
					route3NumTranslate: "Trasa 3",
					route3Translate: "Bojkowski Majdan",
					route3SubtitleTranslate:
						"Historia drogi... Historia walki o drogę... Historia społeczeństwa obywatelskiego...",
					routesAboutTitleTranslate: "Nasze trasy",
					routesAboutSubtitleTranslate:
						"To góry, rzeki z krystaliczną wodą, świeże powietrze i śpiew ptaków. I niesamowicie szczerzy i życzliwi ludzie - bojky!",
					hireTitleTranslate: "Nasza społeczność oferuje",
					hireSubtitleTranslate: "Możesz zamówić u nas wynajem i wycieczki",
					aboutUsAccentTranslate: "O nas",
					aboutUsTitleTranslate: "Jesteśmy społecznością strzelkiwska",
					aboutUsSubtitleTranslate:
						"Naszym celem jest przybliżenie kultury Bojkowszczyzny oraz rozwój turystyki w naszej miejscowości. To wyjątkowy region Ukrainy z wyjątkową historią, którą należy podzielić się z całym światem.",
					InstTitleTranslate: "Instagrama",
					footerMainTransalte:
						"BojkoMandry: szlaki turystyczne Strilkivskiej gromady",
					footerPartnerTransalte:
						"Projekt realizowany jest przy wsparciu Ukraińskiej Fundacji Kulturalnej i Rady Sołeckiej Strilkivskiej",
					footerLawsTranslate: "Wszelkie prawa zastrzeżone",
					footerPoliticTranslate: "Polityka prywatności",
					footerDesignerTranslate: "Projektant: Anastazja Barabasz",
					NavMain: "Główny",
					NavRoutes: "Trasy",
					NavRoute1: "Trasa 1",
					NavRoute2: "Trasa 2",
					blackLetter: "BojkoMandry:",
					greenLetter: "zielona turystyka",
					SubHireRoutes:
						"Zielona turystyka to wypoczynek, który pozwoli Państwu nacieszyć się scenerią Bojkowszczyzny, skosztować naturalnego jedzenia, wejść w energetyzującą atmosferę, a także lepiej poznać lokalną kulturę.",
					Strilky: "Strzałki",
					Tysovytsia: "Tysowica",
					Ploske: "Płaski",
					Mshanets: "Mszanet",
					Lopushanka: "Łopuszanka-Homina",
					Zamkova: "Jasenycja-Zamkowa",
					Volosanka: "Wielka Wołosianka",
					Ture: "Touriera",
					Nedilna: "Niedziela",
					Topilnitsa: "Topilnica",
					text: "Przystanek",
					subtitle1translate: "Kościół św. Paraskevi (serbski)",
					parag1Translate:
						"Ten trójzrębowy, trójkondygnacyjny kościół należy do najlepszych przykładów obiektów sakralnych typu bojkowskiego na Ziemi Staro-Sambirskiej, posiada także wpływy baroku w postaci górnej części i łaźni. w kościele znajduje się drewniana trójkondygnacyjna dzwonnica z XIX w., wewnątrz kościoła znajduje się oryginalny pięciopoziomowy ikonostas zwykłej konstrukcji XIX w.",
					moreAboutAttractions: "Więcej informacji o tej atrakcji",
					subtitle2translate: "Wieś Tysowica",
					parag2Translate:
						"Wioska Tysovytsya była oparta na surowym korzeniu prawa Volosky w 1558 r. Nagłówek Petro Boratinsky poinstruował Krynika Ostash Dashkovich do prestikowania wioski, dając mu prawo do parafii 17 kwietnia tego roku.Anton Knyazhinsky (1893–1960) urodził się i wychował w tej wiosce.Był synem lokalnego kapłana, doktora filozofii, profesora, dyrektora Kolomyia Gymnasium, wolontariusza ukraińskiego Sich Riflemen i ukraińskiej armii galianowej, krytyka literackiego, postaci edukacyjnej i publicznej, inicjator „Chronicle of Boykivshchyna”. Ukraiński rząd okręgu Kolomyia, więzień polityczny bolszewickich obozów koncentracyjnych.",
					subtitle3translate: "Widok Magura-Limnyansk Mountain",
					parag3Translate:
						"„Magura” w Carpathan nazywa się górami ze szczytami, które są całkowicie pokryte lasem.Ta nazwa jest bardzo popularna w przypadku górskich szczytów.Tylko u ukraińskich Carpatów jest co najmniej 5 szczytów z tą nazwą na różnych obszarach fizycznych i geograficznych oraz w Transylwanii (region historyczny Rumunii)-jak 97!Najpopularniejsza wersja pochodzenia słowa „Magur” pochodzi od rumuńskiego słowa „Măgurvey”, co oznacza „góra, garb, wzrost”.Nasz Magura jest najwyższym szczytem starego regionu Sambir (1022 m).",
					subtitle4translate:
						"Bunkier dowódcy ukraińskich rebeliantów Stepan Stebelsky „Khryna”",
					parag4Translate:
						"W czasach drugich konkursów wyzwoleniach na rzecz niepodległości Ukrainy, w szczególności w latach 1944–49, w tych częściach legendarny dowódca 24. taktycznego taktycznego „Makivka” UPA-West, Steban Stebelsky („Khryn”), jeden z Założyciele jednostek inżynieryjnych UPA., Szef operacji likwidacji wiceministra obrony Polski, generał komunistyczny Karol Sverschevsky.W 1947 r. Bunkier został zbudowany w pobliżu wioski Plosko do Winter K-Rhin i 8 kolejnych osób.Został zainstalowany w bardzo nieoczekiwanym miejscu, w lesie na polianie w pobliżu otwartego pola.Bolszewicy nigdy nie zgadaliby tego miejsca, gdyby jeden więzień nie zdradził.",
					subtitle5translate: "Wieś Ploske i wieś Woryowce",
					parag5Translate:
						"Hamlet (lub „Under the Orov”) znajduje się na wierzchołku kręgosłupa Orova („Vorray”) w górnym dnister Beskyda.Jest to najwyższa farma w starym regionie Sambir (900 metrów nad poziomem morza).Jest to osada wioski Plosko, która była oparta na surowym korzeniu prawa Voloska w 1526 r. W składowym dyplomie królowej Bona wskazano na prawo do ustanowienia młyna i tawerny.",
					subtitle6translate:
						"Skrytka w kościele św. Archanioła Michała we wsi Ploskomo",
					parag6Translate:
						"Najstarsza zachowana pisemna wzmianka o Kościołach pochodzi z 1546 r., Kiedy królowa Bona dała Kapłanowi parafii Matthew.Współczesny budynek został zbudowany w 1903 roku w stylu neoukraińskim, należy do najlepszych przykładów świętych struktur typu bojko Starosambirshchyna.Podczas drugich konkursów wyzwoleniach (1938–1950) Kryivka-Schron został wyposażony w kościele.Znajduje się w potrójnym niestandardowym miejscu: nie w ziemi, w kościele, na strychu wokół centralnej kopuły.",
					subtitle7translate: "Ostrover ” - Oleksa Konopadsky",
					parag7Translate:
						"Potem ponownie pogrążyliśmy się w lasach, gdzie w czasach drugiego konkursu wyzwolenia szalały pasje, a młodzi chłopcy i dziewczęta odbyli życie w walce o niezależne państwo katedry ukraińskie (USSD).Stojesz w miejscu, w którym podłoga UPA, dowódca TV-24 dowództwa grupy UPA-West, starszy Alekse Oleksa Konopadsky (Ostroverch, Poplar).Po tym, z wioski Plosko, gdzie zaczęła się walka Służby Bezpieczeństwa OUN (B), rozpoczęła się jego walka o Ukraińskie Niezależne Katedralne państwo katedralne.",
					subtitle8translate: "Las 'Winiec'",
					parag8Translate:
						"„Raff” - tak zwana historia Levko Paraschaka, którą nagrał z Ivana Masvicha (Dnipronko) z Galivki.W czasach faceta facet miał zaledwie 16 lat.Książka „z generowania Unbreakable”",
					subtitle9translate: "Eko Obóz 'Mszaniecki Kołyby'",
					parag9Translate:
						"Jest to społeczna przedsiębiorczość wspólnoty religijnej szopki Błogosławionej Maryi Maryi z UGCC p.MSHANETS, założony w 2019 r. Jego celem jest rozwój społeczny, duchowy i ekonomiczny regionu poprzez tworzenie udanych i innowacyjnych projektów opartych na turystyce na podstawie tradycji Boyko i wartości chrześcijańskiej. Można spędzić noc w oryginalnych domach leśnych lub we własnym charakterze na biwakowaniu w pobliżu",
				
					subtitle1TranslateHeroes: "Dom Nanashkova w Lopushanka-Khominin",
					parag1TranslateHeroes:
						"„Nanashkov's House” to klasyczny dom Boyko. Zbudowany w 1930 roku. Osobliwość autentycznych budynków tego regionu jest połączenie pod jednym dachem mieszkalnych i budynków. Bezpośrednio obok salonu znajduje się korytarz, zwany cieniami, znajduje się stół (walka), stodoła (stajnia). Nadal jest spiżarnia, drużyna, kurczak.",
					
					subtitle2TranslateHeroes:"The Bell Tower of St. Archanioł Michael w Yasenitsa-Zamkova",
					parag2TranslateHeroes:"Trzy-poziomowy dzwonek Tower-Kaplyssy 1730-A Monument o znaczeniu krajowym, zawarty w State Register of Cultural Help (nr 1438/0). Przedstawiciel Galian Architectural School. Słynie z harmonii swoich proporcji. Kończy się ośmiokątnym topem namiotowym. Na pierwszym poziomie Bell Tower znajdowała się spiżarnia, która przechowywała przybory kościelne, stare ikony i miód z chwiejności kościelnej. Dzisiaj jest mini-muzowanie ludowego życia. Na drugim piętrze znajdowała się kaplica wstawiennictwa Najświętszej Dziewicy. Dziś istnieje wystawa haftowanych ikon i koni oraz innych starożytnych rzeczy i akcesoriów kościelnych.",

					subtitle3TranslateHeroes:"Kościół św. Bazylia Wielki (św. Mikołaj) w Wielkiej Wołosyanka",
					parag3TranslateHeroes:"Współczesny budynek kościoła św. Bazylia został zbudowany w 1903 roku na inicjatywie parafii księdza ks. Albina Dobryansky na miejscu starego kościoła, którego pierwsza informacja pochodzi z 1577 r. Co ciekawe, w 1668 r. Miejsce Stas Vasylkovich i jego żona Ogafia przedstawili książkę Johniki Galyatovsky'ego Kościołowi „Key of Razminia”, opublikowanej w LVIV zaledwie trzy lata wcześniej! Ten kościół został wzniesiony przez mistrza-mistrza Ivana i Vasyl Vasykiv z doliny legendarnego architekta LVIV Vasyl Nagirny w stylu neo-Ukraińskiego.",

					subtitle4TranslateHeroes:"Turier Village",
					parag4TranslateHeroes:"Turier to starożytna wioska Boyko, najdłuższa w społeczności Strail (555 hektarów, długość wszystkich ulic wynosi 36 km). Nawet w czasach Kijowa Rusa była osada wojskowa i osada strażnika, która broniła starożytnej drogi handlowej „rosyjskiej ścieżki”. W wiosce zachowują się ślady wczesnych wałów historycznych. Archeolodzy znaleźli tutaj starożytny rosyjski miecz i inne rzeczy. Według niektórych danych, pierwsza zachowana pisemna wzmianka o wiosce jest datowana.",

					subtitle5TranslateHeroes:"Kościół św. Mikołaja w wiosce Turier (Dolishnya) w 1690 roku",
					parag5TranslateHeroes:"Jest to najstarszy kościół ze społeczności Strail, zbudowany w 1690 roku. W wiosce znajduje się legenda o strukturze tego kościoła: „Dżentelmen nie pozwolił Kościołowi na zbudowanie tego punktu, więc ludzie byli potajemnie przygotowani w lesie, a kiedy nadszedł właściwy moment (dżentelmen opuścił wioskę w Biznes), chłopi zostali przeniesieni, a kościół został przeniesiony w nocy. ”. Ten malowniczy kościół był wielokrotnie przedstawiany na akwarelach i linorytach na święta Bożego Narodzenia i Wielkanocne, ukraińska artystka Elena Kulchytska w latach dwudziestych. Podczas drugiej wojny światowej kościół został uszkodzony, ale w 1945 roku został naprawiony.",

					subtitle6TranslateHeroes:"Wieża pamięci w niedzielę",
					parag6TranslateHeroes:"Jest to najwyższa drewniana wieża dzwonowa na Ukrainie i Europie, której wysokość wynosi 43 metry. Wysokość ta nie jest przypadkowa-IT symbolizuje pamięć 43. rebeliantów UPA, którzy zmarli w 1943 r. W bitwie z nazistami. Tutaj możesz wspiąć się na platformę widokową i uderzyć w dzwonek w pamięć, patrząc na nieograniczone pasma górskie w regionach LVIV i Transcarpathian, o które młodzi chłopcy walczyli i oddali życie podczas naszych drugich konkursów wyzwoleniach. Rok później, w 1944 r., Odbyła się epokowa, bez przesady, dla naszego kraju-wielkiego Kongresu przywódców und, dowódców UPA, delegatów różnych partii, które zostały ukoronowane z wyborem ukraińskiej rady wyzwoleńczej-podziemnej ziemi Rząd Ruch Wyzwolenia Ukraińców do połowy lat 50. XX wieku. I to jest cudowna historia świadomej jedności narodu ukraińskiego. Dlaczego? Ponieważ jedna trzecia wybranych delegatów nie pochodziła z Galicji, ale szef UHWR wybrany Poltava Cyril Osmak. Tak, ruchem Bandera zarządzał Dnieper, który mieszkał w tych wioskach!",

					subtitle7TranslateHeroes:"Cyryl Osmak's Historical and Memorial Museum, Uhvr Heads, niedziela",
					parag7TranslateHeroes:"Cyril Osmak (pseudo „Marko Goryansky”) jest ukraińskim naukowcem, ekonomistą rolnym, uczestnikiem pierwszego i drugiego konkursu wyzwolenia, członkiem Rady Środkowej, OUN, szef ukraińskiej Rady Wyzwolenia Ogólnego (UHWR) - Underground Rząd i Parlament, rząd kto był w aktualizacji. UHWR, utworzone na Zgromadzeniu Ustawowym w dniach 11-15 lipca 1944 r. Na górze Dil w lesie między wioskami w niedzielę i Sprinę, była organizacją super-stronniczą. Tylko 9 z 25 delegatów, którzy otrzymali mandaty, było partie und (b). Jedna trzecia delegatów - z regionu Dnieper, 17 - z Volyn i Galicia. Cyril Osmak i jego żona mieszkali w wiosce niedzieli i Turiera Gorishne. Muzeum Cyril Osmak zostało założone we wrześniu 2014 r. W terenie domu ludowego wioski niedzieli (dawny budynek oświecenia). Grupa naukowców i specjalistów muzealnych pracowała nad opracowaniem i budową ekspozycji. Muzeum ma dwie sekcje tematyczne. Podstawą ekspozycji są dokumenty archiwalne, zdjęcia i inne materiały, literatura podarowana przez Natalia Osmak, córkę Cyryla Osmaka, wspomnienia jego współczesnych i krewnych, zebranych przez Love Koval. Druga sekcja to zbiór eksponatów związanych z życiem i życiem Ukraińczyków z regionu Carpathian XIX i XX wieku. (krosna, starożytne łuski, kawiarnie, pala dla dzieci, dziewiętnaste haft, forma żołnierzy UPA i inne zainteresowania) i obrazy.",

					subtitle8TranslateHeroes:"Czerwone -książki jagodowe trujące w niedzielę",
					parag8TranslateHeroes:"Wszystkie części tego drzewa - kora, liście, a nawet drewno - są trujące dla ludzi. Zawierają dużą liczbę taksówek, substancję, która jest trująca dla ludzi i niektórych zwierząt. Wcześniej drewniane wiązki zostały celowo wykonane w domach na suficie Yajadgo Tisza. Tak więc dom był chroniony przed infekcjami. Ze względu na masowe ścinanie drogich mebli, drzewo to jest teraz rzadkie i zostało zachowane tylko w górzystnych regionach naszego kraju - Carpatian i Krym. W czasach starożytnych tysiące użycia jako niezawodny sposób zabicia przeciwnika. Napoje zostały wykonane z drewna. Po wypiciu takiej miski wina osoba szybko umarła. Ludzie uważali również, że korona tego drzewa jest bardzo niebezpieczna. Uważano, że nie możesz spać pod TIS, ponieważ nigdy więcej się nie obudzisz. Jednak z czasem udowodniono, że tak nie było. Śmiertelna dawka dla ludzi jest zjedzenie 100 g świeżych igieł. Ponadto w żadnym wypadku nie możesz wypróbować pięknych czerwonych jagód, które rosną na drzewie. Jednak jelenie i zające jedzą kora i igły swobodnie, nie poświęcając zdrowia. Co ciekawe, im starsze drzewo, tym bardziej jest trujące. I żyje przez długi czas - nawet do 3000 lat! Cóż, odwiedź Rippece (podwórko), w którym rośnie, i zapytaj lokalne gadżety, jak żyją pod tym rzadkim trującym drzewem z właściwościami leczniczymi 🙂 i przegapić - zapisz współrzędne: 49.316899, 23.103886",

				},
			},
		},
	});

	// Check whether to update data
	if (shouldUpdateData()) {
		updateContent();
		clearLocalStorage();
	} else {
		// Set the selected language on page load
		updateContent();
		updateSelectTrigger();
	}

	function changeLanguage(language) {
		i18next.changeLanguage(language, function (err, t) {
			updateContent();
			updateSelectTrigger();
		});
	}

	function updateContent() {
		var routeElements = document.querySelectorAll(".routes");
		routeElements.forEach(function (route) {
			route.textContent = i18next.t("routes");
		});

		var serviceElements = document.querySelectorAll(".services");
		serviceElements.forEach(function (service) {
			service.textContent = i18next.t("services");
		});

		var contactElements = document.querySelectorAll(".contacts");
		contactElements.forEach(function (contact) {
			contact.textContent = i18next.t("contacts");
		});

		var howToGetElements = document.querySelectorAll(".howToGet");
		howToGetElements.forEach(function (howToGet) {
			howToGet.textContent = i18next.t("howToGet");
		});

		var attractionElements = document.querySelectorAll(".attractions");
		attractionElements.forEach(function (attraction) {
			attraction.textContent = i18next.t("attractions");
		});

		var aboutUsElements = document.querySelectorAll(".aboutUs");
		aboutUsElements.forEach(function (aboutUs) {
			aboutUs.textContent = i18next.t("aboutUs");
		});

		var blogAndEventElements = document.querySelectorAll(".blogAndEvents");
		blogAndEventElements.forEach(function (blogAndEvent) {
			blogAndEvent.textContent = i18next.t("blogAndEvents");
		});

		var routesButtonElements = document.querySelectorAll(".routesButton");
		routesButtonElements.forEach(function (routesButton) {
			routesButton.textContent = i18next.t("routesButton");
		});

		var routesTitleTranslateElement = document.querySelectorAll(
			".routesTitleTranslate"
		);
		routesTitleTranslateElement.forEach(function (routesTitleTranslate) {
			routesTitleTranslate.textContent = i18next.t("routesTitleTranslate");
		});

		var routesSubtitleTranslateElement = document.querySelectorAll(
			".routesSubtitleTranslate"
		);
		routesSubtitleTranslateElement.forEach(function (routesSubtitleTranslate) {
			routesSubtitleTranslate.textContent = i18next.t("routesSubtitleTranslate");
		});

		var menuElement = document.querySelectorAll(".menuText");
		menuElement.forEach(function (menuText) {
			menuText.textContent = i18next.t("menuText");
		});

		var levelTranslate1Element = document.querySelectorAll(".levelTranslate1");
		levelTranslate1Element.forEach(function (levelTranslate1) {
			levelTranslate1.textContent = i18next.t("levelTranslate1");
		});

		var distanceTranslate1Element = document.querySelectorAll(
			".distanceTranslate1"
		);
		distanceTranslate1Element.forEach(function (distanceTranslate1) {
			distanceTranslate1.textContent = i18next.t("distanceTranslate1");
		});

		var heightTranslate1Element = document.querySelectorAll(".heightTranslate1");
		heightTranslate1Element.forEach(function (heightTranslate1) {
			heightTranslate1.textContent = i18next.t("heightTranslate1");
		});

		var route1NumTranslateElement = document.querySelectorAll(
			".route1NumTranslate"
		);
		route1NumTranslateElement.forEach(function (route1NumTranslate) {
			route1NumTranslate.textContent = i18next.t("route1NumTranslate");
		});

		var route1TranslateElement = document.querySelectorAll(".route1Translate");
		route1TranslateElement.forEach(function (route1Translate) {
			route1Translate.textContent = i18next.t("route1Translate");
		});

		var route1SubtitleTranslateElement = document.querySelectorAll(
			".route1SubtitleTranslate"
		);
		route1SubtitleTranslateElement.forEach(function (route1SubtitleTranslate) {
			route1SubtitleTranslate.textContent = i18next.t("route1SubtitleTranslate");
		});

		var levelTranslate2Element = document.querySelectorAll(".levelTranslate2");
		levelTranslate2Element.forEach(function (levelTranslate2) {
			levelTranslate2.textContent = i18next.t("levelTranslate2");
		});

		var distanceTranslate2Element = document.querySelectorAll(
			".distanceTranslate2"
		);
		distanceTranslate2Element.forEach(function (distanceTranslate2) {
			distanceTranslate2.textContent = i18next.t("distanceTranslate2");
		});

		var heightTranslate2Element = document.querySelectorAll(".heightTranslate2");
		heightTranslate2Element.forEach(function (heightTranslate2) {
			heightTranslate2.textContent = i18next.t("heightTranslate2");
		});

		var route2NumTranslateElement = document.querySelectorAll(
			".route2NumTranslate"
		);
		route2NumTranslateElement.forEach(function (route2NumTranslate) {
			route2NumTranslate.textContent = i18next.t("route2NumTranslate");
		});

		var route2TranslateElement = document.querySelectorAll(".route2Translate");
		route2TranslateElement.forEach(function (route2Translate) {
			route2Translate.textContent = i18next.t("route2Translate");
		});

		var route2SubtitleTranslateElement = document.querySelectorAll(
			".route2SubtitleTranslate"
		);
		route2SubtitleTranslateElement.forEach(function (route2SubtitleTranslate) {
			route2SubtitleTranslate.textContent = i18next.t("route2SubtitleTranslate");
		});

		var levelTranslate3Element = document.querySelectorAll(".levelTranslate3");
		levelTranslate3Element.forEach(function (levelTranslate3) {
			levelTranslate3.textContent = i18next.t("levelTranslate3");
		});

		var distanceTranslate3Element = document.querySelectorAll(
			".distanceTranslate3"
		);
		distanceTranslate3Element.forEach(function (distanceTranslate3) {
			distanceTranslate3.textContent = i18next.t("distanceTranslate3");
		});

		var heightTranslate3Element = document.querySelectorAll(".heightTranslate3");
		heightTranslate3Element.forEach(function (heightTranslate3) {
			heightTranslate3.textContent = i18next.t("heightTranslate3");
		});

		var route3NumTranslateElement = document.querySelectorAll(
			".route3NumTranslate"
		);
		route3NumTranslateElement.forEach(function (route3NumTranslate) {
			route3NumTranslate.textContent = i18next.t("route3NumTranslate");
		});

		var route3TranslateElement = document.querySelectorAll(".route3Translate");
		route3TranslateElement.forEach(function (route3Translate) {
			route3Translate.textContent = i18next.t("route3Translate");
		});

		var route3SubtitleTranslateElement = document.querySelectorAll(
			".route3SubtitleTranslate"
		);
		route3SubtitleTranslateElement.forEach(function (route3SubtitleTranslate) {
			route3SubtitleTranslate.textContent = i18next.t("route3SubtitleTranslate");
		});

		var footerMainTransalteElement = document.querySelectorAll(
			".footerMainTransalte"
		);
		footerMainTransalteElement.forEach(function (footerMainTransalte) {
			footerMainTransalte.textContent = i18next.t("footerMainTransalte");
		});

		var footerPartnerTransalteElement = document.querySelectorAll(
			".footerPartnerTransalte"
		);
		footerPartnerTransalteElement.forEach(function (footerPartnerTransalte) {
			footerPartnerTransalte.textContent = i18next.t("footerPartnerTransalte");
		});

		var footerLawsTranslateElement = document.querySelectorAll(
			".footerLawsTranslate"
		);
		footerLawsTranslateElement.forEach(function (footerLawsTranslate) {
			footerLawsTranslate.textContent = i18next.t("footerLawsTranslate");
		});

		var footerPoliticTranslateElement = document.querySelectorAll(
			".footerPoliticTranslate"
		);
		footerPoliticTranslateElement.forEach(function (footerPoliticTranslate) {
			footerPoliticTranslate.textContent = i18next.t("footerPoliticTranslate");
		});

		var footerDesignerTranslateElement = document.querySelectorAll(
			".footerDesignerTranslate"
		);
		footerDesignerTranslateElement.forEach(function (footerDesignerTranslate) {
			footerDesignerTranslate.textContent = i18next.t("footerDesignerTranslate");
		});

		var NavMainElement = document.querySelectorAll(".NavMain");
		NavMainElement.forEach(function (NavMain) {
			NavMain.textContent = i18next.t("NavMain");
		});

		var NavRoutesElement = document.querySelectorAll(".NavRoutes");
		NavRoutesElement.forEach(function (NavRoutes) {
			NavRoutes.textContent = i18next.t("NavRoutes");
		});

		var NavRoute1Element = document.querySelectorAll(".NavRoute1");
		NavRoute1Element.forEach(function (NavRoute1) {
			NavRoute1.textContent = i18next.t("NavRoute1");
		});
		
		var NavRoute1Element = document.querySelectorAll(".NavRoute2");
		NavRoute1Element.forEach(function (NavRoute2) {
			NavRoute2.textContent = i18next.t("NavRoute2");
		});

		var blackLetterElement = document.querySelectorAll(".blackLetter");
		blackLetterElement.forEach(function (blackLetter) {
			blackLetter.textContent = i18next.t("blackLetter");
		});

		var greenLetterElement = document.querySelectorAll(".greenLetter");
		greenLetterElement.forEach(function (greenLetter) {
			greenLetter.textContent = i18next.t("greenLetter");
		});

		var SubHireRoutesElement = document.querySelectorAll(".SubHireRoutes");
		SubHireRoutesElement.forEach(function (SubHireRoutes) {
			SubHireRoutes.textContent = i18next.t("SubHireRoutes");
		});

		var hireTitleTranslateElement = document.querySelectorAll(
			".hireTitleTranslate"
		);
		hireTitleTranslateElement.forEach(function (hireTitleTranslate) {
			hireTitleTranslate.textContent = i18next.t("hireTitleTranslate");
		});

		var hireSubtitleTranslateElement = document.querySelectorAll(
			".hireSubtitleTranslate"
		);
		hireSubtitleTranslateElement.forEach(function (hireSubtitleTranslate) {
			hireSubtitleTranslate.textContent = i18next.t("hireSubtitleTranslate");
		});

		var StrilkyElement = document.querySelectorAll(".Strilky");
		StrilkyElement.forEach(function (Strilky) {
			Strilky.textContent = i18next.t("Strilky");
		});

		var TysovytsiaElement = document.querySelectorAll(".Tysovytsia");
		TysovytsiaElement.forEach(function (Tysovytsia) {
			Tysovytsia.textContent = i18next.t("Tysovytsia");
		});

		var PloskeElement = document.querySelectorAll(".Ploske");
		PloskeElement.forEach(function (Ploske) {
			Ploske.textContent = i18next.t("Ploske");
		});

		var MshanetsElement = document.querySelectorAll(".Mshanets");
		MshanetsElement.forEach(function (Mshanets) {
			Mshanets.textContent = i18next.t("Mshanets");
		});

		var LopushankaElement = document.querySelectorAll(".Lopushanka");
		LopushankaElement.forEach(function (Lopushanka) {
			Lopushanka.textContent = i18next.t("Lopushanka");
		});

		var ZamkovaElement = document.querySelectorAll(".Zamkova");
		ZamkovaElement.forEach(function (Zamkova) {
			Zamkova.textContent = i18next.t("Zamkova");
		});

		var VolosankaElement = document.querySelectorAll(".Volosanka");
		VolosankaElement.forEach(function (Volosanka) {
			Volosanka.textContent = i18next.t("Volosanka");
		});

		var TureElement = document.querySelectorAll(".Ture");
		TureElement.forEach(function (Ture) {
			Ture.textContent = i18next.t("Ture");
		});

		var NedilnaElement = document.querySelectorAll(".Nedilna");
		NedilnaElement.forEach(function (Nedilna) {
			Nedilna.textContent = i18next.t("Nedilna");
		});

		var TopilnitsaElement = document.querySelectorAll(".Topilnitsa");
		TopilnitsaElement.forEach(function (Topilnitsa) {
			Topilnitsa.textContent = i18next.t("Topilnitsa");
		});

		var textElement = document.querySelectorAll(".text");
		textElement.forEach(function (text) {
			text.textContent = i18next.t("text");
		});

		var subtitle1translateElement = document.querySelectorAll(
			".subtitle1translate"
		);
		subtitle1translateElement.forEach(function (subtitle1translate) {
			subtitle1translate.textContent = i18next.t("subtitle1translate");
		});

		var parag1TranslateElement = document.querySelectorAll(".parag1Translate");
		parag1TranslateElement.forEach(function (parag1Translate) {
			parag1Translate.textContent = i18next.t("parag1Translate");
		});

		var moreAboutAttractionsElement = document.querySelectorAll(
			".moreAboutAttractions"
		);
		moreAboutAttractionsElement.forEach(function (moreAboutAttractions) {
			moreAboutAttractions.textContent = i18next.t("moreAboutAttractions");
		});

		var subtitle2translateElement = document.querySelectorAll(
			".subtitle2translate"
		);
		subtitle2translateElement.forEach(function (subtitle2translate) {
			subtitle2translate.textContent = i18next.t("subtitle2translate");
		});

		var parag2TranslateElement = document.querySelectorAll(".parag2Translate");
		parag2TranslateElement.forEach(function (parag2Translate) {
			parag2Translate.textContent = i18next.t("parag2Translate");
		});

		var subtitle3translateElement = document.querySelectorAll(
			".subtitle3translate"
		);
		subtitle3translateElement.forEach(function (subtitle3translate) {
			subtitle3translate.textContent = i18next.t("subtitle3translate");
		});

		var parag3TranslateElement = document.querySelectorAll(".parag3Translate");
		parag3TranslateElement.forEach(function (parag3Translate) {
			parag3Translate.textContent = i18next.t("parag3Translate");
		});

		var subtitle4translateElement = document.querySelectorAll(
			".subtitle4translate"
		);
		subtitle4translateElement.forEach(function (subtitle4translate) {
			subtitle4translate.textContent = i18next.t("subtitle4translate");
		});

		var parag4TranslateElement = document.querySelectorAll(".parag4Translate");
		parag4TranslateElement.forEach(function (parag4Translate) {
			parag4Translate.textContent = i18next.t("parag4Translate");
		});

		var subtitle5translateElement = document.querySelectorAll(
			".subtitle5translate"
		);
		subtitle5translateElement.forEach(function (subtitle5translate) {
			subtitle5translate.textContent = i18next.t("subtitle5translate");
		});

		var parag5TranslateElement = document.querySelectorAll(".parag5Translate");
		parag5TranslateElement.forEach(function (parag5Translate) {
			parag5Translate.textContent = i18next.t("parag5Translate");
		});

		var subtitle6translateElement = document.querySelectorAll(
			".subtitle6translate"
		);
		subtitle6translateElement.forEach(function (subtitle6translate) {
			subtitle6translate.textContent = i18next.t("subtitle6translate");
		});

		var parag6TranslateElement = document.querySelectorAll(".parag6Translate");
		parag6TranslateElement.forEach(function (parag6Translate) {
			parag6Translate.textContent = i18next.t("parag6Translate");
		});

		var subtitle7translateElement = document.querySelectorAll(
			".subtitle7translate"
		);
		subtitle7translateElement.forEach(function (subtitle7translate) {
			subtitle7translate.textContent = i18next.t("subtitle7translate");
		});

		var parag7TranslateElement = document.querySelectorAll(".parag7Translate");
		parag7TranslateElement.forEach(function (parag7Translate) {
			parag7Translate.textContent = i18next.t("parag7Translate");
		});

		var subtitle8translateElement = document.querySelectorAll(
			".subtitle8translate"
		);
		subtitle8translateElement.forEach(function (subtitle8translate) {
			subtitle8translate.textContent = i18next.t("subtitle8translate");
		});

		var parag8TranslateElement = document.querySelectorAll(".parag8Translate");
		parag8TranslateElement.forEach(function (parag8Translate) {
			parag8Translate.textContent = i18next.t("parag8Translate");
		});

		var subtitle9translateElement = document.querySelectorAll(
			".subtitle9translate"
		);
		subtitle9translateElement.forEach(function (subtitle9translate) {
			subtitle9translate.textContent = i18next.t("subtitle9translate");
		});

		var parag9TranslateElement = document.querySelectorAll(".parag9Translate");
		parag9TranslateElement.forEach(function (parag9Translate) {
			parag9Translate.textContent = i18next.t("parag9Translate");
		});
		
		var subtitle1translateElementHeroes = document.querySelectorAll(".subtitle1TranslateHeroes");
		subtitle1translateElementHeroes.forEach(function (subtitle1TranslateHeroes) {
			subtitle1TranslateHeroes.textContent = i18next.t("subtitle1TranslateHeroes");
		});

		var parag1TranslateElementHeroes = document.querySelectorAll(".parag1TranslateHeroes");
		parag1TranslateElementHeroes.forEach(function (parag1TranslateHeroes) {
			parag1TranslateHeroes.textContent = i18next.t("parag1TranslateHeroes");
		});

		var subtitle2translateElementHeroes = document.querySelectorAll(".subtitle2TranslateHeroes");
		subtitle2translateElementHeroes.forEach(function (subtitle2TranslateHeroes) {
			subtitle2TranslateHeroes.textContent = i18next.t("subtitle2TranslateHeroes");
		});

		var parag2TranslateElementHeroes = document.querySelectorAll(".parag2TranslateHeroes");
		parag2TranslateElementHeroes.forEach(function (parag2TranslateHeroes) {
			parag2TranslateHeroes.textContent = i18next.t("parag2TranslateHeroes");
		});

		var subtitle3translateElementHeroes = document.querySelectorAll(".subtitle3TranslateHeroes");
		subtitle3translateElementHeroes.forEach(function (subtitle3TranslateHeroes) {
			subtitle3TranslateHeroes.textContent = i18next.t("subtitle3TranslateHeroes");
		});

		var parag3TranslateElementHeroes = document.querySelectorAll(".parag3TranslateHeroes");
		parag3TranslateElementHeroes.forEach(function (parag3TranslateHeroes) {
			parag3TranslateHeroes.textContent = i18next.t("parag3TranslateHeroes");
		});

		var subtitle4translateElementHeroes = document.querySelectorAll(".subtitle4TranslateHeroes");
		subtitle4translateElementHeroes.forEach(function (subtitle4TranslateHeroes) {
			subtitle4TranslateHeroes.textContent = i18next.t("subtitle4TranslateHeroes");
		});

		var parag4TranslateElementHeroes = document.querySelectorAll(".parag4TranslateHeroes");
		parag4TranslateElementHeroes.forEach(function (parag4TranslateHeroes) {
			parag4TranslateHeroes.textContent = i18next.t("parag4TranslateHeroes");
		});

		var subtitle5translateElementHeroes = document.querySelectorAll(".subtitle5TranslateHeroes");
		subtitle5translateElementHeroes.forEach(function (subtitle5TranslateHeroes) {
			subtitle5TranslateHeroes.textContent = i18next.t("subtitle5TranslateHeroes");
		});

		var parag5TranslateElementHeroes = document.querySelectorAll(".parag5TranslateHeroes");
		parag5TranslateElementHeroes.forEach(function (parag5TranslateHeroes) {
			parag5TranslateHeroes.textContent = i18next.t("parag5TranslateHeroes");
		});

		var subtitle6translateElementHeroes = document.querySelectorAll(".subtitle6TranslateHeroes");
		subtitle6translateElementHeroes.forEach(function (subtitle6TranslateHeroes) {
			subtitle6TranslateHeroes.textContent = i18next.t("subtitle6TranslateHeroes");
		});

		var parag6TranslateElementHeroes = document.querySelectorAll(".parag6TranslateHeroes");
		parag6TranslateElementHeroes.forEach(function (parag6TranslateHeroes) {
			parag6TranslateHeroes.textContent = i18next.t("parag6TranslateHeroes");
		});

		var subtitle7translateElementHeroes = document.querySelectorAll(".subtitle7TranslateHeroes");
		subtitle7translateElementHeroes.forEach(function (subtitle7TranslateHeroes) {
			subtitle7TranslateHeroes.textContent = i18next.t("subtitle7TranslateHeroes");
		});

		var parag7TranslateElementHeroes = document.querySelectorAll(".parag7TranslateHeroes");
		parag7TranslateElementHeroes.forEach(function (parag7TranslateHeroes) {
			parag7TranslateHeroes.textContent = i18next.t("parag7TranslateHeroes");
		});

		var subtitle8translateElementHeroes = document.querySelectorAll(".subtitle8TranslateHeroes");
		subtitle8translateElementHeroes.forEach(function (subtitle8TranslateHeroes) {
			subtitle8TranslateHeroes.textContent = i18next.t("subtitle8TranslateHeroes");
		});

		var parag8TranslateElementHeroes = document.querySelectorAll(".parag8TranslateHeroes");
		parag8TranslateElementHeroes.forEach(function (parag8TranslateHeroes) {
			parag8TranslateHeroes.textContent = i18next.t("parag8TranslateHeroes");
		});

		var titleTranslanteElement = document.querySelector(".titleTranslante");
		titleTranslanteElement.textContent = i18next.t("titleTranslante");

		var subTitleTranslateElement = document.querySelector(".subTitleTranslate");
		subTitleTranslateElement.textContent = i18next.t("subTitleTranslate");

		var titleButTranslateElement = document.querySelector(".titleButTranslate");
		titleButTranslateElement.textContent = i18next.t("titleButTranslate");

		var titleButInfTranslateElement = document.querySelector(
			".titleButInfTranslate"
		);
		titleButInfTranslateElement.textContent = i18next.t("titleButInfTranslate");

		var boykuTitleAccentElement = document.querySelector(".boykuTitleAccent");
		boykuTitleAccentElement.textContent = i18next.t("boykuTitleAccent");

		var boykuTitleElement = document.querySelector(".boykuTitle");
		boykuTitleElement.textContent = i18next.t("boykuTitle");

		var boykuSub1Element = document.querySelector(".boykuSub1");
		boykuSub1Element.textContent = i18next.t("boykuSub1");

		var boykuSub2Element = document.querySelector(".boykuSub2");
		boykuSub2Element.textContent = i18next.t("boykuSub2");

		var subtitlePaddingElement = document.querySelector(".subtitlePadding");
		subtitlePaddingElement.textContent = i18next.t("subtitlePadding");

		var emotionsTitleAccentElement = document.querySelector(
			".emotionsTitleAccent"
		);
		emotionsTitleAccentElement.textContent = i18next.t("emotionsTitleAccent");

		var emotionsTitleElement = document.querySelector(".emotionsTitle");
		emotionsTitleElement.textContent = i18next.t("emotionsTitle");

		var item1TranslateElement = document.getElementById("item1Translate");
		item1TranslateElement.textContent = i18next.t("item1Translate");

		var item2TranslateElement = document.querySelector(".item2Translate");
		item2TranslateElement.textContent = i18next.t("item2Translate");

		var item3TranslateElement = document.querySelector(".item3Translate");
		item3TranslateElement.textContent = i18next.t("item3Translate");

		var routesAboutTitleTranslateElement = document.getElementById(
			"routesAboutTitleTranslate"
		);
		routesAboutTitleTranslateElement.textContent = i18next.t(
			"routesAboutTitleTranslate"
		);

		var routesAboutSubtitleTranslateElement = document.getElementById(
			"routesAboutSubtitleTranslate"
		);
		routesAboutSubtitleTranslateElement.textContent = i18next.t(
			"routesAboutSubtitleTranslate"
		);

		var aboutUsAccentTranslateElement = document.getElementById(
			"aboutUsAccentTranslate"
		);
		aboutUsAccentTranslateElement.textContent = i18next.t(
			"aboutUsAccentTranslate"
		);

		var aboutUsTitleTranslateElement = document.getElementById(
			"aboutUsTitleTranslate"
		);
		aboutUsTitleTranslateElement.textContent = i18next.t("aboutUsTitleTranslate");

		var aboutUsSubtitleTranslateElement = document.getElementById(
			"aboutUsSubtitleTranslate"
		);
		aboutUsSubtitleTranslateElement.textContent = i18next.t(
			"aboutUsSubtitleTranslate"
		);

		var InstTitleTranslateElement = document.getElementById("InstTitleTranslate");
		InstTitleTranslateElement.textContent = i18next.t("InstTitleTranslate");
	}

	function updateSelectTrigger() {
		var selectTriggers = document.querySelectorAll(".select-trigger");
		selectTriggers.forEach(function (trigger) {
			trigger.textContent = i18next.t(getSavedLanguage() || "Ua");
		});
	}

	function saveLanguage(language) {
		localStorage.setItem("selectedLanguage", language);
	}

	function getSavedLanguage() {
		return localStorage.getItem("selectedLanguage");
	}

	function shouldUpdateData() {
		var lastUpdate = localStorage.getItem("lastUpdate");
		if (!lastUpdate) {
			return true;
		}
		var currentTime = new Date().getTime();
		var timeDiff = currentTime - lastUpdate;
		var hoursSinceLastUpdate = timeDiff / (1000 * 60 * 60);
		return hoursSinceLastUpdate > 24;
	}

	function clearLocalStorage() {
		localStorage.clear();
		localStorage.setItem("lastUpdate", new Date().getTime());
	}
});
