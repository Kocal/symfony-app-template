Feature: JSON request
  JSON requests should be decoded

  Scenario: JSON request should be decoded
    When I add "Content-Type" header equal to "application/json"
    And I send a "POST" request to "/_debug/request" with body:
      """
      {
          "json_key_1": "json_value_1",
          "json_key_2": "json_value_2"
      }
      """
    Then the response should contain "2 parameter(s) received."
    And the response should contain "json_key_1 = json_value_1"
    And the response should contain "json_key_2 = json_value_2"

  Scenario: Invalid JSON request should not fails
    When I add "Content-Type" header equal to "application/json"
    And I send a "POST" request to "/_debug/request" with body:
      """
      {
          "foo": "bar

      """
    Then the response should contain "0 parameter(s) received."

  Scenario: Only JSON request should be decoded
    When I send a "POST" request to "/_debug/request" with body:
      """
      {
          "json_key_1": "json_value_1",
          "json_key_2": "json_value_2"
      }
      """
    Then the response should contain "0 parameter(s) received."
