# frozen_string_literal: true

class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.string :title
      t.date :date
      t.float :amount

      t.timestamps
    end
  end
end
