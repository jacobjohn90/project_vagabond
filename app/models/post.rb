class Post < ApplicationRecord
  belongs_to :user
  belongs_to :city
  validates :title, presence: true { message: "But have a title" }
  validates :comment, length: { in: 1..200} { message: "Comment can only be 1-200 characters long" }
end
