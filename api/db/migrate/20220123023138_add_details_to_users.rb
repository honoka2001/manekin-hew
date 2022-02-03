class AddDetailsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :introduction, :string
    add_column :users, :avatar, :string
    add_column :users, :name, :string
    add_column :users, :height, :integer
  end
end
