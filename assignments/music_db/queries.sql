--
-- QUESTIONS
--

\! echo "What are tracks for a given album? (Purple Rain)";
select * from track inner join album on album.id = track.album_id where album.name = 'Purple Rain';

\! echo "What are the albums produced by a given artist? (Madonna)";
select * from album inner join artist_album on album.id = artist_album.album_id inner join artist on artist.id = artist_album.artist_id where artist.name = 'Madonna';

\! echo "What is the track with the longest duration?";
select * from track order by duration desc limit 1;

\! echo "What are the albums released in the 60s?";
select * from album where year < 1970 and year > 1959;

\! echo "What are the albums released in the 70s?";
select * from album where year < 1980 and year > 1969;

\! echo "What are the albums released in the 80s?";
select * from album where year < 1990 and year > 1979;

\! echo "What are the albums released in the 90s?";
select * from album where year < 2000 and year > 1989;

\! echo "What are the albums released in the 00s?";
select * from album where year < 2010 and year > 1999;

\! echo "What are the albums released in the 10s?";
select * from album where year < 2020 and year > 2009;

\! echo "How many albums did a given artist produce in the 90s? (Kraftwerk=1)";
select count(nineties.id) from (select * from album where year < 2000 and year > 1989) as nineties inner join artist_album on nineties.id = artist_album.album_id inner join artist on artist.id = artist_album.artist_id where artist.name = 'Kraftwerk';

\! echo "How many albums did a given artist produce in the 90s? (Bob Dylan=0)";
select count(nineties.id) from (select * from album where year < 2000 and year > 1989) as nineties inner join artist_album on nineties.id = artist_album.album_id inner join artist on artist.id = artist_album.artist_id where artist.name = 'Bob Dylan';

\! echo "What is each artist's latest album?";
select sub.innerID, sub.innerName, album.name, album.year from (select artist.id as innerID, artist.name as innerName, max(album.year) as innerYear from artist inner join artist_album on artist.id = artist_album.artist_id inner join  album on artist_album.album_id = album.id group by artist.id) as sub inner join artist_album on sub.innerID = artist_album.artist_id inner join album on artist_album.album_id = album.id and sub.innerYear = album.year order by album.year;

\! echo "List all albums along with its total duration based on summing the duration of its tracks.";
select album.name, sum(track.duration) from album inner join track on album.id = track.album_id group by album.id order by sum desc;

\! echo "What is the album with the longest duration?";
select album.name, sum(track.duration) from album inner join track on album.id = track.album_id group by album.id order by sum desc limit 1;

\! echo "Who are the 5 most prolific artists based on the number of albums they have recorded?";
select artist.name, count(album.id) from artist inner join artist_album on artist.id = artist_album.artist_id inner join album on artist_album.album_id = album.id group by artist.id order by count desc, artist.name asc limit 5;

\! echo "What are all the tracks a given artist has recorded? (Prince)";
select artist.name, track.name, track.duration from artist inner join artist_album on artist.id = artist_album.artist_id inner join track on artist_album.album_id = track.album_id where artist.name = 'Prince';

\! echo "What are the top 5 most often recorded songs?";
select song.name, count(track.id) from song inner join track on song.id = track.song_id group by song.id order by count desc, song.name asc limit 5;

\! echo "Who are the top 5 song writers whose songs have been most often recorded?";
select songwriter.name, count(track.id) from songwriter inner join song_songwriter as ss on songwriter.id = ss.songwriter_id inner join song on ss.song_id = song.id inner join track on song.id = track.song_id group by songwriter.id order by count desc, songwriter.name asc limit 5;

\! echo "Who is the most prolific song writer based on the number of songs he has written?";
select songwriter.name, count(song.id) from songwriter inner join song_songwriter as ss on songwriter.id = ss.songwriter_id inner join song on ss.song_id = song.id group by songwriter.id order by count desc, songwriter.name asc limit 1;

\! echo "What songs has a given artist recorded? (Prince)";
select artist.name, song.name, track.duration from artist inner join artist_album on artist.id = artist_album.artist_id inner join track on artist_album.album_id = track.album_id inner join song on track.song_id = song.id where artist.name = 'Prince';

\! echo "Who are the song writers whose songs a given artist has recorded? (Jimi Hendrix)";
select artist.name as "Artist", songwriter.name as "Songwriter" from artist inner join artist_album on artist.id = artist_album.artist_id inner join track on artist_album.album_id = track.album_id inner join song_songwriter as ss on track.song_id = ss.song_id inner join songwriter on ss.songwriter_id = songwriter.id where artist.name = 'Jimi Hendrix';

\! echo "Who are the artists who have recorded a given song writer's songs? (Bob Dylan)";
select songwriter.name as "Songwriter", artist.name as "Artist" from artist inner join artist_album on artist.id = artist_album.artist_id inner join track on artist_album.album_id = track.album_id inner join song_songwriter as ss on track.song_id = ss.song_id inner join songwriter on ss.songwriter_id = songwriter.id where songwriter.name = 'Bob Dylan';

--
-- BONUS 1
--
\! echo "Given a lead artist, what collaborators has he worked with? Hint: you can give the same table 2 different aliases. (Madonna)";
select artist.name as "Collaborators" from (select artist_album.album_id as album_num from artist as leadArtist inner join artist_album on leadArtist.id = artist_album.artist_id where leadArtist.name = 'Madonna') as sub inner join artist_album on artist_album.album_id = sub.album_num inner join artist on artist.id = artist_album.artist_id where is_lead = FALSE order by artist.name asc;

\! echo "Super challenge: given an artist who has worked as a collaborator, who are the other collaborators he has worked with? (50 Cent)";
select artist.name as "Other Collaborators" from (select artist_album.album_id as album_num from artist as leadArtist inner join artist_album on leadArtist.id = artist_album.artist_id where leadArtist.name = '50 Cent') as sub inner join artist_album on artist_album.album_id = sub.album_num inner join artist on artist.id = artist_album.artist_id where is_lead = FALSE and artist.name <> '50 Cent' order by artist.name asc;

--
-- BONUS 2
--
\! echo "Get the list of tracks given a genre. (Pop)";
select track.name, track.duration, genre.name from track inner join track_genre on track.id = track_genre.track_id inner join genre on track_genre.genre_id = genre.id where genre.name = 'Pop';

\! echo "Get the list of tracks given two genres. (Pop, Rock)";
select track.name, track.duration, sub.genre as "Genre 1", genre.name as "Genre 2" from (select track_genre.track_id as "popchecked", genre.name as "genre" from track_genre inner join genre on track_genre.genre_id = genre.id where genre.name = 'Pop') as sub inner join track on sub.popchecked = track.id inner join track_genre on track_genre.track_id = track.id inner join genre on track_genre.genre_id = genre.id where genre.name = 'Rock';

\! echo "Get the list of tracks that aren't Punk (no Punk).";
select distinct on(track.name) track.name, track.duration, genre.name from track inner join track_genre on track.id = track_genre.track_id inner join genre on track_genre.genre_id = genre.id where genre.name <> 'Punk';

\! echo "Get a list of tracks that are only Pop (only Pop).";
select track.name, track.duration from ((select track.id as "specific" from track inner join track_genre on track.id = track_genre.track_id inner join genre on track_genre.genre_id = genre.id where genre.name = 'Pop') EXCEPT (select track.id from track inner join track_genre on track.id = track_genre.track_id inner join genre on track_genre.genre_id = genre.id where genre.name <> 'Pop')) as sub inner join track on sub.specific = track.id;
