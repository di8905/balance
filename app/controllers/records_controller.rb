# frozen_string_literal: true

class RecordsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @records = Record.all.order(:id)
  end

  def create
    @record = Record.new(record_params)

    if @record.save
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def update
    record = Record.find(params[:id])
    if record.update(record_params)
      render json: record
    else
      render json: record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @record = Record.find(params[:id])
    @record.destroy
    head :no_content
  end

  private

  def record_params
    params.require(:record).permit(:title, :amount, :date)
  end
end
