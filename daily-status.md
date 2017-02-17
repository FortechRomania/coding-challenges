#Daily Status

In a far far away land….( Castle Black  ) there was a team of developers that is growing quickly. The problem is that it’s getting harder keep track of the work done by the developers.

Each morning they had a meeting, each developer would say on which project and what they would work on( a short sentence ). When the team was small this was not a problem, but now that the team is getting bigger and bigger the setup is problematic. it was time consuming and harder to keep track.

Your mission, should you choose to accept would be to help the team manager by building with an app that keeps track on the work done daily by each developer. You task is to simulate a situation in which X developers that can potentially work on Y projects have Y messages to store, one for each project they work on. 

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



