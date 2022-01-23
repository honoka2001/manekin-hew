class Manekin < ApplicationRecord
  mount_uploader :image, ManekinImageUploader
  belongs_to :user
  belongs_to :buyer, class_name: 'User', foreign_key: :buyer_id
  has_many :items
end
