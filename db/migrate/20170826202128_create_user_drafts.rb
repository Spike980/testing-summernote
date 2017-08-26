class CreateUserDrafts < ActiveRecord::Migration[5.1]
  def change
    create_table :user_drafts do |t|
      t.text :draft
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
