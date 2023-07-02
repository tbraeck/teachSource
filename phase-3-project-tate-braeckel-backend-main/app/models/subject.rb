class Subject < ActiveRecord::Base 
has_many :resources, dependent: :destroy 

end