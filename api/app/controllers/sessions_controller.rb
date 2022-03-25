class SessionsController < ApplicationController
  def show
    if current_user
      render json: { logged_in: true, user: current_user }, status: :ok
    else
      render json: { logged_in: false, message: 'ユーザーが存在しません' }, status: :not_found
    end
  end

  def create
    @user = User.find_by(email: session_params[:email])
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: { logged_in: true, user: @user }, status: :created
    else
      render json: { message: ['認証に失敗しました。', '正しいメールアドレス・パスワードを入力し直すか、新規登録を行ってください。'] }, status: :not_found
    end
  end

  def destroy
    reset_session
    render json: { logged_out: true }, status: :no_content
  end

  private

    def session_params
      params.require(:user).permit(:email, :password)
    end
end