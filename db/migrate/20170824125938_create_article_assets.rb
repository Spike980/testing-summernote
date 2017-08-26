class CreateArticleAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :article_assets do |t|
      t.string :image

      t.timestamps
    end
  end
end
