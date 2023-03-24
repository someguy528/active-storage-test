class SignupsController < ApplicationController
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        user.avatar.attach(params[:avatar])
        # redirect_to root_path
    end
    
      private
    def user_params
        params.require(:user).permit(:email_address, :password, :avatar)
    end
end
