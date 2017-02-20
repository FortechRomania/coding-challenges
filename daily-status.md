#Daily Status

In a far far away land….( Castle Black  ) there is a team of developers that is growing quickly, but they are facing a problem: it’s getting harder keep track of the work done by the developers.

Each morning a meeting is held, each developer says on which project and what task he/she will work on( a short sentence ). When the team was small this was not a problem, but now that the team is getting bigger and bigger this setup is problematic. It's time consuming and hard to keep track.

Your mission, should you choose to accept it is be to help the team manager by building an app that keeps track of the work done daily by each developer. You should simulate a situation in which X developers that can potentially work on Y projects have Z messages to store, one for each project they work on. A developer can work on one ore more projects.

It's up to you how graphical the application will be: You can go from a simple console based app that will work on Chrome console all the way to a full app with front-end. The choice is yours.

The following entities should help you start the task.

| Entity | #
| ------ | :----:|
| **id** | numeric - unique |
| **name**| text|
| **Type** | project / developer |
| *createEntity( )* |

| ProjectList | #
| ------ | :----:|
| **Projects** | Project |
| *addProject( )* |
| *removeFromProjectList( )* |

| DeveloperList | #
| ------ | :----:|
| **Developers** | Developer |
| *addDeveloper( )* |
| *removeFromDeveloperList( )* |

| Status | #
| ------ | :----:|
| **id** | numeric - unique |
| **Developer**| developer.id |
| **Project** | project.id |
| **Date** | date |
| **Status** | String( max. 250 ) |
| *createStatus( )* |

| StatusList | #
| ------ | :----:|
| **Statuses** | Status |
| *addStatus( )* |
| *modifyStatus( )* |
| *deleteFromListStatus( )* |
| *dayStatusSummary( )* |



