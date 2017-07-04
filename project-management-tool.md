
#Project Management Tool

Your mission should you choose to accept it, is to harness the power of pure / vanilla JavaScript in order to build a project management tool that will track all the work made by your team. There is no need for a visual interface (UI). Focus on working with functions and objects only.

Here below you’ll find the requirements for the application and a breakdown of the fields to be used.

You shall deliver the code for this application and picture/s for the diagrams that illustrate your understanding of the application logic.

The application will handle a single project (at this step), but that project has more than 1 versions/milestones (called sprints).
A user can create 3 types of tickets for a project: features, bugs, and tasks. Each of these tickets belong to a certain sprint inside the project. Features and bugs can have multiple tasks (called subtasks), which are basically the breakdown of the bigger tickets - features and bugs.

Each ticket has multiple possible states, which are described below.

Below you can find the breakdown of fields for each ticket.

**Task**
* Id
* Name
* Sprint
* Assignee
* CreatedBy
* Description
* Status
  * New
  * In progress
  * Feedback
  * Rework
  * Resolved
* Messages
  * Author
  * Text
* UpdatedAt
* CreatedAt

**Bug**
* Id
* Name
* Sprint
* Assignee
* CreatedBy
* Description
* Status
  * New
  * In progress
  * Ready For Testings
  * Rework
  * Resolved
* Messages
  * Author
  * Text
* UpdatedAt
* CreatedAt
* Tasks

**Feature**
* Id
* Name
* Sprint
* Assignee
* CreatedBy
* Description
* Status
  * New
  * In progress
  * Ready For Testing
  * Feedback
  * Rework
  * Resolved
* Messages
  * Author
  * Text
* UpdatedAt
* CreatedAt
* Tasks


**The ID is generated when the ticket is created, is unique and cannot be changed.**

**CreatedBy will be filled on creation with the name of the user that created that ticket**

**The fields UpdatedAt and CreatedAt are updated automatically on ticket creation or change.**



###Functionality needed:

A user needs to be able to create any kind of ticket with some initial values. All newly created tickets will have the status New.

The user needs to see an overview of the current project, broken down per sprints, how many tickets in each status, how many features, how many bugs, etc.

Apart for the fields mentioned above, the user can change any field of a ticket through an update action.

If the user moves the bug or feature in a different sprint, the subtasks will have to be moved as well.

Completing all the tasks of a bug or feature will change the status of that ticket to Ready For Testing.

As soon as a task changes its status from New to any other, its corresponding ticket will change status as well to In progress.

A user can create sprints to whom the tickets will be assigned.

A user can filter the tickets by sprint or status.

###Requirements

You have 1 working day from the moment you receive the problem to ask any relevant question about the specifications.
You have 3 working days to submit your code that implements the above mentioned functionalities. Adding the code on a git repository is recommended, but not mandatory.

 **We will take into consideration your coding style and your code organization and structure as well as the correctness of the provided solution.**
