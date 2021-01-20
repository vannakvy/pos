import asyncHandler from 'express-async-handler';
import eBookCourse from '../../models/eBookModels/languageModel.js'
import Content from '../../models/eBookModels/contentModel.js';
import e from 'express';



// @des get all languages 
// route Get api/courses
// access public

const getLanguages = asyncHandler(async(req,res)=>{
    const data = await eBookCourse.find();
        if(data){
            res.json(data);
        }else{
            res.json({message:"There is no Courses"})
        }
    })
    
    // @des get one language
    // route Get api/courses/:id
    // access public
    
    const getOneLanguage = asyncHandler(async(req,res)=>{
        const id = req.params.id;
    const {contents} =  await eBookCourse.findOne({title:id}).populate('contents');
    // const contents =  await Language.findById(id).populate('contents');
    if(contents){
        res.json(contents)
    }else{
        res.json({message: "contents Not Found"});
    }
        
    });
    
    //@des create new language
    //@route POST api/courses
    //@access private 
    
    
    const addLanguage = asyncHandler(async(req, res)=>{
        const {title, category} = req.body;
        const language = new eBookCourse({
            title: title,
            category: category
        })
        const addedLanguage = await language.save();
        res.status(201).json(addedLanguage);
    })
    
    
    
    //@des update the course
    //@route PUT api/ebook/:id 
    //@access private 
    
    const updateLanguage = asyncHandler(async(req,res)=>{
        const {title, category} = req.body;
        const language = await eBookCourse.findById(req.params.id);
        if(language){
            language.title = title
            language.category = category
            const updatedlanguage = await language.save()
            res.json(updatedlanguage)
        }else{
            res.status(404)
            throw new Errow('Course Not Found')
        }
    });
    //@des delete a language
    //@route DELETE api/ebook/:id
    
    const deleteLanguage = asyncHandler(async(req, res)=>{
        const language = await eBookCourse.findById(req.params.id);
        if(language){
            await language.remove()
            res.json({message:'Language removed'})
        }else{
            res.status(404)
            throw new Error('Language Not Found')
        }
    })
// @des get detail by contents
// route Get api/courses/lang/:id
// access public

const getDetails = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const lang = req.params.lang;

    
    const data =  await Content.findById(id).populate('eBookDetails');
    res.json(data);
    })

    export {
        addLanguage,
        getLanguages, 
        getOneLanguage,
        updateLanguage,
        deleteLanguage,
        getDetails
    };