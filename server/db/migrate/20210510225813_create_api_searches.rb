class CreateApiSearches < ActiveRecord::Migration[6.1]
  def change
    create_table :api_searches do |t|

      t.timestamps
    end
  end
end
