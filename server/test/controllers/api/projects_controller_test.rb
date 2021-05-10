require "test_helper"

class Api::ProjectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_project = api_projects(:one)
  end

  test "should get index" do
    get api_projects_url, as: :json
    assert_response :success
  end

  test "should create api_project" do
    assert_difference('Api::Project.count') do
      post api_projects_url, params: { api_project: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show api_project" do
    get api_project_url(@api_project), as: :json
    assert_response :success
  end

  test "should update api_project" do
    patch api_project_url(@api_project), params: { api_project: {  } }, as: :json
    assert_response 200
  end

  test "should destroy api_project" do
    assert_difference('Api::Project.count', -1) do
      delete api_project_url(@api_project), as: :json
    end

    assert_response 204
  end
end
