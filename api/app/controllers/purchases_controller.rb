class PurchasesController < ApplicationController
	def index
		user_id = current_user.id
		purchased_manekin_ids = Purchase.where(user_id: user_id).order("created_at DESC").pluck(:manekin_id)
		manekins = Manekin.find(purchased_manekin_ids)
		render json: manekins
	end

	def create
		purchase = Purchase.new(purchase_params)
    purchase.save
	end

	private

		def purchase_params
			params.require(:purchase).permit(:manekin_id).merge(user_id: current_user.id)
		end
end
