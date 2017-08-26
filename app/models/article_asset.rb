class ArticleAsset < ApplicationRecord
	mount_uploader :image, ArticleImageUploader
end
