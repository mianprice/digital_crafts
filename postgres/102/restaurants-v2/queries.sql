\! echo "List all the reviews for a given restaurant given a specific restaurant ID (restaurant.id = 1)";
select * from review where restaurant_id = 1;

\! echo "List all the reviews for a given restaurant, given a specific restaurant name (restaurant.name = 'restaurant 1')";
select * from review inner join restaurant on review.restaurant_id = restaurant.id where restaurant.name = 'restaurant 1';

\! echo "List all the reviews for a given reviewer, given a specific author name (reviewer.name = 'reviewer 1')";
select * from review inner join reviewer on review.reviewer_id = reviewer.id where reviewer.name = 'reviewer 1';

\! echo "List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.";
select restaurant.name, review.review from review inner join restaurant on review.restaurant_id = restaurant.id;

\! echo "Get the average stars by restaurant. The result should have the restaurant name and its average star rating.";
select restaurant.name, avg(review.stars) from review inner join restaurant on review.restaurant_id = restaurant.id group by restaurant.name;

\! echo "Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.";
select restaurant.name, count(*) from review inner join restaurant on review.restaurant_id = restaurant.id group by restaurant.name;

\! echo "List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.";
select restaurant.name, review.review, reviewer.name from review inner join restaurant on review.restaurant_id = restaurant.id inner join reviewer on review.reviewer_id = reviewer.id;

\! echo "Get the average stars given by each reviewer. (reviewer name, average star rating)";
select reviewer.name, avg(review.stars) from review inner join reviewer on review.reviewer_id = reviewer.id group by reviewer.name;

\! echo "Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)";
select reviewer.name, min(review.stars) from review inner join reviewer on review.reviewer_id = reviewer.id group by reviewer.name;

\! echo "Get the number of restaurants in each category. (category name, restaurant count)";
select category, count(id) from restaurant group by category;

\! echo "Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)";
select restaurant.name, count(review.stars) from review inner join restaurant on review.restaurant_id = restaurant.id where review.stars = 5 group by restaurant.name;

\! echo "Get the average star rating for a food category. (category name, average star rating)";
select restaurant.category, avg(review.stars) from review inner join restaurant on review.restaurant_id = restaurant.id group by restaurant.category;
