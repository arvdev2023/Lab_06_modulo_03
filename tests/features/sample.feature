  Feature: Is it Friday yet?
  Everybody wants to know when it's Friday
@FirstScenary
  Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "NopeAD159"

  @tableTest
  Scenario: DataTable Example
    Given a table inputs are:
      | First | Second | Result |
      | 50    | 70     | 120    |
      | 30    | 40     | 70     |
      | 60    | 30     | 90     |

