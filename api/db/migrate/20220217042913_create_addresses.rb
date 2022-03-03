class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :destination_family_name
      t.string :destination_first_name
      t.string :destination_family_name_kana
      t.string :destination_first_name_kana
      t.integer :postcode
      t.string :region
      t.string :locality
      t.string :address_street
      t.string :address_extended
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
