class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]

  def show
    manekins = @user.manekins
    is_current_user = @user.is_current_user?(current_user.id)
    render json: { user: @user, manekins: manekins, is_current_user: is_current_user }, status: :ok
  end

  def create
    @user = User.new(create_user_params)
    if @user.save
      login!
      render json: { user: @user }, status: :created
    else
      render json: { errors: ['このメールアドレスは既に登録されています'] }, status: :bad_request
    end
  end

  def update
    if @user.update!(update_user_params)
      render json: { user: @user }, status: :created
    else
      render json: { message: '更新に失敗しました' }, status: :bad_request
    end
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def create_user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    def update_user_params
      params.permit(:id, :name, :avatar, :height, :introduction)
    end
end
