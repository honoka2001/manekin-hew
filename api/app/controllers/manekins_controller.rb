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
    manekin = Manekin.new(manekin_params)

    ActiveRecord::Base.transaction do
      manekin.save!
      Item.item_ids_update(item_params, manekin.id)
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
      params.require(:manekin).permit(:title, :content, :price, :image).merge(user_id: current_user.id)
    end
    def item_params
      params.require(:item).permit(:ids)
    end
end
