
Post.destroy_all
City.destroy_all
User.destroy_all

User.create( 
name:' Bob Builder',
email:'BuilderB@gmail.com',
dateJoined:'6/16/17',
currentCity:'New Deli',
password:'Fixit',
profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26LUiOKx1j0lqGVNgVrh0JVT9kjll_maruYZIlv9BuwHeZHpW'
),

User.create(
    name:' Steeve Clue',
    email:' BluesPale@gmail.com',
    dateJoined:' 8/27/17',
    currentCity:' Seattle',
    password:' thinkthinkTHINK',
    profilePic:' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxzuZyHYh_RrbcRLenk6-xs4PtKPwyS53_TcrTuXqS_N55aUS'
),

User.create(
    name:' Andre 3000',
    email:' Mr3000@gmail.com',
    dateJoined:' 9/23/17',
    currentCity:' Atlanta',
    password:' LovebeLow'
    profilePic:' https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.elroyonline.com%2Feol_images%2Fembedimg%2Fclassof3000-trans.png&imgrefurl=http%3A%2F%2Fwww.elroyonline.com%2F%3Fp%3D99845795&docid=DvI4agHbEOwmrM&tbnid=M0sA7w8prjuTtM%3A&vet=10ahUKEwjkkLHj-6TcAhWCna0KHZr-AhwQMwhVKBUwFQ..i&w=475&h=217&bih=750&biw=1440&q=andre%203000%20cartoon&ved=0ahUKEwjkkLHj-6TcAhWCna0KHZr-AhwQMwhVKBUwFQ&iact=mrc&uact=8'
),

City.create(
    name: “New-Delhi”,
    picture: “https://source.unsplash.com/_WuPjE-MPHo/900x300”
),

City.create(
    name: “Atlanta”,
        picture: “https://source.unsplash.com/J-ClkL7wNUs/900x300” 
),

City.create(
    name: “New-York”,
    picture: “https://source.unsplash.com/ubSUwrr04Ks/900x300”
),

Post.create(User_id: 1, City_id:1,:comment=>'There is a lot of fixin ta do here!', :title=>'Can we fix it'),
Post.create(User_id: 1, City_id:2,:comment=>'Just left from a really important build over there, an its an really great place to move!', :title=>'love this town'),
Post.create(User_id: 1, City_id:3,:comment=>'Theres a lot of projects going on!',:title=>'So much fun!'),

Post.create(User_id: 2, City_id:1,:comment=>'WOW,ThEREs ALSORTS Of COOL STUFF TO SEE AND EXPLORe',:title=>'Blue skidoo we can too'),
Post.create(User_id: 2, City_id:2,:comment=>'There are paw prints EVERYWHERE',:title=>'Where is blue?!'),
Post.create(User_id: 2, City_id:3,:comment=>'Our frind Sally is from here! Lets see what she did today!',:title=>'ITS THE MAIL!'),

Post.create(User_id: 3, City_id:1,:comment=>'A Woman To raise At a Young age No help From him But she is alive To be Made strong', :title=>'Shes alive'),
Post.create(User_id: 3, City_id:2,:comment=>'Many a day has passed, the night has gone by, But still I find the time to put that bump off in your eye', :title=>'Hold on now!'),
Post.create(User_id: 3, City_id:3,:comment=>'Walk it out like an usher If you say real talk, I probably wont trust ya If you want to go to war, the guns my pleasure Even Jesus had twelve disciples on the lever, trigger, whatever',:title=>'walk it out'),