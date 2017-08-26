class ArticleAssetsController < ApplicationController
	def create
		@image = ArticleAsset.new
		@image.image = params[:image][:image] 
		@image.save
		respond_to do |format|
			format.json { render :json => { url: @image.image.url, image_id: @image.id } }
		end
	end

	def destroy
		@image = ArticleAsset.find_by(id: params[:id])
		@image.destroy!
		respond_to do |format|
			format.json { render :json => { status: :ok } }
		end
	end
end
