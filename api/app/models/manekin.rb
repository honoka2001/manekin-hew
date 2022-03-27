class Manekin < ApplicationRecord
  mount_uploader :image, ManekinImageUploader

  belongs_to :user
  has_many :items

  has_one :purchase
  has_one :buyer, through: :purchase

  def is_sold?
    Purchase.exists?(manekin_id: self.id)
  end
end
