class UsersController < ApplicationController

	def show
		user = User.find(params[:id])
		manekins = user.manekins
		is_current_user = user.is_current_user?(current_user.id)

		render json: {user: user, manekins: manekins, is_current_user: is_current_user}
	end

	def create
		@user = User.new(create_user_params)

		if @user.save
				login!
				render json: @user , status: :created
		else
				render json: { errors: ['このメールアドレスは既に登録されています'] }, status: 500
		end
	end



	def update
		user = User.find(params[:id])

    if user.update!(update_user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end


	private

		def create_user_params
			params.require(:user).permit(:name, :email, :password, :password_confirmation)
		end

		def update_user_params
      params.permit(:id, :name, :avatar, :height, :introduction)
    end

end
