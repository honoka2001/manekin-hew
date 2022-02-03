class UsersController < ApplicationController

	def create
		@user = User.new(create_user_params)

		if @user.save
				login!
				render json: @user , status: :created
		else
				render json: { errors: ['このメールアドレスは既に登録されています'] }, status: 500
		end
	end

	private

		def create_user_params
				params.require(:user).permit(:name, :email, :password, :password_confirmation)
		end

end
