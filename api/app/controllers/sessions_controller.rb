class SessionsController < ApplicationController
	def create
		@user = User.find_by(email: session_params[:email])

		if @user && @user.authenticate(session_params[:password])
				login!
				render json: { logged_in: true, user: @user }
		else
				render json: { errors: ['認証に失敗しました。', '正しいメールアドレス・パスワードを入力し直すか、新規登録を行ってください。'] }, status: 401
		end
	end

	def delete
		reset_session
		render json: {logged_out: true}, status: 200
	end

	def show
		if current_user
				render json: { logged_in: true, user: current_user }
		else
				render json: { logged_in: false, message: 'ユーザーが存在しません' }
		end
	end

	private

		def session_params
				params.require(:user).permit(:email, :password)
		end

end