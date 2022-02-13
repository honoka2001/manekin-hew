class Manekin < ApplicationRecord
  mount_uploader :image, ManekinImageUploader
  belongs_to :user
  has_many :items
end
