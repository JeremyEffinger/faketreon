DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS supporters;
DROP TABLE IF EXISTS subscriptions;
DROP TABLE IF EXISTS campaigns;
DROP TABLE IF EXISTS creators;
DROP TABLE IF EXISTS users;

-- migration_1_create_users_table.psql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- migration_2_create_creators_table.psql

CREATE TABLE creators (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- migration_3_create_campaigns_table.psql

CREATE TABLE campaigns (
    id SERIAL PRIMARY KEY,
    creator_id INTEGER REFERENCES creators(id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    banner VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- migration_4_create_subscriptions_table.psql

CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    campaign_id INTEGER REFERENCES campaigns(id) NOT NULL,
    level INTEGER NOT NULL,
    rewards TEXT[],
    amount INTEGER NOT NULL,
    art VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- migration_5_create_supporters_table.psql

CREATE TABLE supporters (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    campaign_id INTEGER REFERENCES campaigns(id) NOT NULL,
    subscription_id INTEGER REFERENCES subscriptions(id) NOT NULL,
    amount INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- migration_6_create_supporters_table.psql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    campaign_id INTEGER REFERENCES campaigns(id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- migration_7_insert_dummy_data_users.psql
INSERT INTO users (email, password, name) VALUES ('koboldpress@example.com', 'password', 'koboldpress');
INSERT INTO users (email, password, name) VALUES ('trashtaste@example.com', 'password', 'trashtaste');

-- migration_8_insert_dummy_data_creators.psql
INSERT INTO creators (user_id, name, bio) VALUES (1, 'Kobold Press', 'Bio of creator one');
INSERT INTO creators (user_id, name, bio) VALUES (2, 'Trash Taste', 'Bio of creator two');

-- migration_9_insert_dummy_data_campaigns.psql
INSERT INTO campaigns (creator_id, title, description, banner) VALUES (1, 'Warlock', 'creating the darkly fantastical 5th Edition Warlock booklets', 'static/images/banners/dummybanner1.webp');
INSERT INTO campaigns (creator_id, title, description, banner) VALUES (2, 'Trash Taste Podcast', 'Creating podcasts and videos', 'static/images/banners/dummybanner2.webp');

-- migration_10_insert_dummy_data_subscriptions.psql
INSERT INTO subscriptions (campaign_id, level, rewards, amount, art) VALUES (1, 1, ARRAY['Warlock PDF', 'Access to patron-only feed', 'sneak peek photos of upcoming releases','patron-only polls'], 10, 'static/images/membership-img/lvl1.webp');
INSERT INTO subscriptions (campaign_id, level, rewards, amount, art) VALUES (1, 2, ARRAY['Warlock Lair: 1 double-size adventure each month, ready to play (about 15 pages)','A bit behind-the-scenes, including early looks at art  sketches', 'Plus the elements of the $1 tier'], 20, 'static/images/membership-img/lvl2.webp');
INSERT INTO subscriptions (campaign_id, level, rewards, amount, art) VALUES (2, 1, ARRAY['Thanks for supporting us!'], 3, 'static/images/membership-img/lvl1.webp');
INSERT INTO subscriptions (campaign_id, level, rewards, amount, art) VALUES (2, 2, ARRAY['Get the unaired Episode 0 we filmed as a proof of concept for this podcast.','Get early access to clips and highlights of the next episode before the full video is released on YouTube.', 'Get the UNCENSORED version of Episode 25 - The Hentai Episode', 'Early access to Clips', 'Bonus episode'], 5, 'static/images/membership-img/lvl2.webp');

-- migration_11_insert_dummy_data_supporters.psql
INSERT INTO supporters (user_id, campaign_id, subscription_id, amount) VALUES (1, 1, 1, 10);
INSERT INTO supporters (user_id, campaign_id, subscription_id, amount) VALUES (2, 2, 2, 25);

-- migration_12_insert_dummy_data_posts.psql
INSERT INTO posts (campaign_id, title, content) VALUES (1, 'Post One', 'Content of post one');
INSERT INTO posts (campaign_id, title, content) VALUES (1, 'Post Two', 'Content of post two');
INSERT INTO posts (campaign_id, title, content) VALUES (2, 'Post Three', 'Content of post three');
INSERT INTO posts (campaign_id, title, content) VALUES (2, 'Post Four', 'Content of post four');