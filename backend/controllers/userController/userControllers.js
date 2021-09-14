import asyncHandler from 'express-async-handler';
import generateToken from '../../utils/generateToken.js';
import User from '../../models/userModel.js';

//@desc Auth user & get token
//@route POST /api/users/login
//@access Public

const authUser = asyncHandler(async (req, res) => {
 const { email, password } = req.body;

 const user = await User.findOne({ email });

 if (user && (await user.matchPassword(password))) {
  res.json({
   _id: user._id,
   name: user.name,
   email: user.email,
   isAdmin: user.isAdmin,
   profile: user.profile || '/img/profile.png',
   isTeacher: user.isTeacher,
   token: generateToken(user._id),
  });
 } else {
  res.status(401);
  throw new Error('អ៊ីម៉ែលឬលេខសម្ងាត់របស់អ្នក​មិនត្រឹមត្រូវ');
 }
});

//@desc    Fetch search user
//@route   GET /api/users/search
//@access  Private Admin
const searchUser = asyncHandler(async (req, res) => {
 const keyword = req.query.keyword
  ? {
     name: {
      $regex: req.query.keyword,
      $options: 'i',
     },
    }
  : {};

 const user = await User.find({ ...keyword });
 res.json(user);
});

//@desc RegisterUser
//@route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
 const { name, email, password, profile } = req.body;

 const userExists = await User.findOne({ email });
 if (userExists) {
  res.status(400);
  throw new Error(
   'អ៊ីម៉ែលរបស់អ្នកធ្លាប់បានចុះឈ្មោះសម្រាប់ការប្រើប្រាស់រួចមកហើយ'
  );
 }

 const user = await User.create({
  name,
  email,
  password,
  profile: profile || '',
 });

 if (user) {
  res.status(201).json({
   _id: user._id,
   name: user.name,
   email: user.email,
   isAdmin: user.isAdmin,
   profile: user.profile || '/img/profile.png',
   isTeacher: user.isTeacher,
   token: generateToken(user._id),
  });
 } else {
  res.status(400);
  throw new Error('Invalid user data');
 }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
 const user = await User.findById(req.user._id);

 if (user) {
  res.json({
   _id: user._id,
   name: user.name,
   email: user.email,
   isAdmin: user.isAdmin,
   profile: user.profile || '',
  });
 } else {
  res.status(404);
  throw new Error('User not found');
 }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
 const user = await User.findById(req.user._id);

 if (user) {
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if (req.body.password) {
   user.password = req.body.password;
  }

  const updatedUser = await user.save();

  res.json({
   _id: updatedUser._id,
   name: updatedUser.name,
   email: updatedUser.email,
   isAdmin: updatedUser.isAdmin,
   token: generateToken(updatedUser._id),
  });
 } else {
  res.status(404);
  throw new Error('User not found');
 }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
 const type = req.query.type || 'all users';
 const pageSize = Number(req.query.pageSize) || 15;
 const page = Number(req.query.pageNumber) || 1;
 const keyword = req.query.keyword
  ? {
     name: {
      $regex: req.query.keyword,
      $options: 'i',
     },
    }
  : {};

 const userType =
  type === 'users'
   ? { isAdmin: false }
   : type === 'admin'
   ? { isAdmin: true }
   : {};

 if (Object.keys(keyword).length !== 0) {
  const count = await User.countDocuments({ ...keyword });
  const users = await User.find({ ...keyword })
   .limit(pageSize)
   .skip(pageSize * (page - 1));
  res.json({
   users,
   page,
   pages: Math.ceil(count / pageSize),
   count,
  });
 } else {
  const count = await User.countDocuments({ ...userType });
  const users = await User.find({ ...userType })
   .limit(pageSize)
   .skip(pageSize * (page - 1));
  res.json({
   users,
   page,
   pages: Math.ceil(count / pageSize),
   count,
  });
 }
});

const deleteUser = asyncHandler(async (req, res) => {
 const user = await User.findById(req.params.id);

 if (user) {
  await user.remove();
  res.json({ message: 'User removed' });
 } else {
  res.status(404);
  throw new Error('User not found');
 }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
 const user = await User.findById(req.params.id).select('-password');

 if (user) {
  res.json(user);
 } else {
  res.status(404);
  throw new Error('User not found');
 }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
 const user = await User.findById(req.params.id);

 if (user) {
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.isAdmin = req.body.isAdmin;

  const updatedUser = await user.save();

  res.json({
   _id: updatedUser._id,
   name: updatedUser.name,
   email: updatedUser.email,
   isAdmin: updatedUser.isAdmin,
  });
 } else {
  res.status(404);
  throw new Error('User not found');
 }
});

export {
 authUser,
 registerUser,
 getUserProfile,
 updateUserProfile,
 getUsers,
 deleteUser,
 getUserById,
 updateUser,
 searchUser,
};
