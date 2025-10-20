// insert_books.js
// PLP Bookstore - Sample Data Insertion Script

use plp_bookstore;

// Clear existing data (optional)
db.books.deleteMany({});

// Insert sample book documents
db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 12.99,
    in_stock: true,
    pages: 180,
    publisher: "Scribner"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 14.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 10.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 16.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 18.99,
    in_stock: true,
    pages: 223,
    publisher: "Bloomsbury"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 11.99,
    in_stock: true,
    pages: 234,
    publisher: "Little, Brown and Company"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    published_year: 2003,
    price: 15.99,
    in_stock: false,
    pages: 454,
    publisher: "Doubleday"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 13.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperTorch"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    published_year: 1965,
    price: 17.99,
    in_stock: true,
    pages: 412,
    publisher: "Chilton Books"
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult",
    published_year: 2008,
    price: 12.99,
    in_stock: true,
    pages: 374,
    publisher: "Scholastic"
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    published_year: 1977,
    price: 14.99,
    in_stock: true,
    pages: 447,
    publisher: "Doubleday"
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Thriller",
    published_year: 2012,
    price: 16.99,
    in_stock: false,
    pages: 432,
    publisher: "Crown Publishing Group"
  }
]);

print("Sample books inserted successfully!");
print("Total books in collection: " + db.books.countDocuments());