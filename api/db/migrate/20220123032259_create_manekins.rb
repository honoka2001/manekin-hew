class CreateManekins < ActiveRecord::Migration[6.0]
  def change
    create_table :manekins do |t|
      t.string :title
      t.text :content
      t.integer :price
      t.string :image
      t.references :user, null: false, foreign_key: true
      t.references :buyer

      t.timestamps
    end
    add_foreign_key :manekins, :users, column: :buyer_id
  end
end