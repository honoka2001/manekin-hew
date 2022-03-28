class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      render status: :created
    else
      render json: { message: 'コメントの送信に失敗しました' }, status: :bad_request
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:comment_content, :manekin_id).merge(user_id: current_user.id)
  end
end
