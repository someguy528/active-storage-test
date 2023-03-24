class PostsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]
    include ActiveStorage::SetCurrent
    def index
        @posts = Post.all
        render json: @posts
    end

    def create
        @post = Post.create!(post_params)
        if @post
            render json: @post, status: :created
        else
            render json: {error: "didnt work!" }, status: :unprocessable_entity
        end
    end
    def destroy
        post = Post.find_by(params[:id])
        if post 
            post.destroy
            head :no_content
        else 
            render json: {errors: ["Cart Item Not Found!"]}, status: :not_found
        end
    end
    def latest
        @post = Post.last
        if @post 
        render json: PostSerializer.new(@post).serializable_hash[:data][:attributes]
        end
    end
    private
    def post_params
        params.require(:post).permit(:image)
        # params.permit(:image, pictures: [])
    end

end
