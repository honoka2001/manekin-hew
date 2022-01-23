class AddManekinIdToItem < ActiveRecord::Migration[6.0]
  def change
    add_reference :items, :manekin, foreign_key: true
  end
end
