'use client';

import { useState } from 'react';

import { CldImage, CldUploadWidget  } from 'next-cloudinary';

const BACKGROUND_IMAGES = [
  { id:'2_dkjnxr',
    title:'Chill guy'
  },
  {id: '1_bjsia6',
    title:'Smiling dog'
  },
  {id: 'smiling_dog_zkivto',
    title:'mbappe'
  },
  {id: 'chill_guy_bgof3a',
    title:'cool_cat'
  },
]

export default function Home() {

  const [topText, setTopText ] = useState('Top Text');
  const [bottomText, setBottomText ] = useState('Bottom text');
  const [background, setBackground ] = useState(BACKGROUND_IMAGES[0].id);


  function handleOnTopTextChange(e) {
      setTopText(e.currentTarget.value);
  };

  function handleOnBottomTextChange(e) {
    setBottomText(e.currentTarget.value);
  }

  function handleOnBackGroundImage (id) {
    setBackground(id);
  };


  function handleOnBackGroundUpload(result) {
    setBackground(result.info.public_id);
    console.log(result);
  }



  return (
    <main className="">
      <div className="relative w-full px-8 md:flex md:items-center md:gap-12 ">
        <div className="md:w-1/3">
          <form className="flex flex-col gap-4 mt-4"   onSubmit={(e) => e.preventDefault()} >
            <div>
              <input
                type="text"
                name="top-text"
                placeholder="Top Text"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                onChange={handleOnTopTextChange}

              />
            </div>
            <div>
              <input
                type="text"
                name="bottom-text"
                placeholder="Bottom Text"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                onChange={handleOnBottomTextChange}
              />
            </div>
            <div>
            <ul className="grid grid-cols-2 gap-2">
    {BACKGROUND_IMAGES.map(({ id, title }) => (
      <li key={id} onClick={() => handleOnBackGroundImage(id)} >
        <button className="block bg-none p-0 m-0 cursor-pointer">
          <CldImage
            src={id}
            alt={title}
             width="300"
            height="300"
            className="block rounded-md border border-gray-300 hover:scale-105 transition-transform"
            onError={(e) => console.error(`Image failed to load: ${id}`, e)}
          />
        </button>
      </li>
    ))}
  </ul>
</div>
    <div> 
 <CldUploadWidget uploadPreset="upload-meme-generator"  onSuccess={handleOnBackGroundUpload}>
   {({ open }) => {

    function handleOnClick(e){
      e.preventDefault();
      open();
    }
     return (
       <button onClick={handleOnClick}>
         Upload an Image
       </button>
     );
   }}
 </CldUploadWidget>
    </div>

          </form>
        </div>
        <div className="md:flex-1">
          <CldImage

            src={background}
            width="400" 
            height="320"
            sizes="100vw"
            alt="Description of my image"
            className="max-w-[400px] h-auto mx-auto"
            overlays={[
              {
                position: {
                  x: 0,
                  y: 30,
                  gravity: 'north',
                },
                text: {
                  color: 'white',
                  fontFamily: 'Source Sans Pro',
                  fontSize: 20,
                  fontWeight: 'black',
                  text: topText,
                  stroke: true,
                },
              },
              {
                position: {
                  x: 0,
                  y: 30,
                  gravity: 'south',
                },
                text: {
                  color: 'white',
                  fontFamily: 'Source Sans Pro',
                  fontSize: 20,
                  fontWeight: 'black',
                  text: bottomText,
                  stroke: true,
                },
              },
            ]}
          />
        </div>

      </div>
    </main>
  );
}
