\! echo 'The names of the restaurants that you gave a 5 stars to';
select name from restaurants where stars = 5;

\! echo 'The favorite dishes of all 5-star restaurants';
select favorite_dish from restaurants where stars = 5;

\! echo 'The the id of a restaurant by a specific restaurant name';
select id from restaurants where name = 'Fuji Hana';

\! echo 'Restaurants in the category of "Dinner and Drinks"';
select * from restaurants where category = 'Dinner and Drinks';

\! echo 'Restaurants that do take out';
select * from restaurants where takeout = TRUE;

\! echo 'Restaurants that do take out and are in the category of "Dinner and Drinks"';
select * from restaurants where takeout = TRUE and category = 'Dinner and Drinks';

\! echo 'Restaurants within 2 miles';
select * from restaurants where distance <= 2.0;

\! echo "Restaurants you haven't eaten at in the last week";
select * from restaurants where last_visit <= '2017-03-20';

\! echo 'Restaurants you haven'"'"'t eaten at in the last week and have 5 stars';
select * from restaurants where last_visit <= '2017-03-20' and stars = 5;
