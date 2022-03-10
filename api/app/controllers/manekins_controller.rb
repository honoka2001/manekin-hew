class ManekinsController < ApplicationController
	before_action :set_manekin, only: [:show, :update, :destroy]

  def index
    manekins = Manekin.all.order("created_at DESC").includes(:user)
    render json: manekins.as_json(include: :user)
  end

  def show
    user = @manekin.user
    items = @manekin.items
    render json: {manekin: @manekin, items: items, user: user}
  end

  def create
    @manekin = Manekin.new(title: manekin_params[:title], content: manekin_params[:content], price: manekin_params[:price], image: manekin_params[:image], user_id: manekin_params[:user_id])

    if @manekin.save
			manekin_params[:item_ids].split(',').each{|item_id|
					Item.find(item_id).update(manekin_id: @manekin.id)
				}
    else
      render json: @manekin.errors, status: :unprocessable_entity
    end
  end

  def update
    if @manekin.update(manekin_params)
      render json: @manekin
    else
      render json: @manekin.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @manekin.destroy
  end

  private
    def set_manekin
      @manekin = Manekin.find(params[:id])
    end

    def manekin_params
			params.permit(:title, :content, :price, :image, :item_ids).merge(user_id: current_user.id)
    end

end
