\! echo "What are all projects that use JavaScript?";
select project.name from project, project_uses_tech, tech where project.id = project_uses_tech.project_id and project_uses_tech.tech_id = tech.id and tech.name = 'JavaScript';

\! echo "What are all technologies used by the Personal Website?";
select tech.name from project, project_uses_tech, tech where project.id = project_uses_tech.project_id and project_uses_tech.tech_id = tech.id and project.name = 'Personal Website';

\! echo "Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project?";
select tech.name from tech left outer join project_uses_tech on tech.id = project_uses_tech.tech_id group by tech.name having count(project_uses_tech.tech_id) < 1;

\! echo "Based on the previous query, get the count of the number of techs used by each project.";
select project.name, count(project_uses_tech.tech_id) from tech left outer join project_uses_tech on tech.id = project_uses_tech.tech_id inner join project on project.id = project_uses_tech.project_id group by project.name order by -count(project_uses_tech.tech_id);

\! echo "Perform a left outer join from the project table to the project_uses_tech table - which projects has no associated tech?";
select project.name from project left outer join project_uses_tech on project.id = project_uses_tech.project_id group by project.name having count(project_uses_tech.project_id) < 1;

\! echo "Based on the previous query, get the count of the number of projects that use each tech.";
select tech.name, count(project_uses_tech.project_id) from project left outer join project_uses_tech on project.id = project_uses_tech.project_id inner join tech on tech.id = project_uses_tech.tech_id group by tech.name order by -count(project_uses_tech.project_id);

\! echo "List all projects along with each technology used by it. You will need to do a three-way join.";
select project.name, tech.name from tech left outer join project_uses_tech on tech.id = project_uses_tech.tech_id inner join project on project.id = project_uses_tech.project_id order by project.name;

\! echo "Order the projects by how many tech it uses.";
select project.name, count(project_uses_tech.tech_id) from tech left outer join project_uses_tech on tech.id = project_uses_tech.tech_id inner join project on project.id = project_uses_tech.project_id group by project.name order by -count(project_uses_tech.tech_id);

\! echo "Order the tech by how many projects use it.";
select tech.name, count(project_uses_tech.project_id) from project left outer join project_uses_tech on project.id = project_uses_tech.project_id inner join tech on tech.id = project_uses_tech.tech_id group by tech.name order by -count(project_uses_tech.project_id);

\! echo "What is the average number of techs used by a project?";
select avg(agg1.tech_count) from (select project.name as "name", count(project_uses_tech.tech_id) as "tech_count" from tech left outer join project_uses_tech on tech.id = project_uses_tech.tech_id inner join project on project.id = project_uses_tech.project_id group by project.name) as "agg1";
