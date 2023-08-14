import React from 'react'



const NewsItem = ({pusblishedDate,title,url,urlToImage,description}) => {

    const trimDescription = (description, maxWords) => {
      const words = description.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return description;
    };

    const trimTitle = (title, maxWords) => {
      const words = title.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return title;
    };

const trimedDescription = trimDescription(description,20);
const trimedTitle = trimTitle(title, 7);



  return (
    <div className='relative h-[300px] flex flex-col justify-center w-72 bg-white p-4 shadow-md rounded-lg md:w-[500px] lg:w-72'>
     
        <img className=' w-20 h-20 mb-2 object-cover rounded-md' src={urlToImage} alt={"/"}/>
        <h5 className='  text-gray-600 text-sm mb-1'>{pusblishedDate}</h5>
        <h3 className=' text-center text-lg font-semibold mb-2'>
        <a href={url} target='_blank' rel="noopener noreferrer" className='hover:underline'>{trimedTitle}</a></h3>
        <p className='text-gray-500 text-sm'>{trimedDescription}</p>
     
    </div>
  )
}

export default NewsItem