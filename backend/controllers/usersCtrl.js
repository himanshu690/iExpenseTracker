const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

//User Registration

const usersController = {
  //Register
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //Validate
    if (!username || !email || !password) {
      throw new Error("Please all fields are required");
    }
    //Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    //Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create the user and save into db
    const userCreated = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    // Send the response

    res.json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated._id,
    });
  }),
  //Login
  login: asyncHandler(async(req, res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(!user){
      throw new Error('Invalid login credentials')
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      throw new Error("Invalid login credentials");

    }
    // Generate a token remove at end
    const token = jwt.sign({id: user._id }, "masynctechkey",{
    expiresIn: "30d",
    });

    //send the response
    res.json({
      message: 'Login Success', 
      token,
      id: user._id,
      email: user.email,
      username: user.username,
    });

  }),
    
  //profile
  profile: asyncHandler(async (req, res)=>{
    const user = await User.findById("6875036527bf6eab4217da68");
    if(!user){
      throw new error("User not found");
    }
    //send response
    res.json({username: user.username, email: user.email});
  })
  
  // Change password
  
  // update user profile
  
};

module.exports = usersController;