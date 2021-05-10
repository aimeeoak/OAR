require "test_helper"

class SearchControllerTest < ActionDispatch::IntegrationTest
  test "should get api" do
    get search_api_url
    assert_response :success
  end
end
