CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    profile_url VARCHAR (1000),
    profile_name VARCHAR(500),
    profile_bio VARCHAR (500)
);
CREATE TABLE "gallery" (
	id SERIAL PRIMARY KEY,
	picture_url VARCHAR(1000),
	picture_name VARCHAR(500),
	picture_description VARCHAR(1000),
	"user_id" INT REFERENCES "user"
);
CREATE TABLE "forum" (
	id SERIAL PRIMARY KEY,
	picture_url VARCHAR(1000),
	picture_name VARCHAR(500),
	picture_description VARCHAR(1000),
	"user_id" INT REFERENCES "user"
);
CREATE TABLE "comments"(
	id SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"comment" VARCHAR(1000),
	"forum_id" INT REFERENCES "forum" ON DELETE CASCADE
);

