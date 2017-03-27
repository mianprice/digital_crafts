LISTEN virtual;
NOTIFY virtual, 'list restaurants by the closest distance';
select * from restaurants order by distance;

NOTIFY virtual, 'list the top 2 restaurants by distance';
select * from restaurants order by distance limit 2;

NOTIFY virtual, 'list the top 2 restaurants by stars';
select * from restaurants order by stars desc limit 2;

NOTIFY virtual, 'list the top 2 restaurants by stars where the distance is less than 2 miles';
select * from restaurants where distance <= 2.0 order by stars desc limit 2;

NOTIFY virtual, 'count the number of restaurants in the db';
select count(*) from restaurants;

NOTIFY virtual, 'count the number of restaurants by category';
select category, count(*) from restaurants group by category order by category;

NOTIFY virtual, 'get the average stars per restaurant by category';
select category, avg(stars) from restaurants group by category order by category;

NOTIFY virtual, 'get the max stars of a restaurant by category';
select category, max(stars) from restaurants group by category order by category;
