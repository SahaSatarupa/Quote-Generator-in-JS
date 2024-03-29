let image = document.querySelector('.dp')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
let btn = document.querySelector('.btn')
const quotes = [
    {
    quote : `' if you change the way you look at things, the things you look at change '`,
    person: `- Allen Saunders`,
    image: 'images.jpg'
    },
    {
    quote : `' If people knew how hard I worked to get my mastery, it wouldn't seem so wonderful after all. '`,
    person: ` - Michelangelo`
    ,
    image: 'sky.jpg'
    },
    {
    quote : `' Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. `,
    person: `- Pele`,
    image: 'photo2.jpeg'
    },
    {
    quote : `' Do the best you can until you know better. Then when you know better, do better. '`,
    person: ` - Maya Angelou`,
    image: 'flower11.jpg'
    },
    {
    quote : `' I do not know anyone who has got to the top without hard work. That is the recipe. It will not always get you to the top, but should get you pretty near. '`,
    person: `- Margaret Thatcher`,
    image: 'sky2.jpg'
    },
    {
    quote : `' Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. '`,
    person: `- Stephen King`,
    image: 'flower3.jpg'
    },
    {
    quote : `' You know you're in love when you can't fall asleep because reality is finally better than your dreams. '`,
    person: `- Allen Saunders`,
    image: 'flower4.jpg'
    },
    {
    quote : `' If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. '`,
    person: ` - J.K. Rowling`,
    image: 'flower5.jpg'
    },
    {
    quote : `' You only live once, but if you do it right, once is enough.'`,
    person: `- Mae West`,
    image: 'flower6.jpg'
    },
    {
    quote : `' It is better to be hated for what you are than to be loved for what you are not.'`,
    person: `- Andre Gide`,
    image: 'project-1.jpg'
    },
];

btn.addEventListener('click', function(){
    const random = Math.floor(Math.random() * quotes.length)
    const item = quotes[random]
    quote.innerHTML = item.quote
    person.innerHTML = item.person
    image.src = item.image
})