class Api::LibrariesController < ApplicationController
  before_action :set_api_library, only: [:show, :update, :destroy]

  # GET /api/libraries
  def index
    @api_libraries = Api::Library.all

    render json: @api_libraries
  end

  # GET /api/libraries/1
  def show
    render json: @api_library
  end

  # POST /api/libraries
  def create
    @api_library = Api::Library.new(api_library_params)

    if @api_library.save
      render json: @api_library, status: :created, location: @api_library
    else
      render json: @api_library.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/libraries/1
  def update
    if @api_library.update(api_library_params)
      render json: @api_library
    else
      render json: @api_library.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/libraries/1
  def destroy
    @api_library.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_library
      @api_library = Api::Library.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_library_params
      params.fetch(:api_library, {})
    end
end
