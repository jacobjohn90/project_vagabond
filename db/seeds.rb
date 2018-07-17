
require_relative './city_data.rb'
require_relative './post_data.rb'
require_relative './user_data.rb'

Post.destroy_all
City.destroy_all
User.destroy_all


usre_data= get_user_data
post_data= get_post_data
city_data= get_city_data

post_data.each_pair do |user_name, post|
    info= user_data[user_name]
    current_user= User.create!({
        name:   info[:name],
        email:  info[:email],
        dateJoined:   info[:dateJoined],
        currentCity:  info[:currentCity],
        password:   info[:password],
        profilePic: info[:profilePic]
    })
    post.each do |post|
        Post.create!({
            city: post[:city],
            comment: post[:comment],
            title:  post[:title]
        })

end
end

citys.each do |city|
    City.create!({
        name: city[:name],
        picture: city[:picture]
    })
end


