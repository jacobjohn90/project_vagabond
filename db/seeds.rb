
Post.destroy_all
City.destroy_all
User.destroy_all


users = User.create([
    {   name:' Bob Builder',
        email:'BuilderB@gmail.com',
        date_joined:'6/16/17',
        current_city:'New Deli',
        password:'Fixit',
        profile_pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26LUiOKx1j0lqGVNgVrh0JVT9kjll_maruYZIlv9BuwHeZHpW'
    },
    {   name:' Steeve Clue',
        email:' BluesPale@gmail.com',
        date_joined:' 8/27/17',
        current_city:' Seattle',
        password:' thinkthinkTHINK',
        profile_pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxzuZyHYh_RrbcRLenk6-xs4PtKPwyS53_TcrTuXqS_N55aUS'
    },
    {   name:'Andre 3000',
        email:' Mr3000@gmail.com',
        date_joined:' 9/23/17',
        current_city:' Atlanta',
        password:' LovebeLow',
        profile_pic:'https://i.pinimg.com/originals/97/d3/01/97d3013334eadf4f977c890f1f018412.jpg'
    },
    {   name:'Head Phones',
        email:' headphones@gmail.com',
        date_joined:' 8/08/17',
        current_city:' London',
        password:' England',
        profile_pic:'https://i2.wp.com/www.thesun.ie/wp-content/uploads/sites/3/2016/12/nintchdbpict000271823228-1.jpg?crop=815px%2C288px%2C4097px%2C2730px&resize=300%2C192&ssl=1'
    },
    {   name:' Coffee Cup',
        email:' coffeecup@gmail.com',
        date_joined:' 5/29/17',
        current_city:'San-Francisco',
        password:' Carlifornia',
        profile_pic:'https://stream.org/wp-content/uploads/President-Barack-Obama__1442487910_70.119.142.63-300x200.jpg'
    }
])

cities = City.create([
    {   name: "New-Delhi",
        picture: "https://source.unsplash.com/_WuPjE-MPHo"
    },
    {   name: "Atlanta",
        picture: "https://source.unsplash.com/J-ClkL7wNUs" 
    },
    {   name: "New-York",
        picture: "https://source.unsplash.com/UExx0KnnkjY"
    },
    {   name: "London",
        picture: "https://source.unsplash.com/iXqTqC-f6jI" 
    },
    {   name: "San-Francisco",
        picture: "https://source.unsplash.com/baB_X9G7y2I"
    }
])

Post.create(user_id: users[0].id, city_id: cities[0].id,:comment=>'There is a lot of fixin ta do here!', :title=>'Can we fix it')
Post.create(user_id: users[0].id, city_id: cities[1].id,:comment=>'Just left from a really important build over there, an its an really great place to move!', :title=>'love this town')
Post.create(user_id: users[0].id, city_id: cities[2].id,:comment=>'Theres a lot of projects going on!',:title=>'So much fun!')
Post.create(user_id: users[0].id, city_id: cities[3].id,:comment=>'Nice ride down the boulevard will leave you with countless memories',:title=>'Just Drive!')
Post.create(user_id: users[0].id, city_id: cities[4].id,:comment=>'I thought it was not real, the level of cleanliness and details was impressive',:title=>'very clean!')

Post.create(user_id: users[1].id, city_id:cities[0].id,:comment=>'WOW,ThEREs ALSORTS Of COOL STUFF TO SEE AND EXPLORe',:title=>'Blue skidoo we can too')
Post.create(user_id: users[1].id, city_id:cities[1].id,:comment=>'There are paw prints EVERYWHERE',:title=>'Where is blue?!')
Post.create(user_id: users[1].id, city_id:cities[2].id,:comment=>'Our frind Sally is from here! Lets see what she did today!',:title=>'ITS THE MAIL!')
Post.create(user_id: users[1].id, city_id: cities[3].id,:comment=>'I would not bother to drive here while tipsy the cops are alert',:title=>'Go slow!')
Post.create(user_id: users[1].id, city_id: cities[4].id,:comment=>'The reason why I came here is to work but I decided to stay',:title=>'The best city!')

Post.create(user_id: users[2].id, city_id:cities[0].id,:comment=>'A Woman To raise At a Young age No help From him But she is alive To be Made strong', :title=>'Shes alive')
Post.create(user_id: users[2].id, city_id:cities[1].id,:comment=>'Many a day has passed, the night has gone by, But still I find the time to put that bump off in your eye', :title=>'Hold on now!')
Post.create(user_id: users[2].id, city_id:cities[2].id,:comment=>'Walk it out like an usher If you say real talk, I probably wont trust ya If you want to go to war, the guns my pleasure Even Jesus had twelve disciples on the lever, trigger, whatever',:title=>'walk it out')
Post.create(user_id: users[2].id, city_id: cities[3].id,:comment=>'Well little things may mean alot to some people, big things may not',:title=>'What is important for you?')
Post.create(user_id: users[2].id, city_id: cities[4].id,:comment=>'I was driving in the snow when I came across this little gem in the storm',:title=>'hidden gem!')
