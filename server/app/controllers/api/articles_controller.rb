class Api::ArticlesController < ApplicationController
  before_action :set_api_article, only: [:show, :update, :destroy]

  # GET /api/articles
  def index
    @api_articles = Api::Article.all

    render json: @api_articles
  end

  # GET /api/articles/1
  def show
    render json: @api_article
  end

  # POST /api/articles
  def create
    @api_article = Api::Article.new(api_article_params)

    if @api_article.save
      render json: @api_article, status: :created, location: @api_article
    else
      render json: @api_article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/articles/1
  def update
    if @api_article.update(api_article_params)
      render json: @api_article
    else
      render json: @api_article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/articles/1
  def destroy
    @api_article.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_article
      @api_article = Api::Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_article_params
      params.fetch(:api_article, {})
    end
end
