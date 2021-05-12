require "test_helper"

class Api::LibrariesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_library = api_libraries(:one)
  end

  test "should get index" do
    get api_libraries_url, as: :json
    assert_response :success
  end

  test "should create api_library" do
    assert_difference('Api::Library.count') do
      post api_libraries_url, params: { api_library: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show api_library" do
    get api_library_url(@api_library), as: :json
    assert_response :success
  end

  test "should update api_library" do
    patch api_library_url(@api_library), params: { api_library: {  } }, as: :json
    assert_response 200
  end

  test "should destroy api_library" do
    assert_difference('Api::Library.count', -1) do
      delete api_library_url(@api_library), as: :json
    end

    assert_response 204
  end
end
