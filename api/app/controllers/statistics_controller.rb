class StatisticsController < ApplicationController
	def index
		# 出品アイテム数
		selling_items_count = Item.where.not(manekin_id: nil).count
		# 売れたアイテム数
		purchased_items_count = Item.where(manekin_id: Purchase.pluck(:manekin_id)).count

		# アイテム購入率
		purchased_item_per = purchased_items_count/selling_items_count.to_f * 100

		# 1着あたりの平均重量(kg)
		avarage_item_kg = 0.5
		# 売れた全アイテムの推定廃棄削減量
		waste_items_amount = avarage_item_kg * purchased_items_count

		render json: {selling_items_count: selling_items_count, purchased_items_count: purchased_items_count, purchased_item_per: purchased_item_per, waste_items_amount: waste_items_amount}
	end
end
