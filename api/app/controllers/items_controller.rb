class ItemsController < ApplicationController
	before_action :set_item, only: %i[destroy]

  def index
    render json: { items: Item.all.order("created_at DESC") }
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
      params.permit(:name, :user_id, :image)
    end
end
