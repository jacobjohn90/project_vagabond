class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.date :date_joined
      t.string :current_city
      t.string :password
      t.string :profile_pic

      t.timestamps
    end
  end
end
