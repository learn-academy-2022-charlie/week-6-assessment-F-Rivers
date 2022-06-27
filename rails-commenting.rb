# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) creates a method named index inside the class 
class BlogPostsController < ApplicationController
  def index
    # ---2) uses the instance to find the index in all the posts  
    @posts = BlogPost.all
  end

  # ---3) makes a method named show that takes in the instance variable post, finding blog posts by their id parameter 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) makes a method named new, the method takes the instance variable and uses the .new to request a new form 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) uses a conditional statement to check if the new blog post is valid according to the params 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) enables the method edit to 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) if the udated post is valid according to the params, it will use a conditional statement to redirtect to the appropriate location 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) if the post is destroyed then it will redirect to the blog post path 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) makes the method inaccesible 
  private
  def blog_post_params
    # ---10) requres that blog posts only have a title and content 
    params.require(:blog_post).permit(:title, :content)
  end
end
