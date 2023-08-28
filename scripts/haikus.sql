-- Create a table for storing haikus
CREATE TABLE haikus (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(50) UNIQUE NOT NULL,
  haiku_text TEXT NOT NULL,
  date DATE NOT NULL,
  description TEXT NOT NULL
);
