const celestialBodies = [
    {
        name: "Солнце",
        type: "Звезда",
        image: "https://s1.1zoom.ru/b5050/127/Stars_Closeup_Sun_Black_background_536027_1366x768.jpg",
        imageScale: 1,
        description: "Центральная звезда нашей Солнечной системы",
        details: "Солнце — звезда спектрального класса G2V, жёлтый карлик. Возраст около 4,6 млрд лет. Диаметр составляет 1,39 миллиона километров. Температура поверхности достигает 5778 К. Состоит в основном из водорода (73%) и гелия (25%). В ядре Солнца происходят термоядерные реакции, превращающие водород в гелий с выделением огромного количества энергии."
    },
    {
        name: "Земля",
        type: "Планета",
        image: "https://img.freepik.com/premium-photo/earth-black-background-isolated_338491-6953.jpg",
        imageScale: 1.2,
        description: "Третья планета от Солнца, наш дом во Вселенной",
        details: "Земля — единственная известная планета с жизнью. Диаметр экватора: 12 742 км. Имеет один естественный спутник — Луну. Атмосфера состоит из азота (78%), кислорода (21%) и других газов. Возраст планеты составляет 4,54 миллиарда лет. Около 71% поверхности покрыто водой. Земля находится в обитаемой зоне Солнечной системы."
    },
    {
        name: "Луна",
        type: "Спутник",
        image: "https://s1.1zoom.ru/big3/796/Moon_Black_background_549479_3840x2400.jpg",
        imageScale: 0.9,
        description: "Единственный естественный спутник Земли",
        details: "Луна — пятый по величине спутник в Солнечной системе. Диаметр: 3474 км. Среднее расстояние от Земли: 384 400 км. Период обращения вокруг Земли: 27,3 дня. Не имеет атмосферы и магнитного поля. На поверхности видны многочисленные кратеры от столкновений с метеоритами. Луна влияет на приливы и отливы на Земле."
    },
    {
        name: "Марс",
        type: "Планета",
        image: "https://s1.1zoom.ru/big3/67/Planets_Mars_Black_background_534885_3840x2160.jpg",
        imageScale: 1,
        description: "Красная планета, четвёртая от Солнца",
        details: "Марс назван в честь римского бога войны из-за своего красного цвета. Диаметр: 6779 км. Имеет два небольших спутника: Фобос и Деймос. Атмосфера состоит в основном из углекислого газа (95%). Температура колеблется от -140°C до +20°C. На Марсе находится самая высокая гора в Солнечной системе — Олимп (21 км). Здесь могла существовать жидкая вода в прошлом."
    },
    {
        name: "Юпитер",
        type: "Планета",
        image: "https://media.istockphoto.com/id/1009152604/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D1%8B-%D1%8E%D0%BF%D0%B8%D1%82%D0%B5%D1%80.jpg?s=170667a&w=0&k=20&c=Z8VcGWEaw8Tx06Ny3PtjKGNP99KYgcD9s4CH8pEaPEE=",
        imageScale: 1,
        description: "Крупнейшая планета Солнечной системы",
        details: "Юпитер — газовый гигант, пятая планета от Солнца. Диаметр: 139 820 км. Имеет 95 известных спутников, включая четыре крупнейших галилеевых спутника. Большое Красное Пятно — гигантский антициклонический шторм, бушующий более 300 лет. Масса Юпитера в 2,5 раза больше массы всех остальных планет Солнечной системы вместе взятых. Один день на Юпитере длится всего 10 часов."
    },
    {
        name: "Сатурн",
        type: "Планета",
        image: "https://neane.ru/rus/7/write/0323/000.jpg",
        imageScale: 1.4,
        description: "Планета с величественными кольцами",
        details: "Сатурн — вторая по размеру планета Солнечной системы. Диаметр: 116 460 км. Знаменит своими впечатляющими кольцами, состоящими из миллиардов частиц льда и камня. Имеет 146 известных спутников. Средняя плотность Сатурна меньше плотности воды — теоретически он мог бы плавать! Скорость ветра достигает 1800 км/ч."
    },
    {
        name: "Туманность Ориона",
        type: "Туманность",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/1200px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg",
        imageScale: 1,
        description: "Ближайший к нам регион звездообразования",
        details: "M42 (Мессье 42) — одна из самых ярких туманностей на ночном небе. Расстояние от Земли: 1344 световых года. Видна невооружённым глазом в созвездии Ориона. Это активная область звездообразования, где рождаются новые звёзды. Диаметр туманности составляет около 24 световых лет. Содержит тысячи молодых звёзд возрастом менее 300 000 лет."
    },
    {
        name: "Галактика Андромеды",
        type: "Галактика",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg",
        imageScale: 1,
        description: "Ближайшая к Млечному Пути крупная галактика",
        details: "M31 — спиральная галактика в созвездии Андромеды. Расстояние от нас: 2,5 миллиона световых лет. Содержит около 1 триллиона звёзд (в 2-4 раза больше, чем в Млечном Пути). Движется к нашей галактике со скоростью 110 км/с. Столкновение Андромеды с Млечным Путём произойдёт примерно через 4,5 миллиарда лет. Видна невооружённым глазом в тёмном небе."
    },
    {
        name: "Сириус",
        type: "Звезда",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Sirius_A_and_B_Hubble_photo.jpg",
        imageScale: 1,
        description: "Ярчайшая звезда ночного неба",
        details: "Альфа Большого Пса, также известная как Собачья Звезда. Расстояние от Земли: 8,6 световых лет. Это двойная звёздная система, состоящая из яркого белого карлика Сириус A и слабого белого карлика Сириус B. Яркость Сириуса A примерно в 25 раз больше яркости Солнца. Видимая звёздная величина: -1,46. В Древнем Египте восход Сириуса предвещал разлив Нила."
    }
];

// создание одной карточки
function createCard(body) {
    var scale = body.imageScale;
    return '<div class="card" onclick="openModal(\'' + body.name + '\')">' +
        '<div class="card__image-wrapper">' +
        '<img src="' + body.image + '" alt="' + body.name + '" class="card__image" loading="lazy" style="transform: scale(' + scale + ');">' +
        '</div>' +
        '<div class="card__content">' +
        '<h2 class="card__title">' + body.name + '</h2>' +
        '<div class="card__type">' + body.type + '</div>' +
        '<div class="card__description">' + body.description + '</div>' +
        '</div>' +
        '</div>';
}

// показать все карточки на странице
function renderGrid() {
    var grid = document.getElementById('celestialGrid');
    var html = '';
    
    for (var i = 0; i < celestialBodies.length; i++) {
        html += createCard(celestialBodies[i]);
    }
    
    grid.innerHTML = html;
}

// открыть модальное окно
function openModal(name) {
    var body = null;
    
    for (var i = 0; i < celestialBodies.length; i++) {
        if (celestialBodies[i].name === name) {
            body = celestialBodies[i];
            break;
        }
    }
    
    var modalContent = document.getElementById('modalContent');
    var scale = body.imageScale;
    
    modalContent.innerHTML = '<div class="modal__image-wrapper">' +
        '<img src="' + body.image + '" alt="' + body.name + '" class="modal__image" style="transform: scale(' + scale + ');">' +
        '</div>' +
        '<div class="modal__body">' +
        '<h2 class="modal__title">' + body.name + '</h2>' +
        '<div class="modal__type">' + body.type + '</div>' +
        '<div class="modal__info">' + body.details + '</div>' +
        '<button class="modal__close-btn" onclick="closeModal()">Закрыть</button>' +
        '</div>';
    
    document.getElementById('modal').classList.add('modal--active');
    document.body.style.overflow = 'hidden';
}

// закрыть модальное окно
function closeModal() {
    document.getElementById('modal').classList.remove('modal--active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', renderGrid);

document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target.id === 'modal') {
        closeModal();
    }
});