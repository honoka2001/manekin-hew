class ItemsController < ApplicationController
  before_action :set_item, only: [:destroy]

  def index
    items = current_user.items.order("created_at DESC")
    render json: { items: items }, status: :ok
  end

  def create
    item = Item.new(item_params)
    if item.save
      render status: :created
    else
      render json: { message: 'アイテムの追加に失敗しました' }, status: :bad_request
    end
  end

  def destroy
    @item.destroy
    render status: :no_content
  end

  private

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.permit(:name, :image).merge(user_id: current_user.id)
    end
end
