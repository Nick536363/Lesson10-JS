let books = [
    { title: "1984", genre: "Дистопия" },
    { title: "Властелин Колец", genre: "Фэнтези" },
    { title: "Убить пересмешника", genre: "Классическая литература" },
    { title: "Гарри Поттер и философский камень", genre: "Фэнтези" },
    { title: "Мастер и Маргарита", genre: "Мистика" },
    { title: "Преступление и наказание", genre: "Классическая литература" },
    { title: "Игра престолов", genre: "Фэнтези" },
    { title: "Война и мир", genre: "Классическая литература" },
    { title: "451 градус по Фаренгейту", genre: "Дистопия" },
    { title: "Алхимик", genre: "Приключения" },
    { title: "Американские боги", genre: "Фэнтези" }
];
let count = [];
let fantasy = [];
let dystopia = [];
let classic = [];
let mystery = [];
let adventure = [];

for(let book=0;book<books.length;book++){
    console.log(books[book].title, ":",books[book].genre,);
    if(count.includes(books[book].genre)){

    }
    else{
        count.push(books[book].genre)
    }
}
function book_sort(books){
    books.sort()
}
let book = 0;
while (book < books.length) {
   books.forEach(function(
    genre, index) {
    if (books[book].genre === "Фэнтези" && index == 0) {
      fantasy.push(books[book].title)
      book_sort(fantasy);
    }
    else if (books[book].genre === "Дистопия" && index == 0) {
        dystopia.push(books[book].title)
        book_sort(dystopia);
    }
    else if (books[book].genre === "Классическая литература" && index == 0) {
        classic.push(books[book].title)
        book_sort(classic);
    }
    else if (books[book].genre === "Приключения" && index == 0) {
        adventure.push(books[book].title)
        book_sort(adventure);
    }
    else if (books[book].genre === "Мистика" && index == 0) {
        mystery.push(books[book].title)
        book_sort(mystery);
    }
  })
book++;
}
console.log(fantasy,classic,dystopia,adventure,mystery)


