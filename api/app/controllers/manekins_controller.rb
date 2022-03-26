class ManekinsController < ApplicationController
  before_action :set_manekin, only: [:show, :destroy]

  def index
    manekins = Manekin.includes(:user).order("created_at DESC")
    render json: manekins.as_json(include: :user), status: :ok
  end

  def show
    user = @manekin.user
    items = @manekin.items
    render json: { manekin: @manekin, items: items, user: user }, status: :ok
  end

  def create
    manekin = Manekin.new(title: manekin_params[:title], content: manekin_params[:content], price: manekin_params[:price], image: manekin_params[:image], user_id: manekin_params[:user_id])

    ActiveRecord::Base.transaction do
      manekin.save!
      Item.item_ids_update(manekin_params[:item_ids], manekin.id)
    end
      render json: { manekin: manekin }, status: :created
    rescue => e
      render json: { message: '出品に失敗しました' }, status: :bad_request
  end

  def destroy
    @manekin.destroy
    render status: :no_content
  end

  private

    def set_manekin
      @manekin = Manekin.find(params[:id])
    end

    def manekin_params
      params.permit(:title, :content, :price, :image, :item_ids).merge(user_id: current_user.id)
    end
end
