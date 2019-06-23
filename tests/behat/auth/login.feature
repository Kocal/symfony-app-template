Feature: Login
  As an user
  I must be able to login to the application

  Scenario: I can't access a protected page without being authenticated
    When I send a "GET" request to "/"
    Then the response status code should be 302
    And I follow the redirection
    And I should be on "/login"

  Scenario: I can login and access a protected page
    When I send a "GET" request to "/login"
    And I fill in "email" with "user1@example.com"
    And I fill in "password" with "test"
    And I press "Sign in"
    Then I should be on "/"

  Scenario Outline: I can't login if my credentials are invalid
    When I send a "GET" request to "/login"
    And I fill in "email" with "<email>"
    And I fill in "password" with "<password>"
    And I press "Sign in"
    Then I should be on "/login"
    And the response should contain "Invalid credentials"

    Examples:
      | email                    | password        |
      | i-dont-exist@example.com | test            |
      | user1@example.com        | not my password |
