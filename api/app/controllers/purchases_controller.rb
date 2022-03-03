class PurchasesController < ApplicationController

	def create
		purchase = Purchase.new(purchase_params)
    purchase.save
	end

	private

		def purchase_params
			params.require(:purchase).permit(:manekin_id).merge(user_id: current_user.id)
		end
end
