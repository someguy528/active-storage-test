class UsersController < ApplicationController

    def user_params
        params.require(:user).permit(:email_address, :password, :avatar. pictures: [])
    end
end
