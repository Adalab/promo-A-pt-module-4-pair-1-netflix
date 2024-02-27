SELECT * FROM movies;
SELECT title , genre FROM movies WHERE year>1990;
SELECT title FROM movies WHERE category = 'Top 10';
UPDATE movies  SET year = '1997' WHERE title = 'La vita è bella';
SELECT * FROM actors;
SELECT name FROM actors WHERE birthday >'1950-01-01' AND birthday <'1960-01-01';