class Api::ProjectsController < ApplicationController
  before_action :set_api_project, only: [:show, :update, :destroy]

  # GET /api/projects
  def index
    @api_projects = Api::Project.all

    render json: @api_projects
  end

  # GET /api/projects/1
  def show
    render json: @api_project
  end

  # POST /api/projects
  def create
    @api_project = Api::Project.new(api_project_params)

    if @api_project.save
      render json: @api_project, status: :created, location: @api_project
    else
      render json: @api_project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/projects/1
  def update
    if @api_project.update(api_project_params)
      render json: @api_project
    else
      render json: @api_project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/projects/1
  def destroy
    @api_project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_project
      @api_project = Api::Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_project_params
      params.fetch(:api_project, {})
    end
end
