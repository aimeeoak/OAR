class Api::SearchesController < ApplicationController
  before_action :set_api_search, only: [:show, :update, :destroy]

  # GET /api/searches
  def index
    @api_searches = Api::Search.all

    render json: @api_searches
  end

  # GET /api/searches/1
  def show
    render json: @api_search
  end

  # POST /api/searches
  def create
    @api_search = Api::Search.new(api_search_params)

    if @api_search.save
      render json: @api_search, status: :created, location: @api_search
    else
      render json: @api_search.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/searches/1
  def update
    if @api_search.update(api_search_params)
      render json: @api_search
    else
      render json: @api_search.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/searches/1
  def destroy
    @api_search.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_search
      @api_search = Api::Search.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_search_params
      params.fetch(:api_search, {})
    end
end
