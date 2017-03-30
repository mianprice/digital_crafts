--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: album; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE album (
    id integer NOT NULL,
    name character varying,
    year integer
);


ALTER TABLE album OWNER TO iprice;

--
-- Name: album_id_seq; Type: SEQUENCE; Schema: public; Owner: iprice
--

CREATE SEQUENCE album_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE album_id_seq OWNER TO iprice;

--
-- Name: album_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: iprice
--

ALTER SEQUENCE album_id_seq OWNED BY album.id;


--
-- Name: artist; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE artist (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE artist OWNER TO iprice;

--
-- Name: artist_album; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE artist_album (
    artist_id integer,
    album_id integer,
    is_lead boolean
);


ALTER TABLE artist_album OWNER TO iprice;

--
-- Name: artist_id_seq; Type: SEQUENCE; Schema: public; Owner: iprice
--

CREATE SEQUENCE artist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE artist_id_seq OWNER TO iprice;

--
-- Name: artist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: iprice
--

ALTER SEQUENCE artist_id_seq OWNED BY artist.id;


--
-- Name: genre; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE genre (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE genre OWNER TO iprice;

--
-- Name: genre_id_seq; Type: SEQUENCE; Schema: public; Owner: iprice
--

CREATE SEQUENCE genre_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE genre_id_seq OWNER TO iprice;

--
-- Name: genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: iprice
--

ALTER SEQUENCE genre_id_seq OWNED BY genre.id;


--
-- Name: song; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE song (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE song OWNER TO iprice;

--
-- Name: song_id_seq; Type: SEQUENCE; Schema: public; Owner: iprice
--

CREATE SEQUENCE song_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE song_id_seq OWNER TO iprice;

--
-- Name: song_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: iprice
--

ALTER SEQUENCE song_id_seq OWNED BY song.id;


--
-- Name: song_songwriter; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE song_songwriter (
    song_id integer,
    songwriter_id integer
);


ALTER TABLE song_songwriter OWNER TO iprice;

--
-- Name: songwriter; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE songwriter (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE songwriter OWNER TO iprice;

--
-- Name: songwriter_id_seq; Type: SEQUENCE; Schema: public; Owner: iprice
--

CREATE SEQUENCE songwriter_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE songwriter_id_seq OWNER TO iprice;

--
-- Name: songwriter_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: iprice
--

ALTER SEQUENCE songwriter_id_seq OWNED BY songwriter.id;


--
-- Name: track; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE track (
    id integer NOT NULL,
    name character varying,
    duration integer,
    album_id integer,
    song_id integer
);


ALTER TABLE track OWNER TO iprice;

--
-- Name: track_genre; Type: TABLE; Schema: public; Owner: iprice
--

CREATE TABLE track_genre (
    track_id integer,
    genre_id integer
);


ALTER TABLE track_genre OWNER TO iprice;

--
-- Name: track_id_seq; Type: SEQUENCE; Schema: public; Owner: iprice
--

CREATE SEQUENCE track_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE track_id_seq OWNER TO iprice;

--
-- Name: track_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: iprice
--

ALTER SEQUENCE track_id_seq OWNED BY track.id;


--
-- Name: album id; Type: DEFAULT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY album ALTER COLUMN id SET DEFAULT nextval('album_id_seq'::regclass);


--
-- Name: artist id; Type: DEFAULT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY artist ALTER COLUMN id SET DEFAULT nextval('artist_id_seq'::regclass);


--
-- Name: genre id; Type: DEFAULT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY genre ALTER COLUMN id SET DEFAULT nextval('genre_id_seq'::regclass);


--
-- Name: song id; Type: DEFAULT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY song ALTER COLUMN id SET DEFAULT nextval('song_id_seq'::regclass);


--
-- Name: songwriter id; Type: DEFAULT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY songwriter ALTER COLUMN id SET DEFAULT nextval('songwriter_id_seq'::regclass);


--
-- Name: track id; Type: DEFAULT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY track ALTER COLUMN id SET DEFAULT nextval('track_id_seq'::regclass);


--
-- Data for Name: album; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY album (id, name, year) FROM stdin;
1	A Hard Day_s Night	1964
2	Exile On Main Street	1972
3	Dirty Work	1986
4	Passage	1977
5	ART OFFICIAL AGE	2014
6	Purple Rain	1984
7	Hard Candy	2008
8	Encore	2004
9	Dark Side Of The Moon	1973
10	Back Home Again	1974
11	The Mix	1991
12	Dookie	1994
13	John Wesley Harding	1967
14	Electric Ladyland	1968
\.


--
-- Name: album_id_seq; Type: SEQUENCE SET; Schema: public; Owner: iprice
--

SELECT pg_catalog.setval('album_id_seq', 14, true);


--
-- Data for Name: artist; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY artist (id, name) FROM stdin;
1	The Beatles
2	The Rolling Stones
3	Carpenters
4	Prince
5	Madonna
6	Justin Timberlake
7	Timbaland
8	Eminem
9	50 Cent
10	Nate Dogg
11	Dr. Dre
12	Pink Floyd
13	John Denver
14	Kraftwerk
15	Green Day
16	Bob Dylan
17	Jimi Hendrix
\.


--
-- Data for Name: artist_album; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY artist_album (artist_id, album_id, is_lead) FROM stdin;
1	1	t
2	2	t
2	3	t
3	4	t
4	5	t
4	6	t
5	7	t
6	7	f
7	7	f
8	8	t
9	8	f
10	8	f
11	8	f
12	9	t
13	10	t
14	11	t
15	12	t
16	13	t
17	14	t
\.


--
-- Name: artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: iprice
--

SELECT pg_catalog.setval('artist_id_seq', 17, true);


--
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY genre (id, name) FROM stdin;
1	Rock
2	Pop
3	Rap
4	Country
5	Electronic
6	Punk
7	Folk
8	Funk
\.


--
-- Name: genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: iprice
--

SELECT pg_catalog.setval('genre_id_seq', 8, true);


--
-- Data for Name: song; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY song (id, name) FROM stdin;
1	If I Fell
2	Any Time At All
3	I_ll Be Back
4	Rocks Off
5	Rip This Joint
6	Shake Your Hips
7	Fight
8	Hold Back
9	Dirty Work
10	Two Sides
11	Sweet, Sweet Smile
12	Bwana She No Home
13	CLOUDS
14	BREAKDOWN
15	U KNOW
16	Let_s Go Crazy
17	Darling Nikki
18	Purple Rain
19	4 Minutes
20	Heartbeat
21	Incredible
22	Mosh
23	Never Enough
24	Encore
25	Time
26	Money
27	Eclipse
28	Matthew
29	Eclipse
30	On The Road
31	The Robots
32	Dentaku
33	Abzug
34	Burnout
35	Chump
36	She
37	All Along The Watchtower
\.


--
-- Name: song_id_seq; Type: SEQUENCE SET; Schema: public; Owner: iprice
--

SELECT pg_catalog.setval('song_id_seq', 37, true);


--
-- Data for Name: song_songwriter; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY song_songwriter (song_id, songwriter_id) FROM stdin;
1	1
1	2
2	1
2	2
3	1
3	2
4	3
5	3
6	3
7	3
8	3
9	3
10	4
11	4
12	4
13	5
14	5
15	5
16	5
17	5
18	5
19	6
20	6
21	6
22	7
23	7
24	7
25	8
26	8
27	8
28	9
29	9
30	9
31	10
32	10
33	10
34	11
35	11
36	11
37	12
\.


--
-- Data for Name: songwriter; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY songwriter (id, name) FROM stdin;
1	John Lennon
2	Paul McCartney
3	Mick Jagger
4	Karen Carpenter
5	Prince
6	Madonna
7	Eminem
8	Roger Waters
9	John Denver
10	Fritz Hilpert
11	Billy Joe Armstrong
12	Bob Dylan
\.


--
-- Name: songwriter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: iprice
--

SELECT pg_catalog.setval('songwriter_id_seq', 12, true);


--
-- Data for Name: track; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY track (id, name, duration, album_id, song_id) FROM stdin;
1	If I Fell	139	1	1
2	Any Time At All	131	1	2
3	I_ll Be Back	144	1	3
4	Rocks Off	272	2	4
5	Rip This Joint	143	2	5
6	Shake Your Hips	179	2	6
7	Fight	189	3	7
8	Hold Back	233	3	8
9	Dirty Work	233	3	9
10	Two Sides	208	4	10
11	Sweet, Sweet Smile	182	4	11
12	Bwana She No Home	336	4	12
13	CLOUDS	274	5	13
14	BREAKDOWN	244	5	14
15	U KNOW	237	5	15
16	Let_s Go Crazy	274	6	16
17	Darling Nikki	244	6	17
18	Purple Rain	237	6	18
19	4 Minutes	245	7	19
20	Heartbeat	243	7	20
21	Incredible	380	7	21
22	Mosh	318	8	22
23	Never Enough	160	8	23
24	Encore	313	8	24
25	Time	414	9	25
26	Money	383	9	26
27	Eclipse	130	9	27
28	Matthew	228	10	28
29	Eclipse	225	10	29
30	On The Road	157	10	30
31	The Robots	539	11	31
32	Dentaku	207	11	32
33	Abzug	138	11	33
34	Burnout	128	12	34
35	Chump	174	12	35
36	She	134	12	36
37	All Along The Watchtower	151	13	37
38	All Along The Watchtower	241	14	37
\.


--
-- Data for Name: track_genre; Type: TABLE DATA; Schema: public; Owner: iprice
--

COPY track_genre (track_id, genre_id) FROM stdin;
1	1
1	2
2	1
2	2
3	1
3	2
4	1
5	1
6	1
7	1
8	1
9	1
10	2
11	2
12	2
13	1
13	2
13	8
14	1
14	2
14	8
15	1
15	2
15	8
16	1
16	2
16	8
17	1
17	2
17	8
18	1
18	2
18	8
19	2
20	2
21	2
22	2
22	3
23	2
23	3
24	2
24	3
25	1
26	1
27	1
28	4
29	4
30	4
31	5
32	5
33	5
34	6
34	2
35	6
35	2
36	6
36	2
37	1
37	7
38	1
\.


--
-- Name: track_id_seq; Type: SEQUENCE SET; Schema: public; Owner: iprice
--

SELECT pg_catalog.setval('track_id_seq', 38, true);


--
-- Name: album album_pkey; Type: CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY album
    ADD CONSTRAINT album_pkey PRIMARY KEY (id);


--
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id);


--
-- Name: genre genre_pkey; Type: CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (id);


--
-- Name: song song_pkey; Type: CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY song
    ADD CONSTRAINT song_pkey PRIMARY KEY (id);


--
-- Name: songwriter songwriter_pkey; Type: CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY songwriter
    ADD CONSTRAINT songwriter_pkey PRIMARY KEY (id);


--
-- Name: track track_pkey; Type: CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY track
    ADD CONSTRAINT track_pkey PRIMARY KEY (id);


--
-- Name: artist_album artist_album_album_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY artist_album
    ADD CONSTRAINT artist_album_album_id_fkey FOREIGN KEY (album_id) REFERENCES album(id);


--
-- Name: artist_album artist_album_artist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY artist_album
    ADD CONSTRAINT artist_album_artist_id_fkey FOREIGN KEY (artist_id) REFERENCES artist(id);


--
-- Name: song_songwriter song_songwriter_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY song_songwriter
    ADD CONSTRAINT song_songwriter_song_id_fkey FOREIGN KEY (song_id) REFERENCES song(id);


--
-- Name: song_songwriter song_songwriter_songwriter_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY song_songwriter
    ADD CONSTRAINT song_songwriter_songwriter_id_fkey FOREIGN KEY (songwriter_id) REFERENCES songwriter(id);


--
-- Name: track track_album_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY track
    ADD CONSTRAINT track_album_id_fkey FOREIGN KEY (album_id) REFERENCES album(id);


--
-- Name: track_genre track_genre_genre_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY track_genre
    ADD CONSTRAINT track_genre_genre_id_fkey FOREIGN KEY (genre_id) REFERENCES genre(id);


--
-- Name: track_genre track_genre_track_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY track_genre
    ADD CONSTRAINT track_genre_track_id_fkey FOREIGN KEY (track_id) REFERENCES track(id);


--
-- Name: track track_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: iprice
--

ALTER TABLE ONLY track
    ADD CONSTRAINT track_song_id_fkey FOREIGN KEY (song_id) REFERENCES song(id);


--
-- PostgreSQL database dump complete
--

