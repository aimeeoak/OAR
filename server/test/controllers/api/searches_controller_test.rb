require "test_helper"

class Api::SearchesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_search = api_searches(:one)
  end

  test "should get index" do
    get api_searches_url, as: :json
    assert_response :success
  end

  test "should create api_search" do
    assert_difference('Api::Search.count') do
      post api_searches_url, params: { api_search: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show api_search" do
    get api_search_url(@api_search), as: :json
    assert_response :success
  end

  test "should update api_search" do
    patch api_search_url(@api_search), params: { api_search: {  } }, as: :json
    assert_response 200
  end

  test "should destroy api_search" do
    assert_difference('Api::Search.count', -1) do
      delete api_search_url(@api_search), as: :json
    end

    assert_response 204
  end
end
