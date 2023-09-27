CREATE TABLE journal_entries (
    id SERIAL PRIMARY KEY,
    entry_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    text TEXT,
    metadata JSONB
);
