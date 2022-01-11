class AddImageToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :image, :json
  end
end
