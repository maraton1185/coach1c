function Menu(){
    
    this.blockquote = "",
    this.cite = "",
    
	this.email = "maratenikeev@yandex.ru",
	this.telegram = "https://t.me/m_enikeev",
	this.telegramChannel = "https://t.me/coach1c",
	
	this.price1 = "10",
	this.priceRef1 = "https://cent.app/transfer/QWmqMGWDmk",
	this.price3 = "18",
	this.priceRef3 = "https://cent.app/transfer/DR2PwDo9mw",
	this.price5 = "25",
	this.priceRef5 = "https://cent.app/transfer/XZv3a3eP2Q",
	this.pricePerMonth = "5",
	
	this.priceDemo = "1",
	this.priceRefDemo = "https://cent.app/transfer/WZ75r3MxvJ",
	
	this.plan = "10",
	this.balance = "8", 
    
    this.nav = [
        {ref: '/', name: 'Главная',  visible: true,
			blockquote: '"Это всегда кажется невозможным, пока это не сделано"',
			cite: 'Нельсон Мандела'},
        {ref: '/content', name: 'Программа', visible: true,
			blockquote: '"Нет замены для тяжелой работы"',
			cite: 'Томас Эдисон'},
		{ref: '/price', name: 'Цены', visible: true,
			blockquote: '"Если ты не идешь до конца, зачем начинать?"',
			cite: 'Джо Намат'},
		{ref: '/ownpath', name: 'Свой путь', visible: true,
			blockquote: '"О чем ты думаешь, тем ты и становишься"',
			cite: 'Брюс Ли'},
		{ref: '/reviews', name: 'Отзывы', visible: true,
			blockquote: '"Истинное образование заключается в том, чтобы извлечь из себя все лучшее"',
			cite: 'Махатма Ганди'},	
		{ref: '/faq', name: 'Вопросы', visible: true,
			blockquote: '"Учиться без размышлений бесполезно. Думать не учась, опасно"',
			cite: 'Конфуций'},
		{ref: '/about', name: 'Обо мне', visible: true,
			blockquote: '"Человек, который является учителем терпения, является мастером всего остального"',
			cite: 'Джордж Савиль'},
		{ref: '/links', name: 'Ссылки', visible: true,
			blockquote: '"Качество никогда не бывает случайным, оно всегда является результатом интеллектуальных усилий"',
			cite: 'Джон Рускиин'},
			
		{ref: '/subscription', name: 'Подписка', visible: false,
			blockquote: '"Молодость - время учиться мудрости; старость, это практика"',
			cite: 'Жан Жак Руссо'},			 

        ],
   
    this.setActive = function(ref) {
        
        this.nav.forEach(function(item, index, array) {
            if(item.ref==ref) {
                item.active = true;
                this.blockquote = item.blockquote;
                this.cite = item.cite;
            } else {
                item.active = false;
            };
        }, this)          
    };
};
 
module.exports = new Menu();