class Api::PostsController < ApplicationController
    def index
        if params[:user_id]
            @user = User.find(params[:user_id])
            @posts = @user.posts
            render json: @posts
        else
            @city = City.find(params[:city_id])
            @posts = @city.posts
            render json: @posts
        end
    end

    def create
    @city = City.find(params[:city_id])
    @post = @city.posts.create(post_params)
    render json: @post
    end
    
    def show
    @post = Post.find(params[:id])
    render json: @post
    end

    def update
    @post = Post.find(params[:id])
    @post.update(post_params)

    render json: @post
    end
    
    def destroy
    @post = Post.find(params[:id]).destroy
    render status: :ok
    end
    
    private
    
    def post_params
        params.require(:post).permit(:title, :comment, :user_id)
    end
end
