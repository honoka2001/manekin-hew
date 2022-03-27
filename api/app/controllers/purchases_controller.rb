class PurchasesController < ApplicationController
  def index
    manekins = current_user.purchase_manekins.order("created_at DESC")
    render json: { manekins: manekins }, status: :ok
  end

  def create
    purchase = Purchase.new(purchase_params)
    if purchase.save
      render status: :created
    else
      render json: { message: '購入に失敗しました。' }, status: :bad_request
    end
  end

  private

    def purchase_params
      params.require(:purchase).permit(:manekin_id).merge(user_id: current_user.id)
    end
end
