import User from '../database/userschema.js';

export const Accountsignup = async(request, response)=>{
  try {
    console.log(request.body);
    const exist = await User.findOne({ emailSignup: request.body.emailSignup });

    if (exist) {
      return response.status(401).json({ message: 'Username already exists' });
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error.message });
  }
}

export const userLogin = async(request,response)=>{
  try{
    const username = request.body.emailSignup 
    const password = request.body.passwordSignup

   let user = await User.findOne({emailSignup : username, passwordSignup : password });
    if(user){
      return response.status(200).json({data : user});
    }else {
      return response.status(401).json('Invalid login');
    }
  }
  catch(error){
response.status(500).json('Error',error.message)
  }
}