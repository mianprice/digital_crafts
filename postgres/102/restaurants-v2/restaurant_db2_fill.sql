insert into restaurant values (default, 'restaurant 1', '123 Main St, Everytown, USA', 'Burgers');
insert into restaurant values (default, 'restaurant 2', '234 Main St, Everytown, USA', 'BBQ');
insert into restaurant values (default, 'restaurant 3', '345 Main St, Everytown, USA', 'Burgers');
insert into restaurant values (default, 'restaurant 4', '456 Main St, Everytown, USA', 'Sushi');
insert into restaurant values (default, 'restaurant 5', '567 Main St, Everytown, USA', 'Burgers');

insert into reviewer values (default, 'reviewer 1', 'r1@reviews.com', 1);
insert into reviewer values (default, 'reviewer 2', 'r2@reviews.com', 2);
insert into reviewer values (default, 'reviewer 3', 'r3@reviews.com', 5);
insert into reviewer values (default, 'reviewer 4', 'r4@reviews.com', 4);
insert into reviewer values (default, 'reviewer 5', 'r5@reviews.com', 7);

insert into review values (default, 1, 1, 'Reviewer 1 reviews Restaurant 1', 'words, words, and more words...', 1);
insert into review values (default, 2, 3, 'Reviewer 2 reviews Restaurant 1', 'words, words, and more words...', 1);
insert into review values (default, 2, 4, 'Reviewer 2 reviews Restaurant 2', 'words, words, and more words...', 2);
insert into review values (default, 3, 5, 'Reviewer 3 reviews Restaurant 1', 'words, words, and more words...', 1);
insert into review values (default, 3, 2, 'Reviewer 3 reviews Restaurant 2', 'words, words, and more words...', 2);
insert into review values (default, 3, 4, 'Reviewer 3 reviews Restaurant 3', 'words, words, and more words...', 3);
insert into review values (default, 4, 5, 'Reviewer 4 reviews Restaurant 1', 'words, words, and more words...', 1);
insert into review values (default, 4, 4, 'Reviewer 4 reviews Restaurant 2', 'words, words, and more words...', 2);
insert into review values (default, 4, 5, 'Reviewer 4 reviews Restaurant 3', 'words, words, and more words...', 3);
insert into review values (default, 4, 3, 'Reviewer 4 reviews Restaurant 4', 'words, words, and more words...', 4);
insert into review values (default, 5, 4, 'Reviewer 5 reviews Restaurant 1', 'words, words, and more words...', 1);
insert into review values (default, 5, 2, 'Reviewer 5 reviews Restaurant 2', 'words, words, and more words...', 2);
insert into review values (default, 5, 3, 'Reviewer 5 reviews Restaurant 3', 'words, words, and more words...', 3);
insert into review values (default, 5, 5, 'Reviewer 5 reviews Restaurant 4', 'words, words, and more words...', 4);
insert into review values (default, 5, 5, 'Reviewer 5 reviews Restaurant 5', 'words, words, and more words...', 5);
