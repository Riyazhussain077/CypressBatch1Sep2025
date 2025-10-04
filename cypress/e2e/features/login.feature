Feature: Demoblaze Login

    Scenario: Successful login with valid credentials
        Given I open the Demoblaze website
        When I login with username "pavanol" and password "test@123"
        Then i should see the welcome message with username "pavanol"


