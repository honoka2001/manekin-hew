class User < ApplicationRecord
    mount_uploader :avatar, AvatarUploader
	has_secure_password

    has_many :items, dependent: :destroy
    has_many :manekins, dependent: :destroy

    validates :email, presence: true
    validates :email, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
