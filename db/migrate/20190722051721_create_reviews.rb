class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :product, foreign_key: true
      t.integer :stars, null: false
      t.text :comment, null: false

      t.timestamps
    end
  end
end
