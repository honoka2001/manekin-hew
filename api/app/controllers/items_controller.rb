class ItemsController < ApplicationController
	before_action :set_item, only: %i[destroy]

  def index
    items = current_user.items.order("created_at DESC")
    render json: { items: items }
  end

  def create
    item = Item.new(item_params)
    item.save
  end

  def destroy
    @item.destroy
  end

  private

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.permit(:name, :image).merge(user_id: current_user.id)
    end
end
