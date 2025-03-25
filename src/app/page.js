'use client';

import { useState } from 'react';

import { CldImage, CldUploadWidget  } from 'next-cloudinary';

import MemeShare from '@/components/MemeShare';

import { Button } from '@mui/material';

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

 
  


  async function handleDownloadImage(imageId) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
    const url = `https://res.cloudinary.com/${cloudName}/image/upload/l_text:Source%20Sans%20Pro_20_bold_center:${encodeURIComponent(
      topText
    )},co_rgb:FFFFFF,g_north,y_30,c_fit/l_text:Source%20Sans%20Pro_20_bold_center:${encodeURIComponent(
      bottomText
    )},co_rgb:FFFFFF,g_south,y_30,c_fit/${imageId}`;
  
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'meme-image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Erreur lors du téléchargement de l'image:", error);
    }
  }
  

  
  


  return (
    <main className="">
      <div className="relative w-full px-8 md:flex md:items-center md:gap-12 ">
        <div className="md:w-1/3">
          <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
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
 <CldUploadWidget   uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} 
 onSuccess={handleOnBackGroundUpload} 
 >
   {({ open }) => {

    function handleOnClick(e){
      e.preventDefault();
      open();
    }
     return (

       <Button variant="contained" color="success" onClick={handleOnClick}>
       Upload an Image
      </Button>
     );
   }}
 </CldUploadWidget>
    </div>

          </form>
        </div>
       <div className="md:flex-1 mt-2">
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
  <div className="mt-4 text-center">
  <Button
    variant="contained"
    color="primary"
    onClick={() => handleDownloadImage(background)}
  >
    Télécharger l'image
  </Button>
</div>
  <MemeShare imageUrl={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${background}`} />

</div>

      </div>
    </main>
  );
}
