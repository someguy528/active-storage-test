class ApplicationController < ActionController::Base

    rescue_from ActiveRecord::RecordInvalid, with: :rescue_invalid
    private
    def rescue_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
