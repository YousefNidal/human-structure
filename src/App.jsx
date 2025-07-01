import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// Import images
import handImage from "./assets/рука.png";
import gastrointestinalImage from "./assets/Желудочно-Кешечно.jpg";
import glaz from "./assets/глаз.jpeg";
import geludak from "./assets/желюдок.jpg";
import lexkie from "./assets/Лёгкие.jpeg";
import mozg from "./assets/Мозг.png";
import peshen from "./assets/печень.jpeg";
import serdsa from "./assets/Сердца.svg";
import iazik from "./assets/язык.jpg";

const anatomyData = [
  {
    id: "brain",
    name: "Мозг 🧠",
    description: "Главный центр управления телом! Мозг состоит из миллиардов нейронов, которые образуют сложные сети. Он контролирует мысли, память, эмоции, движения и все функции организма. Мозг разделен на несколько отделов, каждый из которых отвечает за определенные функции: лобные доли - за мышление и принятие решений, височные - за слух и память, теменные - за обработку сенсорной информации, а затылочные - за зрение.",
    facts: [
      "Состоит из 86 миллиардов нейронов",
      "Использует 20% кислорода и энергии тела",
      "На 60% состоит из жира",
      "Развивается до 25 лет",
      "Может хранить информацию объемом до 2,5 петабайт",
      "Нейроны передают сигналы со скоростью 400 км/ч",
      "Содержит 100 000 км кровеносных сосудов",
      "Гиппокамп отвечает за формирование воспоминаний"
    ],
    position: { x: 210, y: 180 },
    color: "#9c27b0",
    funFacts: [
      "Если бы мозг был компьютером, он мог бы выполнять 38 тысяч триллионов операций в секунду!",
      "Мозг не чувствует боли - у него нет болевых рецепторов!",
      "Информация в мозгу движется со скоростью 430 км/ч!",
      "Во сне мозг обрабатывает информацию, полученную за день",
      "Мозг Эйнштейна весил на 200 грамм меньше среднего"
    ],
    quiz: {
      question: "Какой орган использует 20% всей энергии тела?",
      options: ["Сердце", "Мозг", "Печень", "Лёгкие"],
      answer: 1
    },
    image: mozg
  },
  {
    id: "heart",
    name: "Сердце ❤️",
    description: "Мощный мышечный насос, который перекачивает кровь по всему телу 24/7. Состоит из 4 камер (два предсердия и два желудочка) и работает благодаря специальной проводящей системе, создающей электрические импульсы. Сердце окружено защитной оболочкой - перикардом, а его работа регулируется автономной нервной системой. Здоровое сердце может работать более 100 лет без остановки!",
    facts: [
      "Бьется около 100,000 раз в день",
      "Перекачивает 7,500 литров крови ежедневно",
      "Имеет собственную электрическую систему",
      "Размером с кулак владельца",
      "Работает автономно - может биться вне тела",
      "Кровь проходит полный круг за 20-30 секунд",
      "Сердце женщины бьется быстрее мужского",
      "Звук сердцебиения создают клапаны"
    ],
    position: { x: 210, y: 280 },
    color: "#f44336",
    funFacts: [
      "За всю жизнь сердце перекачивает столько крови, что ею можно заполнить 100 плавательных бассейнов!",
      "Сердце женщины бьётся быстрее, чем сердце мужчины!",
      "Сердце может продолжать биться даже вне тела!",
      "Первая успешная пересадка сердца была в 1967 году",
      "Сердце жирафа весит около 12 кг из-за длинной шеи"
    ],
    quiz: {
      question: "Сколько раз в день бьётся сердце?",
      options: ["10 000 раз", "50 000 раз", "100 000 раз", "200 000 раз"],
      answer: 2
    },
    image: serdsa
  },
  {
    id: "lungs",
    name: "Лёгкие 🫁",
    description: "Сложная дыхательная система, где происходит газообмен. Состоят из миллионов альвеол (пузырьков), общая площадь которых сравнима с теннисным кортом! Легкие покрыты плеврой - защитной оболочкой. Правое легкое состоит из 3 долей, левое - из 2 (чтобы оставить место для сердца). Дыхание контролируется диафрагмой - мощной мышцей под легкими. Каждый день мы делаем около 20,000 вдохов!",
    facts: [
      "Содержат около 600 миллионов альвеол",
      "Правое легкое больше и имеет 3 доли",
      "Ежедневно обрабатывают 10,000 литров воздуха",
      "Новорожденные делают 40-60 вдохов в минуту",
      "Легкие могут плавать на воде",
      "Чих достигает скорости 160 км/ч",
      "Общая площадь поверхности - 70-100 м²",
      "Легкие очищают воздух от бактерий и пыли"
    ],
    position: { x: 210, y: 350 },
    color: "#2196f3",
    funFacts: [
      "Лёгкие - единственные органы, которые могут плавать на воде!",
      "Дети и женщины дышат быстрее, чем взрослые мужчины!",
      "Чих может лететь со скоростью 160 км/ч!",
      "Объем легких у певцов может достигать 5 литров",
      "Ныряльщики могут задерживать дыхание на 10+ минут"
    ],
    quiz: {
      question: "Почему левое лёгкое меньше правого?",
      options: [
        "Оно слабее",
        "Чтобы было место для сердца",
        "Так задумано природой",
        "Оно важнее"
      ],
      answer: 1
    },
    image: lexkie
  },
  {
    id: "liver",
    name: "Печень 🟫",
    description: "Главная химическая лаборатория организма. Выполняет более 500 функций, включая детоксикацию, синтез белков (например, факторов свертывания крови), производство желчи и хранение витаминов. Печень состоит из особых клеток - гепатоцитов, способных к быстрой регенерации. Это единственный орган, который может полностью восстановиться даже после удаления 75% своей ткани! Печень также регулирует уровень глюкозы в крови и участвует в иммунных процессах.",
    facts: [
      "Самый большой внутренний орган (1.5 кг)",
      "Единственный орган, способный к регенерации",
      "Фильтрует 1.4 литра крови в минуту",
      "Вырабатывает желчь для пищеварения",
      "Хранит железо и витамины A,D,E,K,B12",
      "Может восстановиться до 75% повреждений",
      "Выполняет 500+ биохимических функций",
      "Производит белки крови и факторы свертывания"
    ],
    position: { x: 210, y: 430 },
    color: "#8bc34a",
    funFacts: [
      "Печень выполняет более 500 функций!",
      "Это единственный орган, который может полностью восстановиться!",
      "Древние греки считали, что печень - вместилище души!",
      "Печень может фильтровать 99% бактерий из крови",
      "За минуту через печень проходит 1.5 литра крови"
    ],
    quiz: {
      question: "Что может делать печень, что не могут другие органы?",
      options: [
        "Светиться в темноте",
        "Полностью восстанавливаться",
        "Издавать звуки",
        "Менять цвет"
      ],
      answer: 1
    },
    image: peshen
  },
  {
    id: "stomach",
    name: "Желудок 🤢",
    description: "Мышечный мешок, где пища смешивается с желудочным соком. Содержит соляную кислоту (pH 1.5-3.5), способную растворять металл, и специальную слизь для защиты стенок. Желудок имеет три мышечных слоя, которые ритмично сокращаются, перемешивая пищу. В среднем пища находится в желудке 2-4 часа. Желудок может растягиваться от 50 мл (когда пуст) до 4 литров! Он также производит гормон грелин, отвечающий за чувство голода.",
    facts: [
      "Объем пустого желудка - 50 мл",
      "Может растянуться до 4 литров",
      "Содержит 35 млн желез, выделяющих сок",
      "Кислота может растворять бритвенные лезвия",
      "Пища переваривается 2-4 часа",
      "Производит гормон голода - грелин",
      "Имеет три слоя мышц",
      "Защищен слоем слизи от самопереваривания"
    ],
    position: { x: 210, y: 500 },
    color: "#ff9800",
    funFacts: [
      "Желудочная кислота может растворять бритвенное лезвие!",
      "Чтобы переварить пищу, желудок делает волнообразные движения!",
      "Утром желудок размером с кулак, а после еды может увеличиться в 6 раз!",
      "Желудок взрослого может вместить около 1.5 литров пищи",
      "Желудочный сок обновляется каждые 3 дня"
    ],
    quiz: {
      question: "Сколько времени нужно желудку для переваривания пищи?",
      options: ["10-30 минут", "2-4 часа", "12 часов", "1 день"],
      answer: 1
    },
    image: geludak
  },
  {
    id: "kidneys",
    name: "Почки 🟠",
    description: "Сложные фильтрующие органы бобовидной формы, которые очищают кровь от токсинов и поддерживают водно-солевой баланс. Каждая почка содержит около 1 миллиона нефронов - микроскопических фильтров. Почки регулируют кровяное давление, производят гормон эритропоэтин (стимулирует образование эритроцитов) и активируют витамин D. Они фильтруют всю кровь организма каждые 30 минут! При отказе почек требуется диализ - искусственное очищение крови.",
    facts: [
      "Фильтруют 180 литров крови в день",
      "Содержат 1 млн нефронов каждая",
      "Регулируют кровяное давление",
      "Производят мочу 1-2 литра в день",
      "Активируют витамин D",
      "Вырабатывают гормон эритропоэтин",
      "Расположены на уровне 11-12 ребер",
      "Правая почка обычно немного ниже"
    ],
    position: { x: 210, y: 570 },
    color: "#795548",
    funFacts: [
      "Почки фильтруют около 180 литров крови каждый день!",
      "Древние египтяне считали, что почки важнее сердца!",
      "Почки продолжают работать даже когда ты спишь!",
      "За минуту через почки проходит 1 литр крови",
      "Почки появились у животных раньше сердца"
    ],
    quiz: {
      question: "Какую форму имеют почки?",
      options: ["Как шарик", "Как фасолина", "Как кубик", "Как звёздочка"],
      answer: 1
    }
  },
   
  {
    id: "hand",
    name: "Рука (ладонь) ✋",
    description: "Ладонь человека состоит из пяти пальцев: большого, указательного, среднего, безымянного и мизинца. Каждый палец содержит три фаланги (кроме большого, у которого две). Ладонь содержит множество нервных окончаний, что делает её очень чувствительной. Отпечатки пальцев уникальны у каждого человека!",
    facts: [
      "Состоит из 27 костей",
      "Содержит более 17,000 рецепторов",
      "Отпечатки пальцев уникальны",
      "Ногти растут со скоростью 0.1 мм в день",
      "Большой палец противопоставлен другим",
      "Содержит 29 основных суставов",
      "На ладони нет волосяных фолликулов",
      "Может выполнять точные движения"
    ],
    position: { x: 210, y: 620 },
    color: "#ffb74d",
    funFacts: [
      "Отпечатки пальцев формируются ещё в утробе матери!",
      "Ногти на руках растут быстрее, чем на ногах!",
      "Большой палец управляется 9 отдельными мышцами!",
      "Человек может прожить без мизинца, но потеряет 50% силы руки",
      "Ладонные линии формируются на 12 неделе беременности"
    ],
    quiz: {
      question: "Сколько костей в человеческой ладони?",
      options: ["15", "20", "27", "32"],
      answer: 2
    },
    image: handImage
  },
  {
    id: "tongue",
    name: "Язык 👅",
    description: "Язык - это мышечный орган, отвечающий за вкус, речь и перемещение пищи. Он покрыт вкусовыми сосочками, которые различают сладкое, солёное, кислое, горькое и умами. Язык - самая гибкая мышца в теле и единственная, которая прикреплена только с одной стороны.",
    facts: [
      "Состоит из 8 мышц",
      "Содержит около 10,000 вкусовых рецепторов",
      "Отпечаток языка уникален, как отпечатки пальцев",
      "Длина в среднем 10 см",
      "Различает 5 основных вкусов",
      "Самая сильная мышца относительно размера",
      "Новые вкусовые рецепторы живут 10-14 дней",
      "Участвует в формировании речи"
    ],
    position: { x: 210, y: 690 },
    color: "#f06292",
    funFacts: [
      "Язык - самая гибкая мышца в теле!",
      "Отпечаток языка уникален у каждого человека!",
      "Дети чувствуют вкус лучше, чем взрослые!",
      "Язык жирафа может достигать 45 см в длину",
      "Синий кит имеет язык весом до 3 тонн"
    ],
    quiz: {
      question: "Сколько вкусов различает человеческий язык?",
      options: ["3", "5", "7", "10"],
      answer: 1
    },
    image: iazik
  },
  {
    id: "eyes",
    name: "Глаза 👀",
    description: "Глаза - сложные органы зрения, которые воспринимают свет и преобразуют его в нервные импульсы. Глазное яблоко имеет диаметр около 2.5 см и весит примерно 7-8 грамм. Глаза могут различать около 10 миллионов цветов и работают быстрее любой камеры.",
    facts: [
      "Состоят из более чем 2 млн рабочих частей",
      "Могут обрабатывать 36,000 бит информации в час",
      "Зрачки расширяются на 45% при взгляде на любимого",
      "Роговица - единственная часть тела без кровоснабжения",
      "Моргаем около 15,000 раз в день",
      "Новорожденные не производят слёз",
      "1 из 12 мужчин - дальтоник",
      "Глаза остаются того же размера с рождения"
    ],
    position: { x: 210, y: 760 },
    color: "#64b5f6",
    funFacts: [
      "Глаза могут различать около 10 миллионов цветов!",
      "Все дети рождаются с серо-голубыми глазами!",
      "Глазные мышцы - самые активные в теле!",
      "Диаметр глаза взрослого человека около 2.5 см",
      "Глаза начали развиваться около 550 миллионов лет назад"
    ],
    quiz: {
      question: "Как часто человек моргает в день?",
      options: ["1,000 раз", "5,000 раз", "15,000 раз", "50,000 раз"],
      answer: 2
    },
    image: glaz
  },
  {
  id: "gastrointestinal",
  name: "Желудочно-кишечный тракт 🍽️",
  description: "Желудочно-кишечный тракт (ЖКТ) - это сложная система органов, отвечающая за переваривание пищи, всасывание питательных веществ и выведение отходов. Он начинается с ротовой полости и заканчивается анальным отверстием, включая пищевод, желудок, тонкий и толстый кишечник. Общая длина ЖКТ у взрослого человека составляет около 9 метров! Пища проходит через всю эту систему за 24-72 часа, подвергаясь механической и химической обработке.",
  facts: [
    "Общая длина около 9 метров",
    "Пищеварение занимает 24-72 часа",
    "Содержит около 100 триллионов бактерий",
    "Желудочная кислота может растворять металл",
    "Тонкий кишечник длиной около 6 метров",
    "Площадь поверхности кишечника - 250 м²",
    "Производит 1-1.5 литра слюны в день",
    "Содержит собственную нервную систему"
  ],
  position: { x: 210, y: 450 },
  color: "#8d6e63",
  funFacts: [
    "Кишечник имеет свою собственную нервную систему - энтеральную!",
    "Площадь поверхности кишечника сравнима с теннисным кортом!",
    "Желудочная кислота может растворить бритвенное лезвие за 24 часа!",
    "В кишечнике больше нейронов, чем в спинном мозге!",
    "Длина ЖКТ в 4 раза больше роста человека!"
  ],
  quiz: {
    question: "Какова примерная длина всего ЖКТ взрослого человека?",
    options: ["3 метра", "6 метров", "9 метров", "12 метров"],
    answer: 2
  },
  image: gastrointestinalImage
}
];
const randomFunFacts = [
  "Если бы все кровеносные сосуды вытянуть в линию, они бы обернулись вокруг Земли 2,5 раза!",
  "Кости человека прочнее стали!",
  "Человек теряет около 600 000 частичек кожи каждый час!",
  "Ногти на руках растут в 4 раза быстрее, чем на ногах!",
  "Желудочный сок может растворить даже металл!",
  "За всю жизнь человек производит столько слюны, что ею можно заполнить два бассейна!",
  "Человек моргает около 15 000 раз в день!",
  "Самая сильная мышца в теле - это язык!",
  "Человеческое тело содержит достаточно жира, чтобы сделать 7 кусков мыла!",
  "Дети рождаются с 300 костями, а у взрослых их только 206!",
];

function App() {
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [quizActive, setQuizActive] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [funFact, setFunFact] = useState(null);
  const [activeCircle, setActiveCircle] = useState(null);
  const [showOrganMenu, setShowOrganMenu] = useState(true);

  // Create audio objects using useRef
  const clickSound = useRef(new Audio("https://soundbible.com/mp3/Blop-Mark_DiAngelo-79054334.mp3"));
  const correctSound = useRef(new Audio("https://soundbible.com/mp3/Right_answer-SoundBible.com-79052421.mp3"));
  const wrongSound = useRef(new Audio("https://soundbible.com/mp3/Wrong_answer-SoundBible.com-79052420.mp3"));

  useEffect(() => {
    showRandomFunFact();
    
    // Preload sounds
    clickSound.current.load();
    correctSound.current.load();
    wrongSound.current.load();

    return () => {
      // Cleanup
      clickSound.current.pause();
      correctSound.current.pause();
      wrongSound.current.pause();
    };
  }, []);

  const playSound = (type) => {
    if (!soundEnabled) return;

    try {
      let sound;
      switch (type) {
        case "click":
          sound = clickSound.current;
          break;
        case "correct":
          sound = correctSound.current;
          break;
        case "wrong":
          sound = wrongSound.current;
          break;
        default:
          return;
      }

      // Reset and play
      sound.currentTime = 0;
      sound.play().catch(error => {
        console.error("Failed to play sound:", error);
      });
    } catch (error) {
      console.error("Sound error:", error);
    }
  };

  const selectOrgan = (organId) => {
    playSound("click");
    setSelectedOrgan(organId);
    setActiveCircle(organId);
    setQuizActive(false);
    setQuizResult(null);
    setShowOrganMenu(false);

    const organ = anatomyData.find((o) => o.id === organId);
    if (organ && organ.funFacts && organ.funFacts.length > 0) {
      const randomFact =
        organ.funFacts[Math.floor(Math.random() * organ.funFacts.length)];
      setFunFact(randomFact);
    } else {
      showRandomFunFact();
    }
  };

  const showRandomFunFact = () => {
    const randomFact =
      randomFunFacts[Math.floor(Math.random() * randomFunFacts.length)];
    setFunFact(randomFact);
  };

  const startQuiz = () => {
    if (!selectedOrgan) {
      showRandomFunFact();
      return;
    }

    playSound("click");
    setQuizActive(true);
    setQuizResult(null);
  };

  const checkAnswer = (selectedIndex, correctIndex) => {
    if (quizResult) return;

    const isCorrect = selectedIndex === correctIndex;
    
    // Play sound immediately when answer is selected
    playSound(isCorrect ? "correct" : "wrong");

    setQuizResult({
      text: isCorrect ? "Правильно! Ты молодец! 🎉" : "Почти! Попробуй ещё раз! 😊",
      isCorrect,
      selectedIndex
    });
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    playSound("click");
  };

  const backToMenu = () => {
    playSound("click");
    setSelectedOrgan(null);
    setQuizActive(false);
    setQuizResult(null);
    setActiveCircle(null);
    setShowOrganMenu(true);
    showRandomFunFact();
  };

  const currentOrgan = anatomyData.find((o) => o.id === selectedOrgan) || {
    name: "Давай изучать!",
    description:
      "Нажми на любой орган в теле, чтобы узнать о нём интересные факты!",
    facts: ["Человеческое тело - это удивительная машина!"],
  };

  return (
    <div className="container">
      <header>
        <h1>🔍 Весёлая Анатомия для Детей 🎉</h1>
        <p className="subtitle">Исследуй удивительное тело человека!</p>
      </header>

      <div className="anatomy-viewer">
        <div className="diagram-container">
          <img
            src="https://img.freepik.com/premium-vector/human-anatomy-internal-organ-set-with-brain-lungs-intestine-heart-kidney-pancreas-spleen-liver-stomach-vector-isolated-illustration_679557-4048.jpg"
            alt="Органы человека"
            className="human-diagram"
          />

          {anatomyData.map((organ) => (
            <div
              key={organ.id}
              id={organ.id}
              className={`organ-circle ${activeCircle === organ.id ? "active" : ""} ${organ.id}`}
              
              onClick={() => selectOrgan(organ.id)}
            >
              
            </div>
          ))}
          <div
          id="kidneyss"
          className="organ-circle kidneyss"
          onClick={() => selectOrgan('kidneys')}
          >

          </div>
        </div>

        <div className="info-panel">
          {showOrganMenu ? (
            <div className="organ-menu">
              <h2>Выбери орган для изучения:</h2>
              <div className="welcome-message">
                <p>Добро пожаловать в интерактивный атлас анатомии человека!</p>
                <p>Здесь ты можешь узнать интересные факты о своем теле.</p>
                <div className="stats">
                  <p>🧠 Начни с любого органа, нажав на карточку ниже</p>
                </div>
              </div>
              <div className="organ-cards">
                {anatomyData.map((organ) => (
                  <div
                    key={organ.id}
                    className="organ-card"
                    onClick={() => selectOrgan(organ.id)}
                  >
                    {organ.image ? (
                      <img 
                        src={organ.image} 
                        alt={organ.name} 
                        className="organ-card-image"
                      />
                    ) : (
                      <div className="organ-card-icon">{organ.name.split(" ")[1]}</div>
                    )}
                    <div className="organ-card-name">
                      {organ.name.split(" ")[0]}
                      {organ.id === "gastrointestinal" && " ЖКТ"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="menu-footer">
                <p>Совет: Попробуй начать с сердца или мозга!</p>
                <p>После выбора органа ты сможешь пройти викторину</p>
              </div>
            </div>
          ) : (
            <>
              <div className="panel-header">
                <h2 className="organ-name">{currentOrgan.name}</h2>
                <div>
                  <button className="fun-button" onClick={startQuiz}>
                    Викторина
                  </button>
                  <button className="back-button" onClick={backToMenu}>
                    Назад к меню
                  </button>
                </div>
              </div>

              <div className="organ-display">
                {currentOrgan.image ? (
                  <img 
                    src={currentOrgan.image} 
                    alt={currentOrgan.name}
                    className="organ-main-image"
                  />
                ) : (
                  <div className="organ-emoji-fallback">
                    {currentOrgan.name.split(" ")[1]}
                  </div>
                )}
              </div>

              <div className="organ-description">{currentOrgan.description}</div>

              <div className="organ-facts">
                <h3>Знаете ли вы? 🤔</h3>
                <ul>
                  {currentOrgan.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                  ))}
                </ul>
              </div>

              {quizActive && selectedOrgan && (
                <div className="quiz-container">
                  <div className="quiz-question">
                    {anatomyData.find((o) => o.id === selectedOrgan)?.quiz.question}
                  </div>

                  <div className="quiz-options">
                    {anatomyData
                      .find((o) => o.id === selectedOrgan)
                      ?.quiz.options.map((option, index) => {
                        const isCorrectAnswer = 
                          index === anatomyData.find((o) => o.id === selectedOrgan)?.quiz.answer;
                        const isSelected = quizResult?.selectedIndex === index;
                        let optionClass = "";

                        if (quizResult) {
                          if (isCorrectAnswer) {
                            optionClass = "correct";
                          } else if (isSelected && !isCorrectAnswer) {
                            optionClass = "wrong";
                          }
                          if (!quizResult.isCorrect && isCorrectAnswer) {
                            optionClass = "correct-answer";
                          }
                        }

                        return (
                          <div
                            key={index}
                            className={`quiz-option ${optionClass}`}
                            onClick={() => {
                              if (!quizResult) {
                                checkAnswer(
                                  index,
                                  anatomyData.find((o) => o.id === selectedOrgan)?.quiz.answer
                                );
                              }
                            }}
                          >
                            {option}
                          </div>
                        );
                      })}
                  </div>

                  {quizResult && (
                    <div
                      className="quiz-result"
                      style={{
                        color: quizResult.isCorrect ? "#1b5e20" : "#b71c1c",
                        background: quizResult.isCorrect
                          ? "rgba(165, 214, 167, 0.3)"
                          : "rgba(239, 154, 154, 0.3)",
                      }}
                    >
                      {quizResult.text}
                    </div>
                  )}
                </div>
              )}

              {funFact && (
                <div className="fun-fact">
                  <h3>Смешной факт</h3>
                  <p>{funFact}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div
        className="sound-button"
        onClick={toggleSound}
        style={{ backgroundColor: soundEnabled ? "#4CAF50" : "#f44336" }}
      >
        {soundEnabled ? "🔊" : "🔇"}
      </div>
    </div>
  );
}

export default App;