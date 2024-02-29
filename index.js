// Библиотека
let library = [];

// Добавление книги в библиотеку
function addBook(title, author, year, genre, pages) {
  library.push({title, author, year, genre, pages});
}

// Удаление книги из библиотеки
function removeBook(title) {
  library = library.filter(book => book.title !== title);
}

// Поиск книг по автору
function findBooksByAuthor(author) {
  return library.filter(book => book.author === author);
}

// Фильтрация книг по жанру
function filterBooksByGenre(genre) {
  return library.filter(book => book.genre === genre);
}

// Генерация отчета о количестве книг каждого жанра
function genreReport() {
  let report = {};
  library.forEach(book => {
    if (report[book.genre]) {
      report[book.genre]++;
    } else {
      report[book.genre] = 1;
    }
  });
  return report;
}

// Генерация отчета о среднем количестве страниц
function averagePagesReport() {
  let totalPages = library.reduce((total, book) => total + book.pages, 0);
  return totalPages / library.length;
}

// Сортировка книг по году издания
function sortBooksByYear() {
  // If it returns 0, the order of a and b is unchanged. If it 
  // returns a value greater than 0, a is sorted to an index higher than b (i.e., b comes first).
  return library.sort((a, b) => b.year - a.year);
}

// Тесты
// Добавление книг в библиотеку
addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

// Поиск книг по автору
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));

// Фильтрация книг по жанру
console.log(filterBooksByGenre("Фэнтези"));

// Генерация отчета по количеству книг каждого жанра
console.log(genreReport());

// Генерация отчета по среднему количеству страниц
console.log(`Среднее количество страниц: ${averagePagesReport()}`);

// Удаление книги и вывод обновленной библиотеки
removeBook("1984"); 
console.log(library);

// Сортировка книг по году издания
console.log(sortBooksByYear());