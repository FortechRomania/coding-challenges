#E-commerce Challenge

Your mission should you choose to accept it, is to harness the power of pure / vanilla JavaScript in order to build an e-commerce solution for a store. There is no need for a visual interface (UI). Focus on working with functions and objects only.

**To help we came up with a story:**

Once upon a time, in the far land of the mighty **JavaScript** there was a small e-commerce store. And still is. And into this e-commerce store products are created, edited or deleted and all these products are kept in a shelf (list).

Visitors can create projects in which products are added. Like the products described before, these projects can be edited or removed, and their content (products) changed (add, update, remove).
All these projects are stored into a list that gets updated on every change.

Customers can also buy products.
At first the customer ads the products with the desired quantity  to a **Cart**. Any change (adding a product, a change in quantity, removal of a product from cart), will affect all the places in which that product is used/stored (**Projects** and **ProductList**).

The store also has an signpost (to be read **Minicart**) which display to the customer the number of products in cart. This **MiniCart** gets updated when products are added or removed from cart.

To further help you in your quest we’ve provided some diagrams for each class. These diagrams/structures are not mandatory, but more like a guide to help you on the way.

**_Good luck in your quest and may the powers of JS be forever on your side !_**


| Product | #
| ------ | :----:|
| **id** | integer - unique |
| **name**| text|
| **image** | text |
| **stock** | integer |
| **price** | integer |   
| *create( )* |
| *edit( )* |
| *delete( )* |



|Project|#
| ------ | :----:|
| **id** | integer - unique |
| **name**| text|
| **products** | Product |  
| *createProject( )* |
| *removeProject( )* |
| *addProductToProject( )* |
| *removeProductFromProject( )* |


| Cart  |#
| ------ | :----:|
| **total** | integer |
| **products**| ProductList |
| *addToCart( )* |
| *removeFromCart( )* |


| MiniCart|#
| ------ | :----:|
| **total** | integer |
| **count**| integer|
| *goToCart( )* |
| *updateMiniCart( )* |


|ProductList|#
| ------ | :----:|
| **products**| Product |
| *addToList( )* |
| *removeFromList( )* |


|ProjectsList|#
| ------ | :----:|
| **projects**| Project |
| *addToList( )* |
| *removeFromList( )* |

