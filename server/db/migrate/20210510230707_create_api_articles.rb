class CreateApiArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :api_articles do |t|

      t.timestamps
    end
  end
end
