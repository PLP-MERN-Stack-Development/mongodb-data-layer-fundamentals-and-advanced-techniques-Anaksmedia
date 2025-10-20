// queries.js
// PLP Bookstore - MongoDB Queries Solution
// Student: [Your Name]
// Date: [Current Date]

use plp_bookstore;

// ============================================================================
// TASK 2: BASIC CRUD OPERATIONS
// ============================================================================

// 1. Find all books in a specific genre
print("=== Books in Fantasy genre ===");
db.books.find({ genre: "Fantasy" });

// 2. Find books published after a certain year
print("=== Books published after 2000 ===");
db.books.find({ published_year: { $gt: 2000 } });

// 3. Find books by a specific author
print("=== Books by J.K. Rowling ===");
db.books.find({ author: "J.K. Rowling" });

// 4. Update the price of a specific book
print("=== Updating price of 'The Hobbit' ===");
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 19.99 } }
);
print("Price updated successfully!");

// Verify the update
print("=== Updated book details ===");
db.books.find({ title: "The Hobbit" });

// 5. Delete a book by its title
print("=== Deleting 'The Da Vinci Code' ===");
db.books.deleteOne({ title: "The Da Vinci Code" });
print("Book deleted successfully!");

// Verify deletion
print("=== Remaining books count ===");
print("Total books: " + db.books.countDocuments());

// ============================================================================
// TASK 3: ADVANCED QUERIES
// ============================================================================

// 1. Find books that are both in stock and published after 2010
print("=== In-stock books published after 2010 ===");
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 2. Use projection to return only title, author, and price
print("=== Books with projection (title, author, price) ===");
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Implement sorting by price (ascending and descending)
print("=== Books sorted by price (ascending) ===");
db.books.find().sort({ price: 1 });

print("=== Books sorted by price (descending) ===");
db.books.find().sort({ price: -1 });

// 4. Implement pagination (5 books per page)
print("=== Page 1: Books 1-5 ===");
db.books.find().limit(5).skip(0);

print("=== Page 2: Books 6-10 ===");
db.books.find().limit(5).skip(5);

// ============================================================================
// TASK 4: AGGREGATION PIPELINE
// ============================================================================

// 1. Calculate average price of books by genre
print("=== Average price by genre ===");
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
]);

// 2. Find author with the most books
print("=== Author with most books ===");
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// 3. Group books by publication decade and count them
print("=== Books by publication decade ===");
db.books.aggregate([
  {
    $project: {
      title: 1,
      published_year: 1,
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      bookCount: { $sum: 1 },
      books: { $push: "$title" }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

// ============================================================================
// TASK 5: INDEXING
// ============================================================================

// 1. Create an index on the title field
print("=== Creating index on title field ===");
db.books.createIndex({ title: 1 });
print("Title index created!");

// 2. Create compound index on author and published_year
print("=== Creating compound index on author and published_year ===");
db.books.createIndex({ author: 1, published_year: -1 });
print("Compound index created!");

// 3. Demonstrate performance improvement with explain()
print("=== Performance analysis with explain() ===");

// Without index (simulated - we actually have indexes now)
print("Query execution plan for title search:");
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");

print("Query execution plan for author and year search:");
db.books.find({ 
  author: "J.K. Rowling", 
  published_year: { $gt: 1990 } 
}).explain("executionStats");

// List all indexes
print("=== Current indexes on books collection ===");
db.books.getIndexes();

print("All tasks completed successfully!");