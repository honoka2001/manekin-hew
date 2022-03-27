class Purchase < ApplicationRecord
  belongs_to :buyer, class_name: 'User', foreign_key: :user_id
  belongs_to :manekin
end
