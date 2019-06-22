Feature: API login
  As an API consumer
  I must be able to login against the API and consume it

  Scenario: I can access my API key when login to the API
    When I send a "POST" request to "/api/login" with body:
      """
      {
          "username": "user1@example.com",
          "password": "test"
      }
      """
    Then the JSON node "apiKey" should be equal to "81b87be71decdd74ee12a34ad4c278b401bc2a09"

  Scenario: I can't access the API without being authenticated
    When I send a "GET" request to "/api/users"
    Then the response status code should be 401

  Scenario: I can access the API if I am authenticated
    When I add "Authorization" header equal to "81b87be71decdd74ee12a34ad4c278b401bc2a09"
    And I send a "GET" request to "/api/users"
    Then the response status code should be 200
