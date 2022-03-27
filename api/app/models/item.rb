class Item < ApplicationRecord
  mount_uploader :image, ItemImageUploader
  belongs_to :user
  belongs_to :manekin, optional: true

  def self.item_ids_update(item_params, manekin_id)
    item_params[:ids].split(',').each{|id|
      item = self.find(id)
      item.update!(manekin_id: manekin_id)
    }
  end
end