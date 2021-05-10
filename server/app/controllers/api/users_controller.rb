class Api::UsersController < ApplicationController
  before_action :set_api_user, only: [:show, :update, :destroy]

  # GET /api/users
  def index
    @api_users = Api::User.all

    render json: @api_users
  end

  # GET /api/users/1
  def show
    render json: @api_user
  end

  # POST /api/users
  def create
    @api_user = Api::User.new(api_user_params)

    if @api_user.save
      render json: @api_user, status: :created, location: @api_user
    else
      render json: @api_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/users/1
  def update
    if @api_user.update(api_user_params)
      render json: @api_user
    else
      render json: @api_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/users/1
  def destroy
    @api_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_user
      @api_user = Api::User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_user_params
      params.fetch(:api_user, {})
    end
end
