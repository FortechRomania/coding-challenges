# Display Countries

Hello! We challenge you to integrate the [REST Countries API](https://restcountries.eu/) to display information about the countries from all around the world.

### Details
What we would like to see is:
- a list of some fancy cards of all the countries in alphabetical order, displaying the flag, name, capital, region and population
- a search form where you can type the name, code or capital of a country and display the filtered list (if there are no results show a short notice message)
- a filter section where you can select to filter the list by:
    - region (continent)
    - population range
    - languages
    - time zone
    - currencies
- a section or modal or page (feel free to improvise) visible when clicking any of the country cards where we would like you to display the: 
    - flag
    - name
    - alpha 2 code
    - capital
    - region (continent)
    - population
    - latlng
    - area
    - timezone
    - current time
    - the names of the neighbour countries (when clicked should display the selected neighbour details)
    - currencies
    - official languages

Don’t panic, all the above data (name, flag, region etc.) can be found in the response of the API, [here is the data structure you can expect](https://restcountries.eu/#api-endpoints-response-example).

We recommend using vanilla JavaScript but if you are familiar with any JS framework (React, Angular, VueJs) feel free to show off. You can code your own styling, but you can also use any framework. The implementation is up to you, go wild, surprise us! We recommend you to use Fetch API.

### Requirements
You have 1 day from the moment you receive the problem to ask any relevant question about the specifications. Altogether, you have 3 days to submit your code that implements the above mentioned functionalities. The code should be added to a public git repository, we strongly recommend GitHub for this.
