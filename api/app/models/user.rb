class User < ApplicationRecord
    mount_uploader :avatar, AvatarUploader
	has_secure_password

    has_many :items, dependent: :destroy
    has_many :manekins, dependent: :destroy

    has_many :purchases
    has_many :purchase_manekins, through: :purchases, source: :manekin

    validates :email, presence: true
    validates :email, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

    def is_current_user?(current_user_id)
        current_user_id == self.id
    end
end
