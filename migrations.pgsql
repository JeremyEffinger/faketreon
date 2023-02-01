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
    avatar VARCHAR(255),
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
INSERT INTO users (email, password, name, avatar) VALUES ('koboldpress@example.com', 'password', 'koboldpress', 'static/images/avatars/dummyPhoto1.png');
INSERT INTO users (email, password, name, avatar) VALUES ('trashtaste@example.com', 'password', 'trashtaste', 'static/images/avatars/dummyPhoto2.webp');

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
INSERT INTO posts (campaign_id, title, content) VALUES (1, 'Post One Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod eo liquidius faciet, si perspexerit rerum inter eas verborumne sit controversia. Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Quoniam, si dis placet, ab Epicuro loqui discimus.

Duo Reges: constructio interrete. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Si enim ad populum me vocas, eum. Ad eos igitur converte te, quaeso. Bona autem corporis huic sunt, quod posterius posui, similiora. Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; Qua tu etiam inprudens utebare non numquam. Quando enim Socrates, qui parens philosophiae iure dici potest, quicquam tale fecit?
');
INSERT INTO posts (campaign_id, title, content) VALUES (1, 'Post Two Title', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tamen ego a philosopho, si afferat eloquentiam, non asperner, si non habeat, non admodum flagitem. Bonum incolumis acies: misera caecitas. Non quam nostram quidem, inquit Pomponius iocans; Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Hoc Hieronymus summum bonum esse dixit. </p>

<p>Si enim, ut mihi quidem videtur, non explet bona naturae voluptas, iure praetermissa est; Duo Reges: constructio interrete. Eorum enim est haec querela, qui sibi cari sunt seseque diligunt. Sed ut iis bonis erigimur, quae expectamus, sic laetamur iis, quae recordamur. Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. Nam bonum ex quo appellatum sit, nescio, praepositum ex eo credo, quod praeponatur aliis. Facile est hoc cernere in primis puerorum aetatulis. An me, inquam, nisi te audire vellem, censes haec dicturum fuisse? </p>

');
INSERT INTO posts (campaign_id, title, content) VALUES (2, 'Post One Title', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Quam ob rem tandem, inquit, non satisfacit? </p>

<p>Nam ista vestra: Si gravis, brevis; Quid iudicant sensus? Non potes, nisi retexueris illa. Duo Reges: constructio interrete. Tubulo putas dicere? Quis istud possit, inquit, negare? </p>

');
INSERT INTO posts (campaign_id, title, content) VALUES (2, 'Post Two Title', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Duo Reges: constructio interrete. Mihi enim satis est, ipsis non satis. Cum autem paulum firmitatis accessit, et animo utuntur et sensibus conitunturque, ut sese erigant, et manibus utuntur et eos agnoscunt, a quibus educantur. -delector enim, quamquam te non possum, ut ais, corrumpere, delector, inquam, et familia vestra et nomine. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Et ille ridens: Video, inquit, quid agas; Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Omnium enim rerum principia parva sunt, sed suis progressionibus usa augentur nec sine causa; An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar? Quamquam id quidem, infinitum est in hac urbe; </p>

<p>Sed mehercule pergrata mihi oratio tua. Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur. Hoc loco tenere se Triarius non potuit. Audeo dicere, inquit. Restant Stoici, qui cum a Peripateticis et Academicis omnia transtulissent, nominibus aliis easdem res secuti sunt. Nam si pravitatem inminutionemque corporis propter se fugiendam putamus, cur non etiam, ac fortasse magis, propter se formae dignitatem sequamur? </p>

');