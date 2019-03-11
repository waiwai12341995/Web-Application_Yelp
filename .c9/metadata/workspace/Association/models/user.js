{"filter":false,"title":"user.js","tooltip":"/Association/models/user.js","undoManager":{"mark":27,"position":27,"stack":[[{"start":{"row":0,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["// User -email, name (Create Model User)","var userSchema = new mongoose.Schema({","    email: String,","    name: String,","    // Connect with post ******","    posts: [","        {","            // Mongoose Object ID","            type: mongoose.Schema.Types.ObjectId,","            ref: \"Post\"","        }","        ]","})"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["v"],"id":3},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["a"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":4},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["o"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["o"]}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["o"],"id":5},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["o"]}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["m"],"id":6},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["o"]}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":6},"action":"remove","lines":["mo"],"id":7},{"start":{"row":0,"column":4},"end":{"row":0,"column":10},"action":"insert","lines":["module"]}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["e"],"id":8},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"remove","lines":["l"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":["u"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["d"]}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["n"],"id":9}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":7},"action":"remove","lines":["mon"],"id":10},{"start":{"row":0,"column":4},"end":{"row":0,"column":12},"action":"insert","lines":["mongoose"]}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[" "],"id":11},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":[" "],"id":12},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["r"]},{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["e"]},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["q"]}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":18},"action":"remove","lines":["req"],"id":13},{"start":{"row":0,"column":15},"end":{"row":0,"column":26},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["m"],"id":14},{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["o"]}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":26},"action":"remove","lines":["mo"],"id":15},{"start":{"row":0,"column":24},"end":{"row":0,"column":32},"action":"insert","lines":["mongoose"]}],[{"start":{"row":14,"column":2},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":16},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["m"]},{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"insert","lines":["o"]},{"start":{"row":16,"column":2},"end":{"row":16,"column":3},"action":"insert","lines":["d"]}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"remove","lines":["mod"],"id":17},{"start":{"row":16,"column":0},"end":{"row":16,"column":6},"action":"insert","lines":["module"]}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["."],"id":18},{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["e"]},{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["x"]}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":9},"action":"remove","lines":["ex"],"id":19},{"start":{"row":16,"column":7},"end":{"row":16,"column":14},"action":"insert","lines":["exports"]}],[{"start":{"row":16,"column":14},"end":{"row":16,"column":15},"action":"insert","lines":[" "],"id":20},{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":16,"column":16},"end":{"row":16,"column":17},"action":"insert","lines":[" "],"id":21},{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"insert","lines":["m"]},{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"insert","lines":["o"]},{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["n"]}],[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"remove","lines":["n"],"id":22},{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"remove","lines":["o"]},{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"remove","lines":["m"]}],[{"start":{"row":16,"column":17},"end":{"row":17,"column":45},"action":"insert","lines":["// Create Model (User)","var User = mongoose.model(\"User\", userSchema)"],"id":23}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":10},"action":"remove","lines":["var User ="],"id":24},{"start":{"row":16,"column":39},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":16,"column":17},"end":{"row":16,"column":39},"action":"remove","lines":["// Create Model (User)"],"id":25}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":19},"action":"insert","lines":["// Return value of file","// export the model"],"id":27}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""],"id":28}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":0},"end":{"row":15,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1546681305767,"hash":"f8b1d88a9d8edd9dbd8a71385099d439990a946c"}