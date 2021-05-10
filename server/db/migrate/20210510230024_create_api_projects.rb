class CreateApiProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :api_projects do |t|

      t.timestamps
    end
  end
end
