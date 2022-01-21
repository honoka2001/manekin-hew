class RegistrationsController < ApplicationController

	def signup
		@user = User.new(registrations_params)

		if @user.save
				login!
				render json: @user , status: :created
		else
				render json: { errors: ['このメールアドレスは既に登録されています'] }, status: 500
		end
	end

	private

		def registrations_params
				params.require(:user).permit(:email, :password, :password_confirmation)
		end

end