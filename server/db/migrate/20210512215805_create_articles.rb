class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :authors
      t.string :language
      t.string :keywords
      t.text :content
      t.boolean :flagged
      t.references :projects, null: false, foreign_key: true

      t.timestamps
    end
  end
end
