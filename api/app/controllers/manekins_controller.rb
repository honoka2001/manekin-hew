class ManekinsController < ApplicationController
  before_action :set_manekin, only: [:show, :destroy]

  def index
    manekins = Manekin.all.order("created_at DESC").includes(:user)
    render json: manekins.as_json(include: :user), status: :ok
  end

  def show
    user = @manekin.user
    items = @manekin.items
    render json: { manekin: @manekin, items: items, user: user }, status: :ok
  end

  def create
    manekin = Manekin.new(title: manekin_params[:title], content: manekin_params[:content], price: manekin_params[:price], image: manekin_params[:image], user_id: manekin_params[:user_id])

    if manekin.save
      manekin_params[:item_ids].split(',').each{|item_id|
        Item.find(item_id).update(manekin_id: manekin.id)
      }
      render json: { manekin: manekin }, status: :created
    else
      render json: { message: '出品に失敗しました' }, status: :bad_request
    end
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
